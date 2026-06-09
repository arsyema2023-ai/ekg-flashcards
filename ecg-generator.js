/**
 * Procedural ECG SVG Generator
 * Generates SVG representations of ECG rhythms based on configuration parameters.
 */

class ECGGenerator {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.svgWidth = 800;
        this.svgHeight = 200;
        this.baselineY = 100;
        // mm to pixel mapping (assuming standard 25mm/s, 10mm/mV, 1mm = 4px)
        this.mm = 4; 
    }

    // Draw standard ECG red grid
    drawGrid() {
        let gridSVG = '';
        // Minor grid (1mm)
        for (let x = 0; x <= this.svgWidth; x += this.mm) {
            let isMajor = x % (this.mm * 5) === 0;
            let strokeClass = isMajor ? 'grid-major' : 'grid-minor';
            gridSVG += `<line x1="${x}" y1="0" x2="${x}" y2="${this.svgHeight}" class="${strokeClass}" />`;
        }
        for (let y = 0; y <= this.svgHeight; y += this.mm) {
            let isMajor = y % (this.mm * 5) === 0;
            let strokeClass = isMajor ? 'grid-major' : 'grid-minor';
            gridSVG += `<line x1="0" y1="${y}" x2="${this.svgWidth}" y2="${y}" class="${strokeClass}" />`;
        }
        return gridSVG;
    }

    generateTrace(config) {
        let path = `M 0 ${this.baselineY} `;
        let x = 0;
        
        const rate = config.rate || 75;
        const rrIntervalMs = 60000 / rate;
        // 25mm/s -> 25 mm = 1000 ms. 1 mm = 40 ms. 1 px = 10 ms.
        // So x advances by (ms / 10).
        
        let beatConfig = config.beatConfig || {};
        
        while (x < this.svgWidth) {
            // Apply irregularities if configured (e.g. AF, PVCs)
            let currentRRMs = rrIntervalMs;
            let currentBeat = { ...beatConfig };
            
            if (config.rhythm === 'irregularly_irregular') {
                currentRRMs = rrIntervalMs * (0.6 + Math.random() * 0.8); 
                currentBeat.pWave = false; // no p wave in AF
                currentBeat.fibrillation = true;
            } else if (config.rhythm === 'flutter') {
                currentBeat.pWave = false;
                currentBeat.flutter = true;
            } else if (config.wenckebach) {
                // simple simulation: if beat index mod 4 == 3, drop beat
                // handled by logic outside, but for simplicity let's assume we pass custom rhythm array
            }
            
            // Check for specific custom beats array if provided
            if (config.beats && config.beats.length > 0) {
                let beatDef = config.beats.shift();
                config.beats.push(beatDef); // loop it
                currentBeat = { ...currentBeat, ...beatDef };
                currentRRMs = currentBeat.rrMs || currentRRMs;
                if(currentBeat.dropped) {
                     // Just draw baseline or p wave
                     path += this.drawPWave(x, currentBeat);
                     x += currentRRMs / 10;
                     path += ` L ${x} ${this.baselineY}`;
                     continue;
                }
            }

            if (currentBeat.asystole) {
                x = this.svgWidth;
                path += ` L ${x} ${this.baselineY + (Math.random() * 2 - 1)}`; // slight drift
                break;
            }

            if (currentBeat.vf) {
                let vfPath = this.drawVF(x, x + (currentRRMs / 10));
                path += vfPath.path;
                x = vfPath.newX;
                continue;
            }

            // Draw one complex
            let complex = this.drawComplex(x, currentBeat);
            path += complex.path;
            
            let segmentXEnd = x + (currentRRMs / 10);
            
            // Draw baseline / flutter / fib waves until next beat
            if (currentBeat.flutter) {
                 path += this.drawFlutter(complex.newX, segmentXEnd);
            } else if (currentBeat.fibrillation) {
                 path += this.drawFib(complex.newX, segmentXEnd);
            } else {
                 path += ` L ${segmentXEnd} ${this.baselineY}`;
            }

            x = segmentXEnd;
        }

        return path;
    }

    drawComplex(startX, params) {
        let path = '';
        let cx = startX;

        // P Wave
        if (params.pWave !== false) {
            let pWidth = (params.pWidthMs || 80) / 10;
            let pAmp = (params.pAmpMv || 0.15) * 10 * this.mm; // 1mV = 10mm
            cx += 2; // flat before P
            path += ` L ${cx} ${this.baselineY}`;
            path += ` Q ${cx + pWidth/2} ${this.baselineY - pAmp}, ${cx + pWidth} ${this.baselineY}`;
            cx += pWidth;
        }

        // PR Segment
        let prSegmentMs = (params.prMs || 160) - (params.pWidthMs || 80);
        if (prSegmentMs < 0) prSegmentMs = 10;
        if(params.wpw) prSegmentMs = 0; // delta wave starts immediately
        cx += prSegmentMs / 10;
        
        let qrsStart = cx;

        // QRS Complex
        let qrsWidthMs = params.qrsMs || 80;
        let qrsWidthPx = qrsWidthMs / 10;
        
        if (params.pvc || params.vt) {
            // Wide bizarre QRS
            path += ` L ${cx} ${this.baselineY}`;
            path += ` L ${cx + qrsWidthPx*0.3} ${this.baselineY + 40}`; // Deep S
            path += ` L ${cx + qrsWidthPx*0.7} ${this.baselineY - 80}`; // Tall R
            cx += qrsWidthPx;
            path += ` L ${cx} ${this.baselineY}`;
        } else if (params.rbbb) {
            // rsR' pattern
            path += ` L ${cx} ${this.baselineY}`;
            path += ` L ${cx + qrsWidthPx*0.2} ${this.baselineY - 20}`; // r
            path += ` L ${cx + qrsWidthPx*0.4} ${this.baselineY + 20}`; // s
            path += ` L ${cx + qrsWidthPx*0.7} ${this.baselineY - 60}`; // R'
            cx += qrsWidthPx;
            path += ` L ${cx} ${this.baselineY}`;
        } else if (params.lbbb) {
            // Broad notched R
            path += ` L ${cx} ${this.baselineY}`;
            path += ` L ${cx + qrsWidthPx*0.3} ${this.baselineY - 60}`;
            path += ` L ${cx + qrsWidthPx*0.5} ${this.baselineY - 40}`; // notch
            path += ` L ${cx + qrsWidthPx*0.7} ${this.baselineY - 60}`;
            cx += qrsWidthPx;
            path += ` L ${cx} ${this.baselineY}`;
        } else {
            // Normal QRS
            let stElev = params.stElevMv ? params.stElevMv * 10 * this.mm : 0;
            
            path += ` L ${cx} ${this.baselineY}`;
            // Q wave
            if (params.qWave) {
                 path += ` L ${cx + 2} ${this.baselineY + 10}`;
                 cx += 2;
            }
            if (params.wpw) {
                 // Slurred upstroke (delta wave)
                 path += ` Q ${cx + qrsWidthPx*0.3} ${this.baselineY}, ${cx + qrsWidthPx*0.5} ${this.baselineY - 60}`;
            } else {
                 path += ` L ${cx + qrsWidthPx*0.3} ${this.baselineY - (params.lvh ? 120 : 60)}`; // R wave
            }
            path += ` L ${cx + qrsWidthPx*0.7} ${this.baselineY + (params.lvh ? 80 : 20)}`; // S wave
            cx += qrsWidthPx;
            
            // J point / ST segment
            path += ` L ${cx} ${this.baselineY - stElev}`;
        }

        // ST segment width
        let stWidthPx = (params.stMs || 80) / 10;
        let stElev = params.stElevMv ? params.stElevMv * 10 * this.mm : 0;
        cx += stWidthPx;
        path += ` L ${cx} ${this.baselineY - stElev}`;

        // T Wave
        let tWidthPx = (params.tMs || 160) / 10;
        let tAmp = (params.tAmpMv || 0.3) * 10 * this.mm;
        
        if (params.stElevMv) {
            // Merge ST elevation smoothly into T wave
             path += ` Q ${cx + tWidthPx/2} ${this.baselineY - stElev - tAmp}, ${cx + tWidthPx} ${this.baselineY}`;
             cx += tWidthPx;
        } else if (params.tInverted) {
             path += ` Q ${cx + tWidthPx/2} ${this.baselineY + tAmp}, ${cx + tWidthPx} ${this.baselineY}`;
             cx += tWidthPx;
        } else if (params.hyperkalemia) {
             // Tall peaked T wave
             let pkAmp = 80;
             path += ` L ${cx + tWidthPx*0.4} ${this.baselineY - pkAmp}`;
             path += ` L ${cx + tWidthPx} ${this.baselineY}`;
             cx += tWidthPx;
        } else {
            // Normal T
            path += ` Q ${cx + tWidthPx/2} ${this.baselineY - tAmp}, ${cx + tWidthPx} ${this.baselineY}`;
            cx += tWidthPx;
        }

        // U Wave for hypokalemia
        if (params.hypokalemia) {
            cx += 2;
            path += ` Q ${cx + 10} ${this.baselineY - 15}, ${cx + 20} ${this.baselineY}`;
            cx += 20;
        }

        return { path, newX: cx };
    }

    drawPWave(startX, params) {
        let cx = startX;
        let pWidth = (params.pWidthMs || 80) / 10;
        let pAmp = (params.pAmpMv || 0.15) * 10 * this.mm;
        return ` L ${cx} ${this.baselineY} Q ${cx + pWidth/2} ${this.baselineY - pAmp}, ${cx + pWidth} ${this.baselineY}`;
    }

    drawFlutter(startX, endX) {
        let path = '';
        let cx = startX;
        // Sawtooth pattern, approx 300 bpm flutter waves
        let flutWidth = 200 / 10; // 200ms per flutter wave
        while (cx + flutWidth <= endX) {
            path += ` L ${cx + flutWidth * 0.7} ${this.baselineY + 15}`;
            path += ` L ${cx + flutWidth} ${this.baselineY - 15}`;
            cx += flutWidth;
        }
        path += ` L ${endX} ${this.baselineY}`;
        return path;
    }

    drawFib(startX, endX) {
        let path = '';
        let cx = startX;
        while (cx < endX) {
            let step = 3 + Math.random() * 5;
            if (cx + step > endX) step = endX - cx;
            let amp = (Math.random() * 10) - 5;
            path += ` L ${cx + step} ${this.baselineY + amp}`;
            cx += step;
        }
        return path;
    }

    drawVF(startX, endX) {
        let path = '';
        let cx = startX;
        while (cx < endX) {
            let step = 15 + Math.random() * 15;
            if (cx + step > endX) step = endX - cx;
            let amp = (Math.random() * 80) - 40;
            path += ` Q ${cx + step/2} ${this.baselineY + amp}, ${cx + step} ${this.baselineY + (Math.random()*20-10)}`;
            cx += step;
        }
        return { path, newX: endX };
    }

    render(config) {
        const grid = this.drawGrid();
        const trace = this.generateTrace(config);
        
        return `
            <svg class="ecg-grid" viewBox="0 0 ${this.svgWidth} ${this.svgHeight}" preserveAspectRatio="xMidYMid meet">
                ${grid}
                <path class="ecg-trace" d="${trace}" />
            </svg>
        `;
    }
}
