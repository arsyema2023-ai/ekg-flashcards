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

            let complex = this.drawComplex(x, currentBeat, wavePeaks);
            path += complex.path;
            
            let segmentXEnd = x + (currentRRMs / 10);
            
            if (currentBeat.flutter) {
                 path += this.drawFlutter(complex.newX, segmentXEnd);
            } else if (currentBeat.fibrillation) {
                 path += this.drawFib(complex.newX, segmentXEnd);
            } else {
                 path += ` L ${segmentXEnd} ${this.baselineY}`;
            }

            x = segmentXEnd;
        }

        this.lastWavePeaks = wavePeaks;
        return path;
    }

    drawComplex(startX, params, wavePeaks) {
        let path = '';
        let cx = startX;

        if (params.pWave !== false) {
            let pWidth = (params.pWidthMs || 80) / 10;
            let pAmp = (params.pAmpMv || 0.15) * 10 * this.mm;
            cx += 2;
            path += ` L ${cx} ${this.baselineY}`;
            wavePeaks.P.push({ x: cx + pWidth/2, y: this.baselineY - pAmp });
            path += ` Q ${cx + pWidth/2} ${this.baselineY - pAmp}, ${cx + pWidth} ${this.baselineY}`;
            cx += pWidth;
        }

        let prSegmentMs = (params.prMs || 160) - (params.pWidthMs || 80);
        if (prSegmentMs < 0) prSegmentMs = 10;
        if(params.wpw) prSegmentMs = 0; 
        cx += prSegmentMs / 10;
        
        let qrsWidthMs = params.qrsMs || 80;
        let qrsWidthPx = qrsWidthMs / 10;
        
        if (params.pvc || params.vt) {
            path += ` L ${cx} ${this.baselineY}`;
            wavePeaks.S.push({ x: cx + qrsWidthPx*0.3, y: this.baselineY + 40 });
            path += ` L ${cx + qrsWidthPx*0.3} ${this.baselineY + 40}`; 
            wavePeaks.R.push({ x: cx + qrsWidthPx*0.7, y: this.baselineY - 80 });
            path += ` L ${cx + qrsWidthPx*0.7} ${this.baselineY - 80}`; 
            cx += qrsWidthPx;
            path += ` L ${cx} ${this.baselineY}`;
        } else {
            let stElev = params.stElevMv ? params.stElevMv * 10 * this.mm : 0;
            path += ` L ${cx} ${this.baselineY}`;
            if (params.qWave) {
                 wavePeaks.Q.push({ x: cx + 1, y: this.baselineY + 10 });
                 path += ` L ${cx + 2} ${this.baselineY + 10}`;
                 cx += 2;
            }
            wavePeaks.R.push({ x: cx + qrsWidthPx*0.5, y: this.baselineY - (params.lvh ? 120 : 60) });
            path += ` L ${cx + qrsWidthPx*0.5} ${this.baselineY - (params.lvh ? 120 : 60)}`;
            wavePeaks.S.push({ x: cx + qrsWidthPx*0.7, y: this.baselineY + (params.lvh ? 80 : 20) });
            path += ` L ${cx + qrsWidthPx*0.7} ${this.baselineY + (params.lvh ? 80 : 20)}`;
            cx += qrsWidthPx;
            path += ` L ${cx} ${this.baselineY - stElev}`;
        }

        let stWidthPx = (params.stMs || 80) / 10;
        let stElev = params.stElevMv ? params.stElevMv * 10 * this.mm : 0;
        cx += stWidthPx;
        path += ` L ${cx} ${this.baselineY - stElev}`;

        let tWidthPx = (params.tMs || 160) / 10;
        let tAmp = (params.tAmpMv || 0.3) * 10 * this.mm;
        
        wavePeaks.T.push({ x: cx + tWidthPx/2, y: this.baselineY - tAmp });
        path += ` Q ${cx + tWidthPx/2} ${this.baselineY - tAmp}, ${cx + tWidthPx} ${this.baselineY}`;
        cx += tWidthPx;

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
        let flutWidth = 200 / 10;
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

    _generateWaveLabels(peaks) {
        let svg = '';
        for (let wave in peaks) {
            peaks[wave].forEach(pt => {
                svg += `<text x="${pt.x}" y="${pt.y - 10}" font-family="Arial" font-size="10" fill="red" text-anchor="middle">${wave}</text>`;
            });
        }
        return svg;
    }

    render(config) {
        const grid = this.drawGrid();
        const trace = this.generateTrace(config);
        const labels = config.showLabels ? this._generateWaveLabels(this.lastWavePeaks) : '';
        
        return `
            <svg viewBox="0 0 ${this.svgWidth} ${this.svgHeight}" preserveAspectRatio="xMidYMid meet">
                ${grid}
                <path class="ecg-trace" d="${trace}" fill="none" stroke="black" />
                ${labels}
            </svg>
        `;
    }
}
