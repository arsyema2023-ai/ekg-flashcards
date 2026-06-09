/**
 * ECG Ultra Generator v4.0
 * Advanced 12-lead ECG waveform generator using Canvas2D
 * Realistic P-QRS-T-U morphology with per-lead customization
 * Standard 25mm/s, 10mm/mV, 4x3 + rhythm strip layout
 */
class ECGUltraGenerator {
  constructor() {
    this.mm = 4; // pixels per mm at 1x
    this.speed_mm_s = 25; // standard paper speed
    this.gain_mm_mV = 10; // standard gain
    this.px_per_mm = this.mm;
    this.px_per_sec = this.speed_mm_s * this.px_per_mm; // 100 px/s
    this.px_per_mV = this.gain_mm_mV * this.px_per_mm; // 40 px/mV

    // 12-lead layout: 4 columns × 3 rows + rhythm strip
    this.cols = 4;
    this.rows = 3;
    this.leadDuration = 2.5; // seconds per lead strip
    this.leadWidth_px = this.leadDuration * this.px_per_sec; // 250px
    this.leadHeight_px = 40 * this.px_per_mm; // 160px (40mm)

    this.totalWidth = this.cols * this.leadWidth_px; // 1000px
    this.rhythmHeight_px = 40 * this.px_per_mm;
    this.totalHeight = (this.rows * this.leadHeight_px) + this.rhythmHeight_px;

    // Lead labels
    this.leadNames = [
      ['I', 'aVR', 'V1', 'V4'],
      ['II', 'aVL', 'V2', 'V5'],
      ['III', 'aVF', 'V3', 'V6']
    ];
    this.rhythmLead = 'II';

    // Color scheme
    this.colors = {
      gridMinor: '#ffcccc',
      gridMajor: '#ff9999',
      bgPaper: '#fff8f8',
      trace: '#1a1a2e',
      traceWidth: 1.5,
      pWave: '#2563eb',
      qWave: '#dc2626',
      rWave: '#16a34a',
      sWave: '#9333ea',
      tWave: '#d97706',
      uWave: '#0891b2',
      highlightStElev: 'rgba(220, 38, 38, 0.2)',
      highlightStDep: 'rgba(37, 99, 235, 0.2)',
      highlightLongPr: 'rgba(234, 179, 8, 0.15)',
      highlightWide: 'rgba(147, 51, 234, 0.1)',
      legendBg: 'rgba(255,255,255,0.95)',
      legendBorder: '#ddd',
      legendText: '#333'
    };
  }

