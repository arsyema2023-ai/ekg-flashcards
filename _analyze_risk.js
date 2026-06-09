const fs = require('fs');

// Load data
const code = fs.readFileSync('/workspace/ekg-flashcards/flashcard-data.js', 'utf8');
eval(code.replace('const FLASHCARD_DATA', 'globalThis.FLASHCARD_DATA'));

// Load generator
const genCode = fs.readFileSync('/workspace/ekg-flashcards/ecg-ultra.js', 'utf8');
eval(genCode);

// We can't actually render Canvas in Node, but we can analyze params
// to detect potential "flatline" or blank rendering issues
const allCards = [];
for (const m of ['mode1','mode2','mode3'])
  if (globalThis.FLASHCARD_DATA[m])
    globalThis.FLASHCARD_DATA[m].forEach(c => allCards.push({...c, mode:m}));

console.log('=== ANALISIS RISIKO RENDER ===\n');

allCards.forEach(card => {
  const {id, title, ecgParams:p={}} = card;
  const risks = [];

  // Check if asystole-like rendering might happen inadvertently
  // If heartRate is 0 or undefined
  if (p.heartRate === undefined || p.heartRate === 0) {
    if (!p.vf && !p.asystole && !p.torsades)
      risks.push(`heartRate=${p.heartRate} tanpa vf/asystole/torsades — bisa flatline`);
  }

  // If no rAmplitude and no special rhythm
  if (!p.rAmplitude && !p.vf && !p.asystole && !p.torsades && !p.fibrillation && !p.completeBlock)
    risks.push('rAmplitude=0 tanpa special rhythm — bisa flatline');

  // If rAmplitude too small for visible rendering
  if (p.rAmplitude !== undefined && Math.abs(p.rAmplitude) < 0.1 && 
      !p.vf && !p.asystole && !p.torsades && !p.fibrillation)
    risks.push(`rAmplitude=${p.rAmplitude} sangat kecil — hampir flatline`);

  // For AV blocks, check if both P and QRS are suppressed
  if (p.wenckebach || p.mobitz2 || p.completeBlock) {
    if (p.pVisible === false && !p.completeBlock)
      risks.push('AV block tapi pVisible=false — P wave tidak tampak');
  }

  // For PVC, check if the normal beats have proper params
  if (p.pvc && !p.rAmplitude)
    risks.push('PVC tanpa rAmplitude — normal beats mungkin flatline');

  if (risks.length) {
    console.log(`${id.padEnd(8)} ${title.padEnd(45)} RISIKO:`);
    risks.forEach(r => console.log(`  ⚠ ${r}`));
  }
});

// Now do deeper analysis - check generator params for each card
console.log('\n=== CEK PARAMETER GENERATOR ===\n');

// For cards with special conditions, verify generator handles them
const conditionFlags = {
  'wenckebach': 'AV Block Wenckebach',
  'mobitz2': 'AV Block Mobitz II',
  'completeBlock': 'Complete Heart Block',
  'pvc': 'Premature Ventricular Complex',
  'pericarditis': 'Pericarditis',
  'earlyRepol': 'Early Repolarization',
  'hyperkalemia': 'Hiperkalemia',
  'hypokalemia': 'Hipokalemia',
  'lbbb': 'LBBB',
  'rbbb': 'RBBB',
  'wpw': 'WPW',
  'deltaWave': 'Delta Wave',
  'lvh': 'LVH',
  'rvh': 'RVH',
  'vf': 'Ventricular Fibrillation',
  'asystole': 'Asystole',
  'torsades': 'Torsades',
  'qtLong': 'QT Long',
  'fibrillation': 'Fibrillation (AF)',
  'flutter': 'Flutter',
  'sawtooth': 'Sawtooth'
};

allCards.forEach(card => {
  const {id, title, ecgParams:p={}} = card;
  
  // Check if any condition flags are set
  const activeFlags = Object.keys(conditionFlags).filter(k => p[k]);
  const titleLower = title.toLowerCase();
  
  // For special conditions, verify they have the right flags
  if (titleLower.includes('stemi') && !/nstemi|unstable/.test(titleLower)) {
    if (!p.leads || Object.keys(p.leads).length === 0)
      console.log(`${id.padEnd(8)} ${title.padEnd(45)} ⚠️ STEMI tanpa lead overrides`);
  }
  
  // Check active flags
  if (activeFlags.length > 0) {
    console.log(`${id.padEnd(8)} ${title.padEnd(45)} Flags: ${activeFlags.join(', ')}`);
  }
});

console.log('\n=== ANALISIS LENGKAP SELESAI ===');
