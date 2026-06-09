class ECGGenerator {
    constructor(containerId, options = {}) {
        this.containerId = containerId;
        
        // Base constants for 25mm/s and 10mm/mV standard
        this.mm = 4; // 1 mm = 4 pixels
        this.paperSpeed = 25; // mm/s
        this.voltageScale = 10; // mm/mV
        
        // Dimensions for 10 seconds of data (4 columns of 2.5s each)
        // 10s * 25mm/s = 250mm
        // 250mm * 4px/mm = 1000px width
        this.svgWidth = 250 * this.mm; 
        
        // 4 rows (3 standard rows + 1 rhythm strip)
        // Give each row 40mm height (4mV)
        this.rowHeightMm = 40;
        this.svgHeight = (4 * this.rowHeightMm) * this.mm; 
        
        this.config = Object.assign({
            gridColorMajor: '#ff6b6b', // high contrast pink/red
            gridColorMinor: '#ffc9c9',
            signalColor: '#000000',    // solid black for contrast
            signalWidth: 1.5,
            showLabels: false
        }, options);

        this.lastWavePeaks = {};
        
        // Lead mappings to Row/Col
        this.leadLayout = {
            'I': { col: 0, row: 0 }, 'aVR': { col: 1, row: 0 }, 'V1': { col: 2, row: 0 }, 'V4': { col: 3, row: 0 },
            'II': { col: 0, row: 1 }, 'aVL': { col: 1, row: 1 }, 'V2': { col: 2, row: 1 }, 'V5': { col: 3, row: 1 },
            'III':{ col: 0, row: 2 }, 'aVF': { col: 1, row: 2 }, 'V3': { col: 2, row: 2 }, 'V6': { col: 3, row: 2 }
        };
    }

    drawGrid() {
        let grid = '';
        const width = this.svgWidth;
        const height = this.svgHeight;

        // Minor grid (1mm)
        for (let x = 0; x <= width; x += this.mm) {
            grid += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="${this.config.gridColorMinor}" stroke-width="0.5" />`;
        }
        for (let y = 0; y <= height; y += this.mm) {
            grid += `<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${this.config.gridColorMinor}" stroke-width="0.5" />`;
        }

        // Major grid (5mm)
        const majorMm = this.mm * 5;
        for (let x = 0; x <= width; x += majorMm) {
            grid += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="${this.config.gridColorMajor}" stroke-width="1" />`;
        }
        for (let y = 0; y <= height; y += majorMm) {
            grid += `<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${this.config.gridColorMajor}" stroke-width="1" />`;
        }

        return grid;
    }
    
    // Draw text labels for leads
    drawLeadText() {
        let textSvg = '';
        const colWidthPx = this.svgWidth / 4;
        const rowHeightPx = this.rowHeightMm * this.mm;
        
        for (let leadName in this.leadLayout) {
            let pos = this.leadLayout[leadName];
            let startX = pos.col * colWidthPx + (2 * this.mm);
            let startY = pos.row * rowHeightPx + (4 * this.mm);
            textSvg += `<text x="${startX}" y="${startY}" font-family="Arial" font-size="14" fill="#000" font-weight="bold">${leadName}</text>`;
        }
        
        // Rhythm strip label
        textSvg += `<text x="${2 * this.mm}" y="${3 * rowHeightPx + (4 * this.mm)}" font-family="Arial" font-size="14" fill="#000" font-weight="bold">II</text>`;
        return textSvg;
    }

    generateTrace(config) {
        let paths = '';
        this.lastWavePeaks = { P: [], Q: [], R: [], S: [], T: [] };
        
        // Global configuration with defaults
        const globalParams = Object.assign({
            heartRate: 75,
            pWave: true, pAmpMv: 0.15, pWidthMs: 80,
            prMs: 160,
            qrsMs: 80, qWave: false, rAmpMv: 1.0, sAmpMv: 0.2,
            stMs: 80, stElevMv: 0,
            tMs: 160, tAmpMv: 0.3, tInverted: false,
            wpw: false, lbbb: false, rbbb: false,
            flutter: false, fibrillation: false, vf: false,
            irregular: false, lvh: false, hyperkalemia: false,
            noise: 0
        }, config);
        
        const colWidthPx = this.svgWidth / 4;
        const rowHeightPx = this.rowHeightMm * this.mm;
        const durationPerColMs = 2500; // 2.5 seconds per column

        // Draw the 12 leads in their 4x3 grid
        for (let leadName in this.leadLayout) {
            let pos = this.leadLayout[leadName];
            let startXPx = pos.col * colWidthPx;
            let endXPx = startXPx + colWidthPx;
            let baseYPx = pos.row * rowHeightPx + (rowHeightPx / 2); // middle of the row
            
            // Get specific overrides for this lead
            let leadParams = Object.assign({}, globalParams);
            if (config.leadOverrides && config.leadOverrides[leadName]) {
                leadParams = Object.assign(leadParams, config.leadOverrides[leadName]);
            }
            
            // Adjust basic axis/amplitude generically if not overridden
            leadParams = this._applyGenericAxis(leadName, leadParams, config.axis || 'Normal');
            
            let trace = this._drawLeadSegment(leadName, startXPx, endXPx, baseYPx, leadParams, 0, durationPerColMs);
            paths += trace;
        }

        // Draw Rhythm Strip (Row 4, spanning full 10s)
        let rhythmParams = Object.assign({}, globalParams);
        if (config.leadOverrides && config.leadOverrides['II']) {
            rhythmParams = Object.assign(rhythmParams, config.leadOverrides['II']);
        }
        let rhythmBaseY = 3 * rowHeightPx + (rowHeightPx / 2);
        paths += this._drawLeadSegment('Rhythm', 0, this.svgWidth, rhythmBaseY, rhythmParams, 0, 10000);

        return paths;
    }
    
    // Apply generic modifications based on the lead (e.g., aVR is always inverted)
    _applyGenericAxis(leadName, params, axis) {
        let p = Object.assign({}, params);
        if (leadName === 'aVR') {
            p.pAmpMv = -p.pAmpMv;
            p.rAmpMv = -p.rAmpMv;
            p.tAmpMv = -p.tAmpMv;
            if(!p.qWave) { p.sAmpMv = Math.abs(p.rAmpMv); p.rAmpMv = 0; }
        }
        if (leadName === 'V1' || leadName === 'V2') {
            // Normal R wave progression: deep S, small r in V1
            if(!p.lbbb && !p.rbbb && !p.lvh) {
                p.rAmpMv = 0.2;
                p.sAmpMv = 1.0;
            }
        }
        if (leadName === 'V5' || leadName === 'V6') {
            // Normal R wave progression: tall R, small/no S
            if(!p.lbbb && !p.rbbb) {
                p.rAmpMv = 1.2;
                p.sAmpMv = 0;
            }
        }
        return p;
    }

    _drawLeadSegment(leadName, startXPx, endXPx, baseYPx, params, timeOffsetMs, durationMs) {
        let path = '';
        let currentTimeMs = timeOffsetMs;
        let cx = startXPx;
        
        if (params.vf) {
            return this.drawVF(startXPx, endXPx, baseYPx);
        }

        while (cx < endXPx) {
            let rrms = 60000 / params.heartRate;
            if (params.irregular || params.fibrillation) {
                // vary by up to 30%
                rrms += rrms * (Math.random() * 0.6 - 0.3);
            }
            let rrPx = (rrms / 1000) * this.paperSpeed * this.mm;

            if (cx + rrPx > endXPx && (endXPx - cx) < (40 * this.mm)) {
                // Just draw flat or baseline to the end if not enough space for a complex
                path += ` L ${endXPx} ${baseYPx}`;
                break;
            }

            let complex = this.drawComplex(cx, baseYPx, params);
            if (!path) path = `M ${cx} ${baseYPx}`;
            path += complex.path;
            
            let nextCx = cx + rrPx;
            
            if (params.flutter) {
                 path += this.drawFlutter(complex.newX, nextCx, baseYPx);
            } else if (params.fibrillation) {
                 path += this.drawFibrillation(complex.newX, nextCx, baseYPx);
            } else {
                 path += ` L ${nextCx} ${baseYPx}`;
            }
            
            cx = nextCx;
        }

        return path;
    }

    drawComplex(startX, baseY, params) {
        let path = '';
        let cx = startX;

        // P Wave
        if (params.pWave !== false && !params.fibrillation && !params.flutter) {
            let pWidth = (params.pWidthMs || 80) / 1000 * this.paperSpeed * this.mm;
            let pAmpPx = (params.pAmpMv || 0.15) * this.voltageScale * this.mm;
            cx += 2 * this.mm; // flat before P
            if (!path) path += `M ${cx} ${baseY}`;
            else path += ` L ${cx} ${baseY}`;
            
            let pPeakY = baseY - pAmpPx;
            this.lastWavePeaks.P.push({ x: cx + pWidth/2, y: pPeakY });
            path += ` Q ${cx + pWidth/2} ${pPeakY}, ${cx + pWidth} ${baseY}`;
            cx += pWidth;
        } else {
            if (!path) path += `M ${cx} ${baseY}`;
        }

        let prSegmentMs = (params.prMs || 160) - (params.pWidthMs || 80);
        if (prSegmentMs < 0) prSegmentMs = 10;
        if(params.wpw) prSegmentMs = 0; 
        
        cx += (prSegmentMs / 1000) * this.paperSpeed * this.mm;
        path += ` L ${cx} ${baseY}`;
        
        let qrsWidthPx = (params.qrsMs || 80) / 1000 * this.paperSpeed * this.mm;
        
        // Path logic for QRS
        if (params.lbbb) {
            path += ` L ${cx + qrsWidthPx*0.3} ${baseY - 15*this.mm}`;
            path += ` L ${cx + qrsWidthPx*0.5} ${baseY - 10*this.mm}`; // notch
            this.lastWavePeaks.R.push({ x: cx + qrsWidthPx*0.7, y: baseY - 15*this.mm });
            path += ` L ${cx + qrsWidthPx*0.7} ${baseY - 15*this.mm}`;
            cx += qrsWidthPx;
            path += ` L ${cx} ${baseY}`;
        } else if (params.rbbb) {
            path += ` L ${cx + qrsWidthPx*0.2} ${baseY - 5*this.mm}`; // r
            this.lastWavePeaks.S.push({ x: cx + qrsWidthPx*0.4, y: baseY + 5*this.mm });
            path += ` L ${cx + qrsWidthPx*0.4} ${baseY + 5*this.mm}`; // s
            this.lastWavePeaks.R.push({ x: cx + qrsWidthPx*0.7, y: baseY - 12*this.mm });
            path += ` L ${cx + qrsWidthPx*0.7} ${baseY - 12*this.mm}`; // R'
            cx += qrsWidthPx;
            path += ` L ${cx} ${baseY}`;
        } else {
            // Normal QRS
            let rAmpPx = (params.rAmpMv || 1.0) * this.voltageScale * this.mm;
            let sAmpPx = (params.sAmpMv || 0.2) * this.voltageScale * this.mm;
            
            if (params.qWave) {
                 this.lastWavePeaks.Q.push({ x: cx + 1*this.mm, y: baseY + 2*this.mm });
                 path += ` L ${cx + 1*this.mm} ${baseY + 2*this.mm}`;
                 cx += 1*this.mm;
            }
            
            this.lastWavePeaks.R.push({ x: cx + qrsWidthPx*0.5, y: baseY - rAmpPx });
            path += ` L ${cx + qrsWidthPx*0.5} ${baseY - rAmpPx}`;
            
            if (sAmpPx > 0 || params.rAmpMv < 0) { // allow drawing deep S if required
                this.lastWavePeaks.S.push({ x: cx + qrsWidthPx*0.7, y: baseY + sAmpPx });
                path += ` L ${cx + qrsWidthPx*0.7} ${baseY + sAmpPx}`;
            }
            cx += qrsWidthPx;
        }

        let stElevPx = (params.stElevMv || 0) * this.voltageScale * this.mm;
        path += ` L ${cx} ${baseY - stElevPx}`;
        
        let stWidthPx = (params.stMs || 80) / 1000 * this.paperSpeed * this.mm;
        cx += stWidthPx;
        path += ` L ${cx} ${baseY - stElevPx}`;

        // T Wave
        let tWidthPx = (params.tMs || 160) / 1000 * this.paperSpeed * this.mm;
        let tAmpPx = (params.tAmpMv || 0.3) * this.voltageScale * this.mm;
        if (params.tInverted) tAmpPx = -tAmpPx;
        
        let tPeakY = baseY - stElevPx - tAmpPx;
        if (params.hyperkalemia) {
            tPeakY = baseY - (2.0 * this.voltageScale * this.mm); // Tall peaked
            path += ` L ${cx + tWidthPx*0.4} ${tPeakY}`;
            this.lastWavePeaks.T.push({ x: cx + tWidthPx*0.4, y: tPeakY });
            path += ` L ${cx + tWidthPx} ${baseY}`;
        } else {
            this.lastWavePeaks.T.push({ x: cx + tWidthPx/2, y: tPeakY });
            path += ` Q ${cx + tWidthPx/2} ${tPeakY}, ${cx + tWidthPx} ${baseY}`;
        }
        cx += tWidthPx;

        return { path, newX: cx };
    }

    drawFlutter(startX, endX, baseY) {
        let path = '';
        let cx = startX;
        let flutWidth = 200 / 1000 * this.paperSpeed * this.mm; // ~300 bpm
        while (cx + flutWidth <= endX) {
            path += ` L ${cx + flutWidth * 0.7} ${baseY + 3*this.mm}`;
            path += ` L ${cx + flutWidth} ${baseY - 3*this.mm}`;
            cx += flutWidth;
        }
        path += ` L ${endX} ${baseY}`;
        return path;
    }

    drawFibrillation(startX, endX, baseY) {
        let path = '';
        let cx = startX;
        while (cx < endX) {
            let step = (10 + Math.random() * 20) / 1000 * this.paperSpeed * this.mm;
            if (cx + step > endX) step = endX - cx;
            let amp = (Math.random() * 2 - 1) * this.mm;
            path += ` L ${cx + step} ${baseY + amp}`;
            cx += step;
        }
        return path;
    }
    
    drawVF(startX, endX, baseY) {
        let path = `M ${startX} ${baseY}`;
        let cx = startX;
        while (cx < endX) {
            let step = (30 + Math.random() * 50) / 1000 * this.paperSpeed * this.mm;
            if (cx + step > endX) step = endX - cx;
            let amp = (Math.random() * 20 - 10) * this.mm;
            path += ` Q ${cx + step/2} ${baseY + amp}, ${cx + step} ${baseY + amp * 0.2}`;
            cx += step;
        }
        return path;
    }

    _generateWaveLabels(peaks) {
        let svg = '';
        for (let wave in peaks) {
            // Only draw a few labels per row to avoid clutter, maybe just the first one found per lead section
            // A simple approach is just plotting all of them but small.
            peaks[wave].forEach(pt => {
                let textY = pt.y > this.rowHeightMm * this.mm / 2 ? pt.y + 12 : pt.y - 5;
                svg += `<text x="${pt.x}" y="${textY}" font-family="Arial" font-size="10" fill="blue" font-weight="bold" text-anchor="middle">${wave}</text>`;
            });
        }
        return svg;
    }

    render(config) {
        this.config = Object.assign(this.config, config);
        const grid = this.drawGrid();
        const trace = this.generateTrace(this.config);
        const leadTexts = this.drawLeadText();
        const labels = this.config.showLabels ? this._generateWaveLabels(this.lastWavePeaks) : '';
        
        return `
            <svg viewBox="0 0 ${this.svgWidth} ${this.svgHeight}" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" style="min-width: 800px; background-color: white;">
                ${grid}
                ${leadTexts}
                <path d="${trace}" fill="none" stroke="${this.config.signalColor}" stroke-width="${this.config.signalWidth}" stroke-linejoin="round" stroke-linecap="round" />
                ${labels}
            </svg>
        `;
    }
}
