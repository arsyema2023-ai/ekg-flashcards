const fs = require('fs');
const code = fs.readFileSync('/workspace/ekg-flashcards/flashcard-data.js', 'utf8');
const patched = code.replace('const FLASHCARD_DATA', 'globalThis.FLASHCARD_DATA');
eval(patched);

const issues = [], allCards = [];
for (const m of ['mode1','mode2','mode3'])
  if (globalThis.FLASHCARD_DATA[m])
    globalThis.FLASHCARD_DATA[m].forEach(c => allCards.push({...c, mode:m}));

console.log(`\n=== VALIDASI MEDIS: ${allCards.length} KARTU ===\n`);

allCards.forEach(card => {
  const {id, title, ecgParams:p={}} = card;
  const problems = [];
  const t = title.toLowerCase();

  // Asystole false positive
  if (p.asystole && !/asystole|flatline|cardiac arrest/.test(t) && id !== 'm1-09')
    problems.push('asystole=true tapi bukan asystole');

  // VF false positive
  if (p.vf && !/vf|ventricular fibrillation|cardiac arrest|pulseless/.test(t))
    problems.push('vf=true tapi bukan VF');

  // Torsades false positive
  if (p.torsades && !/torsades|tdp/.test(t))
    problems.push('torsades=true tapi bukan Torsades');

  // STEMI (bukan NSTEMI!) harus stElevation
  if (/^stemi/i.test(t) || /stemI[^a-z]/.test(title) || /stemi (anterior|inferior|lateral|posterior)/i.test(t)) {
    const leads = p.leads||{};
    let hasElev = false;
    for (const l in leads) if (leads[l].stElevation > 0.1) hasElev = true;
    if (!hasElev) problems.push('STEMI tanpa stElevation');
  }

  // AF harus fibrillation/irregular
  if (/(^|\b)af(| )($|\b|\(|dengan)/i.test(t) || /atrial fibrillation/.test(t)) {
    if (!p.fibrillation && !p.irregular) problems.push('AF tanpa fibrillation flag');
  }

  // CHB harus completeBlock
  if (/(complete heart|derajat 3|chb)/i.test(t) && !p.completeBlock)
    problems.push('CHB tanpa completeBlock');

  // VT (exclude SVT)
  if (/(?<!supra)ventricular tachycardia/.test(t) && (p.qrsDuration||0.08) < 0.12)
    problems.push(`VT tapi QRS=${p.qrsDuration||0.08}s`);

  // LBBB
  if (/\blbbb\b/i.test(t) && !p.lbbb) problems.push('LBBB tanpa lbbb=true');
  // RBBB
  if (/\brbbb\b/i.test(t) && !p.rbbb) problems.push('RBBB tanpa rbbb=true');

  // WPW
  if (/wpw/i.test(t) && !p.wpw && !p.deltaWave) problems.push('WPW tanpa wpw/deltaWave');

  // Perikarditis
  if (/perikarditis/i.test(t) && !p.pericarditis) problems.push('Perikarditis tanpa pericarditis=true');

  // Hiperkalemia
  if (/hiperkalemia|hyperkalemia/i.test(t)) {
    if (!p.hyperkalemia) problems.push('Hiperkalemia tanpa hyperkalemia=true');
    if (!p.tPeaked) problems.push('Hiperkalemia tanpa tPeaked');
  }

  // Hipokalemia
  if (/hipokalemia|hypokalemia/i.test(t)) {
    if (!p.hypokalemia) problems.push('Hipokalemia tanpa hypokalemia=true');
    if (!p.uAmplitude||p.uAmplitude<0.05) problems.push('Hipokalemia tanpa uAmplitude');
  }

  // PVC
  if (/pvc|premature ventricular/i.test(t) && !p.pvc) problems.push('PVC tanpa pvc=true');

  // Early repol
  if (/early repol/i.test(t) && !p.earlyRepol) problems.push('Early repol tanpa earlyRepol=true');

  // AV block
  if (/(av block|wenckebach|mobitz)/i.test(t) && !p.wenckebach && !p.mobitz2 && !p.completeBlock && (p.prInterval||0.16)<0.20)
    problems.push('AV block tanpa flag/pr memanjang');

  // HR kewajaran
  if (p.heartRate && p.heartRate<25 && !p.completeBlock && !p.asystole)
    problems.push(`HR=${p.heartRate} terlalu rendah`);
  if (p.heartRate && p.heartRate>250 && !p.vf && !p.torsades)
    problems.push(`HR=${p.heartRate} terlalu tinggi`);

  // LVH
  if (/lvh|hipertrofi ventrikel kiri/i.test(t) && !p.lvh && !t.includes('hcm'))
    problems.push('LVH tanpa lvh=true');

  if (problems.length) {
    console.log(`${id.padEnd(8)} ${title.padEnd(45)} ${p.heartRate||'?'}bpm`);
    problems.forEach(pr => console.log(`  >> ${pr}`));
    issues.push({id,title,problems});
  }
});

console.log(`\n=== RINGKASAN ===`);
console.log(`Total: ${allCards.length} | Masalah: ${issues.length}/${allCards.length}`);
if (issues.length) {
  console.log(`\nPerlu diperbaiki:`);
  issues.forEach(i => console.log(`  ${i.id.padEnd(8)} ${i.title} (${i.problems.length})`));
  process.exit(1);
} else {
  console.log(`✅ SEMUA KARTU VALID!`);
}
