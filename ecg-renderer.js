/**
 * ECG Waveform Renderer
 * Menggunakan HTML5 Canvas untuk merender grid EKG standard dan gelombang parametrik.
 */

class EczRenderer {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    
    // Default options
    this.options = Object.assign({
      lead: "II",
      speed: 25,       // mm/s
      voltage: 10,     // mm/mV
      animated: false,
      highlight: false,
      isPlaying: true
    }, options);

    this.pxPerMm = 4; // 1mm = 4px
    this.time = 0;
    this.animationFrameId = null;
    this.beatTimes = [];
    this.noiseOffset = 0;
    
    this.initCanvas();
  }

  initCanvas() {
    // Handle High-DPI screens
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);
    
    // Store CSS width/height for calculations
    this.width = rect.width;
    this.height = rect.height;
  }

  setOption(key, value) {
    this.options[key] = value;
    if (key === "animated" && !value) {
      this.stopAnimation();
      this.renderStatic();
    } else if (key === "animated" && value && this.options.isPlaying) {
      this.startAnimation();
    } else {
      this.render();
    }
  }

  updateData(condition) {
    this.condition = condition;
    this.beatTimes = []; // Reset beats cache
    this.time = 0;
    this.render();
  }

  render() {
    if (this.options.animated && this.options.isPlaying) {
      this.startAnimation();
    } else {
      this.renderStatic();
    }
  }

  // Draw ECG Grid (Standard Pink Paper)
  drawGrid() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    
    // Background color (light cream/pinkish-orange typical for ECG grid)
    ctx.fillStyle = "#fffbfb";
    ctx.fillRect(0, 0, w, h);
    
    const mmSize = this.pxPerMm;
    const largeSize = mmSize * 5; // 5mm
    
    // 1. Draw 1mm Grid (thin lines)
    ctx.strokeStyle = "rgba(255, 180, 180, 0.25)";
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    
    for (let x = 0; x < w; x += mmSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
    }
    for (let y = 0; y < h; y += mmSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
    }
    ctx.stroke();
    
    // 2. Draw 5mm Grid (thick lines)
    ctx.strokeStyle = "rgba(255, 120, 120, 0.45)";
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    
    for (let x = 0; x < w; x += largeSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
    }
    for (let y = 0; y < h; y += largeSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
    }
    ctx.stroke();

    // 3. Draw Lead label & calibration signal
    this.drawCalibrationBox();
  }

  drawCalibrationBox() {
    const ctx = this.ctx;
    const scaleY = this.options.voltage; // mm/mV
    const scaleX = this.options.speed;   // mm/s
    const pxMm = this.pxPerMm;
    
    ctx.fillStyle = "rgba(100, 100, 150, 0.75)";
    ctx.font = "bold 11px sans-serif";
    ctx.fillText(`${this.options.lead} (${scaleX} mm/s, ${scaleY} mm/mV)`, 15, 20);

    // Draw standard 1mV, 0.2s calibration pulse at the bottom left
    // 1mV = scaleY * pxMm (40px if 10mm/mV)
    // 0.2s = 5mm = 5 * pxMm (20px if 25mm/s)
    const startX = 15;
    const startY = this.height - 15;
    const pulseHeight = scaleY * pxMm;
    const pulseWidth = 5 * pxMm;

    ctx.strokeStyle = "rgba(120, 120, 120, 0.8)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + pulseWidth * 0.5, startY);
    ctx.lineTo(startX + pulseWidth * 0.5, startY - pulseHeight);
    ctx.lineTo(startX + pulseWidth * 1.5, startY - pulseHeight);
    ctx.lineTo(startX + pulseWidth * 1.5, startY);
    ctx.lineTo(startX + pulseWidth * 2.0, startY);
    ctx.stroke();
  }

  // Helper smooth bell-curve peak (cosine squared)
  bump(u, center, width, amplitude) {
    const halfW = width / 2;
    if (u >= center - halfW && u <= center + halfW) {
      const x = (u - center) / halfW; // -1 to 1
      return amplitude * Math.pow(Math.cos((Math.PI / 2) * x), 2);
    }
    return 0;
  }

  // Math equation for a single heartbeat cycle
  getSingleBeatVoltage(u, params, leadOpts) {
    if (!this.condition) return 0;
    
    // Base params
    const pAmp = leadOpts.pAmp !== undefined ? leadOpts.pAmp : (params.pWaveVisible ? 0.15 : 0);
    const qrsAmp = leadOpts.qrsAmp !== undefined ? leadOpts.qrsAmp : params.rAmplitude;
    const tAmp = leadOpts.tAmp !== undefined ? leadOpts.tAmp : params.tAmplitude;
    const stElev = leadOpts.stElev !== undefined ? leadOpts.stElev : (params.stElevation || 0);
    const prDep = leadOpts.prDep !== undefined ? leadOpts.prDep : 0;
    const qAmp = -0.15 * qrsAmp;
    const sAmp = -0.35 * qrsAmp;
    
    let v = 0;
    
    // Wave timings relative to QRS start (which is at u_qrs_start)
    // We align QRS center at u = 0.25s
    const qrsCenter = 0.25;
    const qrsWidth = params.qrsWidth || 0.08;
    const qrsStart = qrsCenter - qrsWidth / 2;
    const qrsEnd = qrsCenter + qrsWidth / 2;
    
    // PR interval determines P wave center
    const prLength = params.prLength || 0.16;
    const pCenter = qrsStart - prLength / 2;
    const pWidth = 0.08;
    
    // QT interval determines T wave center
    const qtLength = params.qtLength || 0.38;
    const tCenter = qrsStart + qtLength - 0.08;
    const tWidth = 0.18;

    // 1. P wave (smooth positive bump)
    if (params.pWaveVisible && u < qrsStart) {
      // PR depression if acute pericarditis
      let pVal = this.bump(u, pCenter, pWidth, pAmp);
      let prDepression = 0;
      if (prDep && u >= pCenter && u < qrsStart) {
        // Linear ramp or smooth bump for PR depression
        prDepression = prDep * Math.sin(Math.PI * (u - pCenter) / (qrsStart - pCenter));
      }
      v += pVal - prDepression;
    }
    
    // 2. QRS Complex
    if (u >= qrsStart && u <= qrsEnd) {
      const qrsProgress = (u - qrsStart) / qrsWidth; // 0 to 1
      
      if (params.deltaWave) {
        // WPW delta wave (slurred upstroke)
        if (qrsProgress < 0.4) {
          // Slow rise
          v += qrsAmp * 0.4 * Math.sin((Math.PI / 2) * (qrsProgress / 0.4));
        } else {
          // Sharp peak
          const peakProgress = (qrsProgress - 0.4) / 0.6; // 0 to 1
          if (peakProgress < 0.3) {
            v += qrsAmp * (0.4 + 0.6 * (peakProgress / 0.3));
          } else {
            v += qrsAmp * (1.0 - 1.0 * ((peakProgress - 0.3) / 0.7));
          }
        }
      } else if (leadOpts.rabbitEars) {
        // RBBB rSR' in V1
        if (qrsProgress < 0.3) {
          // small r
          v += qrsAmp * 0.4 * Math.sin(Math.PI * (qrsProgress / 0.3));
        } else if (qrsProgress >= 0.3 && qrsProgress < 0.6) {
          // S wave
          const sProg = (qrsProgress - 0.3) / 0.3;
          v += -qrsAmp * 0.3 * Math.sin(Math.PI * sProg);
        } else {
          // tall R'
          const r2Prog = (qrsProgress - 0.6) / 0.4;
          v += qrsAmp * 1.2 * Math.sin(Math.PI * r2Prog);
        }
      } else if (leadOpts.notchedR) {
        // LBBB notched R
        if (qrsProgress < 0.4) {
          v += qrsAmp * 0.9 * Math.sin((Math.PI / 2) * (qrsProgress / 0.4));
        } else if (qrsProgress >= 0.4 && qrsProgress < 0.6) {
          // notch dip
          v += qrsAmp * (0.9 - 0.15 * Math.sin(Math.PI * ((qrsProgress - 0.4) / 0.2)));
        } else {
          v += qrsAmp * (0.8 + 0.2 * Math.sin((Math.PI / 2) * ((qrsProgress - 0.6) / 0.4)));
        }
      } else {
        // Standard Q-R-S
        if (qrsProgress < 0.15) {
          // Q wave
          v += qAmp * Math.sin(Math.PI * (qrsProgress / 0.15));
        } else if (qrsProgress >= 0.15 && qrsProgress < 0.5) {
          // R wave upstroke
          const rProg = (qrsProgress - 0.15) / 0.35; // 0 to 1
          v += qAmp + (qrsAmp - qAmp) * rProg;
        } else if (qrsProgress >= 0.5 && qrsProgress < 0.85) {
          // S wave downstroke
          const sProg = (qrsProgress - 0.5) / 0.35;
          v += qrsAmp - (qrsAmp - sAmp) * sProg;
        } else {
          // return to baseline
          const endProg = (qrsProgress - 0.85) / 0.15;
          v += sAmp * (1.0 - endProg);
        }
      }

      // Add slurred S wave for RBBB in lateral leads
      if (leadOpts.slurredS) {
        v += sAmp * 0.6 * Math.sin(Math.PI * qrsProgress);
      }
    }
    
    // 3. ST elevation/depression and T wave
    // In STEMI/Ischemia, J-point to T wave is altered
    if (u > qrsEnd && u <= tCenter + tWidth / 2) {
      const stTTotalDur = (tCenter + tWidth / 2) - qrsEnd;
      const progress = (u - qrsEnd) / stTTotalDur; // 0 to 1
      
      // ST offset starts at stElev and decays to 0 at the end of T wave
      let stVal = stElev * Math.pow(Math.cos((Math.PI / 2) * progress), 1.5);
      
      // T wave bump
      let tVal = this.bump(u, tCenter, tWidth, tAmp);
      
      v += stVal + tVal;
    }
    
    // 4. U wave (if present)
    if (params.uWave && u > tCenter + tWidth / 2) {
      const uCenter = tCenter + tWidth * 1.2;
      const uWidth = 0.12;
      v += this.bump(u, uCenter, uWidth, params.uWave);
    }
    
    return v;
  }

  // Get voltage for chaotic rhythms (VF, Asystole, Torsades)
  getContinuousVoltage(t, params, leadOpts) {
    const id = this.condition.id;
    
    if (id === "vf") {
      // Ventricular Fibrillation: chaotic fast wave
      // Sum of multiple out-of-phase sine waves + noise
      let v = 0.45 * Math.sin(2 * Math.PI * 4.5 * t) + 
              0.35 * Math.sin(2 * Math.PI * 7.8 * t + 1.2) + 
              0.20 * Math.sin(2 * Math.PI * 11.2 * t + 2.5);
      // random minor noise
      v += (Math.random() - 0.5) * 0.15;
      return v;
    }
    
    if (id === "asystole") {
      // Asystole: almost flatline with minor high frequency noise
      return (Math.random() - 0.5) * 0.03 + (Math.sin(2 * Math.PI * 0.2 * t) * 0.01);
    }
    
    if (id === "torsades") {
      // Torsades de Pointes: fast VT where amplitude twists/modulates slowly
      const baseFreq = 4.2; // fast rate
      const modulationFreq = 0.25; // twisting period
      const ampMod = 0.7 + 0.6 * Math.sin(2 * Math.PI * modulationFreq * t);
      let v = ampMod * 1.1 * Math.sin(2 * Math.PI * baseFreq * t);
      // add some wide QRS character
      v += ampMod * 0.3 * Math.sin(2 * Math.PI * baseFreq * 2 * t);
      v += (Math.random() - 0.5) * 0.08;
      return v;
    }
    
    return 0;
  }

  // Pre-generate beat times based on heart rate and rhythm regularity
  getBeatTimesForRange(startTime, endTime, cycleLength, irregularity) {
    if (this.beatTimes.length === 0) {
      // Seed initial beats starting before visible range
      let t = startTime - cycleLength;
      while (t < endTime + cycleLength * 2) {
        this.beatTimes.push(t);
        
        if (irregularity > 0) {
          // AF (irregularly irregular)
          const randFactor = 1.0 + (Math.random() - 0.5) * irregularity;
          t += cycleLength * randFactor;
        } else if (this.condition.droppedBeats === "wenckebach") {
          // PR increases, then QRS drops. Cycle of e.g. 4 beats
          const beatIndex = this.beatTimes.length - 1;
          const cyclePos = beatIndex % 4; // 0, 1, 2, 3
          
          if (cyclePos === 3) {
            // Drop QRS: the next beat is delayed (compensatory/non-conducted P wave)
            t += cycleLength * 1.5;
          } else {
            t += cycleLength;
          }
        } else if (this.condition.droppedBeats === "mobitz2") {
          // Mobitz II: 2:1 or 3:1 block
          const cyclePos = (this.beatTimes.length - 1) % 3; // 3:2 block
          if (cyclePos === 2) {
            // drop QRS
            t += cycleLength * 2.0;
          } else {
            t += cycleLength;
          }
        } else {
          t += cycleLength;
        }
      }
    } else {
      // Append new beats as time moves forward
      let lastBeat = this.beatTimes[this.beatTimes.length - 1];
      while (lastBeat < endTime + cycleLength * 2) {
        let nextBeat;
        if (irregularity > 0) {
          const randFactor = 1.0 + (Math.random() - 0.5) * irregularity;
          nextBeat = lastBeat + cycleLength * randFactor;
        } else if (this.condition.droppedBeats === "wenckebach") {
          const beatIndex = this.beatTimes.length;
          const cyclePos = beatIndex % 4;
          if (cyclePos === 3) {
            nextBeat = lastBeat + cycleLength * 1.5;
          } else {
            nextBeat = lastBeat + cycleLength;
          }
        } else if (this.condition.droppedBeats === "mobitz2") {
          const cyclePos = this.beatTimes.length % 3;
          if (cyclePos === 2) {
            nextBeat = lastBeat + cycleLength * 2.0;
          } else {
            nextBeat = lastBeat + cycleLength;
          }
        } else {
          nextBeat = lastBeat + cycleLength;
        }
        this.beatTimes.push(nextBeat);
        lastBeat = nextBeat;
      }
      
      // Clean up old beats
      while (this.beatTimes[0] < startTime - cycleLength * 2) {
        this.beatTimes.shift();
      }
    }
    
    return this.beatTimes;
  }

  // Calculate ECG voltage at any global time `t`
  getVoltageAtTime(t) {
    const params = this.condition.waveParams;
    const lead = this.options.lead;
    const leadOpts = (params.leads && params.leads[lead]) || {};
    
    // Continuous chaotic rhythms
    if (this.condition.id === "vf" || this.condition.id === "asystole" || this.condition.id === "torsades") {
      return this.getContinuousVoltage(t, params, leadOpts);
    }
    
    const hr = params.heartRate || 75;
    const cycleLength = 60 / hr;
    
    // Get visible beat timestamps
    const startTime = t - 1.0;
    const endTime = t + 5.0;
    const beats = this.getBeatTimesForRange(startTime, endTime, cycleLength, params.irregularity || 0);
    
    let totalV = 0;
    
    // Sum contribution of nearby beats
    for (let i = 0; i < beats.length; i++) {
      const beatStart = beats[i];
      const u = t - beatStart; // time since beat started
      
      // Normal limit for a single beat's active drawing area is ~0.8s
      if (u >= 0 && u <= Math.max(1.0, cycleLength * 1.5)) {
        // Handle Wenckebach progressive PR prolongation
        let beatParams = Object.assign({}, params);
        let beatLeadOpts = Object.assign({}, leadOpts);
        
        if (this.condition.droppedBeats === "wenckebach") {
          const cyclePos = i % 4; // 0, 1, 2 (conducted), 3 (dropped)
          
          if (cyclePos === 3) {
            // Render non-conducted P wave ONLY (no QRS/T)
            beatParams.qrsWidth = 0;
            beatLeadOpts.qrsAmp = 0;
            beatLeadOpts.tAmp = 0;
            beatLeadOpts.stElev = 0;
            // Draw a single standalone P-wave
            totalV += this.getSingleBeatVoltage(u, beatParams, beatLeadOpts);
            continue;
          } else {
            // Progressive PR lengthening: 0.14 -> 0.20 -> 0.26
            beatParams.prLength = 0.14 + cyclePos * 0.06;
          }
        }
        
        if (this.condition.droppedBeats === "mobitz2") {
          const cyclePos = i % 3;
          if (cyclePos === 2) {
            // Non-conducted P-wave
            beatParams.qrsWidth = 0;
            beatLeadOpts.qrsAmp = 0;
            beatLeadOpts.tAmp = 0;
            beatLeadOpts.stElev = 0;
            totalV += this.getSingleBeatVoltage(u, beatParams, beatLeadOpts);
            continue;
          }
        }

        if (this.condition.droppedBeats === "complete") {
          // Complete Heart Block (AV Dissociation)
          // 1. Draw ventricular escape beat (wide QRS/T, no P wave)
          beatParams.pWaveVisible = false;
          let escV = this.getSingleBeatVoltage(u, beatParams, beatLeadOpts);
          totalV += escV;
          continue;
        }
        
        totalV += this.getSingleBeatVoltage(u, beatParams, beatLeadOpts);
      }
    }

    // Complete Heart Block: P-waves are fired regularly at a faster rate (~80 bpm) completely independently!
    if (this.condition.droppedBeats === "complete") {
      const pBpm = 80;
      const pCycle = 60 / pBpm;
      // We superimpose P waves at regular intervals
      const pStartOffset = 0.1; // arbitrary alignment
      const pIndexStart = Math.floor((t - 1.0) / pCycle);
      const pIndexEnd = Math.ceil((t + 1.0) / pCycle);
      
      for (let pIdx = pIndexStart; pIdx <= pIndexEnd; pIdx++) {
        const pTime = pIdx * pCycle + pStartOffset;
        const uP = t - pTime;
        // P-wave width is ~0.08s
        if (uP >= 0 && uP <= 0.12) {
          const pAmp = leadOpts.pAmp !== undefined ? leadOpts.pAmp : 0.15;
          totalV += this.bump(uP, 0.05, 0.08, pAmp);
        }
      }
    }
    
    // Add baseline wander & minor high frequency noise for realism
    let wander = 0.12 * Math.sin(2 * Math.PI * 0.15 * t); // slow drift
    let noise = (Math.random() - 0.5) * 0.03; // tiny muscle noise
    
    // Wavy baseline for Atrial Fibrillation (f-waves)
    if (params.irregularity && !params.pWaveVisible) {
      wander += 0.06 * Math.sin(2 * Math.PI * 6.5 * t) + 
                0.04 * Math.sin(2 * Math.PI * 13.0 * t + 0.5);
    }
    
    // Sawtooth baseline for Atrial Flutter (F-waves)
    if (params.sawtooth) {
      // 300 bpm atrial rate = 5Hz frequency
      const fFreq = 5.0; 
      const phase = (t * fFreq) % 1.0; // sawtooth phase: 0 to 1
      // Convert phase to a sawtooth shape (linear rise, sharp fall)
      const sawVal = 0.20 * (phase - 0.5);
      
      // Mask sawtooth when QRS is active to look natural
      // Find time since nearest ventricular beat
      const nearestBeat = this.beatTimes.reduce((nearest, b) => {
        return Math.abs(t - b) < Math.abs(t - nearest) ? b : nearest;
      }, this.beatTimes[0] || 0);
      
      const qrsDist = Math.abs(t - (nearestBeat + 0.25));
      if (qrsDist > 0.06) {
        totalV += sawVal;
      }
    }

    return totalV + wander + noise;
  }

  // Draw static strip (standard 5-second view)
  renderStatic() {
    this.drawGrid();
    
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    
    const speed = this.options.speed;      // mm/s
    const voltage = this.options.voltage;  // mm/mV
    const pxMm = this.pxPerMm;
    
    // Calculate how many seconds fit on screen
    const pxPerSec = speed * pxMm; // e.g. 25 * 4 = 100 px/s
    const screenDuration = w / pxPerSec; // e.g. 500 / 100 = 5s
    
    // Draw the ECG curve
    ctx.strokeStyle = "#1b1b22"; // dark carbon wave color
    ctx.lineWidth = 1.6;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    
    const stepPx = 1.5; // Draw point every N pixels
    let first = true;
    
    for (let x = 0; x < w; x += stepPx) {
      const t = x / pxPerSec; // time in seconds at this x
      const v = this.getVoltageAtTime(t); // voltage in mV
      
      // Map voltage to y-coordinate
      // Center of screen is 0mV. Upward deflection is negative Y in screen space.
      const y = (h / 2) - (v * voltage * pxMm);
      
      if (first) {
        ctx.moveTo(x, y);
        first = false;
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();

    // Highlight pathological regions if enabled
    if (this.options.highlight) {
      this.drawHighlights(pxPerSec, voltage);
    }
  }

  // Highlight abnormal regions with a colored underlay
  drawHighlights(pxPerSec, voltage) {
    const ctx = this.ctx;
    const h = this.height;
    const id = this.condition.id;
    const pxMm = this.pxPerMm;

    ctx.save();
    
    if (id.startsWith("stemi")) {
      // Highlight ST elevation regions in light red
      ctx.fillStyle = "rgba(239, 68, 68, 0.15)";
      
      // For static view, find beats on screen and highlight J-point to T wave
      const duration = this.width / pxPerSec;
      const hr = this.condition.waveParams.heartRate || 75;
      const cycleLength = 60 / hr;
      const beats = this.getBeatTimesForRange(-1, duration + 1, cycleLength, 0);
      
      beats.forEach(beatStart => {
        const qrsCenter = 0.25;
        const qrsWidth = this.condition.waveParams.qrsWidth || 0.08;
        const jPoint = beatStart + qrsCenter + qrsWidth / 2;
        const tEnd = beatStart + (this.condition.waveParams.qtLength || 0.38) + 0.02;
        
        const startX = jPoint * pxPerSec;
        const endX = tEnd * pxPerSec;
        
        if (startX < this.width && endX > 0) {
          const lead = this.options.lead;
          const isElevatedLead = this.condition.waveParams.leads && this.condition.waveParams.leads[lead] && this.condition.waveParams.leads[lead].stElev > 0.1;
          
          if (isElevatedLead) {
            ctx.fillRect(Math.max(0, startX), 0, Math.min(this.width, endX) - Math.max(0, startX), h);
            
            // Draw a text badge
            ctx.fillStyle = "rgba(220, 38, 38, 0.9)";
            ctx.font = "bold 9px sans-serif";
            ctx.fillText("ST ELEVASI", startX + 2, h / 2 - 45);
            ctx.fillStyle = "rgba(239, 68, 68, 0.15)";
          }
        }
      });
    } else if (id === "av-block-1") {
      // Highlight prolonged PR interval in yellow
      ctx.fillStyle = "rgba(245, 158, 11, 0.15)";
      const duration = this.width / pxPerSec;
      const cycleLength = 60 / 68;
      const beats = this.getBeatTimesForRange(-1, duration + 1, cycleLength, 0);
      
      beats.forEach(beatStart => {
        const pStart = beatStart + 0.25 - 0.08/2 - 0.28; // qrsStart - prLength
        const qrsStart = beatStart + 0.25 - 0.08/2;
        
        const startX = pStart * pxPerSec;
        const endX = qrsStart * pxPerSec;
        
        if (startX < this.width && endX > 0) {
          ctx.fillRect(Math.max(0, startX), 0, Math.min(this.width, endX) - Math.max(0, startX), h);
          
          ctx.fillStyle = "rgba(217, 119, 6, 0.9)";
          ctx.font = "bold 9px sans-serif";
          ctx.fillText("PR MEMANJANG (0.28s)", startX, h / 2 - 40);
          ctx.fillStyle = "rgba(245, 158, 11, 0.15)";
        }
      });
    } else if (id === "atrial-flutter") {
      // Highlight flutter saw-tooth waves in cyan/blue
      ctx.fillStyle = "rgba(6, 182, 212, 0.12)";
      ctx.fillRect(0, 0, this.width, h);
      
      ctx.fillStyle = "rgba(8, 145, 178, 0.9)";
      ctx.font = "bold 9px sans-serif";
      ctx.fillText("GELOMBANG FLUTTER (GIGI GERGAJI)", 30, h - 35);
    } else if (id === "atrial-fibrillation") {
      ctx.fillStyle = "rgba(168, 85, 247, 0.12)";
      ctx.fillRect(0, 0, this.width, h);
      
      ctx.fillStyle = "rgba(147, 51, 234, 0.9)";
      ctx.font = "bold 9px sans-serif";
      ctx.fillText("GELOMBANG FIBRIASI (IRAMA DEBAR TIDAK TERATUR)", 30, h - 35);
    }
    
    ctx.restore();
  }

  // Animation draw loop
  animate() {
    const speed = this.options.speed;      // mm/s
    const voltage = this.options.voltage;  // mm/mV
    const pxMm = this.pxPerMm;
    const pxPerSec = speed * pxMm;
    
    this.drawGrid();
    
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    
    // Draw running ECG curve
    ctx.strokeStyle = "#121216";
    ctx.lineWidth = 1.8;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    
    const stepPx = 1.5;
    let first = true;
    
    // Global time window is [this.time, this.time + screenDuration]
    const screenDuration = w / pxPerSec;
    
    for (let x = 0; x < w; x += stepPx) {
      const t = this.time + (x / pxPerSec);
      const v = this.getVoltageAtTime(t);
      const y = (h / 2) - (v * voltage * pxMm);
      
      if (first) {
        ctx.moveTo(x, y);
        first = false;
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();

    // In animated mode, we advance the window offset
    // Time delta based on ~60fps rendering rate
    const now = performance.now();
    if (this.lastFrameTime) {
      const dt = (now - this.lastFrameTime) / 1000; // in seconds
      // Cap dt to prevent huge jumps when tab is inactive
      this.time += Math.min(0.1, dt);
    }
    this.lastFrameTime = now;
    
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  startAnimation() {
    this.stopAnimation();
    this.lastFrameTime = performance.now();
    this.animate();
  }

  stopAnimation() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    this.lastFrameTime = null;
  }
}

// Export if in Node, otherwise expose as global
if (typeof module !== "undefined" && module.exports) {
  module.exports = { EczRenderer };
}