  /**
   * Render a complete 12-lead ECG on a canvas
   * @param {Object} params - ECG parameters
   * @param {HTMLCanvasElement} canvas
   */
  render(params, canvas) {
    const dpr = window.devicePixelRatio || 1;
    const w = this.totalWidth;
    const h = this.totalHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    // Default params
    const p = this._defaultParams(params);

    // Draw paper background
    this._drawPaper(ctx, w, h);

    // Draw calibration
    this._drawCalibration(ctx, p);

    // Draw each lead
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const leadName = this.leadNames[r][c];
        const x = c * this.leadWidth_px;
        const y = r * this.leadHeight_px;
        this._drawLead(ctx, leadName, x, y, this.leadWidth_px, this.leadHeight_px, p);
      }
    }

    // Draw rhythm strip (last row, full width)
    const rhythmY = this.rows * this.leadHeight_px;
    this._drawLead(ctx, this.rhythmLead, 0, rhythmY, this.totalWidth, this.rhythmHeight_px, p, true);

    // Draw wave labels if enabled
    if (p.showLabels) {
      this._drawWaveLabels(ctx, p);
    }

    // Draw highlights if enabled
    if (p.showHighlights) {
      this._drawHighlights(ctx, p);
    }

    // Draw legend if hints shown
    if (p.showLabels || p.showHighlights) {
      this._drawLegend(ctx, p);
    }

    return canvas;
  }

  /**
   * Default parameters
   */
  _defaultParams(cfg) {
    const d = {
      // Rate
      heartRate: 75,
      // Intervals (seconds)
      prInterval: 0.16,
      qrsDuration: 0.08,
      qtInterval: 0.40,
      // P wave
      pAmplitude: 0.15,
      pDuration: 0.10,
      pVisible: true,
      pInverted: false,
      pMitrale: false,
      pPulmonale: false,
      // Q wave
      qAmplitude: 0,
      // R wave
      rAmplitude: 1.0,
      sAmplitude: 0.2,
      // ST segment (mV offset from baseline)
      stElevation: 0,
      stDepression: 0,
      // T wave
      tAmplitude: 0.3,
      tInverted: false,
      tPeaked: false,
      tFlat: false,
      // U wave
      uAmplitude: 0,
      // Rhythm
      irregular: false,
      fibrillation: false,
      flutter: false,
      sawtooth: false,
      // Blocks
      lbbb: false,
      rbbb: false,
      wpw: false,
      lvh: false,
      rvh: false,
      // Clinical
      deltaWave: false,
      axis: 'normal', // normal, lad, rad, extreme
      // AV Blocks & Special
      wenckebach: false,
      mobitz2: false,
      completeBlock: false,
      pvc: false,
      pericarditis: false,
      earlyRepol: false,
      hyperkalemia: false,
      hypokalemia: false,
      qtLong: false,
      // Display
      showLabels: false,
      showHighlights: false,
      highlightST: false,
      // Per-lead overrides
      leads: {}
    };

    // Merge in config
    if (cfg) {
      Object.assign(d, cfg);
      // Also copy leads overrides
      if (cfg.leads) d.leads = cfg.leads;
    }

    // Compute QT if not specified
    if (!cfg || cfg.qtInterval === undefined) {
      // Bazett: QTc = QT / sqrt(RR)
      const rr = 60 / d.heartRate;
      d.qtInterval = Math.min(0.48, Math.max(0.28, 0.39 * Math.sqrt(rr / 0.8)));
    }

    return d;
  }

  /**
   * Draw ECG paper background
   */
  _drawPaper(ctx, w, h) {
    // Background
    ctx.fillStyle = this.colors.bgPaper;
    ctx.fillRect(0, 0, w, h);

    // Minor grid (1mm)
    ctx.strokeStyle = this.colors.gridMinor;
    ctx.lineWidth = 0.4;
    for (let x = 0; x <= w; x += this.px_per_mm) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y <= h; y += this.px_per_mm) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Major grid (5mm = 0.2s, 0.5mV)
    ctx.strokeStyle = this.colors.gridMajor;
    ctx.lineWidth = 0.8;
    const majorStep = 5 * this.px_per_mm;
    for (let x = 0; x <= w; x += majorStep) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y <= h; y += majorStep) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Every 25mm (1 sec) - darker line
    ctx.strokeStyle = '#ff8888';
    ctx.lineWidth = 1.2;
    const secStep = 25 * this.px_per_mm;
    for (let x = secStep; x <= w; x += secStep) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
  }

  /**
   * Draw calibration pulse
   */
  _drawCalibration(ctx, params) {
    const calX = 10;
    const calY = 10;
    const calWidth = 5 * this.px_per_mm; // 0.2s = 5mm
    const calHeight = 10 * this.px_per_mm; // 1mV = 10mm

    ctx.strokeStyle = '#666';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(calX, calY);
    ctx.lineTo(calX + calWidth * 0.3, calY);
    ctx.lineTo(calX + calWidth * 0.3, calY + calHeight);
    ctx.lineTo(calX + calWidth * 0.7, calY + calHeight);
    ctx.lineTo(calX + calWidth * 0.7, calY);
    ctx.lineTo(calX + calWidth, calY);
    ctx.stroke();

    ctx.fillStyle = '#666';
    ctx.font = '8px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('1mV | 0.2s', calX, calY + calHeight + 12);
    ctx.fillText(`${this.speed_mm_s}mm/s ${this.gain_mm_mV}mm/mV`, calX, calY + calHeight + 22);
  }

  /**
   * Draw a single lead strip
   */
  _drawLead(ctx, leadName, x, y, width, height, params, isRhythm = false) {
    const pPerLead = this._getLeadParams(leadName, params);
    
    // Check if this lead has meaningful signal
    const duration = isRhythm ? 10 : this.leadDuration;
    
    // Draw baseline
    const centerY = y + height / 2;
    
    // Draw lead label
    ctx.fillStyle = '#222';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(leadName, x + 5, y + 3);
    
    // Draw gain marker if lead has special gain
    if (pPerLead.gain !== 1) {
      ctx.fillStyle = '#888';
      ctx.font = '8px Arial';
      ctx.fillText(`${pPerLead.gain}x`, x + 35, y + 5);
    }

    // Generate and draw waveform
    const gain = pPerLead.gain || 1;
    const pxPerSec = this.px_per_sec;
    
    ctx.strokeStyle = this.colors.trace;
    ctx.lineWidth = this.colors.traceWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();

    let firstPoint = true;
    const step = 2; // pixels between samples
    const durationPx = isRhythm ? width : Math.min(width, duration * pxPerSec);

    // For isRhythm we draw the full width
    for (let px = 0; px <= durationPx; px += step) {
      const t = px / pxPerSec; // time in seconds from start
      const voltage = this._getVoltage(leadName, t, pPerLead, params, isRhythm);
      const screenY = centerY - (voltage * this.px_per_mV * gain);
      
      // Only draw within lead area
      if (screenY >= y && screenY <= y + height) {
        if (firstPoint) {
          ctx.moveTo(x + px, screenY);
          firstPoint = false;
        } else {
          ctx.lineTo(x + px, screenY);
        }
      }
    }
    ctx.stroke();

    // Draw PQRST markers for first beat if labels enabled
    if (params.showLabels && !isRhythm) {
      this._drawSingleLeadMarkers(ctx, leadName, x, y, centerY, pPerLead, params, pxPerSec);
    }
  }

  /**
   * Get merged parameters for a specific lead
   */
  _getLeadParams(leadName, globalParams) {
    const leadOverrides = globalParams.leads && globalParams.leads[leadName] 
      ? globalParams.leads[leadName] 
      : {};
    
    // Apply standard lead modifications based on direction of electrical axis
    const lp = { ...globalParams, ...leadOverrides };
    
    // Default gain
    if (lp.gain === undefined) lp.gain = 1;

    // aVR is inverted
    if (leadName === 'aVR') {
      if (leadOverrides.rAmplitude === undefined) lp.rAmplitude = -0.6;
      if (leadOverrides.tAmplitude === undefined) lp.tAmplitude = -0.2;
      if (leadOverrides.pAmplitude === undefined) lp.pAmplitude = -0.1;
    }

    // V1-V2: small R, deep S
    if ((leadName === 'V1' || leadName === 'V2')) {
      if (!lp.lbbb && !lp.rbbb && !lp.lvh && !lp.rvh) {
        if (leadOverrides.rAmplitude === undefined) lp.rAmplitude = 0.2;
        if (leadOverrides.sAmplitude === undefined) lp.sAmplitude = 1.0;
      }
    }

    // V5-V6: tall R
    if ((leadName === 'V5' || leadName === 'V6')) {
      if (!lp.lbbb && !lp.rbbb) {
        if (leadOverrides.rAmplitude === undefined) lp.rAmplitude = 1.5;
        if (leadOverrides.sAmplitude === undefined) lp.sAmplitude = 0;
      }
    }

    // III, aVF: inferior leads
    if (leadName === 'III' || leadName === 'aVF') {
      // Normal: positive QRS
    }

    return lp;
  }

  /**
   * Get ECG voltage at a given time for a lead
   */
  _getVoltage(leadName, t, lp, globalParams, isRhythm) {
    if (lp.vf) return this._getVFVoltage(t);
    if (lp.asystole) return this._getAsystoleVoltage(t);
    if (lp.torsades) return this._getTorsadesVoltage(t);

    const hr = lp.heartRate || 75;
    const rr = 60 / hr;
    let voltage = 0;
    const numBeats = isRhythm ? 20 : 5;

    // === AV BLOCK: Wenckebach (progressive PR, then dropped QRS) ===
    if (lp.wenckebach) {
      // Simulate Wenckebach: cycle of 4 beats (3 conducted, 1 dropped)
      // P waves occur regularly at ~80 bpm (independent)
      const pRate = 82;
      const pRR = 60 / pRate;
      // QRS rate is ~55-65 average (3 out of 4 conducted)
      const qrr = rr;

      // Draw P waves at fixed rate
      for (let i = -3; i < 18; i++) {
        const beatTime = i * pRR;
        const localT = t - beatTime;
        if (localT >= -0.02 && localT <= 0.14) {
          const pAmp = lp.pAmplitude || 0.15;
          voltage += pAmp * Math.exp(-Math.pow((localT - 0.05) / 0.035, 2));
        }
      }

      // Draw QRS-T for conducted beats only (3 out of 4)
      for (let i = -2; i < numBeats; i++) {
        const cyclePos = ((i % 4) + 4) % 4;
        if (cyclePos === 3) continue; // dropped beat
        
        const prValues = [0.14, 0.20, 0.26]; // progressive PR prolongation
        const pr = prValues[cyclePos] || 0.14;
        const beatTime = i * pRR + pr - 0.14; // shift QRS to correct PR
        
        const localT = t - beatTime;
        if (localT >= -0.1 && localT <= rr * 0.7) {
          const lpMod = { ...lp, prInterval: pr || 0.14, pVisible: false };
          voltage += this._getSingleBeatVoltage(leadName, localT, lpMod, globalParams);
        }
      }
      
      // Noise + baseline
      voltage += 0.03 * Math.sin(2 * Math.PI * 0.15 * t + 0.5) + (Math.random()-0.5)*0.015;
      return voltage;
    }

    // === AV BLOCK: Mobitz II (constant PR, then dropped QRS) ===
    if (lp.mobitz2) {
      const pRate = 75;
      const pRR = 60 / pRate;
      
      // Draw P waves regularly
      for (let i = -3; i < 18; i++) {
        const beatTime = i * pRR;
        const localT = t - beatTime;
        if (localT >= -0.02 && localT <= 0.14) {
          voltage += (lp.pAmplitude || 0.13) * Math.exp(-Math.pow((localT - 0.05) / 0.035, 2));
        }
      }

      // 3:2 block — every 3rd P is conducted
      for (let i = -2; i < numBeats; i++) {
        const cyclePos = ((i % 3) + 3) % 3;
        if (cyclePos === 2) continue; // non-conducted
        
        const pr = 0.18; // fixed PR
        const beatTime = i * pRR + pr - 0.14;
        const localT = t - beatTime;
        if (localT >= -0.1 && localT <= pRR * 0.7) {
          const lpMod = { ...lp, pVisible: false };
          voltage += this._getSingleBeatVoltage(leadName, localT, lpMod, globalParams);
        }
      }
      
      voltage += 0.03 * Math.sin(2 * Math.PI * 0.15 * t + 0.5) + (Math.random()-0.5)*0.015;
      return voltage;
    }

    // === COMPLETE HEART BLOCK (AV dissociation) ===
    if (lp.completeBlock) {
      const pRate = 85; // atria beat faster
      const pRR = 60 / pRate;
      const vRate = 38; // ventricles escape at ~35-45
      const vRR = 60 / vRate;

      // Draw independent P waves
      for (let i = -3; i < 20; i++) {
        const beatTime = i * pRR;
        const localT = t - beatTime;
        if (localT >= -0.02 && localT <= 0.14) {
          voltage += (lp.pAmplitude || 0.12) * Math.exp(-Math.pow((localT - 0.05) / 0.035, 2));
        }
      }

      // Ventricular escape beats (wide, slow)
      for (let i = -2; i < numBeats; i++) {
        const beatTime = i * vRR;
        const localT = t - beatTime;
        if (localT >= -0.05 && localT <= vRR * 0.6) {
          const lpEsc = { ...lp, pVisible: false, lbbb: true, qrsDuration: 0.14, rAmplitude: 0.8, stElevation: 0 };
          voltage += this._getSingleBeatVoltage(leadName, localT, lpEsc, globalParams);
        }
      }
      
      voltage += 0.03 * Math.sin(2 * Math.PI * 0.15 * t + 0.5) + (Math.random()-0.5)*0.015;
      return voltage;
    }

    // === PVC (Premature Ventricular Complex) ===
    if (lp.pvc) {
      // Normal sinus first, then a PVC
      for (let i = -2; i < numBeats; i++) {
        const beatTime = i * rr;
        const localT = t - beatTime;
        if (localT >= -0.1 && localT <= rr * 0.7) {
          voltage += this._getSingleBeatVoltage(leadName, localT, lp, globalParams);
        }
      }
      // Add a PVC at ~1.3s (premature, wide QRS)
      const pvcTime = 1.3;
      const localPVC = t - pvcTime;
      if (localPVC >= -0.05 && localPVC <= 0.25) {
        const pvcLp = { ...lp, pVisible: false, qrsDuration: 0.14, rAmplitude: 1.5, lbbb: true, tAmplitude: -0.4, stElevation: 0 };
        voltage += this._getSingleBeatVoltage(leadName, localPVC, pvcLp, globalParams);
      }
    } else {
      // === NORMAL BEAT GENERATION ===
      let effectiveRR = rr;
      if (lp.irregular || lp.fibrillation) {
        effectiveRR = rr * (0.7 + Math.random() * 0.6);
      }

      for (let i = -2; i < numBeats; i++) {
        let beatTime;
        if (lp.irregular || lp.fibrillation) {
          const jitter = (Math.random() - 0.5) * rr * 0.3;
          beatTime = i * rr + jitter;
        } else {
          beatTime = i * rr;
        }
        
        const localT = t - beatTime;
        if (localT >= -0.1 && localT <= rr * 0.7) {
          let lpEff = { ...lp };
          // Pericarditis: PR depression
          if (lp.pericarditis && !leadName.startsWith('aVR')) {
            lpEff.prDepression = 0.05;
          }
          voltage += this._getSingleBeatVoltage(leadName, localT, lpEff, globalParams);
        }
      }
    }

    // Fibrillation / flutter baseline
    if (lp.fibrillation) {
      voltage += 0.05 * Math.sin(2 * Math.PI * 8 * t) + 0.03 * Math.sin(2 * Math.PI * 13 * t + 1.2);
    }
    if (lp.sawtooth || lp.flutter) {
      const nearestQRS = Math.round(t / rr) * rr;
      if (Math.abs(t - nearestQRS) > 0.06) {
        voltage += 0.15 * (((t * 5) % 1.0) * 2 - 1);
      }
    }

    // Baseline wander + noise
    voltage += 0.03 * Math.sin(2 * Math.PI * 0.15 * t + 0.5) + (Math.random() - 0.5) * 0.015;
    // Safety net: never return true flatline (minimal visible signal)
    if (Math.abs(voltage) < 0.005 && !lp.vf && !lp.asystole) {
      voltage = 0.02 * Math.sin(2 * Math.PI * 1.2 * t + 1.0) + (Math.random() - 0.5) * 0.01;
    }
    return voltage;
  }

  /**
   * Get voltage for a single heartbeat at local time t
   */
  _getSingleBeatVoltage(leadName, t, lp, globalParams) {
    let v = 0;

    // Wave timing relative to QRS onset (at t=0.25s roughly)
    const qrsStart = 0.25 - (lp.qrsDuration || 0.08) / 2;
    const pCenter = qrsStart - (lp.prInterval || 0.16) / 2;
    const pWidth = lp.pDuration || 0.10;
    const qrsHalf = (lp.qrsDuration || 0.08) / 2;
    const tCenter = qrsStart + (lp.qtInterval || 0.36) - 0.08;
    const tWidth = 0.18;
    const uCenter = tCenter + 0.16;
    const uWidth = 0.10;

    // --- P Wave ---
    if (lp.pVisible && t >= pCenter - pWidth/2 && t <= pCenter + pWidth/2) {
      let pAmp = lp.pAmplitude || 0.15;
      if (lp.pInverted) pAmp = -pAmp;
      if (lp.pMitrale) {
        // Bifid P wave
        const p1 = pCenter - 0.02;
        const p2 = pCenter + 0.02;
        v += pAmp * 0.8 * Math.exp(-Math.pow((t - p1) / (pWidth * 0.35), 2));
        v += pAmp * 0.6 * Math.exp(-Math.pow((t - p2) / (pWidth * 0.35), 2));
      } else if (lp.pPulmonale) {
        // Tall peaked P
        v += (pAmp * 1.4) * Math.exp(-Math.pow((t - pCenter) / (pWidth * 0.3), 2));
      } else {
        v += pAmp * Math.exp(-Math.pow((t - pCenter) / (pWidth * 0.35), 2));
      }
    }

    // --- QRS Complex ---
    const qrsCenter = qrsStart + qrsHalf;
    
    if (t >= qrsStart - 0.01 && t <= qrsStart + (lp.qrsDuration || 0.08) + 0.01) {
      const qt = t - qrsStart; // time since QRS onset
      const qrsDur = lp.qrsDuration || 0.08;
      const normT = qt / qrsDur; // normalized 0-1
      
      let rAmp = lp.rAmplitude || 1.0;
      let sAmp = lp.sAmplitude || 0.2;
      let qAmp = lp.qAmplitude || 0;

      // WPW: delta wave
      if (lp.wpw || lp.deltaWave) {
        // Delta wave: slow initial upstroke
        if (normT < 0.3) {
          v += rAmp * (normT / 0.3) * 0.5;
        } else if (normT < 0.5) {
          v += rAmp * (0.5 + 0.5 * (normT - 0.3) / 0.2);
        } else if (normT < 0.7) {
          v += rAmp * (1.0 - 0.5 * (normT - 0.5) / 0.2);
        } else {
          v += rAmp * 0.5 * (1.0 - (normT - 0.7) / 0.3);
        }
      }
      // LBBB: notched R wave
      else if (lp.lbbb) {
        if (normT < 0.2) {
          v += rAmp * 0.7 * (normT / 0.2);
        } else if (normT < 0.4) {
          v += rAmp * (0.7 - 0.2 * (normT - 0.2) / 0.2);
        } else if (normT < 0.7) {
          v += rAmp * (0.5 + 0.5 * (normT - 0.4) / 0.3);
        } else {
          v += rAmp * (1.0 - 1.0 * (normT - 0.7) / 0.3);
        }
      }
      // RBBB: rSR' pattern (rabbit ears)
      else if (lp.rbbb) {
        if (normT < 0.2) {
          v += (rAmp * 0.4) * Math.sin(Math.PI * normT / 0.2);
        } else if (normT < 0.45) {
          v += -sAmp * Math.sin(Math.PI * (normT - 0.2) / 0.25);
        } else if (normT < 0.75) {
          v += (rAmp * 1.2) * Math.sin(Math.PI * (normT - 0.45) / 0.3);
        } else {
          v += (rAmp * 0.2) * (1.0 - (normT - 0.75) / 0.25);
        }
      }
      // Standard QRS
      else {
        // Q wave (small negative deflection)
        if (normT < 0.15 && qAmp !== 0) {
          v += -Math.abs(qAmp) * Math.sin(Math.PI * normT / 0.15);
        }
        // R wave upstroke
        if (normT >= 0.15 && normT < 0.45) {
          const rProg = (normT - 0.15) / 0.3;
          v += Math.max(0, qAmp !== 0 ? -Math.abs(qAmp) : 0) + 
               (rAmp - (qAmp !== 0 ? 0 : 0)) * rProg;
        }
        // R wave peak to S wave
        if (normT >= 0.45 && normT < 0.65) {
          const rsProg = (normT - 0.45) / 0.2;
          v += rAmp - (rAmp + Math.abs(sAmp)) * rsProg;
        }
        // S wave return
        if (normT >= 0.65 && normT < 0.85) {
          const sProg = (normT - 0.65) / 0.2;
          v += -Math.abs(sAmp) + Math.abs(sAmp) * sProg;
        }
        // Terminal
        if (normT >= 0.85) {
          const endProg = (normT - 0.85) / 0.15;
          v += Math.abs(sAmp) * (1 - endProg) * 0;
        }
      }

      // LVH: increased voltage
      if (lp.lvh) {
        v *= 1.5;
      }
    }

    // --- ST Segment & T Wave ---
    const stStart = qrsStart + (lp.qrsDuration || 0.08);
    const stEnd = tCenter + tWidth / 2;
    
    if (t > stStart && t <= stEnd) {
      const stProg = (t - stStart) / (stEnd - stStart);
      
      // ST deviation
      let stDev = 0;
      if (lp.stElevation) stDev = lp.stElevation;
      if (lp.stDepression) stDev = -lp.stDepression;
      
      // ST slope decays toward T wave
      const stSlope = stDev * Math.exp(-stProg * 2);
      
      // T wave
      let tAmp = lp.tAmplitude || 0.3;
      if (lp.tInverted) tAmp = -tAmp;
      if (lp.tPeaked) tAmp *= 1.8;
      if (lp.tFlat) tAmp *= 0.2;

      let tVal;
      if (lp.hyperkalemia) {
        // Tall peaked, narrow T
        tVal = (tAmp * 1.5) * Math.exp(-Math.pow((t - tCenter) / (tWidth * 0.25), 2));
      } else if (lp.hypokalemia) {
        // Low/flat T
        tVal = tAmp * 0.3 * Math.exp(-Math.pow((t - tCenter) / (tWidth * 0.4), 2));
      } else {
        // Normal asymmetric T wave
        const tRise = 0.4;
        const tFall = 0.6;
        if (t <= tCenter) {
          tVal = tAmp * Math.exp(-Math.pow((t - tCenter) / (tWidth * tRise), 2));
        } else {
          tVal = tAmp * Math.exp(-Math.pow((t - tCenter) / (tWidth * tFall), 2));
        }
      }

      v += stSlope + tVal;
    }

    // --- U Wave ---
    if (lp.uAmplitude && t > stEnd && t < stEnd + 0.2) {
      v += (lp.uAmplitude || 0) * Math.exp(-Math.pow((t - uCenter) / uWidth, 2));
    }

    return v;
  }

  /**
   * VF voltage: chaotic high-frequency
   */
  _getVFVoltage(t) {
    return 0.5 * Math.sin(2 * Math.PI * 5.5 * t) +
           0.4 * Math.sin(2 * Math.PI * 8.2 * t + 1.3) +
           0.3 * Math.sin(2 * Math.PI * 12.0 * t + 2.7) +
           0.15 * Math.sin(2 * Math.PI * 18.5 * t + 0.8) +
           (Math.random() - 0.5) * 0.2;
  }

  /**
   * Asystole: flatline with minimal noise
   */
  _getAsystoleVoltage(t) {
    return (Math.random() - 0.5) * 0.02 + 0.01 * Math.sin(2 * Math.PI * 0.3 * t);
  }

  /**
   * Torsades de Pointes: VT with twisting amplitude
   */
  _getTorsadesVoltage(t) {
    const twist = 0.7 + 0.6 * Math.sin(2 * Math.PI * 0.2 * t);
    return twist * (1.0 * Math.sin(2 * Math.PI * 4.5 * t) +
                    0.25 * Math.sin(2 * Math.PI * 9.0 * t + 1.0)) +
           (Math.random() - 0.5) * 0.08;
  }

  /**
   * Draw PQRSTU markers for a single lead
   */
  _drawSingleLeadMarkers(ctx, leadName, x, y, centerY, lp, globalParams, pxPerSec) {
    const hr = lp.heartRate || 75;
    const rr = 60 / hr;
    
    // Draw markers for first beat
    const markers = [
      { name: 'P', time: (0.25 - (lp.qrsDuration || 0.08) / 2 - (lp.prInterval || 0.16) / 2), 
        amp: (lp.pVisible ? Math.abs(lp.pAmplitude || 0.15) : 0), color: this.colors.pWave },
      { name: 'Q', time: 0.25 - (lp.qrsDuration || 0.08) / 2 + (lp.qrsDuration || 0.08) * 0.1,
        amp: Math.abs(lp.qAmplitude || 0) * 0.5, color: this.colors.qWave },
      { name: 'R', time: 0.25, 
        amp: Math.abs(lp.rAmplitude || 1.0), color: this.colors.rWave },
      { name: 'S', time: 0.25 + (lp.qrsDuration || 0.08) * 0.25,
        amp: Math.abs(lp.sAmplitude || 0.2) * 0.5, color: this.colors.sWave },
      { name: 'T', time: 0.25 - (lp.qrsDuration || 0.08) / 2 + (lp.qtInterval || 0.36) - 0.08,
        amp: Math.abs(lp.tAmplitude || 0.3), color: this.colors.tWave },
    ];
    
    if (lp.uAmplitude) {
      markers.push({
        name: 'U',
        time: 0.25 - (lp.qrsDuration || 0.08) / 2 + (lp.qtInterval || 0.36) - 0.08 + 0.16,
        amp: Math.abs(lp.uAmplitude), color: this.colors.uWave
      });
    }

    const labelScale = 0.6;
    const fontSize = Math.round(8 * labelScale);

    for (const m of markers) {
      if (m.amp < 0.02) continue;
      const mx = x + m.time * pxPerSec;
      const my = centerY - m.amp * this.px_per_mV * (lp.gain || 1) * 0.7;
      
      if (mx > x + 10 && mx < x + this.leadWidth_px - 5) {
        ctx.fillStyle = m.color;
        ctx.font = `bold ${fontSize}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        if (my < centerY) {
          ctx.textBaseline = 'bottom';
          ctx.fillText(m.name, mx, my - 2);
        } else {
          ctx.textBaseline = 'top';
          ctx.fillText(m.name, mx, my + 2);
        }
      }
    }
  }

  /**
   * Draw wave labels across all leads
   */
  _drawWaveLabels(ctx, params) {
    // Per-lead markers already drawn by _drawSingleLeadMarkers
  }

  /**
   * Draw color highlights for abnormal findings
   */
  _drawHighlights(ctx, params) {
    if (!params.showHighlights) return;

    const pxPerSec = this.px_per_sec;

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const leadName = this.leadNames[r][c];
        const lp = this._getLeadParams(leadName, params);
        const x = c * this.leadWidth_px;
        const y = r * this.leadHeight_px;

        // ST elevation highlight
        if (Math.abs(lp.stElevation) > 0.1) {
          ctx.fillStyle = lp.stElevation > 0 ? this.colors.highlightStElev : this.colors.highlightStDep;
          // Highlight ST segment area
          const qrsEnd = 0.25 + (lp.qrsDuration || 0.08) / 2;
          const stStartPx = x + qrsEnd * pxPerSec;
          const stEndPx = x + (qrsEnd + 0.2) * pxPerSec;
          ctx.fillRect(stStartPx, y, stEndPx - stStartPx, this.leadHeight_px);
        }
      }
    }

    // Rhythm strip highlights
    const rhythmY = this.rows * this.leadHeight_px;
    const rlp = this._getLeadParams(this.rhythmLead, params);
    if (Math.abs(rlp.stElevation) > 0.1) {
      ctx.fillStyle = rlp.stElevation > 0 ? this.colors.highlightStElev : this.colors.highlightStDep;
      const qrsEnd = 0.25 + (rlp.qrsDuration || 0.08) / 2;
      const stStartPx = qrsEnd * pxPerSec;
      const stEndPx = (qrsEnd + 0.2) * pxPerSec;
      ctx.fillRect(0, rhythmY, this.totalWidth, this.rhythmHeight_px);
    }
  }

  /**
   * Draw color legend
   */
  _drawLegend(ctx, params) {
    const legendX = this.totalWidth - 165;
    const legendY = 2;
    const lineH = 16;
    const boxSize = 10;

    // Background
    ctx.fillStyle = this.colors.legendBg;
    ctx.strokeStyle = this.colors.legendBorder;
    ctx.lineWidth = 1;
    this._roundRect(ctx, legendX, legendY, 160, 5 * lineH + 10, 4);
    ctx.fill();
    ctx.stroke();

    const items = [
      { label: 'Gelombang P (Depolarisasi Atrium)', color: this.colors.pWave },
      { label: 'Gelombang Q (Septal depolarization)', color: this.colors.qWave },
      { label: 'Gelombang R (Depolarisasi Ventrikel)', color: this.colors.rWave },
      { label: 'Gelombang S (Depolarisasi akhir)', color: this.colors.sWave },
      { label: 'Gelombang T (Repolarisasi Ventrikel)', color: this.colors.tWave },
    ];

    if (params.uAmplitude && params.uAmplitude > 0.02) {
      items.push({ label: 'Gelombang U (Repol. lambat)', color: this.colors.uWave });
    }

    ctx.textBaseline = 'middle';
    ctx.font = '9px Arial';

    items.forEach((item, i) => {
      const iy = legendY + 8 + i * lineH;
      
      ctx.fillStyle = item.color;
      ctx.fillRect(legendX + 6, iy - boxSize / 2, boxSize, boxSize);
      
      ctx.fillStyle = this.colors.legendText;
      ctx.textAlign = 'left';
      ctx.fillText(item.label, legendX + 20, iy);
    });
  }

  /**
   * Helper: rounded rectangle
   */
  _roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }
}
