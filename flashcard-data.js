/**
 * FLASHCARD DATA — 75 Ultra Mega Flashcards
 * Mode 1: Diagnosis EKG (25) | Mode 2: Diagnosis Klinis (25) | Mode 3: Komprehensif (25)
 * SKDI Level 4A/4B/3A — Complete with interpretation, clinical correlation, management
 */
const FLASHCARD_DATA = {

  // ======================== MODE 1: DIAGNOSIS EKG ========================
  mode1: [
    {
      id: 'm1-01',
      title: 'Normal Sinus Rhythm',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 72, prInterval: 0.16, qrsDuration: 0.08, qtInterval: 0.40,
        pVisible: true, pAmplitude: 0.15, rAmplitude: 1.0, sAmplitude: 0.2,
        tAmplitude: 0.3, stElevation: 0, stDepression: 0,
        leads: {}
      },
      interp: {
        irama: 'Sinus ritmis — Gel. P tegak di II, terbalik di aVR, setiap P diikuti QRS',
        rate: '72 x/menit (reguler, RR interval 0.83 detik / ~4 kotak besar)',
        axis: 'Normoaksis (+60°) — QRS positif di I dan aVF',
        prInterval: '0.16 detik (4 kotak kecil) — Normal (120-200 ms)',
        qrsComplex: '0.08 detik (2 kotak kecil) — Sempit, morfologi normal',
        stSegment: 'Isoelektrik — Tidak ada elevasi atau depresi patologis',
        tWave: 'Tegak (upright), asimetris — Normal sesuai lead',
        qtInterval: '0.40 detik — QTc = 0.44 detik (Normal, batas < 0.46 pada wanita)',
        uWave: 'Tidak tampak — Normal',
        ecgDiagnosis: 'Normal Sinus Rhythm (Irama Sinus Normal) dengan EKG dalam batas normal'
      },
      clinical: {
        scenario: 'Laki-laki 25 tahun, medical check-up untuk melamar pekerjaan. Tidak ada keluhan, tidak ada riwayat penyakit. TD: 120/80 mmHg, HR: 74 x/m.',
        correlation: 'Semua parameter EKG dalam batas normal. Menunjukkan sistem konduksi dan otot jantung yang sehat tanpa bukti iskemia, hipertrofi, atau gangguan elektrolit.',
        diagnosis: 'Pasien sehat kardiovaskular',
        differential: 'Tidak ada — EKG normal'
      },
      management: {
        acute: 'Tidak diperlukan tatalaksana medis',
        drugs: 'Tidak diperlukan',
        referral: 'Tidak perlu dirujuk. Edukasi gaya hidup sehat seimbang (diet, olahraga, tidak merokok).'
      },
      osceTemplate: '"EKG ini menunjukkan irama sinus normal dengan frekuensi 72 x/menit, normoaksis, interval PR, QRS, dan QT dalam batas normal. Segmen ST isoelektrik, gelombang T tegak normal. Kesan: EKG dalam batas normal. Pasien tidak memerlukan tatalaksana khusus."'
    },
    {
      id: 'm1-02',
      title: 'Sinus Takikardia',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 125, prInterval: 0.12, qrsDuration: 0.07, qtInterval: 0.30,
        pVisible: true, pAmplitude: 0.15, rAmplitude: 1.0, sAmplitude: 0.2,
        tAmplitude: 0.35, stElevation: 0, stDepression: 0,
        leads: {}
      },
      interp: {
        irama: 'Sinus ritmis — P tegak di II, setiap P diikuti QRS, jarak RR pendek & teratur',
        rate: '125 x/menit (Takikardia — interval RR ~0.48 detik / 2.4 kotak besar)',
        axis: 'Normoaksis (~+60°)',
        prInterval: '0.12 detik (3 kotak kecil) — Normal, memendek fisiologis seiring HR tinggi',
        qrsComplex: '0.07 detik — Sempit, morfologi normal',
        stSegment: 'Isoelektrik — Mungkin terdapat ST depresi ringan non-spesifik akibat takikardia',
        tWave: 'Tegak normal — Mungkin sulit dinilai karena frekuensi cepat',
        qtInterval: '0.30 detik — QTc = 0.43 detik (Normal, memendek fisiologis)',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Sinus Takikardia — Irama sinus dengan frekuensi > 100 x/menit'
      },
      clinical: {
        scenario: 'Wanita 19 tahun, demam 3 hari 39.5°C, mengeluh jantung berdebar. TD: 100/60, HR: 128 x/m, suhu: 39.2°C. Akral hangat, CRT < 2 detik.',
        correlation: 'Sinus takikardia adalah respons fisiologis normal terhadap demam (setiap kenaikan 1°C meningkatkan HR ~10 x/m). Penyebab lain: dehidrasi, anemia, syok, hipertiroid, nyeri, cemas.',
        diagnosis: 'Sinus Takikardia sekunder akibat demam',
        differential: 'SVT (onset mendadak, P tidak jelas, HR >150 sangat teratur), AF (irregularly irregular)'
      },
      management: {
        acute: '1. Kausatif: berikan antipiretik (Parasetamol 500-1000 mg) jika demam\n2. Jika dehidrasi: berikan cairan IV (RL/NaCl 0.9%)\n3. Jangan berikan beta-blocker untuk sinus takikardia fisiologis',
        drugs: 'Parasetamol 500 mg oral/IV jika demam. Koreksi penyebab dasar.',
        referral: 'Tidak perlu dirujuk. Evaluasi ulang HR setelah demam turun.'
      },
      osceTemplate: '"EKG menunjukkan irama sinus dengan frekuensi 125 x/menit, normoaksis, interval dalam batas normal. Kesan: Sinus Takikardia. Ini kemungkinan merupakan respons fisiologis terhadap demam pasien. Saya akan tatalaksana penyebab dasarnya, bukan takikardianya."'
    },
    {
      id: 'm1-03',
      title: 'Sinus Bradikardia Simptomatik',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 42, prInterval: 0.18, qrsDuration: 0.08, qtInterval: 0.46,
        pVisible: true, pAmplitude: 0.12, rAmplitude: 1.0, sAmplitude: 0.2,
        tAmplitude: 0.3, stElevation: 0, stDepression: 0,
        leads: {}
      },
      interp: {
        irama: 'Sinus ritmis — P tegak di II, setiap P diikuti QRS, jarak RR panjang & teratur',
        rate: '42 x/menit (Bradikardia berat — RR interval ~1.43 detik / 7 kotak besar)',
        axis: 'Normoaksis',
        prInterval: '0.18 detik (Normal)',
        qrsComplex: '0.08 detik — Sempit (menunjukkan pacu dari nodus SA/AV, bukan ventrikel)',
        stSegment: 'Isoelektrik',
        tWave: 'Tegak normal',
        qtInterval: '0.46 detik — QTc = 0.39 detik (Normal setelah koreksi)',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Sinus Bradikardia Simptomatik'
      },
      clinical: {
        scenario: 'Laki-laki 72 tahun, pusing, lemas, hampir pingsan saat berdiri sejak 1 minggu. Konsumsi Bisoprolol 5 mg/hari. TD: 100/60, HR: 40 x/m, sadar compos mentis.',
        correlation: 'Bradikardia sinus simptomatik menyebabkan hipoperfusi serebral (pusing, presinkop). Kemungkinan penyebab: efek beta-blocker, sick sinus syndrome, hipotiroid, atau peningkatan tekanan intrakranial.',
        diagnosis: 'Sinus Bradikardia Simptomatik (susp. drug-induced)',
        differential: 'AV block derajat tinggi (CHB), Sick Sinus Syndrome (bradikardia-takikardia)'
      },
      management: {
        acute: '1. HENTIKAN sementara beta-blocker\n2. Jika simptomatik: Atropin Sulfat 0.5-1 mg IV bolus, ulang tiap 3-5 menit (maks 3 mg)\n3. Jika tidak respon: Infus Dopamin 5-20 mcg/kg/menit atau Transcutaneous Pacing\n4. Pasang monitor jantung',
        drugs: 'Atropin 1 mg IV, Dopamin IV, Epinefrin IV if needed',
        referral: 'RUJUK ke Sp.JP untuk evaluasi pemasangan pacemaker permanen dan penyesuaian obat hipertensi.'
      },
      osceTemplate: '"EKG menunjukkan irama sinus dengan frekuensi sangat lambat 42 x/menit. Interval PR, QRS normal. Kesan: Sinus Bradikardia. Pasien simptomatik dengan pusing dan presinkop. Saya akan berikan Atropin 1 mg IV, hentikan beta-blocker, dan rujuk ke kardiologi."'
    },
    {
      id: 'm1-04',
      title: 'Atrial Fibrillation dengan Rapid Ventricular Response',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 145, prInterval: 0, qrsDuration: 0.08, qtInterval: 0.28,
        pVisible: false, rAmplitude: 0.9, sAmplitude: 0.2, tAmplitude: 0.25,
        irregular: true, fibrillation: true, stElevation: 0, stDepression: 0,
        leads: {}
      },
      interp: {
        irama: 'IRREGULARLY IRREGULAR — Tidak ada pola R-R yang sama, tidak ada gelombang P yang jelas',
        rate: '~145 x/menit (RVR — laju ventrikel cepat & tidak teratur)',
        axis: 'Normoaksis atau bervariasi',
        prInterval: 'Tidak dapat dinilai — Tidak ada gelombang P yang jelas',
        qrsComplex: '0.08 detik — Sempit (irama berasal dari supraventrikel)',
        stSegment: 'Isoelektrik — Mungkin sulit dinilai; depresi sekunder mungkin ada akibat takikardia',
        tWave: 'Bervariasi karena R-R tidak teratur',
        qtInterval: 'Sulit dinilai karena variasi R-R',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'ATRIAL FIBRILLATION (AF) dengan Rapid Ventricular Response (RVR)'
      },
      clinical: {
        scenario: 'Perempuan 68 tahun, dada berdebar tidak beraturan sejak 8 jam, sesak ringan. Riwayat hipertensi dan DM. TD: 110/70, HR: 148 x/m (tidak teratur), Napas: 22 x/m.',
        correlation: 'AF adalah aritmia yang paling sering ditemui. Aktivasi atrium kaotik (400-600/menit) tanpa kontraksi efektif, diteruskan ke ventrikel secara tidak teratur. Risiko tinggi pembentukan trombus di left atrial appendage → stroke emboli.',
        diagnosis: 'Atrial Fibrillation (RVR)',
        differential: 'Atrial Flutter with variable block, multifocal atrial tachycardia (MAT)'
      },
      management: {
        acute: '1. NILAI STABILITAS: cek TD, kesadaran, nyeri dada, gagal jantung\n2. TIDAK STABIL → Synchronized Cardioversion 100-200 J\n3. STABIL → Rate Control:\n   - Metoprolol 5 mg IV bolus atau Bisoprolol 2.5-5 mg oral\n   - Atau Diltiazem 10-20 mg IV\n   - Atau Digoksin jika ada gagal jantung\n4. Cek CHA2DS2-VASc score untuk kebutuhan antikoagulasi',
        drugs: 'Metoprolol IV/oral, Digoksin, Heparin/LMWH, Warfarin/DOAC (Rivaroxaban/Apixaban)',
        referral: 'RUJUK ke Sp.JP untuk kardioversi elektif, ekokardiografi, dan manajemen antikoagulasi jangka panjang.'
      },
      osceTemplate: '"EKG menunjukkan irama irregularly irregular tanpa gelombang P yang jelas, dengan laju ventrikel cepat sekitar 145 x/menit, QRS sempit. Kesan: Atrial Fibrillation dengan Rapid Ventricular Response. Pasien stabil, saya akan berikan Metoprolol IV untuk rate control, cek CHA2DS2-VASc score, mulai antikoagulasi, dan rujuk ke kardiologi."'
    },
    {
      id: 'm1-05',
      title: 'Atrial Flutter (Typical 2:1 Block)',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 150, prInterval: 0, qrsDuration: 0.08, qtInterval: 0.28,
        pVisible: false, rAmplitude: 0.9, sAmplitude: 0.2, tAmplitude: 0.25,
        flutter: true, sawtooth: true, irregular: false,
        leads: {}
      },
      interp: {
        irama: 'Reguler — Tampak pola "gigi gergaji" (saw-tooth) terutama di lead II, III, aVF',
        rate: '~150 x/menit (Atrial rate ~300/menit, blok AV 2:1 → Ventrikel 150/menit)',
        axis: 'Sulit dinilai — tumpang tindih dengan flutter waves',
        prInterval: 'Tidak dapat dinilai — digantikan oleh F-waves (flutter waves)',
        qrsComplex: '0.08 detik — Sempit',
        stSegment: 'Sulit dinilai — tertutup F-waves',
        tWave: 'Sulit dibedakan dari F-waves',
        qtInterval: 'Tidak dapat diukur akurat',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'ATRIAL FLUTTER (typical) dengan AV Block 2:1'
      },
      clinical: {
        scenario: 'Laki-laki 55 tahun, dada berdebar sejak 6 jam, stabil hemodinamik. Riwayat PPOK berat. TD: 120/75, HR: 146 x/m (teratur).',
        correlation: 'Atrial flutter adalah aritmia supraventrikular dengan sirkuit re-entry di atrium kanan (isthmus cavotricuspid). Frekuensi atrium tipikal 250-350/menit. Blok AV 2:1 menghasilkan ventrikel rate ~150/menit. Pijat karotis/adenosin bisa memperjelas F-waves dengan memperlambat konduksi AV.',
        diagnosis: 'Typical Atrial Flutter (Cavotricuspid Isthmus-Dependent)',
        differential: 'Sinus Takikardia, SVT, AF dengan respon ventrikel cepat'
      },
      management: {
        acute: '1. Stabil → Rate Control: Beta-blocker atau CCB (Verapamil/Diltiazem)\n2. Kardioversi farmakologis: Ibutilide/Amiodarone\n3. Kardioversi listrik: Synchronized cardioversion 50-100 J (sangat efektif)\n4. Antikoagulasi seperti AF',
        drugs: 'Metoprolol IV, Diltiazem IV, Amiodaron IV, Heparin/LMWH',
        referral: 'RUJUK ke Sp.JP untuk ablasi isthmus cavotricuspid — kuratif!'
      },
      osceTemplate: '"EKG menunjukkan irama takikardia reguler dengan pola gigi gergaji (saw-tooth) di lead II, III, aVF, frekuensi atrial ~300/menit dengan blok AV 2:1 menghasilkan ventrikel rate ~150/menit. Kesan: Atrial Flutter. Saya akan berikan rate control dengan beta-blocker, antikoagulasi, direncanakan kardioversi, dan rujuk untuk ablasi."'
    },
    {
      id: 'm1-06',
      title: 'Supraventricular Tachycardia (AVNRT)',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 185, prInterval: 0, qrsDuration: 0.08, qtInterval: 0.24,
        pVisible: false, rAmplitude: 1.0, sAmplitude: 0.2, tAmplitude: 0.3,
        stDepression: 0.1,
        leads: {}
      },
      interp: {
        irama: 'SANGAT TERATUR (regularly regular) — Onset mendadak, jarak RR persis sama',
        rate: '185 x/menit (Takikardia cepat, tipikal 150-250 x/m)',
        axis: 'Normal atau bervariasi',
        prInterval: 'Tidak dapat dinilai — P wave terpendam dalam QRS atau retrograde (negatif di II, III, aVF)',
        qrsComplex: '0.08 detik — Sempit (mengonfirmasi asal supraventrikel)',
        stSegment: 'Depresi ST ringan non-spesifik — akibat takikardia cepat (demand ischemia)',
        tWave: 'Mungkin inversi ringan pasca episode',
        qtInterval: 'Memendek seiring HR tinggi',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Supraventricular Tachycardia (SVT), kemungkinan besar AV Nodal Reentrant Tachycardia (AVNRT)'
      },
      clinical: {
        scenario: 'Wanita 28 tahun, jantung tiba-tiba berdebar sangat kencang 30 menit lalu setelah minum kopi. Pusing ringan, lemas. TD: 110/70, HR: 190 x/m (teratur). Episode serupa sebelumnya.',
        correlation: 'AVNRT adalah SVT tersering (~60%). Sirkuit re-entry di dalam/sekitar nodus AV (slow-fast pathway). Onset & terminasi mendadak. Manuver Vagal menghambat nodus AV dan dapat memutus sirkuit.',
        diagnosis: 'AV Nodal Reentrant Tachycardia (AVNRT) / PSVT',
        differential: 'Sinus Takikardia (onset bertahap), Atrial Flutter, Atrial Takikardia, AVRT (WPW)'
      },
      management: {
        acute: '1. Manuver Vagal: Modified Valsalva (lebih efektif) atau pijat sinus karotis satu sisi\n2. Jika gagal: ADENOSIN 6 mg IV rapid bolus → flush NaCl 0.9% 10cc\n3. Jika tidak respon → Adenosin 12 mg IV\n4. Jika adenosin kontra: Verapamil 5 mg IV atau Diltiazem 0.25 mg/kg IV\n5. TIDAK STABIL → Synchronized cardioversion 50-100 J',
        drugs: 'Adenosin 6-12 mg IV, Verapamil IV, Diltiazem IV',
        referral: 'Rujuk ke Sp.JP jika episode sering/resisten untuk pertimbangan ablasi.'
      },
      osceTemplate: '"EKG menunjukkan takikardia sangat teratur dengan QRS sempit, frekuensi 185 x/menit tanpa gelombang P yang jelas. Kesan: SVT (AVNRT). Pasien stabil, saya akan lakukan manuver Valsalva. Jika gagal, berikan Adenosin 6 mg IV."'
    },
    {
      id: 'm1-07',
      title: 'Ventricular Tachycardia (Monomorphic)',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 165, prInterval: 0, qrsDuration: 0.16, qtInterval: 0.28,
        pVisible: false, rAmplitude: 1.8, sAmplitude: 0.5, tAmplitude: -0.6,
        lbbb: false, rbbb: false, stElevation: 0, stDepression: 0,
        leads: {}
      },
      interp: {
        irama: 'Reguler — jarak RR teratur, tidak ada hubungan P dengan QRS (AV dissociation)',
        rate: '165 x/menit (Takikardia ventrikel)',
        axis: 'Extreme right axis deviation (NW axis) — atau tidak dapat ditentukan',
        prInterval: 'Tidak ada — AV dissociation (P dan QRS tidak berhubungan, frekuensi P lebih lambat)',
        qrsComplex: '0.16 detik (LEBAR > 120 ms) — Morfologi seragam (monomorfik), bizar',
        stSegment: 'Arah berlawanan dengan QRS (discordant)',
        tWave: 'Inverted/berlawanan dengan QRS kompleks',
        qtInterval: 'QT memanjang (terkait QRS lebar)',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'MONOMORPHIC VENTRICULAR TACHYCARDIA (VT)'
      },
      clinical: {
        scenario: 'Laki-laki 60 tahun, riwayat STEMI inferior 2 tahun lalu. Tiba-tiba kolaps — dada berdebar, pusing berat, keringat dingin. TD: 80/50, HR: 168 x/m. Pasien masih sadar.',
        correlation: 'VT adalah aritmia yang mengancam jiwa. Sirkuit re-entry di ventrikel sekitar jaringan parut infark. AV dissociation adalah tanda diagnostik penting untuk VT. VT dapat berdegenerasi menjadi VF dan henti jantung.',
        diagnosis: 'Monomorphic Ventricular Tachycardia (stable VT)',
        differential: 'SVT with aberrancy (QRS lebar), pre-excited AF, VT (lebih mungkin dengan riwayat infark)'
      },
      management: {
        acute: '1. Cek nadi & stabilitas:\n   - TANPA NADI (Pulseless VT) → Cardiac Arrest Protocol: RJP + Defibrilasi 200J\n   - TIDAK STABIL → Synchronized Cardioversion 100 J (sedasi)\n2. STABIL → Amiodaron HCl 150 mg IV dalam 10 menit, dapat diulang\n3. Koreksi elektrolit (K+, Mg2+)\n4. Identifikasi dan koreksi penyebab (iskemia, elektrolit, obat)',
        drugs: 'Amiodaron 150 mg IV, Lidokain 1-1.5 mg/kg IV, MgSO4',
        referral: 'RUJUK UGD/ICCU → Sp.JP untuk ablasi/ICD'
      },
      osceTemplate: '"EKG menunjukkan takikardia dengan QRS lebar (0.16 detik), frekuensi 165 x/menit, reguler, dengan AV dissociation. Kesan: Ventricular Tachycardia Monomorfik. Pasien stabil dengan TD 80/50. Saya akan berikan Amiodaron 150 mg IV dan persiapkan kardioversi jika memburuk. Rujuk ICCU."'
    },
    {
      id: 'm1-08',
      title: 'Ventricular Fibrillation',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 0, vf: true, pVisible: false, qrsDuration: 0, 
        rAmplitude: 0, tAmplitude: 0,
        leads: {}
      },
      interp: {
        irama: 'CHAOTIC — Tidak ada kompleks QRS, P, atau T yang terorganisir',
        rate: 'Tidak dapat ditentukan (~300-500/menit gelombang fibrilasi kaotik)',
        axis: 'Tidak dapat ditentukan',
        prInterval: 'Tidak dapat dinilai',
        qrsComplex: 'Tidak ada — digantikan oleh gelombang fibrilasi ventrikel yang kacau, amplitudo bervariasi',
        stSegment: 'Tidak dapat dinilai',
        tWave: 'Tidak dapat dinilai',
        qtInterval: 'Tidak dapat dinilai',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'VENTRICULAR FIBRILLATION (VF) — Henti Jantung (Cardiac Arrest)'
      },
      clinical: {
        scenario: 'Laki-laki 55 tahun tiba-tiba tidak sadar di ruang tunggu puskesmas. Tidak ada nadi karotis, tidak bernapas (gasping). Monitor menunjukkan VF.',
        correlation: 'VF adalah aktivitas listrik ventrikel yang kacau total tanpa kontraksi mekanik yang efektif → cardiac output = 0 → henti jantung. Penyebab: iskemia miokard akut, elektrolit, hipoksia, obat pro-aritmia.',
        diagnosis: 'Henti Jantung (Cardiac Arrest) — VF',
        differential: 'VT polimorfik cepat (torsades), asystole, PEA'
      },
      management: {
        acute: '1. AKTIFKAN CODE BLUE / Sistem Resusitasi\n2. RJP segera: 30:2 (kompresi: ventilasi) — kedalaman 5-6 cm, frekuensi 100-120/menit\n3. DEFIBRILASI secepatnya: 200 J (bifasik), dilanjut RJP 2 menit\n4. Berikan Epinefrin 1 mg IV setiap 3-5 menit\n5. Jika tetap VF → Defibrilasi lagi 200 J, berikan Amiodaron 300 mg IV\n6. Cari dan koreksi penyebab reversibel (4H4T)',
        drugs: 'Epinefrin 1 mg IV/IO tiap 3-5 menit, Amiodaron 300 mg IV, Lidokain 1-1.5 mg/kg',
        referral: 'Resusitasi di tempat → Rujuk ke ICU pasca ROSC'
      },
      osceTemplate: '"EKG menunjukkan irama ventrikel yang kacau, tidak ada kompleks QRS yang terorganisir. Kesan: Ventricular Fibrillation. Pasien tidak sadar, tidak ada nadi. Saya akan mulai RJP, segera defibrilasi 200 J, berikan Epinefrin 1 mg IV, dan lanjutkan algoritma cardiac arrest."'
    },
    {
      id: 'm1-09',
      title: 'Asystole (Flatline)',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 0, asystole: true, pVisible: false,
        leads: {}
      },
      interp: {
        irama: 'GARIS DATAR — Tidak ada aktivitas listrik jantung yang terdeteksi',
        rate: '0 — Tidak ada kompleks',
        axis: 'Tidak dapat ditentukan',
        prInterval: 'Tidak dapat dinilai',
        qrsComplex: 'Tidak ada',
        stSegment: 'Tidak ada',
        tWave: 'Tidak ada',
        qtInterval: 'Tidak ada',
        uWave: 'Tidak ada',
        ecgDiagnosis: 'ASYSTOLE — Henti Jantung (Cardiac Arrest) tanpa aktivitas listrik'
      },
      clinical: {
        scenario: 'Pasien tidak sadar, tidak bernapas, tidak ada nadi karotis dan femoralis. EKG menunjukkan garis datar. Konfirmasi: periksa di lead lain, cek kabel, perbesar gain.',
        correlation: 'Asystole adalah henti jantung tanpa aktivitas listrik. Prognosis sangat buruk dibanding VF/VT. Pastikan bukan fine VF (gain terlalu kecil) atau lead/kabel lepas. Konfirmasi minimal di 2 lead berbeda. Penyebab: 4H4T (Hipoksia, Hipo/Hiperkalemia, Hipotermia, Hipovolemia; Tension PTX, Tamponade, Toksin, Tromboemboli).',
        diagnosis: 'Henti Jantung — Asystole',
        differential: 'Fine VF (perbesar gain), lead/kabel lepas, Torsades de Pointes (menyerupai)'
      },
      management: {
        acute: '1. KONFIRMASI: cek lead lain, cek kabel, perbesar gain (pastikan bukan VF halus)\n2. RJP segera 30:2 (100-120/menit)\n3. JANGAN DEFIBRILASI (tidak menguntungkan)\n4. Berikan Epinefrin 1 mg IV/IO bolus segera, ulang tiap 3-5 menit\n5. Pasang akses IV/IO\n6. Pasang airway advanced (ETT atau LMA)\n7. Cari dan koreksi penyebab reversibel (4H4T)',
        drugs: 'Epinefrin 1 mg IV/IO tiap 3-5 menit. Atropin tidak lagi direkomendasikan untuk asystole.',
        referral: 'Resusitasi in-situ. Pertimbangkan terminasi resusitasi jika tidak ada respons setelah 20 menit RPL'
      },
      osceTemplate: '"EKG menunjukkan garis datar (asystole). Saya telah mengonfirmasi di lead II dan V2, serta memeriksa kabel dan gain. Pasien tidak sadar, tidak bernapas, tidak ada nadi. Saya akan mulai RJP 30:2, berikan Epinefrin 1 mg IV segera, dan cari penyebab reversibel (4H4T)."'
    },
    {
      id: 'm1-10',
      title: 'STEMI Anteroseptal Akut',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 95, prInterval: 0.14, qrsDuration: 0.09, qtInterval: 0.36,
        pVisible: true, rAmplitude: 0.8, sAmplitude: 0.4, tAmplitude: 0.5,
        leads: {
          'V1': { stElevation: 0.35, qAmplitude: 0.15, tAmplitude: 0.5 },
          'V2': { stElevation: 0.5, qAmplitude: 0.2, tAmplitude: 0.65 },
          'V3': { stElevation: 0.55, rAmplitude: 0.6, tAmplitude: 0.7 },
          'V4': { stElevation: 0.4, qAmplitude: 0.1, tAmplitude: 0.6 },
          'III': { stDepression: 0.15 },
          'aVF': { stDepression: 0.1 }
        }
      },
      interp: {
        irama: 'Sinus takikardia — P tegak di II, diikuti QRS',
        rate: '95 x/menit (takikardia ringan)',
        axis: 'Normoaksis',
        prInterval: '0.14 detik (Normal)',
        qrsComplex: '0.09 detik — Patologis Q wave di V1-V3 (tanda infark transmural)',
        stSegment: 'ELEVASI SIGNIFIKAN di V1-V4 (septal-anterior). ST depresi resiprokal di II, III, aVF.',
        tWave: 'T tinggi runcing di V2-V4 (hiperakut), dapat berbalik jadi inversi',
        qtInterval: 'QTc normal (0.44 detik)',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'STEMI ANTEROSEPTAL AKUT — Oklusi LAD'
      },
      clinical: {
        scenario: 'Laki-laki 48 tahun, nyeri dada substernal seperti ditindih benda berat sejak 2 jam, menjalar ke lengan kiri, keringat dingin, mual. TD: 140/90, HR: 98 x/m. Riwayat hipertensi & perokok berat.',
        correlation: 'STEMI anteroseptal menandakan oklusi total LAD (Left Anterior Descending) — arteri yang menyuplai sebagian besar ventrikel kiri. Risiko tinggi: syok kardiogenik, aritmia ventrikel, gagal jantung kiri.',
        diagnosis: 'ST-Elevation Myocardial Infarction (STEMI) Anteroseptal — Killip I',
        differential: 'Perikarditis akut (ST elevasi difus tanpa Q patologis), LVH dengan strain, Early repolarization'
      },
      management: {
        acute: '1. MONACO: Morfin IV, Oksigen, Nitrat (ISDN 5 mg SL), Aspirin 160-320 mg (kunyah), Clopidogrel 300-600 mg\n2. Reperfusi SEGERA: Primary PCI (target < 90 menit dari FMC) atau Fibrinolitik (< 30 menit) jika PCI tidak tersedia\n3. Heparin/Enoxaparin, Statin dosis tinggi (Atorvastatin 80 mg)\n4. Beta-blocker (Metoprolol) jika tidak ada kontraindikasi',
        drugs: 'Aspirin, Clopidogrel/Ticagrelor, Morfin, ISDN, Heparin, Atorvastatin, Metoprolol',
        referral: 'RUJUK UGD → CATHLAB → ICCU untuk PCI Primer darurat'
      },
      osceTemplate: '"EKG menunjukkan ST elevasi signifikan di V1-V4 dengan Q patologis di V1-V3 dan ST depresi resiprokal di III-aVF. Kesan: STEMI Anteroseptal Akut. Pasien dalam jendela reperfusi. Saya akan berikan MONACO dan rujuk segera untuk Primary PCI."'
    },
    {
      id: 'm1-11',
      title: 'STEMI Inferior Akut',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 82, prInterval: 0.15, qrsDuration: 0.08, qtInterval: 0.38,
        pVisible: true, rAmplitude: 0.9, sAmplitude: 0.2, tAmplitude: 0.5,
        leads: {
          'II': { stElevation: 0.35, qAmplitude: 0.15, tAmplitude: 0.5 },
          'III': { stElevation: 0.5, qAmplitude: 0.2, tAmplitude: 0.6 },
          'aVF': { stElevation: 0.4, qAmplitude: 0.15, tAmplitude: 0.5 },
          'I': { stDepression: 0.15, tAmplitude: -0.1 },
          'aVL': { stDepression: 0.2, tAmplitude: -0.15 }
        }
      },
      interp: {
        irama: 'Sinus ritmis — Mungkin ada bradikardia karena iskemia nodus AV',
        rate: '82 x/menit',
        axis: 'Normoaksis',
        prInterval: '0.15 detik (Normal — waspada perpanjangan karena iskemia nodus AV)',
        qrsComplex: '0.08 detik — Q patologis di II, III, aVF (infark inferior)',
        stSegment: 'ELEVASI SIGNIFIKAN di II, III, aVF. ST depresi resiprokal di I, aVL.',
        tWave: 'T tinggi runcing di II, III, aVF (fase hiperakut)',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'STEMI INFERIOR AKUT — Oklusi RCA'
      },
      clinical: {
        scenario: 'Laki-laki 56 tahun, nyeri ulu hati menjalar ke punggung, mual, muntah. TD: 110/70, HR: 80 x/m. Riwayat DM dan hipertensi. Nyeri disangka maag oleh pasien.',
        correlation: 'STEMI inferior akibat oklusi RCA (Right Coronary Artery). Sering disertai mual/muntah karena iritasi diafragma. Risiko AV block dan bradikardia. CURIGAI INFARK VENTRIKEL KANAN jika ada hipotensi.',
        diagnosis: 'ST-Elevation Myocardial Infarction (STEMI) Inferior (RCA)',
        differential: 'Perikarditis akut (ST elevasi difus), STEMI posterior (ST depresi V1-V3)'
      },
      management: {
        acute: '1. MONACO (Aspirin 160-320mg + Clopidogrel) + Nitrat hati-hati (kontraindikasi jika curiga RV infarct)\n2. Reperfusi segera: Primary PCI atau Fibrinolitik\n3. Cek EKG lead kanan (V3R, V4R) untuk RV infarct\n4. Jangan berikan Nitrat jika curiga RV infarct (dapat syok)\n5. Monitor AV block → Atropin/Pacing siap siaga',
        drugs: 'Aspirin, Clopidogrel, Morfin, ISDN*, Heparin, Statin. *Kontraindikasi jika RV infarct.',
        referral: 'RUJUK UGD → Primary PCI darurat'
      },
      osceTemplate: '"EKG menunjukkan ST elevasi signifikan di II, III, aVF dengan ST depresi resiprokal di I dan aVL. Kesan: STEMI Inferior Akut. Saya perlu cek lead kanan untuk menyingkirkan RV infarct. Saya akan berikan MONACO (nitrat hati-hati) dan rujuk segera untuk PCI."'
    },
    {
      id: 'm1-12',
      title: 'STEMI Lateral Akut',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 88, prInterval: 0.14, qrsDuration: 0.09, qtInterval: 0.36,
        pVisible: true, rAmplitude: 1.2, sAmplitude: 0.1, tAmplitude: 0.3,
        leads: {
          'I': { stElevation: 0.35, tAmplitude: 0.4, qAmplitude: 0.1 },
          'aVL': { stElevation: 0.3, tAmplitude: 0.35, qAmplitude: 0.08 },
          'V5': { stElevation: 0.4, rAmplitude: 1.6, tAmplitude: 0.5 },
          'V6': { stElevation: 0.3, rAmplitude: 1.4, tAmplitude: 0.4 },
          'II': { stDepression: 0.15 },
          'III': { stDepression: 0.2 },
          'aVF': { stDepression: 0.15 }
        }
      },
      interp: {
        irama: 'Sinus ritmis',
        rate: '88 x/menit',
        axis: 'LAD ringan atau normal',
        prInterval: '0.14 detik (Normal)',
        qrsComplex: '0.09 detik — Q patologis di I, aVL, V5-V6',
        stSegment: 'ST ELEVASI signifikan di I, aVL, V5, V6. Reciprocal ST depresi di II, III, aVF.',
        tWave: 'T tinggi runcing di I, aVL, V5-V6 (fase hiperakut)',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'STEMI LATERAL — Oklusi LCx atau Cabang Diagonal LAD'
      },
      clinical: {
        scenario: 'Wanita 62 tahun, nyeri dada kiri menjalar ke ketiak dan punggung sejak 3 jam. TD: 130/80, HR: 90 x/m. Riwayat DM tidak terkontrol, dislipidemia.',
        correlation: 'STEMI lateral menandakan oklusi Left Circumflex (LCx) atau cabang diagonal pertama LAD. Risiko komplikasi sama dengan STEMI lain.',
        diagnosis: 'ST-Elevation Myocardial Infarction (STEMI) Lateral',
        differential: 'Perikarditis akut, LVH dengan strain (ST depresi, bukan elevasi)'
      },
      management: {
        acute: '1. MONACO (Aspirin 160-320mg + Clopidogrel/Ticagrelor) lengkap\n2. Reperfusi segera: Primary PCI\n3. Beta-blocker, Statin, ACE-inhibitor\n4. Antikoagulasi',
        drugs: 'Aspirin, Ticagrelor/Clopidogrel, Morfin, ISDN, Heparin, Atorvastatin, Metoprolol',
        referral: 'RUJUK CATHLAB untuk PCI Primer'
      },
      osceTemplate: '"EKG menunjukkan ST elevasi di I, aVL, V5, V6 dengan ST depresi resiprokal di II, III, aVF. Kesan: STEMI Lateral. Pasien dalam jendela reperfusi. Tata laksana MONACO dan rujuk segera untuk PCI Primer."'
    },
    {
      id: 'm1-13',
      title: 'STEMI Posterior (Ekuivalen)',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 85, prInterval: 0.15, qrsDuration: 0.08, qtInterval: 0.38,
        pVisible: true, rAmplitude: 1.3, sAmplitude: 0.1, tAmplitude: 0.4,
        leads: {
          'V1': { stDepression: 0.4, rAmplitude: 0.8, tAmplitude: 0.45 },
          'V2': { stDepression: 0.5, rAmplitude: 1.0, tAmplitude: 0.5 },
          'V3': { stDepression: 0.4, rAmplitude: 1.2, tAmplitude: 0.5 },
          'V7': { stElevation: 0.35 },
          'V8': { stElevation: 0.3 },
          'V9': { stElevation: 0.25 },
          'II': { stElevation: 0.1 },
          'III': { stElevation: 0.15 }
        }
      },
      interp: {
        irama: 'Sinus ritmis',
        rate: '85 x/menit',
        axis: 'Normoaksis',
        prInterval: '0.15 detik (Normal)',
        qrsComplex: '0.08 detik — R dominan tinggi di V1-V2 (tanda posterior)',
        stSegment: 'ST DEPRESI DALAM di V1-V3 (cermin dari ST elevasi posterior). Tall T wave di V1-V3.',
        tWave: 'T tinggi tegak di V1-V3 (tanda posterior)',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'STEMI POSTERIOR (Ekuivalen) — Oklusi RCA distal atau LCx — Lihat lead posterior'
      },
      clinical: {
        scenario: 'Laki-laki 60 tahun, nyeri dada substernal. EKG 12 lead standar tidak tampak ST elevasi jelas, namun ada ST depresi dalam V1-V3. Perlu lead posterior (V7-V9).',
        correlation: 'STEMI posterior sering terlewat (missed diagnosis) karena tidak terlihat di 12 lead standar. Ciri khas: ST depresi di V1-V3 + tall R wave + tall T wave. WAJIB rekam lead posterior V7-V9 untuk konfirmasi ST elevasi.',
        diagnosis: 'ST-Elevation Myocardial Infarction (STEMI) Posterior',
        differential: 'NSTEMI (bila tidak direkam lead posterior), Iskemia anterior reversibel'
      },
      management: {
        acute: '1. MONACO (Aspirin + Clopidogrel/Ticagrelor) + reperfusi segera\n2. Rekam lead posterior (V7-V9) SEMUA pasien dengan ST depresi anterior + tall R/T\n3. Tatalaksana seperti STEMI inferior',
        drugs: 'Aspirin, Clopidogrel/Ticagrelor, Morfin, ISDN, Heparin, Statin',
        referral: 'RUJUK CATHLAB segera — STEMI posterior memerlukan reperfusi darurat'
      },
      osceTemplate: '"EKG menunjukkan ST depresi dalam di V1-V3 dengan R wave tinggi dan T wave tinggi. Ini adalah pola cermin (mirror image) STEMI posterior. Saya akan rekam lead posterior V7-V9 untuk konfirmasi. Sementara tatalaksana sebagai STEMI, berikan MONACO dan rujuk untuk Primary PCI."'
    },
    {
      id: 'm1-14',
      title: 'Iskemia / NSTEMI (ST Depresi & T Inversi)',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 92, prInterval: 0.14, qrsDuration: 0.08, qtInterval: 0.38,
        pVisible: true, rAmplitude: 1.0, sAmplitude: 0.2, tAmplitude: -0.35,
        stDepression: 0.2,
        leads: {
          'V5': { stDepression: 0.25, tAmplitude: -0.4 },
          'V6': { stDepression: 0.2, tAmplitude: -0.35 },
          'I': { stDepression: 0.15, tAmplitude: -0.25 },
          'aVL': { stDepression: 0.15, tAmplitude: -0.2 }
        }
      },
      interp: {
        irama: 'Sinus ritmis',
        rate: '92 x/menit (takikardia ringan, bisa karena nyeri/ansietas)',
        axis: 'Normoaksis atau LAD ringan',
        prInterval: '0.14 detik (Normal)',
        qrsComplex: '0.08 detik — Sempit, tidak ada Q patologis',
        stSegment: 'ST DEPRESI horizontal/downsloping 1-2 mm di V5, V6, I, aVL',
        tWave: 'T inversi simetris di lead lateral (V5, V6, I, aVL) — tanda iskemia',
        qtInterval: 'Normal (QTc 0.44)',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'ISKEMIA MIOKARD / NSTEMI — Perubahan ST-T lateral'
      },
      clinical: {
        scenario: 'Perempuan 58 tahun, nyeri dada kiri menjalar ke leher hilang timbul 1 hari, 4 jam terakhir menetap. Riwayat DM dan hipertensi. TD: 150/90, HR: 94 x/m.',
        correlation: 'ST depresi horizontal/downsloping ≥1mm dan T inversi menandakan iskemia miokard subendokardial. Perlu serial Troponin (I/T) untuk membedakan NSTEMI (Troponin positif) dari UAP (negatif). STRATIFIKASI RISIKO (TIMI/GRACE score) penting untuk menentukan urgensi angiografi.',
        diagnosis: 'Non-ST-Elevation Myocardial Infarction (NSTEMI) / Unstable Angina Pectoris (UAP)',
        differential: 'STEMI posterior (ST depresi di V1-V3), LVH with strain, Digitalis effect (ST depresi scooping)'
      },
      management: {
        acute: '1. Oksigen jika SaO2 < 90%\n2. MONACO (tanpa reperfusi segera)\n3. Antikoagulan: Fondaparinux 2.5 mg SC / Enoxaparin 1 mg/kg SC\n4. Stratifikasi risiko: TIMI / GRACE score\n5. High-risk (TIMI ≥4 / GRACE >140) → Angiografi <24 jam\n6. Low-risk → Manajemen konservatif / stress test',
        drugs: 'Aspirin, Clopidogrel/Ticagrelor, ISDN, Fondaparinux/Enoxaparin, Statin, Beta-blocker',
        referral: 'RUJUK ke Sp.JP Rawat Inap ICCU untuk monitoring dan angiografi'
      },
      osceTemplate: '"EKG menunjukkan ST depresi horizontal di V5-V6 dan I-aVL disertai T inversi lateral. Kesan: Iskemia Miokard / NSTEMI. Pasien stabil. Saya akan berikan MONACO, antikoagulan, cek Troponin serial, hitung skor risiko, dan rencanakan angiografi."'
    },
    {
      id: 'm1-15',
      title: 'AV Block Derajat 1',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 68, prInterval: 0.30, qrsDuration: 0.08, qtInterval: 0.42,
        pVisible: true, rAmplitude: 1.0, sAmplitude: 0.2, tAmplitude: 0.3,
        leads: {}
      },
      interp: {
        irama: 'Sinus ritmis — Setiap P diikuti QRS',
        rate: '68 x/menit',
        axis: 'Normoaksis',
        prInterval: '0.30 detik (MEMANJANG > 200 ms = 7 kotak kecil) — Lebih panjang dari normal (120-200 ms)',
        qrsComplex: '0.08 detik — Sempit (mengonfirmasi blok di AV node, bukan infranodal)',
        stSegment: 'Isoelektrik',
        tWave: 'Tegak normal',
        qtInterval: 'QTc 0.45 (Normal)',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'AV BLOCK DERAJAT 1 (First-Degree AV Block) — PR memanjang'
      },
      clinical: {
        scenario: 'Wanita 35 tahun, asimptomatik, ditemukan pada medical check-up. Tidak ada keluhan. Atletis. TD: 110/70, HR: 66 x/m.',
        correlation: 'AV block derajat 1 adalah perlambatan konduksi AV (biasanya di AV node). Sering ditemukan pada atlet, atau terkait vagal tone, obat (beta-blocker, CCB, digoksin), atau penyakit nodus AV. Umumnya BENIGN jika tidak simptomatik.',
        diagnosis: 'AV Block Derajat 1 (First-degree AV Block) — Isolated',
        differential: 'Blok AV derajat 2 Mobitz I (Wenckebach) dengan PR progresif'
      },
      management: {
        acute: '1. Jika asimptomatik: Observasi, tidak perlu tatalaksana khusus\n2. Evaluasi obat-obatan yang memperlambat AV node\n3. Jika simptomatik (lemas, pusing): Evaluasi lebih lanjut untuk kemungkinan sick sinus syndrome atau degenerasi ke derajat lebih tinggi',
        drugs: 'Tidak perlu. Hentikan obat AV blocker jika simptomatik.',
        referral: 'Tidak perlu dirujuk jika asimptomatik dan tidak ada progresi.'
      },
      osceTemplate: '"EKG menunjukkan irama sinus dengan PR interval memanjang 0.30 detik. Setiap P diikuti QRS. Kesan: AV Block Derajat 1. Pasien asimptomatik dan tidak memerlukan tatalaksana khusus. Saya hanya akan observasi."'
    },
    {
            id: 'm1-16',
      title: 'AV Block Derajat 2',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 62, prInterval: 0.18, qrsDuration: 0.08, qtInterval: 0.44,
        pVisible: true, rAmplitude: 1.0, sAmplitude: 0.2, tAmplitude: 0.3,
        wenckebach: true,
        leads: {}
      },
      interp: {
        irama: 'Sinusal — PR progresif memanjang hingga satu QRS drop (phenomenon Wenckebach)',
        rate: '~65 x/menit rata-rata (ada P yang tidak diikuti QRS secara periodik)',
        axis: 'Normoaksis',
        prInterval: 'MEMANJANG PROGRESIF setiap siklus, lalu QRS drop. Pola khas: PR: 0.18→0.26→0.34→drop',
        qrsComplex: '0.08 detik — Sempit (blok di AV NODE)',
        stSegment: 'Isoelektrik',
        tWave: 'Tegak normal',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'AV BLOCK DERAJAT 2 MOBITZ I (WENCKEBACH)'
      },
      clinical: {
        scenario: 'Laki-laki 42 tahun, pusing, lemas, kadang berdebar tidak teratur. Tidak ada sinkop. TD: 120/80. Sedang konsumsi Digoksin dan Bisoprolol.',
        correlation: 'Wenckebach biasanya terjadi di AV node (proksimal). QRS sempit. Sering transient (iskemia inferior, vagal tone, obat). Umumnya lebih jinak daripada Mobitz II. Dapat progresi ke CHB tapi jarang.',
        diagnosis: 'AV Block Derajat 2 Mobitz I (Wenckebach)',
        differential: 'AV Block Derajat 2 Mobitz II (fixed PR, wide QRS, lebih berbahaya), CHB'
      },
      management: {
        acute: '1. Jika ASIMPTOMATIK: Observasi, hentikan obat AV blocker jika ada\n2. Jika SIMPTOMATIK: Atropin 0.5-1 mg IV\n3. Jika tidak respon: Transcutaneous Pacing\n4. Biasanya responsif terhadap Atropin (karena blok di AV node)',
        drugs: 'Atropin IV, hentikan AV blocker',
        referral: 'Rujuk jika simptomatik persisten atau broad QRS (degenerasi ke Mobitz II)'
      },
      osceTemplate: '"EKG menunjukkan PR interval yang memanjang progresif hingga satu QRS drop. Kesan: AV Block Derajat 2 Mobitz I (Wenckebach). QRS sempit menandakan blok di AV node. Pasien simptomatik ringan, saya akan berikan Atropin dan hentikan beta-blocker. Observasi."'
    },
    {
            id: 'm1-17',
      title: 'AV Block Derajat 2',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 55, prInterval: 0.18, qrsDuration: 0.13, qtInterval: 0.44,
        pVisible: true, rAmplitude: 1.0, sAmplitude: 0.3, tAmplitude: 0.3,
        mobitz2: true,
        leads: {}
      },
      interp: {
        irama: 'Sinusal — Ada P yang tidak diikuti QRS secara tiba-tiba, PR KONSTAN sebelum P yang diblok',
        rate: '~50-60 x/menit (tergantung rasio blok, misal 3:2, 2:1)',
        axis: 'Normal atau LAD',
        prInterval: 'KONSTAN (tipikal 0.16-0.20s) — lalu QRS tiba-tiba tidak muncul setelah P',
        qrsComplex: '0.13 detik (LEBAR > 120 ms) — Menandakan blok INFRANODAL (di berkas His-Purkinje)',
        stSegment: 'Isoelektrik',
        tWave: 'Tegak',
        qtInterval: 'QTc normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'AV BLOCK DERAJAT 2 MOBITZ II — QRS Lebar (Blok Infranodal)'
      },
      clinical: {
        scenario: 'Laki-laki 70 tahun, sinkop berulang, pusing berat. Riwayat hipertensi lama. TD: 100/60, HR: 52 x/m (teratur, kadang tidak teratur).',
        correlation: 'Mobitz II adalah blok di INFRANODAL (berkas His/Purkinje) — QRS melebar. Ini berbahaya karena dapat mendadak menjadi blok total (Stokes-Adams attack = sinkop). PROGRESIVITAS TINGGI. Kebalikan dari Wenckebach, ini TIDAK responsif terhadap Atropin.',
        diagnosis: 'AV Block Derajat 2 Mobitz II — dengan QRS Lebar (Blok Infranodal)',
        differential: 'AV Block 2:1 (bisa Mobitz I atau II — cek QRS lebar vs sempit; cek dengan pijat karotis/adenosin), CHB'
      },
      management: {
        acute: '1. PACEMAKER SEGERA — Transcutaneous Pacing atau Transvenous Pacing\n2. Atropin TIDAK efektif (jangan diandalkan)\n3. Hentikan semua AV-blocker\n4. Monitor terus menerus',
        drugs: 'Atropin tidak efektif. Siapkan Dopamin/Epinefrin drip sebagai bridge.',
        referral: 'RUJUK DARURAT ke IGD → ICCU → Pemasangan temporary pacemaker → permanent pacemaker'
      },
      osceTemplate: '"EKG menunjukkan P wave yang tidak diikuti QRS (dropped beat) secara tiba-tiba dengan PR interval konstan. QRS melebar. Kesan: AV Block Derajat 2 Mobitz II. Ini berbahaya karena blok infranodal dengan risiko henti jantung mendadak. Siapkan Transcutaneous Pacing dan rujuk darurat untuk pacemaker."'
    },
    {
      id: 'm1-18',
      title: 'AV Block Derajat 3 (Complete Heart Block)',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 38, prInterval: 0, qrsDuration: 0.14, qtInterval: 0.50,
        pVisible: true, rAmplitude: 0.8, sAmplitude: 0.4, tAmplitude: 0.2,
        completeBlock: true,
        leads: {}
      },
      interp: {
        irama: 'DISSOSIASI AV TOTAL — P dan QRS tidak berhubungan sama sekali (P lebih cepat dari QRS)',
        rate: 'P: ~80-100/menit (Atrial rate), QRS: ~30-45/menit (ventricular escape)',
        axis: 'Tidak dapat ditentukan',
        prInterval: 'BERVARIASI — tidak ada hubungan tetap antara P dan QRS',
        qrsComplex: '0.14 detik (LEBAR) — Irama escape ventrikel (idioventricular rhythm)',
        stSegment: 'Sulit dinilai — baseline tumpang tindih dengan P wave yang tidak terkait',
        tWave: 'Diskordan dengan QRS (berlawanan arah)',
        qtInterval: 'QT memanjang karena HR lambat',
        uWave: 'Mungkin tampak',
        ecgDiagnosis: 'AV BLOCK DERAJAT 3 (COMPLETE HEART BLOCK / CHB) — Disosiasi AV Total'
      },
      clinical: {
        scenario: 'Wanita 75 tahun, pusing berat, lemas luar biasa, pandangan kabur, hampir pingsan. TD: 85/50, HR: 36 x/m (teratur). Riwayat hipertensi dan CAD.',
        correlation: 'CHB adalah kegawatdaruratan kardiovaskular. Tidak ada konduksi dari atrium ke ventrikel → ventrikel menggunakan escape rhythm sendiri. Bradikardia berat → hipoperfusi (sinkop, syok kardiogenik, gagal jantung).',
        diagnosis: 'Complete Heart Block (AV Block Derajat 3) dengan Irama Escape Ventrikel',
        differential: 'Sinus bradikardia berat, AV block 2:1 atau Mobitz II (sulit dibedakan jika 2:1 konstan)'
      },
      management: {
        acute: '1. SEGERA: Transcutaneous Pacing (TCP)\n2. Sementara: Atropin 1 mg IV (mungkin tidak efektif)\n3. Infus Dopamin 5-20 mcg/kg/menit atau Epinefrin 2-10 mcg/menit\n4. Hentikan semua AV blocker\n5. Pasang temporary transvenous pacemaker → permanent pacemaker',
        drugs: 'Atropin, Dopamin IV, Epinefrin IV. Obat-obatan hanya sebagai bridge ke pacing.',
        referral: 'RUJUK DARURAT ke ICCU → Pemasangan Temporary Pacemaker → Permanent Pacemaker dual-chamber'
      },
      osceTemplate: '"EKG menunjukkan P wave dan QRS tidak berhubungan sama sekali, dengan QRS lebar dan lambat sekitar 38 x/menit. Kesan: Complete Heart Block (AV Block Derajat 3). Pasien simptomatik dengan hipotensi. Saya akan pasang Transcutaneous Pacing segera, berikan Dopamin IV, dan rujuk darurat untuk pacemaker definitif."'
    },
    {
      id: 'm1-19',
      title: 'Right Bundle Branch Block (RBBB)',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 75, prInterval: 0.16, qrsDuration: 0.12, qtInterval: 0.42,
        pVisible: true, rAmplitude: 0.8, sAmplitude: 0.3, tAmplitude: -0.3,
        rbbb: true,
        leads: {
          'V1': { rAmplitude: 0.3, sAmplitude: 0.5, rabbitEars: true },
          'V2': { sAmplitude: 0.8 },
          'I': { sAmplitude: 0.4, slurredS: true },
          'V6': { sAmplitude: 0.3, slurredS: true }
        }
      },
      interp: {
        irama: 'Sinus ritmis',
        rate: '75 x/menit',
        axis: 'Normoaksis',
        prInterval: '0.16 detik (Normal)',
        qrsComplex: '0.12 detik (LEBAR ≥ 120 ms) — Pola rSR\' (rabbit ears) di V1-V2, S lebar di I, aVL, V6',
        stSegment: 'Diskordan dengan QRS — ST depresi ringan di V1 dengan T inversi (normal varian RBBB)',
        tWave: 'T inversi di V1, tegak di V5-V6',
        qtInterval: 'Normal (QTc 0.44)',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'RIGHT BUNDLE BRANCH BLOCK (RBBB) — QRS ≥ 120 ms, pola rSR\' V1'
      },
      clinical: {
        scenario: 'Laki-laki 60 tahun, check-up rutin. Tidak ada keluhan jantung. Tanpa riwayat penyakit jantung. EKG ditemukan insidental.',
        correlation: 'RBBB adalah keterlambatan konduksi di cabang berkas kanan. Dapat ditemukan pada individu sehat (varian normal), atau terkait penyakit jantung struktural (PJK, hipertensi pulmonal, PE, kardiomiopati). RBBB baru pada pasien sesak akut → CURIGAI EMBOLI PARU.',
        diagnosis: 'Right Bundle Branch Block (RBBB) — Insidental',
        differential: 'LVH, WPW tipe A, RVH, Infark lateral'
      },
      management: {
        acute: '1. Jika asimptomatik & tidak ada penyakit jantung: TIDAK PERLU TATALAKSANA\n2. Jika baru (de novo) + sesak akut → curigai emboli paru\n3. Evaluasi penyakit jantung struktural dengan ekokardiografi\n4. Tidak memerlukan pacemaker jika tanpa AV block',
        drugs: 'Tidak ada.',
        referral: 'Jika asimptomatik dan EKG lain normal: tidak perlu rujukan. Jika baru onset: rujuk untuk ekokardiografi.'
      },
      osceTemplate: '"EKG menunjukkan QRS lebar 0.12 detik dengan pola rSR\' (rabbit ears) di V1 dan S lebar di I dan V6. Kesan: Right Bundle Branch Block. Pasien asimptomatik tanpa penyakit jantung. Tidak memerlukan tatalaksana khusus."'
    },
    {
      id: 'm1-20',
      title: 'Left Bundle Branch Block (LBBB)',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 72, prInterval: 0.16, qrsDuration: 0.14, qtInterval: 0.44,
        pVisible: true, rAmplitude: 1.5, sAmplitude: 0.1, tAmplitude: -0.4,
        lbbb: true,
        leads: {
          'V1': { rAmplitude: 0.2, sAmplitude: 1.5, tAmplitude: -0.5 },
          'V2': { sAmplitude: 1.2 },
          'V5': { rAmplitude: 1.8, notchedR: true, tAmplitude: -0.3 },
          'V6': { rAmplitude: 1.6, notchedR: true, tAmplitude: -0.3 },
          'I': { rAmplitude: 1.2, tAmplitude: -0.2 },
          'aVL': { rAmplitude: 1.0, tAmplitude: -0.2 }
        }
      },
      interp: {
        irama: 'Sinus ritmis',
        rate: '72 x/menit',
        axis: 'LAD ringan atau normal',
        prInterval: '0.16 detik (Normal)',
        qrsComplex: '0.14 detik (LEBAR ≥ 120 ms) — R lebar/notched di I, aVL, V5-V6; dominan S di V1-V2',
        stSegment: 'Diskordan dengan QRS (berlawanan arah) — Normal pada LBBB',
        tWave: 'Inverted di lead dengan R dominan (I, V5-V6) — Diskordan normal',
        qtInterval: 'Memanjang seiring QRS lebar (QTc dapat 0.48)',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'LEFT BUNDLE BRANCH BLOCK (LBBB) — QRS ≥ 120 ms, R notched di V5-V6'
      },
      clinical: {
        scenario: 'Laki-laki 70 tahun, sesak napas saat aktivitas. Riwayat hipertensi lama dan CAD. TD: 150/90. Pasien memakai pacu jantung? Tidak.',
        correlation: 'LBBB sering terkait penyakit jantung struktural (HT, CAD, kardiomiopati). LBBB BARU pada pasien nyeri dada = STEMI ekuivalen (Sgarbossa criteria). Dapat menimbulkan disinkroni ventrikel → penurunan EF.',
        diagnosis: 'Left Bundle Branch Block (LBBB) — Kemungkinan terkait hipertensi/CAD',
        differential: 'Pacu ventrikel kanan, LVH dengan strain (R tinggi tanpa notching)'
      },
      management: {
        acute: '1. Jika BARU + nyeri dada: EVALUASI STEMI (gunakan Sgarbossa criteria atau Smith-modified)\n2. Ekokardiografi untuk menilai fungsi ventrikel\n3. Jika EF ≤ 35% + LBBB + QRS ≥ 150 ms → pertimbangkan CRT (Cardiac Resynchronization Therapy)',
        drugs: 'Tidak ada untuk LBBB sendiri. Tata laksana penyakit dasar (HT, CAD, CHF).',
        referral: 'Rujuk ke Sp.JP untuk ekokardiografi dan evaluasi kemungkinan pacing (CRT)'
      },
      osceTemplate: '"EKG menunjukkan QRS lebar 0.14 detik dengan R lebar/notched di V5, V6, I, aVL dan S dominan di V1. Kesan: Left Bundle Branch Block. Pasien normotensi tanpa nyeri dada. Saya akan rujuk untuk ekokardiografi menilai fungsi ventrikel."'
    },
    {
      id: 'm1-21',
      title: 'Premature Ventricular Complex (PVC/VES)',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 72, prInterval: 0.16, qrsDuration: 0.14, qtInterval: 0.42,
        pVisible: true, rAmplitude: 0.9, sAmplitude: 0.2, tAmplitude: -0.4,
        pvc: true,
        leads: {}
      },
      interp: {
        irama: 'Sinus ritmis dengan kompleks prematur QRS lebar yang muncul lebih awal',
        rate: '72 x/menit (sinus) — PVC muncul prematur mengganggu ritme basal',
        axis: 'Bervariasi — PVC biasanya memiliki aksis berbeda dari QRS sinus',
        prInterval: 'Normal untuk QRS sinus — Tidak ada P sebelum PVC (retrograde P mungkin ada)',
        qrsComplex: '0.14 detik (LEBAR) — Morfologi bizar/tidak biasa, berbeda dari QRS normal (bigemini, trigemini, couplet, triplet)',
        stSegment: 'Diskordan dengan QRS PVC — Tidak bisa dinilai untuk iskemia',
        tWave: 'Inverted/berlawanan arah dengan kompleks PVC',
        qtInterval: 'Normal untuk QRS sinus',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'PREMATURE VENTRICULAR COMPLEX (PVC/VES) — Aritmia ventrikel jinak'
      },
      clinical: {
        scenario: 'Laki-laki 35 tahun, kadang merasa dada berdebar tidak teratur "seperti loncat". Tidak ada nyeri dada, sinkop, atau sesak. Minum kopi berlebihan. TD: 120/80.',
        correlation: 'PVC adalah depolarisasi prematur dari fokus ektopik ventrikel. Umum dan sering jinak. Frekuensi meningkat dengan kafein, alkohol, stress, kurang tidur. Frekuensi >20% atau simptomatik perlu evaluasi. Ventricular couplet/triplet = non-sustained VT.',
        diagnosis: 'Premature Ventricular Complex (PVC) — Bigemini',
        differential: 'PAC (P early, QRS sempit), aberrancy SVT, ventricular parasystole'
      },
      management: {
        acute: '1. Jika JINAK (tanpa penyakit jantung struktural): tenangkan pasien, kurangi kafein/alkohol\n2. Jika SIMPTOMATIK mengganggu: Beta-blocker (Bisoprolol 2.5-5 mg) atau CCB\n3. Jika FREKUEN TINGGI (>20%): Evaluasi dengan ekokardiografi, Holter 24 jam\n4. Jika ada sinkop/riwayat SCD → rujuk Sp.JP',
        drugs: 'Bisoprolol, Metoprolol, atau Verapamil jika simptomatik',
        referral: 'Rujuk ke Sp.JP jika frekuen (>10.000/24jam), simptomatik berat, atau ada penyakit jantung struktural.'
      },
      osceTemplate: '"EKG menunjukkan irama sinus dengan kompleks QRS lebar prematur yang berbeda morfologinya dari QRS sinus, tanpa P wave sebelumnya. Kesan: Premature Ventricular Complex. Pada pasien sehat tanpa penyakit jantung, ini jinak. Saya akan edukasi untuk mengurangi kafein dan observasi."'
    },
    {
      id: 'm1-22',
      title: 'Hiperkalemia Berat',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 52, prInterval: 0.22, qrsDuration: 0.14, qtInterval: 0.48,
        pVisible: true, pAmplitude: 0.05, rAmplitude: 0.7, sAmplitude: 0.5,
        tAmplitude: 1.2, tPeaked: true, hyperkalemia: true,
        leads: {}
      },
      interp: {
        irama: 'Sinus bradikardia atau irama junctional — P wave datar/menghilang progresif',
        rate: '52 x/menit (Bradikardia)',
        axis: 'Normal atau LAD',
        prInterval: '0.22 detik (MEMANJANG)',
        qrsComplex: '0.14 detik (MELEBAR) — dapat menjadi sine wave pattern',
        stSegment: 'Menyatu dengan T tinggi — ST depresi mungkin ada',
        tWave: 'T TINGGI RUNCING (tall tented T) — simetris, sempit, amplitudo > 5mm di lead prekordial',
        qtInterval: 'QT pendek relatif (karena T tinggi/sempit)',
        uWave: 'Tidak tampak (hilang pada hiperkalemia)',
        ecgDiagnosis: 'HIPERKALEMIA BERAT — T tinggi runcing, PR memanjang, QRS melebar'
      },
      clinical: {
        scenario: 'Pasien gagal ginjal kronik (CKD stage 5) tidak rutin cuci darah. Lemas, pusing, hampir pingsan. TD: 100/60, HR: 55 x/m. Lab: K+ 7.2 mEq/L.',
        correlation: 'Hiperkalemia adalah EMERGENSI yang dapat menyebabkan henti jantung. Perubahan EKG progesif: T tinggi → PR memanjang → P hilang → QRS melebar → sine wave → VF/asystole. EKG TIDAK berkorelasi linear dengan kadar K+ (ada pasien dengan K+ 6.5 tanpa perubahan EKG yang jelas).',
        diagnosis: 'Hiperkalemia Berat — Emergensi Elektrolit',
        differential: 'Perikarditis akut (ST elevasi difus), STEMI (T tinggi hiperakut), Early repolarization'
      },
      management: {
        acute: '1. PROTEKSI JANTUNG: Kalsium Glukonas 10% 10-30 mL IV (atau CaCl) — bekerjalah cepat dalam 1-3 menit\n2. SHIFT INTRASEL: Insulin 10 unit IV + Dekstrosa 40-50 gram IV (atau 25 gram jika DM), lalu Nebulizer Salbutamol\n3. ELIMINASI: Kayexalate, Loop diuretik, atau hemodialisis darurat\n4. Hentikan semua K+ sparing drugs',
        drugs: 'Ca glukonas 10% 10-30mL IV, Insulin 10 unit IV, Dekstrosa 40g IV, Salbutamol neb, Furosemid IV',
        referral: 'RUJUK DARURAT ke IGD → Dialisis emergensi'
      },
      osceTemplate: '"EKG menunjukkan tall tented T wave simetris di prekordial, PR interval memanjang, QRS melebar. Kesan: Hiperkalemia, emergensi elektrolit. Saya akan berikan Kalsium Glukonas IV untuk proteksi jantung, lalu Insulin+Dekstrosa dan rujuk untuk dialisis darurat."'
    },
    {
      id: 'm1-23',
      title: 'Hipokalemia',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 85, prInterval: 0.14, qrsDuration: 0.09, qtInterval: 0.44,
        pVisible: true, rAmplitude: 1.0, sAmplitude: 0.2, tAmplitude: 0.1,
        tFlat: true, stDepression: 0.1, uAmplitude: 0.15,
        hypokalemia: true,
        leads: {}
      },
      interp: {
        irama: 'Sinus takikardia atau irama sinus normal',
        rate: '85 x/menit',
        axis: 'Normoaksis',
        prInterval: '0.14 detik (Normal atau sedikit memanjang)',
        qrsComplex: '0.09 detik — Dapat sedikit melebar',
        stSegment: 'ST DEPRESI ringan (1-2mm)',
        tWave: 'T DASAR/FLAT (flattening) atau T negatif kecil — amplitudo berkurang',
        qtInterval: 'QT memanjang (karena T flat, sulit menentukan akhir T)',
        uWave: 'GELOMBANG U MENONJOL (prominent U wave) — amplitudo > 1mm atau > 50% T wave',
        ecgDiagnosis: 'HIPOKALEMIA — ST depresi, T flat, prominent U wave'
      },
      clinical: {
        scenario: 'Wanita 40 tahun, muntah-muntah dan diare 3 hari, lemas, kram otot. Konsumsi diuretik (HCT) untuk hipertensi. TD: 110/70, HR: 88 x/m.',
        correlation: 'Hipokalemia menyebabkan perubahan repolarisasi: depresi ST, T flat, dan U wave menonjol (paling khas di V2-V3). Penyebab: diuretik, diare/muntah, aldosteronisme. Hipokalemia berat (<2.5) dapat menyebabkan aritmia ventrikel (Torsades).',
        diagnosis: 'Hipokalemia — Gangguan Elektrolit',
        differential: 'Digitalis effect (ST depresi scooping, tanpa U prominent), QT prolongation, iskemia miokard'
      },
      management: {
        acute: '1. Koreksi K+ oral atau IV\n2. Jika K+ ≥ 3.0 dan asimptomatik: KCL oral 40-80 mEq/hari\n3. Jika K+ < 3.0 atau simptomatik: KCL IV (20-40 mEq dalam 100mL NaCl per jam)\n4. Jangan berikan koreksi K+ IV lebih dari 10 mEq/jam tanpa monitoring\n5. Cek dan koreksi Mg2+ juga',
        drugs: 'KCL oral/IV, MgSO4 IV jika hipomagnesemia',
        referral: 'Rujuk jika K+ < 2.5 atau dengan aritmia/kelumpuhan.'
      },
      osceTemplate: '"EKG menunjukkan ST depresi ringan, gelombang T flat, dan gelombang U menonjol terutama di V2-V3. Kesan: Hipokalemia. Pasien dengan riwayat diare dan diuretik. Saya akan berikan KCL oral dan rencanakan koreksi bertahap."'
    },
    {
      id: 'm1-24',
      title: 'Perikarditis Akut',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 98, prInterval: 0.12, qrsDuration: 0.08, qtInterval: 0.34,
        pVisible: true, rAmplitude: 0.9, sAmplitude: 0.2, tAmplitude: 0.3,
        pericarditis: true,
        leads: {
          'I': { stElevation: 0.2, prDepression: 0.05 },
          'II': { stElevation: 0.25, prDepression: 0.08 },
          'III': { stElevation: 0.15 },
          'aVL': { stElevation: 0.15, prDepression: 0.05 },
          'aVF': { stElevation: 0.2 },
          'V2': { stElevation: 0.3, prDepression: 0.08 },
          'V3': { stElevation: 0.35, prDepression: 0.08 },
          'V4': { stElevation: 0.3, prDepression: 0.05 },
          'V5': { stElevation: 0.2 },
          'V6': { stElevation: 0.15 },
          'aVR': { stDepression: 0.3 }
        }
      },
      interp: {
        irama: 'Sinus takikardia — HR meningkat karena nyeri/inflamasi',
        rate: '98 x/menit (takikardia ringan)',
        axis: 'Normoaksis',
        prInterval: '0.12 detik (perbatasan pendek)',
        qrsComplex: '0.08 detik — Sempit, TIDAK ada Q patologis (membedakan dari STEMI)',
        stSegment: 'ST ELEVASI DIFUS di banyak lead (I, II, aVL, aVF, V2-V6) — tanpa Q patologis',
        tWave: 'Tegak — dapat menjadi inversi beberapa hari kemudian',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'PERIKARDITIS AKUT — ST elevasi difus + PR depresi (terutama di aVR)'
      },
      clinical: {
        scenario: 'Laki-laki 30 tahun, nyeri dada tajam menusuk, memburuk saat menarik napas dalam dan berbaring, membaik duduk condong ke depan. Demam 38°C, riwayat infeksi saluran napas 1 minggu sebelumnya.',
        correlation: 'EKG perikarditis memiliki 4 stadium. Stadium I: ST elevasi difus + PR depresi. PR depresi SANGAT SPESIFIK untuk perikarditis (membedakan dari STEMI). Nyeri bersifat pleuritik (posisional). Waspadai tamponade jantung.',
        diagnosis: 'Perikarditis Akut (Stadium I) — kemungkinan viral',
        differential: 'STEMI (ST elevasi regional, Q patologis, resiprokal), Early repolarization (tanpa PR depresi), LVH'
      },
      management: {
        acute: '1. NSAID: Ibuprofen 600-800 mg tid atau Aspirin 500-1000 mg tid\n2. Kolkisin 0.5 mg bid (mengurangi rekurensi)\n3. Jika tidak respon atau kontraindikasi NSAID: Kortikosteroid (Prednison 0.5-1 mg/kg)\n4. Tirah baring (monitor aktivitas)\n5. Evaluasi: Ekokardiografi (cari efusi perikardial/tamponade)',
        drugs: 'Ibuprofen, Aspirin, Kolkisin, Prednison',
        referral: 'Rujuk ke Sp.JP jika: efusi besar, tamponade, tidak respon terapi, atau rekuren.'
      },
      osceTemplate: '"EKG menunjukkan ST elevasi difus di lead I, II, aVL, aVF, V2-V6 disertai PR depresi di aVR. Tidak ada Q patologis atau ST resiprokal. Kesan: Perikarditis Akut. Sesuai dengan nyeri dada pleuritik pasien. Saya akan berikan Ibuprofen dan Kolkisin."'
    },
    {
      id: 'm1-25',
      title: 'Torsades de Pointes (Long QT — VT Polimorfik)',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 0, torsades: true, pVisible: false,
        leads: {}
      },
      interp: {
        irama: 'CHAOTIC dengan twisting pattern — QRS melebar dengan amplitudo berputar mengelilingi baseline',
        rate: '~200-250/menit — Takikardia ventrikel cepat',
        axis: 'Berubah-ubah (twisting)',
        prInterval: 'Tidak dapat dinilai',
        qrsComplex: 'LEBAR — morfologi berubah-ubah (polimorfik), amplitudo naik-turun',
        stSegment: 'Tidak dapat dinilai',
        tWave: 'Tidak dapat dibedakan dari QRS',
        qtInterval: 'QT MEMANJANG pada irama dasar sebelum episode (kunci diagnosis!)',
        uWave: 'Mungkin prominent (konteks hipokalemia)',
        ecgDiagnosis: 'TORSADES DE POINTES (TdP) — VT Polimorfik dengan QT memanjang dasar'
      },
      clinical: {
        scenario: 'Wanita 45 tahun, epilepsi konsumsi fenitoin, diare kronis. Tiba-tiba tidak sadar. Setelah resusitasi, irama sinus kembali dengan QTc 0.56 detik.',
        correlation: 'Torsades = VT polimorfik dengan "twisting of points". Hampir selalu didahului QT memanjang (acquired: obat, elektrolit; congenital: Long QT Syndrome). Obat pemanjang QT yang sering: antiaritmia kelas IA/III, antipsikotik, antibiotik (makrolida, fluoroquinolon), antihistamin, antijamur.',
        diagnosis: 'Torsades de Pointes (VT Polimorfik) — sekunder long QT',
        differential: 'VF (tanpa twisting pattern, tanpa QT panjang dasar), VT monomorfik'
      },
      management: {
        acute: '1. Jika masih TdP/TANPA NADI: DEFIBRILASI 200 J (tidak sinkron) + RJP\n2. Jika residif/berulang: MgSO4 2 gram IV bolus (dalam 1-2 menit) — OBAT PILIHAN!\n3. Koreksi K+ > 4.5 mEq/L\n4. Hentikan semua obat pemanjang QT\n5. Tingkatkan HR: Isoproterenol IV atau Transcutaneous Pacing 100/menit (memperpendek QT)\n6. Setelah stabil → evaluasi penyebab long QT',
        drugs: 'MgSO4 2g IV, KCL IV, Isoproterenol IV, Lidokain IV',
        referral: 'RUJUK DARURAT ke ICCU → monitoring, koreksi penyebab, pertimbangkan ICD'
      },
      osceTemplate: '"EKG menunjukkan takikardia ventrikel polimorfik dengan pola twisting (berputar) — khas Torsades de Pointes. Pada irama sinus sebelumnya tampak QT memanjang. Saya akan berikan MgSO4 2 gram IV bolus, koreksi kalium, hentikan obat pemanjang QT, dan rujuk ke ICCU."'
    }
  ],

  // ======================== MODE 2: DIAGNOSIS KLINIS ========================
  mode2: [
    {
      id: 'm2-01',
      title: 'ACS — STEMI Anterior dengan Syok Kardiogenik',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 110, prInterval: 0.12, qrsDuration: 0.09, qtInterval: 0.32,
        pVisible: true, rAmplitude: 0.8, sAmplitude: 0.4, tAmplitude: 0.5,
        leads: {
          'V1': { stElevation: 0.35 },
          'V2': { stElevation: 0.55 },
          'V3': { stElevation: 0.6 },
          'V4': { stElevation: 0.45 },
          'V5': { stElevation: 0.25 },
          'III': { stDepression: 0.2 },
          'aVF': { stDepression: 0.15 }
        }
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '110 x/menit',
        axis: 'Normoaksis',
        prInterval: '0.12 detik',
        qrsComplex: '0.09 detik — Q patologis V1-V3',
        stSegment: 'ST elevasi signifikan V1-V5 (extensive anterior) dengan reciprocal depression inferior',
        tWave: 'Hiperakut di V2-V4',
        qtInterval: 'QTc normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'STEMI Anterior Extensive — Oklusi LAD proksimal'
      },
      clinical: {
        scenario: 'Laki-laki 55 tahun, nyeri dada hebat 1 jam, sesak berat, keringat dingin, tidak bisa berbaring. TD: 80/50 mmHg, HR: 112 x/m, RR: 28 x/m, SpO2: 88%. Ronki basah di kedua paru. JVP meningkat.',
        correlation: 'Syok kardiogenik akibat kerusakan miokard luas (>40% LV). Kombinasi STEMI anterior luas + hipotensi + ronki basah = syok kardiogenik (Killip IV). Mortalitas tinggi.',
        diagnosis: 'STEMI Anterior Extensive + Syok Kardiogenik (Killip IV)',
        differential: 'STEMI + Shock distributif, STEMI + RV infarct (JVP meningkat, paru bersih), PE masif, Tamponade'
      },
      management: {
        acute: '1. MONACO (Aspirin + Clopidogrel, nitrat hati-hati karena hipotensi)\n2. REVASKULARISASI DARURAT: Primary PCI (I-C) atau CABG emergensi\n3. Vasopresor: Norepinefrin (lini pertama syok kardiogenik)\n4. Inotropik: Dobutamin\n5. Ventilasi mekanik jika perlu\n6. IABP (Intra-Aortic Balloon Pump) pada gagal refrakter',
        drugs: 'Aspirin, Ticagrelor, Heparin, Norepinefrin IV, Dobutamin IV, Furosemid (untuk edema paru)',
        referral: 'RUJUK DARURAT ke CATHLAB untuk PCI Primer. Jika tidak ada fasilitas, beri fibrinolitik + rujuk.'
      },
      osceTemplate: '"Pasien dengan STEMI Anterior luas, hipotensi 80/50, ronki basah, sesak berat, dan takikardia. Diagnosis: Syok Kardiogenik (Killip IV). Saya akan mulai Norepinefrin IV, DOBUTamin, berikan MONACO (tanpa nitrat), dan rujuk darurat CATHLAB untuk PCI."'
    },
    {
      id: 'm2-02',
      title: 'ACS — NSTEMI Risiko Tinggi',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 96, prInterval: 0.14, qrsDuration: 0.08, qtInterval: 0.36,
        pVisible: true, rAmplitude: 1.0, sAmplitude: 0.2, tAmplitude: -0.3,
        stDepression: 0.2,
        leads: {
          'V5': { stDepression: 0.25, tAmplitude: -0.4 },
          'V6': { stDepression: 0.2, tAmplitude: -0.35 },
          'II': { stDepression: 0.15 },
          'aVF': { stDepression: 0.15 }
        }
      },
      interp: {
        irama: 'Sinus takikardia ringan',
        rate: '96 x/menit',
        axis: 'Normoaksis',
        prInterval: '0.14 detik',
        qrsComplex: '0.08 detik — tidak ada Q patologis',
        stSegment: 'ST depresi horizontal di V5, V6, II, aVF',
        tWave: 'T inversi di V5-V6',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Iskemia Miokard — NSTEMI'
      },
      clinical: {
        scenario: 'Perempuan 62 tahun, DM, hipertensi, dislipidemia. Nyeri dada istirahat 30 menit, hilang timbul. Troponin I: 5.2 ng/mL (↑). TD: 145/90, HR: 98 x/m. Nyaman, tidak sesak. TIMI score: 4 (intermediate-high).',
        correlation: 'NSTEMI ditegakkan jika ada Troponin positif + iskemia klinis. EKG bisa normal, ST depresi, atau T inversi. Risiko tinggi: TIMI >=4, GRACE >140, depresi ST, DM, gagal ginjal.',
        diagnosis: 'NSTEMI Risiko Tinggi (TIMI 4)',
        differential: 'UAP (Troponin negatif), STEMI posterior, Takotsubo cardiomyopathy, Myocarditis'
      },
      management: {
        acute: '1. MONACO + Antikoagulan (Enoxaparin/Fondaparinux)\n2. DAPT: Aspirin + Ticagrelor\n3. ANGIOGRAFI < 24 JAM (strategi invasif dini)\n4. Statin dosis tinggi (Atorvastatin 80 mg)\n5. Beta-blocker + ACE-inhibitor\n6. Manajemen DM (insulin sliding scale)',
        drugs: 'Aspirin, Ticagrelor 180 mg, ISDN, Enoxaparin 1 mg/kg SC, Atorvastatin 80 mg, Metoprolol, Ramipril',
        referral: 'RUJUK ICCU Rawat Inap → Angiografi koroner <24 jam'
      },
      osceTemplate: '"Pasien dengan nyeri dada istirahat, ST depresi di V5-V6, dan Troponin I positif 5.2. Diagnosis: NSTEMI Risiko Tinggi (TIMI 4). Saya akan berikan MONACO, antikoagulan, DAPT, dan rencanakan angiografi <24 jam."'
    },
    {
      id: 'm2-03',
      title: 'Acute Heart Failure — Edema Paru Kardiogenik',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 105, prInterval: 0.16, qrsDuration: 0.09, qtInterval: 0.34,
        pVisible: true, rAmplitude: 1.0, sAmplitude: 0.2, tAmplitude: 0.3,
        leads: {}
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '105 x/menit',
        axis: 'Normoaksis atau LAD (LVH pattern)',
        prInterval: '0.16 detik',
        qrsComplex: '0.09 detik — Mungkin ada LVH (voltage tinggi)',
        stSegment: 'Isoelektrik — Mungkin ada ST depresi non-spesifik',
        tWave: 'Normal atau inverted jika LVH strain',
        qtInterval: 'QTc normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Sinus Takikardia dengan LVH pattern (curiga HF kronik)'
      },
      clinical: {
        scenario: 'Laki-laki 68 tahun, sesak napas berat tiba-tiba, ortopnea, batuk berbusa merah muda. TD: 170/100, HR: 108 x/m, RR: 32 x/m, SpO2: 85%. Ronki basah kasar di kedua paru. Riwayat hipertensi lama dan CAD.',
        correlation: 'Edema paru akut kardiogenik akibat peningkatan tekanan kapiler paru (dekompensasi jantung kiri). Penyebab tersering: iskemia miokard, hipertensi krisis, AR, regurgitasi mitral akut.',
        diagnosis: 'Acute Decompensated Heart Failure — Edema Paru Kardiogenik',
        differential: 'Edema paru non-kardiogenik (ARDS), PE masif, Pneumonia berat, Asma akut berat'
      },
      management: {
        acute: '1. DUDUKKAN pasien (ortopnea)\n2. Oksigen high-flow / NIV / CPAP segera\n3. Nitrat IV (ISDN drip 5-200 mcg/menit) atau SL\n4. Furosemid 40-80 mg IV (diuretik loop)\n5. Morfin 2.5-5 mg IV (vasodilator + ansiolitik)\n6. Jika hipertensi: Nitroprusside atau Nicardipin\n7. Cari pencetus iskemia → EKG, Troponin',
        drugs: 'Furosemid IV, ISDN IV, Morfin IV, Nitroprusside IV, Oksigen/NIV',
        referral: 'RUJUK ke ICCU / HCU. Ventilasi mekanik jika refrakter.'
      },
      osceTemplate: '"Pasien dengan sesak akut, ortopnea, SpO2 85%, ronki basah luas. EKG sinus takikardia dengan LVH. Diagnosis: Edema Paru Kardiogenik. Saya akan posisikan duduk, berikan O2/NIV, Furosemid 40 mg IV, ISDN, dan cari penyebab iskemia."'
    },
    {
      id: 'm2-04',
      title: 'Cardiac Arrest — Pulseless VT',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 0, vf: true, pVisible: false, qrsDuration: 0.16,
        leads: {}
      },
      interp: {
        irama: 'Chaotic — tidak terorganisir (simulasi VF rapid atau VT yang sangat cepat)',
        rate: 'Tidak dapat ditentukan',
        axis: 'Tidak dapat ditentukan',
        prInterval: 'Tidak ada',
        qrsComplex: 'Tidak ada — aktivitas kaotik',
        stSegment: 'Tidak ada',
        tWave: 'Tidak ada',
        qtInterval: 'Tidak ada',
        uWave: 'Tidak ada',
        ecgDiagnosis: 'Henti Jantung — Awalnya VT berdegenerasi ke VF'
      },
      clinical: {
        scenario: 'Panggilan CODE BLUE. Pasien tidak sadar, tidak bernapas, tidak ada nadi. Monitor menunjukkan irama VT yang sangat cepat lalu berubah jadi VF. Waktu sejak kolaps: 3 menit.',
        correlation: 'Pulseless VT = VT tanpa nadi (cardiac output = 0). Tatalaksana sama dengan VF — shockable rhythm. Golden period: defibrilasi dalam 3-5 menit pertama meningkatkan survival.',
        diagnosis: 'Cardiac Arrest — Pulseless Ventricular Tachycardia (shockable rhythm)',
        differential: 'VF, Asystole, PEA'
      },
      management: {
        acute: '1. KONFIRMASI tidak sadar + tidak bernapas + tidak ada nadi (5-10 detik)\n2. AKTIFKAN CODE BLUE / minta AED\n3. RJP: 30 kompresi : 2 ventilasi, 100-120/menit, kedalaman 5-6 cm\n4. DEFIBRILASI: 150-200 J (bifasik) segera\n5. Lanjut RJP 2 menit, cek irama\n6. Jika masih shockable → Defibrilasi lagi + Epinefrin 1 mg IV tiap 3-5 menit\n7. Berikan Amiodaron 300 mg IV setelah defibrilasi ke-3',
        drugs: 'Epinefrin 1 mg IV tiap 3-5 menit, Amiodaron 300 mg IV, Lidokain 1-1.5 mg/kg',
        referral: 'Resusitasi in-situ. Pasca ROSC → rujuk ICU/ICCU untuk Targeted Temperature Management.'
      },
      osceTemplate: '"Pasien cardiac arrest — tidak sadar, tidak napas, tidak nadi. Monitor menunjukkan VT kemudian VF. Ini shockable rhythm. Saya mulai RJP 30:2, segera defibrilasi 200 J, lanjut RJP 2 menit, berikan Epinefrin 1 mg IV, dan cari penyebab 4H4T."'
    },
    {
      id: 'm2-05',
      title: 'Symptomatic Bradycardia — Sick Sinus Syndrome',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 38, prInterval: 0.18, qrsDuration: 0.08, qtInterval: 0.48,
        pVisible: true, rAmplitude: 1.0, sAmplitude: 0.2, tAmplitude: 0.3,
        leads: {}
      },
      interp: {
        irama: 'Sinus bradikardia berat — atau irama junctional lambat',
        rate: '38 x/menit (bradikardia berat)',
        axis: 'Normoaksis',
        prInterval: '0.18 detik',
        qrsComplex: '0.08 detik — Sempit (asal dari nodus AV/junction)',
        stSegment: 'Isoelektrik',
        tWave: 'Normal',
        qtInterval: 'QT memanjang (0.48) karena HR lambat — QTc normal',
        uWave: 'Mungkin tampak',
        ecgDiagnosis: 'Sick Sinus Syndrome — Sinus Bradikardia Berat'
      },
      clinical: {
        scenario: 'Wanita 78 tahun, pusing berat, lemas, pandangan kabur, sinkop 2 kali dalam 1 minggu. TD: 90/55, HR: 36 x/m (teratur). Kadang HR tiba-tiba naik 130 lalu turun lagi (tachy-brady syndrome).',
        correlation: 'Sick Sinus Syndrome (SSS) adalah disfungsi nodus SA. Tiga varian: sinus bradikardia berat, sinus arrest, tachy-brady syndrome. Sering pada usia lanjut dan degeneratif. Gejala: sinkop, dizziness, CHF, fatigue.',
        diagnosis: 'Sick Sinus Syndrome — Tipe Bradikardia Berat Simptomatik',
        differential: 'AV Block derajat 3 (CHB) — P tidak terkait QRS, SSS — P hilang/bradikardi lalu muncul junctional escape'
      },
      management: {
        acute: '1. Atropin 0.5-1 mg IV (responsif sebagian)\n2. Jika tidak responsif: Transcutaneous Pacing\n3. Bridge dengan Dopamin/Epinefrin drip\n4. Hentikan semua AV blocker\n5. PERMANENT PACEMAKER — indikasi kuat untuk SSS simptomatik',
        drugs: 'Atropin IV (terbatas), Dopamin IV',
        referral: 'RUJUK ke Sp.JP untuk pemasangan Pacemaker permanen (AAI atau DDD)'
      },
      osceTemplate: '"Pasien dengan sinkop berulang, bradikardia 38 x/m, EKG sinus bradikardia berat dengan QRS sempit. Diagnosis: Sick Sinus Syndrome. Saya akan berikan Atropin IV sementara, bridge dengan Dopamin, dan rujuk untuk pacemaker permanen."'
    },
    {
      id: 'm2-06',
      title: 'Hypertensive Emergency dengan LVH',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 95, prInterval: 0.16, qrsDuration: 0.10, qtInterval: 0.38,
        pVisible: true, pMitrale: true, rAmplitude: 2.2, sAmplitude: 0.6, tAmplitude: -0.4,
        lvh: true,
        leads: {
          'V5': { rAmplitude: 2.5, tAmplitude: -0.4 },
          'V6': { rAmplitude: 2.2, tAmplitude: -0.35 },
          'aVL': { rAmplitude: 1.4, tAmplitude: -0.25 },
          'V1': { sAmplitude: 2.0 },
          'V2': { sAmplitude: 1.8 }
        }
      },
      interp: {
        irama: 'Sinus takikardia ringan',
        rate: '95 x/menit',
        axis: 'LAD (Left Axis Deviation) — umum pada LVH',
        prInterval: '0.16 detik — Mungkin memanjang ringan',
        qrsComplex: '0.10 detik — High voltage: SV1 + RV5 > 35mm (Sokolow-Lyon)',
        stSegment: 'ST depresi dengan T inversi di V5-V6 (LVH strain pattern)',
        tWave: 'T inversi asimetris di lead lateral (strain) — P mitrale mungkin ada (P bifid di II)',
        qtInterval: 'QTc mungkin memanjang',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Left Ventricular Hypertrophy (LVH) dengan Strain Pattern'
      },
      clinical: {
        scenario: 'Laki-laki 50 tahun, sakit kepala berat, pandangan buram, mual, muntah 2 jam. TD: 220/130 mmHg. HR: 96 x/m. Papil edema pada funduskopi. Riwayat hipertensi tidak terkontrol.',
        correlation: 'Krisis hipertensi dengan kerusakan organ target (retinopati, ensefalopati, CHF). LVH pada EKG menandakan hipertensi kronik yang tidak terkontrol. Target turunkan MAP 20-25% dalam 1 jam.',
        diagnosis: 'Hypertensive Emergency — Krisis Hipertensi dengan Ensefalopati',
        differential: 'Stroke iskemik/hemoragik (perlu CT scan), Hipertensi urgensi (tanpa kerusakan organ), Pheokromositoma'
      },
      management: {
        acute: '1. TURUNKAN TD bertahap: MAP 20-25% dalam 1 jam (jangan turun drastis — dapat iskemia serebral)\n2. Obat IV titrasi: Nicardipin drip 5-15 mg/jam atau Nifedipin oral atau Nitroprusside\n3. Beta-blocker (Esmolol/Labetalol) jika takikardia dominan\n4. Evaluasi CT scan kepala untuk stroke\n5. Ekokardiografi untuk menilai LVH dan fungsi ventrikel',
        drugs: 'Nicardipin IV, Labetalol IV, Nitroprusside IV, Furosemid (jika overload)',
        referral: 'RUJUK ke HCU/ICU untuk monitoring ketat TD, ekokardiografi serial, dan manajemen organ target'
      },
      osceTemplate: '"Pasien TD 220/130 dengan sakit kepala berat, papil edema. EKG menunjukkan LVH dengan strain pattern. Diagnosis: Hypertensive Emergency. Saya akan turunkan MAP 25% dalam 1 jam dengan Nicardipin drip, CT scan kepala, dan rawat di ICU."'
    },
    {
      id: 'm2-07',
      title: 'Pulmonary Embolism (Emboli Paru)',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 115, prInterval: 0.12, qrsDuration: 0.10, qtInterval: 0.32,
        pVisible: true, pAmplitude: 0.2, rAmplitude: 0.8, sAmplitude: 0.3, tAmplitude: 0.2,
        rvh: true,
        leads: {
          'V1': { rAmplitude: 0.6, sAmplitude: 0.1 },
          'V2': { sAmplitude: 0.5 },
          'III': { qAmplitude: 0.15, tAmplitude: -0.15 },
          'I': { sAmplitude: 0.3 }
        }
      },
      interp: {
        irama: 'Sinus takikardia (paling sering pada PE)',
        rate: '115 x/menit',
        axis: 'RAD (Right Axis Deviation) — atau normal',
        prInterval: '0.12 detik',
        qrsComplex: '0.10 detik — Mungkin RBBB baru atau incomplete RBBB. S1Q3T3 pattern.',
        stSegment: 'ST depresi di V1-V3 atau inferolateral',
        tWave: 'T inversi di V1-V4 (McGinn-White sign — S1Q3T3 klasik: S dalam di I, Q di III, T negatif di III)',
        qtInterval: 'QTc normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Sinus Takikardia dengan S1Q3T3 — COR PULMONALE AKUT (Curigai Emboli Paru)'
      },
      clinical: {
        scenario: 'Wanita 45 tahun, sesak napas mendadak 2 jam, nyeri dada pleuritik, batuk sedikit darah. Post-operasi (histerektomi 5 hari lalu). TD: 100/65, HR: 118 x/m, RR: 28 x/m, SpO2: 86%.',
        correlation: 'Emboli paru masif → beban akut ventrikel kanan → cor pulmonale akut. S1Q3T3 adalah tanda klasik tapi hanya ditemukan pada ~20% kasus. EKG paling sering: SINUS TAKIKARDIA saja. D-dimer + CT pulmonary angiogram untuk diagnosis.',
        diagnosis: 'Emboli Paru Masif (High-Risk PE) — Syok Obstruktif',
        differential: 'STEMI inferior (nyeri dada, ST elevasi inferior), Perikarditis akut, Pneumotoraks'
      },
      management: {
        acute: '1. Oksigen high-flow / NIV / intubasi jika perlu\n2. ANTIKOAGULASI SEGERA: Heparin IV bolus 5000-10000 U, drip 1000 U/jam (target APTT 2-2.5x)\n3. Jika MASIF dengan syok: Fibrinolitik (Alteplase 100 mg/2 jam) — KONTRAINDIKASI jika risiko perdarahan tinggi\n4. Embolektomi jika gagal fibrinolitik\n5. IVC filter jika kontraindikasi antikoagulasi',
        drugs: 'Heparin IV, Alteplase (fibrinolitik), Oksigen',
        referral: 'RUJUK DARURAT ke IGD → CT Pulmonary Angiogram → ICCU'
      },
      osceTemplate: '"Pasien post-op dengan sesak akut, takikardia, SpO2 86%. EKG: sinus takikardia 115, S1Q3T3 pattern. Diagnosis: Susp. Emboli Paru Masif. Saya akan berikan Oksigen, Heparin IV bolus, dan rujuk darurat untuk CT pulmonary angiogram."'
    },
    {
      id: 'm2-08',
      title: 'Acute Pericarditis — Resisten NSAID',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 95, prInterval: 0.12, qrsDuration: 0.08, qtInterval: 0.36,
        pVisible: true, rAmplitude: 0.9, sAmplitude: 0.2, tAmplitude: 0.3,
        pericarditis: true,
        leads: {
          'I': { stElevation: 0.2, prDepression: 0.08 },
          'II': { stElevation: 0.25, prDepression: 0.1 },
          'III': { stElevation: 0.15 },
          'aVL': { stElevation: 0.15, prDepression: 0.05 },
          'aVF': { stElevation: 0.2 },
          'V2': { stElevation: 0.3, prDepression: 0.08 },
          'V3': { stElevation: 0.35, prDepression: 0.08 },
          'V4': { stElevation: 0.3, prDepression: 0.05 },
          'aVR': { stDepression: 0.3 }
        }
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '95 x/menit',
        axis: 'Normoaksis',
        prInterval: '0.12 detik (borderline pendek)',
        qrsComplex: '0.08 detik — TIDAK ada Q patologis',
        stSegment: 'ST elevasi difus + PR depresi di banyak lead',
        tWave: 'Tegak — dapat menjadi negatif di fase berikutnya',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Perikarditis Akut (Stadium I)'
      },
      clinical: {
        scenario: 'Laki-laki 28 tahun, nyeri dada tajam menusuk, memburuk saat inspirasi dan berbaring, membaik condong ke depan. Demam 38.5°C. Tidak respon dengan Ibuprofen 3 hari. TD: 110/70. Tidak ada efusi perikardial pada echo.',
        correlation: 'Perikarditis viral/adalah penyebab tersering pada dewasa muda. PR depresi adalah penanda paling spesifik. Jika tidak respon NSAID 1 minggu → curigai etiologi spesifik (TB, autoimun, uremia).',
        diagnosis: 'Perikarditis Akut Viral — Tidak Respon NSAID',
        differential: 'STEMI (ST elevasi regional, resiprokal, Q patologis), Early repolarization (tanpa PR depresi), Miokarditis (disertai aritmia, gagal jantung)'
      },
      management: {
        acute: '1. NSAID + Kolkisin tetap diteruskan\n2. Tambahkan Prednison 0.5 mg/kg/hari jika tidak respon 1 minggu\n3. Jika disertai miokarditis → tambahan: ACE-inhibitor + Beta-blocker\n4. Ekokardiografi serial (pantau efusi/tamponade)\n5. Jika TB suspect → RONTGEN toraks, sputum BTA, IGRA',
        drugs: 'Ibuprofen 800 mg tid, Kolkisin 0.5 mg bid, Prednison 0.5 mg/kg/hari',
        referral: 'Rujuk Sp.JP jika: efusi perikardial masif, tamponade, tidak respon obat, rekuren.'
      },
      osceTemplate: '"Pasien dengan nyeri dada pleuritik, ST elevasi difus dan PR depresi di aVR. Diagnosis: Perikarditis Akut. Tidak respon Ibuprofen 3 hari. Saya tambahkan Kolkisin dan rencanakan Prednison jika masih tidak membaik dalam 1 minggu."'
    },
    {
      id: 'm2-09',
      title: 'Syncope — Complete Heart Block',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 35, prInterval: 0, qrsDuration: 0.15, qtInterval: 0.52,
        pVisible: true, rAmplitude: 0.7, sAmplitude: 0.5, tAmplitude: 0.2,
        completeBlock: true,
        leads: {}
      },
      interp: {
        irama: 'AV dissociation total — P lebih cepat, QRS lebih lambat dan lebar (escape ventrikel)',
        rate: 'Atrial: ~85, Ventrikel: ~35 x/menit',
        axis: 'Tidak dapat ditentukan',
        prInterval: 'Bervariasi, tidak ada hubungan',
        qrsComplex: '0.15 detik (LEBAR) — Irama escape ventrikel idioventrikular',
        stSegment: 'Diskordan, sulit dinilai',
        tWave: 'Diskordan dengan QRS',
        qtInterval: 'QT memanjang 0.52 (karena HR lambat)',
        uWave: 'Mungkin tampak',
        ecgDiagnosis: 'Complete Heart Block (AV Block Derajat 3) dengan Irama Escape Ventrikel'
      },
      clinical: {
        scenario: 'Laki-laki 72 tahun, sinkop saat duduk di kursi, sadar spontan setelah 30 detik. Sebelumnya pusing dan pandangan kabur. TD: 80/50, HR: 32 x/m (teratur). Riwayat CAD.',
        correlation: 'Syncope karena CHB = Stokes-Adams attack. Episode hipoperfusi serebral mendadak akibat asistol atau bradikardia ekstrem. Dapat terjadi tanpa warning. Risiko SCD tinggi.',
        diagnosis: 'Stokes-Adams Attack (Syncope) — Complete Heart Block',
        differential: 'Vasovagal syncope, Ortostatik hipotensi, Epilepsi, Aritmia lain (VT non-sustained, SSS)'
      },
      management: {
        acute: '1. Transcutaneous Pacing (TCP) SEGERA\n2. Bridge: Atropin 1 mg IV (efek terbatas), Dopamin/Epinefrin drip\n3. SETELAH STABIL → pasang Temporary Transvenous Pacemaker\n4. Antibiotik profilaksis untuk pemasangan pacemaker\n5. Rencanakan PPM (Permanent Pacemaker) dual-chamber (DDD)',
        drugs: 'Atropin, Dopamin IV, Epinefrin IV',
        referral: 'RUJUK DARURAT ke IGD → ICCU → Pacemaker'
      },
      osceTemplate: '"Pasien sinkop, HR 32 x/m. EKG: AV dissociation, ventrikel rate 35, QRS lebar. Diagnosis: Complete Heart Block — Stokes-Adams Attack. Saya pasang Transcutaneous Pacing segera, berikan Dopamin IV, dan rujuk darurat untuk temporary pacemaker."'
    },
    {
      id: 'm2-10',
      title: 'Unstable Angina Pectoris',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 88, prInterval: 0.14, qrsDuration: 0.08, qtInterval: 0.40,
        pVisible: true, rAmplitude: 1.0, sAmplitude: 0.2, tAmplitude: 0.3,
        stDepression: 0.08,
        leads: {
          'V5': { stDepression: 0.1 },
          'V6': { stDepression: 0.08 }
        }
      },
      interp: {
        irama: 'Sinus ritmis normal',
        rate: '88 x/menit',
        axis: 'Normoaksis',
        prInterval: '0.14 detik',
        qrsComplex: '0.08 detik',
        stSegment: 'ST depresi borderline 0.5-1mm di V5-V6 — mungkin normal pada saat tanpa nyeri',
        tWave: 'Tegak normal — bisa pseudo-normalisasi saat nyeri',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'EKG dalam batas normal pada saat tanpa nyeri (curigai UAP)'
      },
      clinical: {
        scenario: 'Perempuan 55 tahun, nyeri dada kiri menjalar ke bahu kiri saat berjalan cepat (2 blok), membaik dengan istirahat 5 menit. 1 minggu terakhir frekuensi meningkat (nyeri muncul aktivitas ringan). Riwayat DM, HT. TD: 140/85. EKG tanpa nyeri: normal.',
        correlation: 'Unstable Angina (UAP): nyeri dada crecendo (frekuensi ↑, durasi ↑, aktivitas ↓ ambang). EKG saat tanpa nyeri bisa NORMAL. Jika memungkinkan rekam EKG saat nyeri — bisa tampak ST depresi transient. Troponin NORMAL (membedakan dari NSTEMI).',
        diagnosis: 'Unstable Angina Pectoris (Braunwald Class II)',
        differential: 'NSTEMI (Troponin ↑), Stable angina, Costochondritis, GERD, Takotsubo'
      },
      management: {
        acute: '1. MONACO\n2. Antikoagulan (Fondaparinux/Enoxaparin)\n3. DAPT: Aspirin + Clopidogrel/Ticagrelor\n4. STRATIFIKASI RISIKO: TIMI/GRACE score\n5. Angiografi koroner (>24 jam jika stabil) vs konservatif\n6. Kontrol faktor risiko (HT, DM, lipid)',
        drugs: 'Aspirin, Ticagrelor/Clopidogrel, ISDN, Bisoprolol, Atorvastatin, Ramipril',
        referral: 'Rujuk Sp.JP Rawat Inap untuk angiografi koroner'
      },
      osceTemplate: '"Pasien dengan angina crecendo, EKG normal saat tanpa nyeri. Troponin normal. Diagnosis: Unstable Angina Pectoris. Saya akan berikan DAPT, ISDN, statin beta-blocker, dan rencanakan angiografi."'
    },
    {
      id: 'm2-11',
      title: 'Acute Myocarditis',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 108, prInterval: 0.14, qrsDuration: 0.09, qtInterval: 0.36,
        pVisible: true, rAmplitude: 0.8, sAmplitude: 0.3, tAmplitude: -0.4,
        leads: {
          'I': { stElevation: 0.12 },
          'II': { stElevation: 0.15, tAmplitude: -0.3 },
          'III': { stElevation: 0.1, tAmplitude: -0.3 },
          'aVF': { stElevation: 0.12, tAmplitude: -0.3 },
          'V3': { stElevation: 0.2, tAmplitude: -0.35 },
          'V4': { stElevation: 0.2, tAmplitude: -0.4 },
          'V5': { stElevation: 0.15, tAmplitude: -0.35 },
          'V6': { stElevation: 0.1, tAmplitude: -0.3 },
          'aVL': { stElevation: 0.1 }
        }
      },
      interp: {
        irama: 'Sinus takikardia (umum pada miokarditis)',
        rate: '108 x/menit',
        axis: 'Normal',
        prInterval: '0.14 detik — Mungkin AV block derajat 1',
        qrsComplex: '0.09 detik — QRS voltage rendah (low voltage)',
        stSegment: 'ST elevasi difus ringan (mirip perikarditis) + ST depresi',
        tWave: 'T inversi difus — sering luas (tanda miokarditis)',
        qtInterval: 'QTc memanjang mungkin',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Miokarditis akut — Sinus takikardia, ST/T difus, low voltage'
      },
      clinical: {
        scenario: 'Laki-laki 22 tahun, demam 1 minggu, lemas, sesak ringan, dada berdebar. Riwayat infeksi saluran napas 2 minggu lalu. TD: 100/70, HR: 110 x/m. Troponin I: 12 (↑↑). Ekokardiografi: EF 40%.',
        correlation: 'Miokarditis inflamasi otot jantung, sering pasca infeksi viral (Coxsackie, Adenovirus, COVID-19). Trias: nyeri dada, gagal jantung, aritmia. Peningkatan Troponin tanpa oklusi koroner (beda dengan ACS). Prognosis bervariasi.',
        diagnosis: 'Miokarditis Akut Viral dengan Disfungsi Ventrikel Kiri',
        differential: 'Perikarditis (nyeri pleuritik dominan, PR depresi, fungsi ventrikel normal), STEMI/NSTEMI, Takotsubo cardiomyopathy'
      },
      management: {
        acute: '1. RAWAT INAP + Monitor jantung kontinu\n2. Tirah baring\n3. ACE-inhibitor + Beta-blocker (jika tidak syok)\n4. Diuretik jika gagal jantung\n5. Hindari NSAID (kecuali perikarditis dominan)\n6. Kortikosteroid/IVIG hanya pada kasus tertentu (autoimun, giant cell)\n7. Dukung fungsi ventrikel',
        drugs: 'Ramipril, Metoprolol, Furosemid, Mgmt gagal jantung',
        referral: 'RUJUK ke Sp.JP Rawat Inap → Ekokardiografi serial, MRI jantung, endomiokardial biopsy jika perlu'
      },
      osceTemplate: '"Pasien demam pasca infeksi, takikardia, ST/T difus, Troponin tinggi, EF 40%. Diagnosis: Miokarditis Akut. Saya rawat inap dengan monitor, berikan ACE-inhibitor dan beta-blocker, dukung fungsi ventrikel, dan rencanakan ekokardiografi serial."'
    },
    {
      id: 'm2-12',
      title: 'Supraventricular Tachycardia (AVRT — WPW)',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 195, prInterval: 0, qrsDuration: 0.08, qtInterval: 0.24,
        pVisible: false, rAmplitude: 1.0, sAmplitude: 0.2, tAmplitude: 0.3,
        leads: {}
      },
      interp: {
        irama: 'Sangat teratur, onset mendadak',
        rate: '195 x/menit',
        axis: 'Normal atau bervariasi',
        prInterval: 'Tidak dapat dinilai — P retrograde setelah QRS (inverted di II, III, aVF)',
        qrsComplex: '0.08 detik — SEMPIT (ortodromic AVRT, konduksi anterograd via AV node)',
        stSegment: 'Depresi ST ringan sekunder takikardia',
        tWave: 'Inversi ringan pasca episode',
        qtInterval: 'QTc normal setelah dikoreksi',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'SVT — Orthodromic AVRT via aksesoris (WPW), QRS sempit saat takikardia'
      },
      clinical: {
        scenario: 'Laki-laki 18 tahun, jantung berdebar mendadak saat olahraga, berhenti tiba-tiba setelah manuver Valsalva. EKG saat irama sinus normal menunjukkan PR pendek + delta wave (WPW pattern). Episode sudah 4 kali dalam 1 tahun.',
        correlation: 'AVRT orthodromic: impuls turun via AV node (QRS sempit), naik via aksesoris. Delta wave hanya tampak pada irama sinus, bukan saat AVRT. Risiko: AF pre-eksitasi dapat degenerasi ke VF.',
        diagnosis: 'Symptomatic WPW Syndrome — AVRT (Ortodromic)',
        differential: 'AVNRT (sirkuit di AV node), Atrial Takikardia, AT/F dengan pre-eksitasi'
      },
      management: {
        acute: '1. Sama seperti SVT: Manuver Vagal → Adenosin → Kardioversi\n2. JANGAN berikan AV blocker (Verapamil/Digoksin) untuk pre-eksitasi AF — dapat mempercepat konduksi via aksesoris!\n3. ABLASI RADIOFREKUENSI: Kuratif — terutama jika simptomatik',
        drugs: 'Adenosin 6-12 mg IV (first line orthodromic AVRT), hindari AV blocker jika pre-eksitasi AF',
        referral: 'RUJUK ke Sp.JP untuk ablasi jalur aksesoris (kuratif)'
      },
      osceTemplate: '"Pasien SVT simptomatik dengan WPW pattern pada EKG sinus. Diagnosis: WPW Syndrome (AVRT ortrodromic). Episode akut diatasi dengan Adenosin. Rencanakan ablasi radiofrekuensi untuk tatalaksana definitif."'
    },
    {
      id: 'm2-13',
      title: 'Takotsubo Cardiomyopathy (Broken Heart Syndrome)',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 102, prInterval: 0.14, qrsDuration: 0.09, qtInterval: 0.46,
        pVisible: true, rAmplitude: 1.0, sAmplitude: 0.3, tAmplitude: -0.5,
        qtLong: true,
        leads: {
          'V2': { stElevation: 0.25, tAmplitude: -0.5 },
          'V3': { stElevation: 0.35, tAmplitude: -0.6 },
          'V4': { stElevation: 0.4, tAmplitude: -0.6 },
          'V5': { stElevation: 0.25, tAmplitude: -0.5 },
          'V6': { stElevation: 0.15, tAmplitude: -0.4 },
          'I': { stElevation: 0.1 }
        }
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '102 x/menit',
        axis: 'Normal',
        prInterval: '0.14 detik',
        qrsComplex: '0.09 detik — Tidak ada Q patologis (membedakan dari STEMI)',
        stSegment: 'ST elevasi di prekordial V2-V5 (mirip STEMI anterior) tanpa ST depresi resiprokal',
        tWave: 'T inversi dalam & luas di prekordial (deep T inversion)',
        qtInterval: 'QT memanjang (QTc > 0.46) — khas',
        uWave: 'Mungkin tampak prominent',
        ecgDiagnosis: 'Takotsubo Cardiomyopathy — ST elevasi + T inversi dalam + QT panjang'
      },
      clinical: {
        scenario: 'Wanita 65 tahun, nyeri dada akut setelah mendapat kabar duka (kecelakaan anak). TD: 130/80, HR: 105 x/m. Troponin I: 8 (↑↑). Angiografi koroner: NORMAL (tidak ada stenosis). Ekokardiografi: apical ballooning.',
        correlation: 'Takotsubo (stress cardiomyopathy) = disfungsi ventrikel kiri transient akibat stress emosional/fisik. Patofisiologi: catecholamine excess → myocardial stunning. Cirikhas: apical ballooning (ventrikel kiri apex seperti takotsubo = jebak gurita). Prognosis baik, recovery dalam hari-minggu.',
        diagnosis: 'Takotsubo Cardiomyopathy (Stress-Induced Cardiomyopathy)',
        differential: 'STEMI Anterior (Q patologis, resiprokal, stenosis koroner), Miokarditis'
      },
      management: {
        acute: '1. MONACO (sambil menyingkirkan STEMI)\n2. Jika sudah terdiagnosis (angiografi koroner normal):\n   - ACE-inhibitor + Beta-blocker\n   - Diuretik jika CHFs\n   - Supportif, tirah baring\n   - Atasi stress/cause\n3. Monitor: perbaikan fungsi ventrikel dalam 1-4 minggu',
        drugs: 'Ramipril, Bisoprolol, Furosemid (jika perlu)',
        referral: 'Rujuk Sp.JP untuk angiografi koroner (diagnosis banding STEMI) dan ekokardiografi serial.'
      },
      osceTemplate: '"Wanita post-stress dengan ST elevasi anterior, T inversi dalam, QT panjang. Angiografi koroner normal. Diagnosis: Takotsubo Cardiomyopathy. Saya akan berikan ACE-inhibitor dan beta-blocker, monitor fungsi ventrikel, dan evaluasi recovery dalam 4 minggu."'
    },
    {
      id: 'm2-14',
      title: 'Wide Complex Tachycardia — VT vs SVT with Aberrancy',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 175, prInterval: 0, qrsDuration: 0.15, qtInterval: 0.28,
        pVisible: false, rAmplitude: 1.5, sAmplitude: 0.4, tAmplitude: -0.5,
        leads: {}
      },
      interp: {
        irama: 'Reguler, QRS lebar',
        rate: '175 x/menit',
        axis: 'Extreme axis deviation (NW axis)',
        prInterval: 'Tidak ada P yang jelas — kemungkinan AV dissociation',
        qrsComplex: '0.15 detik (LEBAR) — semua lead positif/konsisten (concordance positif)',
        stSegment: 'Diskordan',
        tWave: 'Berlawanan arah QRS',
        qtInterval: 'QT memanjang karena QRS lebar',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Wide Complex Tachycardia — Kriteria VT (Brugada)'
      },
      clinical: {
        scenario: 'Laki-laki 58 tahun, riwayat CAD, tiba-tiba pusing dan dada berdebar. HR 172 x/m, TD 85/55. EKG: QRS lebar, takikardia, AV dissociation tanda (+), RS > 100 ms di V1-V2, QRS all positive di prekordial (concordance positif).',
        correlation: 'Membedakan VT dari SVT + aberrancy sangat penting. Gunakan kriteria BRUGADA atau VEREBEI stepwise. VT lebih mungkin jika: AV dissociation, concordance, RS > 100 ms di prekordial, capture/fusion beat. Pada CAD, VT > SVT dengan pre-eksistensi BBB.',
        diagnosis: 'Wide Complex Tachycardia — Terbukti VT (Brugada criteria)',
        differential: 'SVT dengan LBBB/RBBB (pre-eksistensi BBB, tanpa AV dissociation, RS < 100 ms)'
      },
      management: {
        acute: '1. Jika tidak stabil → Kardioversi tersinkronasi 100 J\n2. Jika stabil → Amiodaron 150 mg IV atau Lidokain 1-1.5 mg/kg\n3. Koreksi elektrolit\n4. Jangan gunakan Verapamil (dapat syok jika VT)',
        drugs: 'Amiodaron 150 mg IV, Lidokain 1-1.5 mg/kg',
        referral: 'RUJUK ICCU untuk monitor dan evaluasi penyakit jantung struktural'
      },
      osceTemplate: '"Takikardia QRS lebar 0.15 detik. Ada AV dissociation dan positiv concordance prekordial. Brugada criteria: VT. Pasien borderline stabil dengan TD 85/55. Saya akan berikan Amiodaron 150 mg IV dan persiapkan kardioversi jika memburuk."'
    },
    {
      id: 'm2-15',
      title: 'Digoxin Intoxication',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 55, prInterval: 0.22, qrsDuration: 0.08, qtInterval: 0.40,
        pVisible: true, pAmplitude: 0.08, rAmplitude: 0.8, sAmplitude: 0.3, tAmplitude: -0.2,
        stDepression: 0.15,
        leads: {
          'V5': { stDepression: 0.2, tAmplitude: -0.3 },
          'V6': { stDepression: 0.15, tAmplitude: -0.25 },
          'I': { stDepression: 0.15, tAmplitude: -0.2 },
          'II': { stDepression: 0.12 }
        }
      },
      interp: {
        irama: 'Bradikardia sinus dengan irama junctional (kemungkinan AV dissociation)',
        rate: '55 x/menit',
        axis: 'Normal',
        prInterval: '0.22 detik (memanjang)',
        qrsComplex: '0.08 detik',
        stSegment: 'ST depresi SCOOPING (cekung/berbentuk mangkuk) — klasik digitalis effect',
        tWave: 'T negatif atau flat — kadang T inversi',
        qtInterval: 'QT pendek (short QT)',
        uWave: 'Mungkin tampak prominent',
        ecgDiagnosis: 'DIGOXIN EFFECT/TOXICITY — Bradikardia, PR panjang, ST scooping, T negatif'
      },
      clinical: {
        scenario: 'Wanita 75 tahun, AF dengan Digoksin 0.25 mg/hari. Mual, muntah, anoreksia, pandangan kabur (yellow vision). TD: 110/70, HR: 52 x/m (sebelumnya 90). Kadar Digoksin: 3.2 ng/mL (toksik > 2).',
        correlation: 'Digoksin memiliki indeks terapi sempit. Toksisitas: gastrointestinal (mual), neurologis (pandangan kabur, kuning), kardiak (aritmia hampir semua jenis!). Aritmia paling khas: PAT WITH BLOCK (Paroxysmal Atrial Tachycardia with AV Block), bigemini VES, bradikardia/junctional.',
        diagnosis: 'Digoxin Intoxication — Bradikardia + ST scooping + AV Block',
        differential: 'LVH with strain (ST depresi asimetris), Iskemia (ST horizontal/downsloping)'
      },
      management: {
        acute: '1. HENTIKAN Digoksin segera\n2. Koreksi elektrolit: K+ > 4.0 (hipokalemia memperberat toksisitas!)\n3. Jika bradikardia simptomatik: Atropin atau TCP\n4. Jika aritmia berat/VT/VF: Digoxin Immune Fab (antibody fragment) — antidotum\n5. Jangan berikan Kalsium (dapat menyebabkan "stone heart" — kontraksi tetani)',
        drugs: 'Hentikan Digoksin, koreksi K+, Digoxin Immune Fab, Phenytoin/Lidokain jika aritmia ventrikel',
        referral: 'RUJUK ICCU untuk monitoring — konsul Sp.JP'
      },
      osceTemplate: '"Pasien AF + Digoksin, mual, muntah, HR turun 52. EKG: ST scooping, PR panjang, bradikardia junctional. Kadar Digoksin 3.2. Diagnosis: Digoxin Intoxication. Saya hentikan Digoksin, koreksi K+, siapkan Digoxin Immune Fab, rujuk ICCU."'
    },
    {
      id: 'm2-16',
      title: 'Pneumothorax Tension — Deviasi Trakea',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 125, prInterval: 0.10, qrsDuration: 0.08, qtInterval: 0.30,
        pVisible: true, rAmplitude: 0.5, sAmplitude: 0.1, tAmplitude: 0.15,
        leads: {
          'I': { rAmplitude: 0.3 },
          'II': { rAmplitude: 0.4 },
          'III': { rAmplitude: 0.2 },
          'V1': { rAmplitude: 0.2 },
          'V2': { rAmplitude: 0.3 },
          'V3': { rAmplitude: 0.4 },
          'V4': { rAmplitude: 0.3 },
          'V5': { rAmplitude: 0.3 },
          'V6': { rAmplitude: 0.25 }
        }
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '125 x/menit',
        axis: 'RAD (Right Axis Deviation)',
        prInterval: '0.10 detik',
        qrsComplex: '0.08 detik — Low voltage (QRS kecil semua lead)',
        stSegment: 'Isoelektrik',
        tWave: 'Normal',
        qtInterval: 'QTc normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Sinus Takikardia — Low voltage QRS, RAD, electrical alternans mungkin'
      },
      clinical: {
        scenario: 'Laki-laki 30 tahun, sesak napas akut berat setelah jatuh motor. Trakea deviasi ke kanan, hipersonor kiri, tidak ada suara napas kiri. TD: 85/60, HR: 128 x/m, SpO2: 82%. JVP meningkat.',
        correlation: 'Tension pneumothorax adalah EMERGENSI. Udara terkumpul di rongga pleura dengan efek valve → mediastinum terdorong ke kontralateral → obstruksi vena cava → syok obstruktif. EKG: takikardia sinus, low voltage, RAD, kadang electrical alternans.',
        diagnosis: 'Tension Pneumothorax Kiri — Syok Obstruktif',
        differential: 'Tamponade jantung (trakea midline, JVP ↑, EKG low voltage + electrical alternans), Emboli paru masif'
      },
      management: {
        acute: '1. EMERGENSI — JANGAN TUNGGU RONTGEN!\n2. NEEDLE DECOMPRESSION: jarum IV 14-16 G di sela iga ke-2 linea mid-klavikula kiri\n3. Atau wide-bore needle di sela iga ke-5 aksila anterior\n4. WSD (Water Seal Drainage) setelah dekompresi\n5. Oksigen high-flow, IV access',
        drugs: 'Oksigen, IV fluids, Analgesik (Morfin/Ketorolac)',
        referral: 'Resusitasi di IGD → Rujuk bedah toraks untuk VATS atau pleurodesis'
      },
      osceTemplate: '"PASIENT DENGAN SESSAK AKUT PASCA TRAUMA, TRAKEA DEVIASI, SUARA NAPAS HILANG KIRI. Diagnosis: Tension Pneumothorax. EMERGENSI. Saya lakukan needle decompression di sela iga ke-2 mid-klavikula kiri, pasang WSD, berikan Oksigen, dan rujuk bedah toraks."'
    },
    {
      id: 'm2-17',
      title: 'Cardiac Tamponade',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 115, prInterval: 0.14, qrsDuration: 0.08, qtInterval: 0.34,
        pVisible: true, pAmplitude: 0.08, rAmplitude: 0.4, sAmplitude: 0.1, tAmplitude: 0.2,
        leads: {}
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '115 x/menit',
        axis: 'Normal atau bervariasi',
        prInterval: '0.14 detik',
        qrsComplex: '0.08 detik — Low voltage menyeluruh (semua lead amplitudo kecil)',
        stSegment: 'Isoelektrik',
        tWave: 'Normal — Electrical alternans: QRS bergantian tinggi-rendah (patognomonik tamponade)',
        qtInterval: 'QTc normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Sinus Takikardia + Low Voltage + Electrical Alternans (trias tamponade)'
      },
      clinical: {
        scenario: 'Pasien kanker paru, sesak akut, lemas. TD: 85/60 (pulsus paradoxus 20 mmHg), JVP meningkat (distensi vena leher), HR: 118 x/m, bunyi jantung jauh (muffled). Ekokardiografi: efusi perikardial besar dengan tanda tamponade (RA collapse, RV diastolic collapse).',
        correlation: 'Trias Beck: hipotensi + JVP meningkat + bunyi jantung jauh. Low voltage + electrical alternans pada EKG khas untuk efusi perikardial masif. Tamponade adalah syok obstruktif akibat tekanan intraperikardial > tekanan jantung.',
        diagnosis: 'Cardiac Tamponade — Syok Obstruktif (Efusi Perikardial)',
        differential: 'Tension pneumothorax (trakea deviasi, suara napas hilang), PE masif, Syok kardiogenik'
      },
      management: {
        acute: '1. Perikardiosentesis darurat (USG-guided atau blind) — subxiphoid approach\n2. Bisa dekompresi 20-50 mL → perbaikan dramatis\n3. IV fluids bolus (sementara menjaga preload)\n4. Inotropik/vasopresor (bridge)\n5. Identifikasi penyebab (maligna, TB, uremia, infeksi)',
        drugs: 'IV fluids, Inotropik (Dobutamin), Analgesik',
        referral: 'RUJUK DARURAT IGD → Perikardiosentesis → Rujuk Sp.JP untuk drainase definitif'
      },
      osceTemplate: '"Pasien sesak akut + hipotensi + JVP meningkat + bunyi jantung jauh. EKG: low voltage + electrical alternans. Diagnosis: Cardiac Tamponade. Saya lakukan perikardiosentesis darurat subxiphoid, dekompresi, dan rujuk ke kardiologi."'
    },
    {
      id: 'm2-18',
      title: 'Hyperkalemia Emergency — Sine Wave',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 42, prInterval: 0.28, qrsDuration: 0.20, qtInterval: 0.50,
        pVisible: false, pAmplitude: 0, rAmplitude: 0.5, sAmplitude: 0.5, tAmplitude: 1.5,
        hyperkalemia: true, tPeaked: true,
        leads: {}
      },
      interp: {
        irama: 'Sine wave (gelombang sinus) — P tidak ada, QRS-T menyatu',
        rate: '42 x/menit (Bradikardia berat)',
        axis: 'Tidak dapat ditentukan',
        prInterval: 'PR memanjang (0.28) lalu P menghilang',
        qrsComplex: '0.20 detik (LEBAR EKSTREM) — QRS menyatu dengan T',
        stSegment: 'Menyatu — tidak dapat dibedakan dari QRS dan T',
        tWave: 'Sangat tinggi runcing (tall tented) menyatu dengan QRS = sine wave',
        qtInterval: 'QT tidak terukur',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'HIPERKALEMIA BERAT — Sine Wave (pre-terminal) — Fase IV'
      },
      clinical: {
        scenario: 'Pasien CKD stage 5, tidak HD 5 hari, lemas berat, pusing, bradikardia 38 x/m. K+ serum: 8.5 mEq/L. Monitor EKG: sine wave.',
        correlation: 'Hiperkalemia berat adalah ancaman henti jantung segera. Tahapan EKG: T tinggi → PR panjang → P hilang → QRS lebar → sine wave → VF/asystole. Sine wave adalah TANDA PRE-TERMINAL yang menandakan K+ > 7.5-8.0.',
        diagnosis: 'Hiperkalemia — Sine Wave (Emergensi Hemodialisis)',
        differential: 'VT (sine wave lebih lebar, tidak ada P, tidak ada isoelectric baseline)'
      },
      management: {
        acute: '1. KALSIUM GLUKONAS 10% 20-30 mL IV segera (proteksi jantung dalam 1-3 menit)\n2. Insulin 10 unit + Dekstrosa 40-50 gram IV\n3. Salbutamol neb 10-20 mg\n4. NaHCO3 50-100 mEq IV jika asidosis\n5. HEMODIALISIS DARURAT',
        drugs: 'Ca glukonas 10% 20-30mL IV, Insulin 10U, D50 1 ampul, Salbutamol neb, NaHCO3, Furosemid IV',
        referral: 'RUJUK DARURAT IGD → HEMODIALISIS emergensi'
      },
      osceTemplate: '"EKG sine wave — QRS-T menyatu, P hilang, bradikardi. K+ 8.5. EMERGENSI! Saya berikan Kalsium Glukonas 20 mL IV sekarang, Insulin + Dekstrosa, dan rujuk untuk hemodialisis darurat."'
    },
    {
      id: 'm2-19',
      title: 'Aortic Stenosis — LVH with Strain',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 85, prInterval: 0.18, qrsDuration: 0.10, qtInterval: 0.42,
        pVisible: true, pMitrale: true, rAmplitude: 2.5, sAmplitude: 0.5, tAmplitude: -0.5,
        lvh: true,
        leads: {
          'aVL': { rAmplitude: 1.6, tAmplitude: -0.5 },
          'V5': { rAmplitude: 2.8, tAmplitude: -0.5 },
          'V6': { rAmplitude: 2.5, tAmplitude: -0.4 },
          'V1': { sAmplitude: 2.4 },
          'V2': { sAmplitude: 2.0 }
        }
      },
      interp: {
        irama: 'Sinus ritmis',
        rate: '85 x/menit',
        axis: 'LAD (Left Axis Deviation)',
        prInterval: '0.18 detik (normal)',
        qrsComplex: '0.10 detik — High voltage (S V1 + R V5 > 35mm, atau R aVL > 11mm)',
        stSegment: 'ST depresi di V5-V6, I, aVL (LVH strain pattern)',
        tWave: 'T inversi asimetris di V5-V6 (strain), P mitrale (P bifid di II)',
        qtInterval: 'QTc mungkin memanjang ringan',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Left Ventricular Hypertrophy (LVH) dengan Strain Pattern'
      },
      clinical: {
        scenario: 'Laki-laki 68 tahun, sesak progresif, nyeri dada saat aktivitas, sinkop saat olahraga. TD: 100/70 (sempit), HR: 84 x/m. Pulsus parvus et tardus. Bising ejeksi sistolik di ICS 2 kanan, menjalar ke karotis.',
        correlation: 'Trias AS: angina + sinkop + CHF. LVH pada EKG adalah konsekuensi hipertrofi akibat tekanan tinggi di LV outflow tract. Strain pattern = repolarisasi abnormal akibat hipertrofi. Prognosis buruk jika simptomatik.',
        diagnosis: 'Aortic Stenosis Berat — LVH dengan Strain',
        differential: 'Hipertensi (LVH tanpa stenosis), Kardiomiopati hipertrofik, AS ringan-sedang'
      },
      management: {
        acute: '1. EKOKARDIOGRAFI: gradien aortic valve, area valve, EF\n2. Hindari vasodilator/afterload reduction (dapat syok)\n3. Jika simptomatik dan berat: AVR (aortic valve replacement) — bedah atau TAVI\n4. Diuretik dosis rendah jika CHF',
        drugs: 'Furosemid, hindari ACE-inhibitor/Nitrat/Nifedipin',
        referral: 'RUJUK ke Sp.JP untuk ekokardiografi dan AVR/TAVI'
      },
      osceTemplate: '"Pasien dengan trias angina + sinkop + CHF, LVH dengan strain pada EKG, dan bising ejeksi sistolik. Diagnosis: Aortic Stenosis Berat. Saya rujuk untuk ekokardiografi dan rencanakan AVR/TAVI."'
    },
    {
      id: 'm2-20',
      title: 'Multifocal Atrial Tachycardia (MAT)',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 135, prInterval: 0.12, qrsDuration: 0.08, qtInterval: 0.30,
        pVisible: true, pAmplitude: 0.12, rAmplitude: 0.9, sAmplitude: 0.2, tAmplitude: 0.3,
        irregular: true,
        leads: {}
      },
      interp: {
        irama: 'Takikardia dengan P wave yang memiliki MORFOLOGI BERBEDA minimal 3 bentuk, P-P irregular',
        rate: '135 x/menit (takikardia)',
        axis: 'Bervariasi',
        prInterval: 'Bervariasi — tergantung asal fokus',
        qrsComplex: '0.08 detik — Sempit',
        stSegment: 'Isoelektrik',
        tWave: 'Normal',
        qtInterval: 'QTc normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Multifocal Atrial Tachycardia (MAT) — ≥ 3 morfologi P, P-P irregular'
      },
      clinical: {
        scenario: 'Laki-laki 72 tahun, PPOK berat eksaserbasi, sesak, demam. HR: 132 x/m (agak tidak teratur). Pada EKG: P wave dengan 3 bentuk berbeda, PR bervariasi. TD: 110/70, SpO2: 88%.',
        correlation: 'MAT kuat terkait penyakit paru (PPOK, pneumonia, hipoksia, asidosis) dan gangguan elektrolit. Sering salah diagnosis sebagai AF. Membedakan: AF tidak punya P wave sama sekali, MAT punya P wave (3+ bentuk). Tata laksana: KOREKSI PENYEBAB DASAR.',
        diagnosis: 'Multifocal Atrial Tachycardia (MAT) — Sekunder PPOK Eksaserbasi',
        differential: 'AF (irregularly irregular tanpa P), Atrial flutter (P reguler, gigi gergaji), SAP (P irregular tapi 1 morfologi)'
      },
      management: {
        acute: '1. KOREKSI PENYEBAB DASAR: Atasi hipoksia, asidosis, koreksi elektrolit\n2. Obati PPOK eksaserbasi: bronkodilator (β2-agonis/antikolinergik), kortikosteroid, antibiotik\n3. Verapamil/Diltiazem dapat menurunkan HR (setelah koreksi penyebab dasar)\n4. Jangan gunakan Adenosin (tidak efektif untuk MAT)',
        drugs: 'Bronkodilator, kortikosteroid, antibiotik, Verapamil/Diltiazem (jika perlu rate control)',
        referral: 'Rawat inap paru → koreksi penyebab dasar'
      },
      osceTemplate: '"EKG menunjukkan takikardia dengan minimal 3 morfologi P wave berbeda dan P-P irregular. Kesan: Multifocal Atrial Tachycardia. Pasien PPOK eksaserbasi. Tata laksana utama: koreksi hipoksia dan asidosis dengan bronkodilator dan oksigen."'
    },
    {
      id: 'm2-21',
      title: 'Sick Sinus Syndrome — Tachy-Brady Syndrome',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 52, prInterval: 0.18, qrsDuration: 0.08, qtInterval: 0.44,
        pVisible: true, rAmplitude: 1.0, sAmplitude: 0.2, tAmplitude: 0.3,
        leads: {}
      },
      interp: {
        irama: 'Sinus bradikardia dengan episode takikardia supraventrikel (AF, atrial flutter, SVT)',
        rate: 'Bervariasi: 35-48 saat bradikardia, 120-160 saat takikardia',
        axis: 'Normal',
        prInterval: '0.18 detik',
        qrsComplex: '0.08 detik — Sempit',
        stSegment: 'Isoelektrik',
        tWave: 'Normal',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Sick Sinus Syndrome (Tachy-Brady Syndrome)'
      },
      clinical: {
        scenario: 'Wanita 80 tahun, pusing, palpitasi, kadang lemas, kadang berdebar. HR berubah: 42 → 140 → 48. Kadang sinkop saat perubahan irama (pause > 3 detik). Riwayat hipertensi.',
        correlation: 'Tachy-Brady Syndrome: pergantian antara bradikardia sinus (atau sinus arrest) dan takikardia (AF, atrial flutter, SVT). Saat takikardia berhenti, nodus SA gagal "memulai ulang" (sinus pause > 3 detik) → sinkop. Tidak responsif obat; pacemaker diperlukan.',
        diagnosis: 'Sick Sinus Syndrome — Tipe Tachy-Brady',
        differential: 'AF dengan ventricular pause (setelah kardioversi, atau khas pada AF + AV block kronik)'
      },
      management: {
        acute: '1. Monitor 24 jam (Holter) untuk korelasi gejala-irama\n2. Jika ada sinkop + pause > 3 detik → PACEMAKER permanent\n3. Setelah pacemaker → beri obat untuk kontrol takikardia (beta-blocker/CCB)\n4. Jangan beri AV blocker tanpa pacemaker (dapat memperparah bradikardia)',
        drugs: 'Setelah pacemaker: Metoprolol/Diltiazem untuk takikardia. Sebelumnya: tidak ada obat aman.',
        referral: 'RUJUK Sp.JP untuk pemasangan Dual-Chamber Pacemaker (DDD)'
      },
      osceTemplate: '"Pasien dengan perubahan HR 42 → 140 → 48, sinkop. Diagnosis: Sick Sinus Syndrome (Tachy-Brady). Monitoring Holter menunjukkan pause > 3 detik. Saya rujuk untuk pacemaker DDD, lalu kontrol takikardia dengan beta-blocker."'
    },
    {
      id: 'm2-22',
      title: 'Wolff-Parkinson-White (WPW) Pattern',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 72, prInterval: 0.08, qrsDuration: 0.12, qtInterval: 0.40,
        pVisible: true, pAmplitude: 0.12, rAmplitude: 1.2, sAmplitude: 0.2, tAmplitude: -0.2,
        wpw: true, deltaWave: true,
        leads: {
          'V1': { rAmplitude: 0.8, deltaWave: true },
          'V2': { rAmplitude: 1.2, deltaWave: true },
          'V5': { rAmplitude: 1.5, deltaWave: true, tAmplitude: -0.3 },
          'V6': { rAmplitude: 1.4, deltaWave: true, tAmplitude: -0.3 }
        }
      },
      interp: {
        irama: 'Sinus ritmis',
        rate: '72 x/menit',
        axis: 'Normal',
        prInterval: '0.08 detik (< 120 ms — PENDEK)',
        qrsComplex: '0.12 detik (LEBAR — karena delta wave memperlambat konduksi awal)',
        stSegment: 'ST depresi ringan/T inversi (sekunder — "pseudoinfark" karena repolarisasi abnormal)',
        tWave: 'Inverted di lead prekordial lateral (V5-V6) — sekunder delta wave',
        qtInterval: 'QTc normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'WPW PATTERN (Pre-eksitasi Ventrikel) — PR pendek, Delta wave, QRS lebar'
      },
      clinical: {
        scenario: 'Laki-laki 22 tahun, EKG insidental saat medical check-up. Tidak ada keluhan, tidak ada palpitasi. Riwayat sinkop (-). EKG: PR 0.08, delta wave positif di V1-V6 (Type A — left-sided pathway).',
        correlation: 'WPW pattern terjadi karena jalur aksesoris (bundel Kent) yang menghubungkan atrium-ventrikel tanpa melalui AV node. Delta wave = depolarisasi awal ventrikel melalui aksesoris. Type A (delta + di V1), Type B (delta - di V1). Risiko: AF pre-eksitasi dapat degenerasi ke VF.',
        diagnosis: 'Wolff-Parkinson-White (WPW) Pattern — Asimptomatik',
        differential: 'LBBB/RBBB, LVH, MI inferior/posterior (delta wave dapat mirip Q patologis)'
      },
      management: {
        acute: '1. Jika ASIMPTOMATIK: observasi, edukasi\n2. Strategi stratifikasi risiko: EP study untuk mengukur refractory period aksesoris\n3. Jika high-risk (sport atlet, high-risk pekerjaan) atau simptomatik → ABLASI\n4. JANGAN BERIKAN AV blocker (Verapamil/Digoksin) jika ada pre-eksitasi AF',
        drugs: 'Tidak perlu. Jika simptomatik: kombinasi Prokainamid atau Ibutilide untuk AF pre-eksitasi.',
        referral: 'Rujuk Sp.JP untuk ablasi radiofrekuensi jika simptomatik atau high-risk'
      },
      osceTemplate: '"EKG: PR pendek 0.08 detik, delta wave (slurred upstroke QRS), QRS 0.12 detik. Kesan: WPW Pattern. Pasien asimptomatik. Saya akan edukasi dan rencanakan EP study untuk stratifikasi risiko."'
    },
    {
      id: 'm2-23',
      title: 'Dilated Cardiomyopathy (DCM) — LBBB + CHF',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 90, prInterval: 0.18, qrsDuration: 0.16, qtInterval: 0.46,
        pVisible: true, rAmplitude: 0.8, sAmplitude: 0.5, tAmplitude: -0.4,
        lbbb: true,
        leads: {
          'V1': { sAmplitude: 1.8 },
          'V2': { sAmplitude: 1.5 },
          'V5': { rAmplitude: 1.0, notchedR: true, tAmplitude: -0.4 },
          'V6': { rAmplitude: 0.8, notchedR: true, tAmplitude: -0.3 },
          'I': { rAmplitude: 0.6, tAmplitude: -0.2 }
        }
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '90 x/menit',
        axis: 'LAD (Left Axis Deviation)',
        prInterval: '0.18 detik',
        qrsComplex: '0.16 detik (LEBAR) — LBBB (R notched di V5-V6, S dominan di V1-V2)',
        stSegment: 'Diskordan dengan QRS',
        tWave: 'Inverted di V5-V6',
        qtInterval: 'QTc memanjang (karena QRS lebar)',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'LBBB + Sinus Takikardia — DCM pattern'
      },
      clinical: {
        scenario: 'Laki-laki 55 tahun, sesak progresif 6 bulan, ortopnea, edema tungkai. TD: 95/65, HR: 92 x/m, JVP meningkat. Ronki basah basal. Ekokardiografi: EF 25%, LVEDD 65mm (dilatasi).',
        correlation: 'DCM ditandai oleh dilatasi ventrikel kiri + disfungsi sistolik. LBBB pada DCM memperburuk disinkroni ventrikel → penurunan EF lebih lanjut. CRT (biventricular pacing) + ICD dapat memperbaiki gejala dan survival.',
        diagnosis: 'Dilated Cardiomyopathy — CHF (NYHA III) dengan LBBB',
        differential: 'Ischemic cardiomyopathy (sebab iskemia/infark — perlu angiografi), Hipertensi, Aortic regurgitasi, Alkohol, Post-partum'
      },
      management: {
        acute: '1. Dekompresi: diuretik (Furosemid), vasodilator\n2. GDMT: ACE-inhibitor (Ramipril) + Beta-blocker (Bisoprolol/Carvidelol) + MRA (Spironolakton)\n3. CRT-D (Cardiac Resynchronization Therapy + Defibrillator) jika EF ≤ 35% + LBBB QRS ≥ 150 ms + optimal medical therapy 3 bulan\n4. Antikoagulasi jika AF menyertai',
        drugs: 'Furosemid, Ramipril, Bisoprolol, Spironolakton, Empagliflozin',
        referral: 'RUJUK Sp.JP untuk optimalisasi terapi dan CRT-D'
      },
      osceTemplate: '"Pasien CHF dengan EF 25%, LBBB QRS 160 ms. Diagnosis: Dilated Cardiomyopathy. Saya mulai GDMT (ACE-i + Beta-blocker + MRA). Setelah 3 bulan jika EF masih ≤35%, rencanakan CRT-D."'
    },
    {
      id: 'm2-24',
      title: 'Hypertrophic Cardiomyopathy (HCM)',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 78, prInterval: 0.14, qrsDuration: 0.10, qtInterval: 0.42,
        pVisible: true, pMitrale: true, rAmplitude: 2.8, sAmplitude: 0.6, tAmplitude: -1.0,
        lvh: true,
        leads: {
          'V1': { sAmplitude: 3.0 },
          'V2': { sAmplitude: 2.5 },
          'V3': { rAmplitude: 3.0, tAmplitude: -1.2 },
          'V4': { rAmplitude: 3.2, tAmplitude: -1.0 },
          'V5': { rAmplitude: 2.8, tAmplitude: -0.8 },
          'V6': { rAmplitude: 2.5, tAmplitude: -0.6 },
          'I': { rAmplitude: 1.8 },
          'aVL': { rAmplitude: 1.6 }
        }
      },
      interp: {
        irama: 'Sinus ritmis',
        rate: '78 x/menit',
        axis: 'LAD (Left Axis Deviation)',
        prInterval: '0.14 detik',
        qrsComplex: '0.10 detik — High voltage ekstrem (LVH pattern)',
        stSegment: 'ST depresi dalam di V3-V6, I, aVL',
        tWave: 'T inversi SANGAT DALAM dan simetris di prekordial (V3-V6 > 10mm) — khas HCM (kadang disebut "gothic T")',
        qtInterval: 'QTc memanjang',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'HYPERTROPHIC CARDIOMYOPATHY (HCM) — LVH + T inversi dalam prekordial'
      },
      clinical: {
        scenario: 'Laki-laki 28 tahun, atlet basket, pernah sinkop saat bertanding. Riwayat kakek meninggal mendadak usia 35 tahun. EKG: LVH + T inversi dalam V3-V6. Ekokardiografi: septal hypertrophy 22 mm (asimetris).',
        correlation: 'HCM adalah penyebab tersering SCD (Sudden Cardiac Death) pada atlet muda. EKG: LVH voltage + T inversi dalam ("gothic T") + Q patologis septal mungkin ada. Septal hypertrophy asimetris > 15mm. Skrining keluarga penting.',
        diagnosis: 'Hypertrophic Cardiomyopathy (HCM) — High Risk SCD',
        differential: 'LVH hipertensi (T inversi asimetris, tidak sedalam HCM), Athlete heart (LVH tanpa T inversi), LV non-compaction'
      },
      management: {
        acute: '1. Hindari olahraga kompetitif (risiko SCD)\n2. Beta-blocker (Atenolol/Bisoprolol) — mengurangi LVOT gradient\n3. Jika obat tidak toleransi: Verapamil/Disopyramid\n4. STRATIFIKASI RISIKO SCD: riwayat sinkop, ketebalan septum > 30mm, VT non-sustained, keluarga SCD, abnormal BP exercise\n5. ICD untuk pencegahan primer (jika high risk) dan sekunder',
        drugs: 'Bisoprolol/Atenolol, Verapamil, Disopyramid',
        referral: 'RUJUK Sp.JP untuk skrining keluarga, stratifikasi risiko SCD, dan ICD'
      },
      osceTemplate: '"Atlet muda dengan sinkop, LVH + T inversi dalam di prekordial. Riwayat keluarga SCD. Diagnosis: HCM. Saya larang olahraga kompetitif, berikan Bisoprolol, rujuk untuk ekokardiografi dan stratifikasi risiko SCD untuk ICD."'
    },
    {
      id: 'm2-25',
      title: 'Early Repolarization (Normal Variant)',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 70, prInterval: 0.16, qrsDuration: 0.08, qtInterval: 0.40,
        pVisible: true, rAmplitude: 1.0, sAmplitude: 0.2, tAmplitude: 0.4,
        earlyRepol: true,
        leads: {
          'V2': { stElevation: 0.15, rAmplitude: 1.2 },
          'V3': { stElevation: 0.2, rAmplitude: 1.5 },
          'V4': { stElevation: 0.2, rAmplitude: 1.8 },
          'V5': { stElevation: 0.15, rAmplitude: 1.5 },
          'V6': { stElevation: 0.1, rAmplitude: 1.2 },
          'II': { stElevation: 0.08 },
          'III': { stElevation: 0.05 }
        }
      },
      interp: {
        irama: 'Sinus ritmis',
        rate: '70 x/menit',
        axis: 'Normoaksis',
        prInterval: '0.16 detik — Normal',
        qrsComplex: '0.08 detik — Sempit, tidak ada Q patologis',
        stSegment: 'ST elevasi ringan (+1-2mm) di prekordial (V2-V5) + notching/slurring di akhir QRS (J-point elevasi)',
        tWave: 'T tinggi tegak, asimetris (T amplop)',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'EARLY REPOLARIZATION PATTERN (Normal Variant) — ST elevasi di prekordial'
      },
      clinical: {
        scenario: 'Laki-laki 20 tahun, atlet lari, medical check-up. Tidak ada keluhan. EKG: ST elevasi ringan di V2-V5 dengan J-point notching, tanpa Q patologis atau ST depresi resiprokal. Troponin normal.',
        correlation: 'Early repolarization adalah varian normal yang sering ditemukan pada pria muda, atlet, dan ras Afrika/Asia. Penting dibedakan dari STEMI: early repol memiliki ST elevasi konkaf (cekung), J-point notching/slurring, T tinggi asimetris, tidak ada Q patologis, tidak ada resiprokal ST depresi, dan tidak progresi pada EKG serial.',
        diagnosis: 'Early Repolarization Pattern (Varian Normal)',
        differential: 'STEMI (ST elevasi cembung, Q patologis, resiprokal, perubahan serial), Perikarditis akut (PR depresi, nyeri pleuritik)'
      },
      management: {
        acute: '1. Jika asimptomatik: Tidak perlu tatalaksana — ini varian normal\n2. Jika nyeri dada: serial EKG + Troponin untuk menyingkirkan STEMI\n3. Jika atlet: skrining HCM, LVH athlet heart\n4. Tidak ada aktivitas terbatas',
        drugs: 'Tidak ada.',
        referral: 'Tidak perlu dirujuk jika asimptomatik.'
      },
      osceTemplate: '"EKG: ST elevasi ringan konkaf (cekung) di V2-V5 dengan J-point notching, T tinggi asimetris, tanpa Q patologis atau resiprokal. Kesan: Early Repolarization Pattern — varian normal pada atlet muda. Tidak perlu tatalaksana."'
    }
  ],

  // ======================== MODE 3: KOMPREHENSIF ========================
  mode3: [
    {
      id: 'm3-01',
      title: 'STEMI Inferior + RV Infarct + Syok',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 55, prInterval: 0.18, qrsDuration: 0.08, qtInterval: 0.44,
        pVisible: true, rAmplitude: 0.8, sAmplitude: 0.2, tAmplitude: 0.5,
        leads: {
          'II': { stElevation: 0.3, qAmplitude: 0.15, tAmplitude: 0.5 },
          'III': { stElevation: 0.45, qAmplitude: 0.2, tAmplitude: 0.6 },
          'aVF': { stElevation: 0.35, qAmplitude: 0.15, tAmplitude: 0.5 },
          'I': { stDepression: 0.15 },
          'aVL': { stDepression: 0.2 },
          'V4R': { stElevation: 0.2 }
        }
      },
      interp: {
        irama: 'Sinus bradikardia (iskemia nodus AV)',
        rate: '55 x/menit',
        axis: 'Normal',
        prInterval: '0.18 detik (sedikit memanjang — waspada progresi AV block)',
        qrsComplex: '0.08 detik — Q patologis di II, III, aVF',
        stSegment: 'ST elevasi signifikan di II, III, aVF + ST elevasi V4R (kiri 1mm, kanan 2mm) = RV infarct',
        tWave: 'T hiperakut di inferior',
        qtInterval: 'QTc normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'STEMI Inferior + Infark Ventrikel Kanan (RCA proksimal)'
      },
      clinical: {
        scenario: 'Laki-laki 58 tahun, nyeri dada inferior, hipotensi TD 80/50 (tidak respon nitrat), JVP meningkat, namun paru BERSIH (tidak ada ronki). Bradikardia 52 x/m.',
        correlation: 'ST elevasi di V4R >1 mm sangat spesifik untuk RV infarct. Trias klinis: hipotensi + JVP meningkat + paru bersih. KONTRAINDIKASI NITRAT, MORFIN, DIURETIK (menurunkan preload → syok lebih berat).',
        diagnosis: 'STEMI Inferior + Right Ventricular Infarction + Syok Kardiogenik (Killip IV)',
        differential: 'STEMI inferior saja (normotensi, V4R normal), Tamponade jantung (trakea midline, EKG low voltage, electrical alternans)'
      },
      management: {
        acute: '1. HINDARI NITRAT, MORFIN, DIURETIK!\n2. Berikan Aspirin 160-320 mg (kunyah) + Clopidogrel 300 mg oral\n3. RESUSITASI CAIRAN AGGRESIF: NaCl 0.9% 500-1000 mL bolus\n3. Jika tidak membaik: Dobutamin atau Norepinefrin\n4. Reperfusi darurat: Primary PCI (rekanalisasi RCA)\n5. Atropin jika bradikardia simptomatik\n6. Pacemaker siaga (risiko AV block tinggi)',
        drugs: 'IV fluids (NaCl/RL), Dobutamin, Atropin, Aspirin, Clopidogrel, Heparin',
        referral: 'RUJUK DARURAT CATHLAB untuk PCI RCA (rekanalisasi)'
      },
      osceTemplate: '"STEMI inferior dengan ST elevasi V4R, hipotensi, JVP meninggi, paru bersih. Diagnosis: STEMI Inferior + RV Infarct. Saya HENTIKAN NITRAT, beri bolus cairan 1000 mL, dan rujuk darurat PCI. Hindari Morfin dan Diuretik."'
    },
    {
      id: 'm3-02',
      title: 'AF with Pre-Excitation (WPW + AF)',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 195, prInterval: 0, qrsDuration: 0.14, qtInterval: 0.24,
        pVisible: false, rAmplitude: 1.2, sAmplitude: 0.3, tAmplitude: -0.4,
        irregular: true, fibrillation: true, wpw: true, deltaWave: true,
        leads: {
          'V1': { rAmplitude: 0.8 },
          'V5': { rAmplitude: 1.5, tAmplitude: -0.4 }
        }
      },
      interp: {
        irama: 'Irregularly irregular dengan QRS LEBAR dan delta wave — tidak ada P wave',
        rate: '~195 x/menit (sangat cepat)',
        axis: 'Bervariasi',
        prInterval: 'Tidak ada',
        qrsComplex: '0.14 detik (LEBAR) — morfologi bervariasi dari sempit ke lebar, delta wave visible',
        stSegment: 'Tidak dapat dinilai',
        tWave: 'Diskordan sekunder',
        qtInterval: 'QT memanjang karena QRS lebar',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'ATRIAL FIBRILLATION dengan PRE-EXCITATION (WPW + AF)'
      },
      clinical: {
        scenario: 'Laki-laki 25 tahun dengan WPW, tiba-tiba berdebar dan pusing lalu tidak sadar. EKG: AF dengan HR 200+, QRS lebar bervariasi, delta wave tampak. TD 80/50.',
        correlation: 'AF pre-eksitasi sangat berbahaya: aksesoris dapat menghantarkan 300 impuls atrium/menit ke ventrikel → sangat cepat → degenerasi ke VF (SCD). Verapamil/Digoksin KONTRAINDIKASI (mempercepat konduksi aksesoris).',
        diagnosis: 'AF Pre-Excitation (WPW + Atrial Fibrillation) — High Risk',
        differential: 'VT (reguler, AV dissociation, monomorfik), AF dengan LBBB (preeksisting BBB tanpa delta, HR < 200)'
      },
      management: {
        acute: '1. TIDAK STABIL → KARDIOVERSI DARURAT (synchronized shock 100-200 J)\n2. STABIL → Prokainamid IV 50 mg/menit atau Ibutilide IV (memperlambat konduksi aksesoris)\n3. JANGAN BERIKAN: Verapamil, Diltiazem, Digoksin, Adenosin (dapat ↑ kecepatan konduksi aksesoris → VF)\n4. ABLASI RADIOFREKUENSI definitif',
        drugs: 'Prokainamid IV, Ibutilide IV, Kardioversi listrik. Hindari AV blocker dan Adenosin.',
        referral: 'RUJUK DARURAT untuk kardioversi → Sp.JP untuk ablasi'
      },
      osceTemplate: '"AF dengan HR >200, QRS lebar bervariasi, delta wave. Diagnosis: WPW + AF Pre-eksitasi. JANGAN berikan Verapamil/Digoksin. Pasien tidak stabil → kardioversi 100 J. Jika stabil: Prokainamid IV. Rujuk ablasi."'
    },
    {
      id: 'm3-03',
      title: 'Subarachnoid Hemorrhage — Neurogenic T Wave',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 100, prInterval: 0.14, qrsDuration: 0.09, qtInterval: 0.52,
        pVisible: true, rAmplitude: 0.9, sAmplitude: 0.2, tAmplitude: -1.2,
        qtLong: true,
        leads: {
          'V3': { tAmplitude: -1.2 },
          'V4': { tAmplitude: -1.1 },
          'V5': { tAmplitude: -1.0 },
          'V6': { tAmplitude: -0.8 },
          'I': { tAmplitude: -0.6 },
          'II': { tAmplitude: -0.8 },
          'III': { tAmplitude: -0.5 }
        }
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '100 x/menit',
        axis: 'Normal',
        prInterval: '0.14 detik',
        qrsComplex: '0.09 detik',
        stSegment: 'ST depresi ringan atau elevasi ringan non-spesifik',
        tWave: 'T inversi SANGAT DALAM dan luas (semua lead) + QT memanjang — "cerebral T wave"',
        qtInterval: 'QTc > 0.52 detik (MEMANJANG SIGNIFIKAN)',
        uWave: 'Mungkin tampak prominent',
        ecgDiagnosis: 'Cerebral T Wave (Neurogenic) — T inversi dalam + QT memanjang'
      },
      clinical: {
        scenario: 'Perempuan 55 tahun, sakit kepala berat mendadak "seperti disambar petir", muntah proyektil, penurunan kesadaran. CT scan: perdarahan subarachnoid. EKG: T inversi dalam di banyak lead, QT 0.56.',
        correlation: 'Cerebral T wave adalah perubahan EKG akibat cedera SSP (SAH, stroke, trauma kepala, tumor) — disebabkan pelepasan katekolamin masif → repolarisasi abnormal. Dapat mirip NSTEMI. Serial Troponin biasanya normal atau meningkat ringan. QT panjang risiko Torsades.',
        diagnosis: 'Perdarahan Subarachnoid (SAH) dengan Neurogenic T Wave',
        differential: 'NSTEMI/ACS (Troponin ↑↑, koroner abnormal), Takotsubo (ballooning apical), Miokarditis'
      },
      management: {
        acute: '1. Atasi penyebab SSP: konsul bedah saraf (coiling/clipping aneurisma)\n2. Monitor EKG terus menerus (risiko Torsades)\n3. Koreksi K+ > 4.5, Mg > 2.0\n4. Jangan berikan antikoagulan/antiplatelet (perdarahan SSP!)\n5. Beta-blocker dapat mengurangi risiko aritmia katekolaminergik',
        drugs: 'Nimodipin (vasospasme), Beta-blocker, MgSO4 (jika QT panjang > risiko TdP)',
        referral: 'RUJUK DARURAT ke Bedah Saraf/Neurologi'
      },
      osceTemplate: '"Sakit kepala thunderclap, penurunan kesadaran. EKG: T inversi dalam + QT 0.56. Diagnosis: Perdarahan Subarachnoid dengan Cerebral T Wave. Ini perubahan neurogenik, bukan ACS. Rujuk bedah saraf darurat."'
    },
    {
      id: 'm3-04',
      title: 'Pulmonary Edema — Hypertensive Crisis',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 110, prInterval: 0.16, qrsDuration: 0.10, qtInterval: 0.34,
        pVisible: true, pMitrale: true, rAmplitude: 2.4, sAmplitude: 0.6, tAmplitude: -0.5,
        lvh: true,
        leads: {
          'V5': { rAmplitude: 2.6, tAmplitude: -0.5 },
          'V6': { rAmplitude: 2.4, tAmplitude: -0.4 },
          'V1': { sAmplitude: 2.2 },
          'aVL': { rAmplitude: 1.5, tAmplitude: -0.4 },
          'II': { stDepression: 0.1 }
        }
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '110 x/menit',
        axis: 'LAD (Left Axis Deviation)',
        prInterval: '0.16 detik',
        qrsComplex: '0.10 detik — LVH voltage criteria',
        stSegment: 'ST depresi di V5-V6 (LVH strain) — mungkin juga iskemia',
        tWave: 'T inversi asimetris lateral (strain pattern)',
        qtInterval: 'QTc normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Sinus Takikardia + LVH dengan Strain (Hipertensi Kronik)'
      },
      clinical: {
        scenario: 'Laki-laki 62 tahun, sesak akut berat, ortopnea, batuk berbusa merah muda. TD: 240/130, HR: 112 x/m, RR: 32 x/m, SpO2: 84%. Ronki basah setengah lapang paru. JVP meningkat.',
        correlation: 'Krisis hipertensi menyebabkan peningkatan afterload mendadak → gagal jantung kiri akut → edema paru. LVH pada EKG menandakan hipertensi kronik. Target: turunkan MAP 20-25% dalam 1 jam, jangan turun drastis.',
        diagnosis: 'Hypertensive Emergency — Acute Pulmonary Edema (Killip III)',
        differential: 'Edema paru non-kardiogenik (ARDS, pneumonia), STEMI dengan CHF, Regurgitasi mitral akut'
      },
      management: {
        acute: '1. DUDUKKAN pasien, O2/NIV/CPAP\n2. Furosemid 40-80 mg IV\n3. ISDN IV drip (5-200 mcg/menit) — vasodilator & anti-iskemia\n4. Jika TD tidak terkontrol: Nicardipin IV drip\n5. Morfin 2.5-5 mg IV (ansiolitik + vasodilator)\n6. Intubasi jika refrakter',
        drugs: 'Furosemid IV, ISDN IV, Nicardipin IV, Morfin IV, Norepinefrin (jika syok)',
        referral: 'RUJUK ICCU atau ICU. Ventilasi mekanik jika perlu.'
      },
      osceTemplate: '"Krisis hipertensi TD 240/130 dengan edema paru akut. EKG: sinus takikardia, LVH strain. Diagnosis: Hypertensive Emergency + Acute Pulmonary Edema. Saya beri O2/NIV, Furosemid 40 mg IV, ISDN drip, dan Nicardipin drip."'
    },
    {
      id: 'm3-05',
      title: 'Brugada Syndrome Type I',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 65, prInterval: 0.18, qrsDuration: 0.10, qtInterval: 0.42,
        pVisible: true, rAmplitude: 0.6, sAmplitude: 0.5, tAmplitude: -0.4,
        leads: {
          'V1': { rAmplitude: 0.3, sAmplitude: 0.2, stElevation: 0.35, tAmplitude: -0.4 },
          'V2': { rAmplitude: 0.4, sAmplitude: 0.3, stElevation: 0.3, tAmplitude: -0.3 },
          'V3': { stElevation: 0.1 }
        }
      },
      interp: {
        irama: 'Sinus ritmis',
        rate: '65 x/menit',
        axis: 'Normal',
        prInterval: '0.18 detik (batas normal)',
        qrsComplex: '0.10 detik — Terminal QRS slurring di V1-V2',
        stSegment: 'ST elevasi coved (kubah) di V1-V2 ≥ 2mm, diikuti T inversi — "coved type" (Type I Brugada)',
        tWave: 'T inversi di V1-V2',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'BRUGADA PATTERN TYPE I (Coved-Type) — ST elevasi V1-V2 + T inversi'
      },
      clinical: {
        scenario: 'Laki-laki 35 tahun, riwayat saudara meninggal mendadak usia 30 tahun. Sinkop saat demam tinggi 2 tahun lalu. EKG: ST elevasi kubah di V1-V2 dengan T inversi.',
        correlation: 'Brugada syndrome adalah channelopathy sodium channel (SCN5A) yang menyebabkan SCD pada malam hari/istirahat. Type I (coved) adalah satu-satunya yang diagnostik. Dipicu demam, obat Na-blocker, alkohol. AED sebaiknya dipasang.',
        diagnosis: 'Brugada Syndrome Type I — Risiko SCD',
        differential: 'Early repolarization (ST cekung, T tinggi, tidak di V1-V2), RVH, RBBB (RSR\' tanpa ST elevasi)'
      },
      management: {
        acute: '1. Hindari obat pemicu (Na-blocker, alkohol, kokain)\n2. Atasi demam segera (Parasetamol, kompres)\n3. ICD (Implantable Cardioverter-Defibrillator) — indikasi untuk simptomatik\n4. Skrining keluarga (EKG + genetik)',
        drugs: 'Kuindin dapat digunakan untuk mengurangi storm aritmia. Tidak ada obat kuratif.',
        referral: 'RUJUK Sp.JP untuk stratifikasi risiko, ICD, dan skrining keluarga'
      },
      osceTemplate: '"EKG: ST elevasi coved (kubah) di V1-V2 dengan T inversi. Diagnosis: Brugada Pattern Type I. Pasien sinkop + riwayat keluarga SCD. Rujuk untuk ICD dan skrining keluarga."'
    },
    {
      id: 'm3-06',
      title: 'Long QT Syndrome — Torsades de Pointes',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 120, prInterval: 0.16, qrsDuration: 0.09, qtInterval: 0.56,
        pVisible: true, rAmplitude: 0.8, sAmplitude: 0.2, tAmplitude: 0.3,
        qtLong: true,
        leads: {}
      },
      interp: {
        irama: 'Sinus takikardia (atau VT polimorfik torsades)',
        rate: 'Sinus: 120 atau TdP: 200-250',
        axis: 'Normal atau bervariasi',
        prInterval: '0.16 detik',
        qrsComplex: '0.09 detik — normal saat sinus',
        stSegment: 'Isoelektrik',
        tWave: 'T gelombang lebar, terpisah dari QRS — sulit menentukan akhir T',
        qtInterval: 'QTc > 0.56 detik (MEMANJANG SANGAT SIGNIFIKAN)',
        uWave: 'Prominent U wave mungkin ada (membuat sulit bedakan dari T)',
        ecgDiagnosis: 'LONG QT SYNDROME (QTc > 0.56) — Risiko Torsades de Pointes'
      },
      clinical: {
        scenario: 'Wanita 35 tahun, sinkop 2 kali saat olahraga renang. Riwayat tuli kongenital (sindrom Jervell-Lange-Nielsen). QTc > 560 ms. Ibu meninggal mendadak usia 42 tahun. HR istirahat 58.',
        correlation: 'Long QT Syndrome: congenital (Romano-Ward, Jervell-Lange-Nielsen), acquired (obat — kelas IA/III, antipsikotik, makrolida, antihistamin, elektrolit). Risiko TdP meningkat jika QTc > 500 ms. Olahraga dan emosi sebagai pencetus.',
        diagnosis: 'Congenital Long QT Syndrome (LQTS) — Risiko Tinggi SCD',
        differential: 'Acquired LQTS (obat, elektrolit — perlu identifikasi penyebab), Hipokalemia (kuU wave prominent, T flat)'
      },
      management: {
        acute: '1. Hentikan semua obat pemanjang QT\n2. Koreksi K+ > 4.5, Mg > 2.0\n3. Beta-blocker NON-selektif: Propranolol/Nadolol (dosis tinggi) — mengurangi risiko TdP\n4. Hindari olahraga kompetitif, renang\n5. ICD jika tidak respon beta-blocker atau high-risk (QT > 500, sinkop, riwayat SCD keluarga)\n6. Mexiletine dapat memperpendek QT pada LQT3',
        drugs: 'Propranolol/Nadolol, Mexiletine, MgSO4 (jika TdP)',
        referral: 'RUJUK Sp.JP untuk genetik + ICD'
      },
      osceTemplate: '"QTc 560 ms, sinkop saat renang, riwayat keluarga SCD. Diagnosis: Long QT Syndrome (kemungkinan LQT1). Saya berikan Propranolol dosis tinggi, larang renang, dan rujuk untuk ICD."'
    },
    {
      id: 'm3-07',
      title: 'Acute Rheumatic Fever — Carditis',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 115, prInterval: 0.24, qrsDuration: 0.10, qtInterval: 0.36,
        pVisible: true, rAmplitude: 0.8, sAmplitude: 0.3, tAmplitude: 0.2,
        leads: {}
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '115 x/menit',
        axis: 'Normal',
        prInterval: '0.24 detik (MEMANJANG — AV block derajat 1)',
        qrsComplex: '0.10 detik — Low voltage mungkin',
        stSegment: 'Isoelektrik',
        tWave: 'T inversi ringan mungkin ada (carditis)',
        qtInterval: 'QTc normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Sinus Takikardia + AV Block Derajat 1 (PR memanjang) — Karditis Reumatik'
      },
      clinical: {
        scenario: 'Anak 10 tahun, demam 2 minggu, nyeri sendi lutut dan pergelangan (migrating polyarthritis), sesak ringan, jantung berdebar. 3 minggu lalu radang tenggorokan (faringitis). TD: 100/65, HR: 118 x/m. Bising regurgitasi mitral (+). Anti-streptolysin O titer meningkat.',
        correlation: 'Kriteria JONES untuk demam reumatik: Carditis + Polyarthritis + Chorea + Erythema marginatum + Subcutaneous nodules. EKG: PR memanjang (AV block derajat 1) adalah tanda karditis paling sering pada ARF. Regurgitasi mitral paling khas.',
        diagnosis: 'Demam Reumatik Akut — Karditis (PR memanjang) + Polyarthritis',
        differential: 'Miokarditis viral (Troponin ↑, virus prodrome), Endokarditis infektif, Juvenile idiopathic arthritis'
      },
      management: {
        acute: '1. ERADIASI STREPTOKOKUS: Benzatin Penisilin G 1.2 juta U IM single dose (atau Penisilin V 10 hari)\n2. ANTIINFLAMASI: Aspirin 80-100 mg/kg/hari atau Prednison 2 mg/kg/hari (jika karditis berat)\n3. Tirah baring jika karditis\n4. PENCEGAHAN SEKUNDER: Benzatin Penisilin IM setiap 3-4 minggu (minimal 10 tahun)',
        drugs: 'Benzatin Penisilin G IM, Aspirin, Prednison, Furosemid (jika CHF)',
        referral: 'RUJUK Sp.JP Anak + konsul kardiologi reumatik'
      },
      osceTemplate: '"Anak dengan demam, polyarthritis, dan PR memanjang 0.24 detik. Diagnosis: Demam Reumatik Akut — Karditis. Saya berikan Benzatin Penisilin G IM, Aspirin dosis tinggi, tirah baring, dan rencanakan profilaksis sekunder."'
    },
    {
      id: 'm3-08',
      title: 'Pulmonary Hypertension — Cor Pulmonale',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 105, prInterval: 0.14, qrsDuration: 0.10, qtInterval: 0.36,
        pVisible: true, pAmplitude: 0.3, rAmplitude: 0.8, sAmplitude: 0.5, tAmplitude: -0.3,
        rvh: true,
        leads: {
          'V1': { rAmplitude: 0.8, sAmplitude: 0.1 },
          'V2': { sAmplitude: 0.5 },
          'II': { pAmplitude: 0.3 },
          'III': { pAmplitude: 0.25, tAmplitude: -0.3 },
          'aVF': { pAmplitude: 0.25 }
        }
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '105 x/menit',
        axis: 'RAD (Right Axis Deviation) — > +90°',
        prInterval: '0.14 detik',
        qrsComplex: '0.10 detik — R/S ratio > 1 di V1 (R tinggi), R/S < 1 di V6',
        stSegment: 'ST depresi di V1-V3',
        tWave: 'T inversi di V1-V3 (right ventricular strain)',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'COR PULMONALE — Right Ventricular Hypertrophy (P pulmonale + RAD + RVH)'
      },
      clinical: {
        scenario: 'Laki-laki 55 tahun, PPOK kronik, sesak progresif, edema tungkai, lemas. TD: 100/70, HR: 108 x/m, JVP meningkat, hepatomegali, asites. SpO2: 84% (udara kamar).',
        correlation: 'Cor pulmonale = gagal jantung kanan akibat penyakit paru (PPOK, fibrosis paru, apnea tidur). Trias EKG: P pulmonale (P tinggi >2.5mm di II), RAD, RVH (R di V1 > S di V1). Prognosis buruk.',
        diagnosis: 'Cor Pulmonale — Gagal Jantung Kanan (PPOK)',
        differential: 'Emboli paru kronik (CTEPH), Hipertensi pulmonal idiopatik, stenosis mitral, ASD'
      },
      management: {
        acute: '1. Oksigen jangka panjang target SpO2 > 90%\n2. Diuretik (Spironolakton + Furosemid) untuk overload\n3. Manajemen PPOK eksaserbasi: bronkodilator, steroid, antibiotik\n4. Vaksinasi (influenza, pneumokokus)\n5. Rehabilitasi paru',
        drugs: 'Furosemid, Spironolakton, O2 LTOT, Tiotropium/Salmeterol, steroid inhalasi',
        referral: 'Rujuk Sp.Paruparu + Sp.JP untuk manajemen PAH'
      },
      osceTemplate: '"PPOK kronik dengan gagal jantung kanan. EKG: P pulmonale, RAD, RVH. Diagnosis: Cor Pulmonale. Saya berikan O2, diuretik, bronkodilator, dan edukasi LTOT."'
    },
    {
      id: 'm3-09',
      title: 'Atrial Septal Defect (ASD) — Volume Overload RV',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 82, prInterval: 0.18, qrsDuration: 0.12, qtInterval: 0.40,
        pVisible: true, rAmplitude: 0.6, sAmplitude: 0.2, tAmplitude: 0.25,
        rbbb: true,
        leads: {
          'V1': { rAmplitude: 0.5, rabbitEars: true },
          'V2': { sAmplitude: 0.6 },
          'II': { pAmplitude: 0.25 }
        }
      },
      interp: {
        irama: 'Sinus ritmis',
        rate: '82 x/menit',
        axis: 'RAD (Right Axis Deviation) — khas ASD secundum',
        prInterval: '0.18 detik (Normal)',
        qrsComplex: '0.12 detik — incomplete RBBB (rSR\' di V1) — khas overload RV',
        stSegment: 'Isoelektrik',
        tWave: 'T inverted di V1-V2 (RV strain)',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Incomplete RBBB + RAD + Right Atrial Enlargement — ASD pattern'
      },
      clinical: {
        scenario: 'Wanita 30 tahun, sesak saat aktivitas, palpitasi. Tidak ada riwayat penyakit jantung. Pemeriksaan: fixed splitting S2, bising ejeksi sistolik pulmonal. EKG: incomplete RBBB, RAD.',
        correlation: 'ASD = defek septum atrium, menyebabkan volume overload ventrikel kanan. EKG klasik: incomplete RBBB (pola rSR\' di V1) + RAD. ASD sekundum paling sering. Komplikasi: hipertensi pulmonal, aritmia atrial.',
        diagnosis: 'Atrial Septal Defect (ASD) Sekundum — Volume Overload RV',
        differential: 'Pulmonary stenosis (bising ejeksi, EKG RVH), Partial anomalous pulmonary venous return'
      },
      management: {
        acute: '1. Ekokardiografi: konfirmasi ASD, ukuran, hemodinamik, PAP\n2. Jika signifikan (shunt rasio Qp/Qs > 1.5): PENUTUPAN — transcatheter atau bedah\n3. Antibiotik profilaksis endokarditis tidak rutin (hanya jika ada material prostetik)\n4. Jika hipertensi pulmonal → manajemen spesifik',
        drugs: 'Tidak ada obat spesifik. Diuretik jika overload.',
        referral: 'RUJUK Sp.JP untuk ekokardiografi dan penutupan ASD'
      },
      osceTemplate: '"EKG: incomplete RBBB + RAD + P pulmonale. Fixed splitting S2. Diagnosis: ASD Sekundum. Pasien simptomatik. Rujuk ekokardiografi dan rencanakan penutupan ASD transcatheter."'
    },
    {
      id: 'm3-10',
      title: 'Hypothermia — Osborn Wave',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 38, prInterval: 0.22, qrsDuration: 0.12, qtInterval: 0.54,
        pVisible: false, rAmplitude: 0.6, sAmplitude: 0.3, tAmplitude: 0.2,
        leads: {}
      },
      interp: {
        irama: 'Bradikardia — P mungkin menghilang (irama junctional)',
        rate: '38 x/menit (bradikardia berat)',
        axis: 'Normal',
        prInterval: '0.22 detik (memanjang)',
        qrsComplex: '0.12 detik (melebar)',
        stSegment: 'J-point elevasi dengan defleksi positif tambahan di akhir QRS — OSBORN WAVE (J-wave) — paling jelas di II, V5-V6',
        tWave: 'T inverted mungkin',
        qtInterval: 'QTc memanjang (QT 0.54)',
        uWave: 'Mungkin tampak',
        ecgDiagnosis: 'HYPOTHERMIA — Bradikardia + Osborn Wave (J-wave) + QT panjang'
      },
      clinical: {
        scenario: 'Tunawisma 50 tahun ditemukan tidak sadar di pinggir jalan saat musim hujan. Suhu aksila: 30°C (hipotermia sedang). HR: 36 x/m. EKG: Osborn wave di V5-V6.',
        correlation: 'Hipotermia menyebabkan perlambatan konduksi (PR↑, QRS↑, QT↑). Osborn wave (J-wave) = defleksi positif di akhir QRS (mirip delayed repolarization). Semakin rendah suhu, semakin besar Osborn wave. Risiko VF pada rewarming.',
        diagnosis: 'Hipotermia Sedang-Berat (30°C) dengan Osborn Wave',
        differential: 'Early repolarization (pada suhu normal, atlet muda), Brugada (ST elevasi V1-V2, berbeda morfologi)'
      },
      management: {
        acute: '1. REWARMING: pasif (selimut) + aktif eksternal (hangatkan) + internal (hangatkan cairan IV, oksigen hangat)\n2. Handle with care: gerakan kasar dapat memicu VF!\n3. CPR lama jika perlu (jangan hentikan sampai suhu > 32°C)\n4. Bradikardia mungkin tidak perlu obat (spontan membaik dengan rewarming)\n5. Awasi aritmia saat rewarming (VT/VF)',
        drugs: 'Cairan NaCl hangat IV, jangan berikan obat antiaritmia profilaksis. Amiodaron/Lidokain hanya jika VT/VF muncul.',
        referral: 'RESUSITASI di IGD → ICU untuk rewarming terkontrol'
      },
      osceTemplate: '"Hipotermia 30°C, bradikardia 38. EKG: Osborn wave (J-wave) di V5-V6. Saya lakukan rewarming pasif dan aktif, tangani dengan lembut (risiko VF), cairan hangat, dan monitoring ketat."'
    },
    {
      id: 'm3-11',
      title: 'Artificial Pacemaker Rhythm',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 72, prInterval: 0, qrsDuration: 0.16, qtInterval: 0.44,
        pVisible: false, rAmplitude: 0.6, sAmplitude: 0.5, tAmplitude: -0.2,
        lbbb: true,
        leads: {
          'V1': { sAmplitude: 1.5 },
          'V5': { rAmplitude: 0.8, notchedR: true }
        }
      },
      interp: {
        irama: 'Paced rhythm — Spike (pacuan) sebelum QRS',
        rate: '72 x/menit (sesuai set pacemaker)',
        axis: 'LAD — khas pacu ventrikel kanan',
        prInterval: 'Tidak ada (pacu ventrikel) — spike sebelum QRS',
        qrsComplex: '0.16 detik (LEBAR) — LBBB pattern (pacu dari RV apex → LV depolarisasi tertunda)',
        stSegment: 'Diskordan dengan QRS',
        tWave: 'Inverted di lead R dominan (sekunder)',
        qtInterval: 'QT memanjang karena QRS lebar',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'PACED RHYTHM (VVI/DDD) — Spike sebelum QRS, LBBB pattern, HR sesuai set'
      },
      clinical: {
        scenario: 'Pasien 70 tahun dengan pacemaker dual-chamber (DDD) untuk CHB. Kontrol rutin. HR 72 (sesuai set). Tidak ada keluhan. EKG: pacing spike sebelum QRS, QRS lebar (LBBB pattern).',
        correlation: 'Paced rhythm: spike (pacuan) dari pacemaker → QRS lebar karena ventrikel teraktivasi dari RV apex → depolarisasi tidak melalui berkas His-Purkinje. LBBB pattern normal untuk RV pacing. Capture failure: spike tanpa QRS. Sensing failure: spike muncul pada fase repolarisasi.',
        diagnosis: 'Paced Rhythm — VVI/DDD — Normal Function',
        differential: 'LBBB alami (tanpa spike, PR normal pada sinus rhythm sebelumnya), Pacu dengan qRS yang tidak sesuai'
      },
      management: {
        acute: '1. Evaluasi fungsi pacemaker: capture + sensing + rate\n2. Jika normal: tidak perlu intervensi\n3. Jika abnormal: capture failure (spike tapi tidak ada QRS) → tingkatkan output; sensing failure (spike di T wave) → adjust sensitivity\n4. Battery check',
        drugs: 'Tidak ada.',
        referral: 'Rujuk ke klinik pacemaker untuk evaluasi rutin'
      },
      osceTemplate: '"EKG: pacing spike diikuti QRS lebar LBBB pattern, HR 72. Diagnosis: Paced Rhythm — fungsi pacu normal. Spike sebelum setiap QRS, capture dan sensing baik."'
    },
    {
      id: 'm3-12',
      title: 'Pacemaker-Mediated Tachycardia (PMT)',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 135, prInterval: 0, qrsDuration: 0.16, qtInterval: 0.32,
        pVisible: false, rAmplitude: 0.5, sAmplitude: 0.4, tAmplitude: -0.2,
        lbbb: true,
        leads: {
          'V1': { sAmplitude: 1.2 },
          'V5': { rAmplitude: 0.6, notchedR: true }
        }
      },
      interp: {
        irama: 'Takikardia reguler dengan pacing spike setiap QRS',
        rate: '135 x/menit (sesuai upper tracking limit PM)',
        axis: 'LAD',
        prInterval: 'Tidak ada — spike sebelum QRS',
        qrsComplex: '0.16 detik (LEBAR) — LBBB pattern (pacu RV)',
        stSegment: 'Diskordan',
        tWave: 'Inverted',
        qtInterval: 'QT memanjang seiring QRS lebar',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'PACEMAKER-MEDIATED TACHYCARDIA (Endless Loop Tachycardia) — pacing spike di setiap QRS, HR 135'
      },
      clinical: {
        scenario: 'Pasien 70 tahun, DDD pacemaker untuk CHB. Tiba-tiba berdebar, HR 135. EKG: pacing spike setiap QRS, HR sesuai upper rate limit pacemaker. Retrograde P wave (setelah QRS) memicu siklus.',
        correlation: 'PMT terjadi pada pacemaker dual-chamber: ventrikel dipacu → retrograde P (konduksi VA) → sensor atrium mendeteksi → memicu pacu ventrikel lagi → siklus takikardi. Pemicu: PVC atau loss of atrial capture.',
        diagnosis: 'Pacemaker-Mediated Tachycardia (Endless Loop Tachycardia) — DDD mode',
        differential: 'Sinus takikardia (jika pasien punya irama sinus sendiri), SVT, VT'
      },
      management: {
        acute: '1. MAGNET di atas generator → mengubah mode ke VVI/DOO (non-tracking) → hentikan takikardi\n2. Atau reprogram: perpanjang PVARP (Post Ventricular Atrial Refractory Period)\n3. Jika berulang: aktifkan algoritma PMT termination di pacemaker\n4. Evaluasi penyebab (PVCs, atrial undersensing, VA conduction)',
        drugs: 'Beta-blocker/CCB dapat mengurangi VA conduction. Tidak akut.',
        referral: 'RUJUK ke klinik pacemaker untuk reprogramming'
      },
      osceTemplate: '"Pasien DDD pacemaker, HR 135, setiap QRS ada pacing spike. Diagnosis: Pacemaker-Mediated Tachycardia. Saya tempelkan magnet ke generator → HR turun 72 (VVI mode). Rujuk reprogram PVARP."'
    },
    {
      id: 'm3-13',
      title: 'Acute Coronary Syndrome — Post-ROSC Care',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 98, prInterval: 0.16, qrsDuration: 0.10, qtInterval: 0.46,
        pVisible: true, rAmplitude: 0.7, sAmplitude: 0.4, tAmplitude: -0.6,
        qtLong: true,
        leads: {
          'V2': { stElevation: 0.15, tAmplitude: -0.6 },
          'V3': { stElevation: 0.2, tAmplitude: -0.7 },
          'V4': { stElevation: 0.15, tAmplitude: -0.6 },
          'V5': { stElevation: 0.1, tAmplitude: -0.5 }
        }
      },
      interp: {
        irama: 'Sinus takikardia — mungkin juga aritmia',
        rate: '98 x/menit',
        axis: 'Normal',
        prInterval: '0.16 detik',
        qrsComplex: '0.10 detik — mungkin Q patologis',
        stSegment: 'ST elevasi residual (inkomplet reperfusi) atau ST depresi',
        tWave: 'T inversi dalam luas — "reperfusion T waves"',
        qtInterval: 'QTc memanjang (0.50) — risiko aritmia post-ROSC',
        uWave: 'Mungkin tampak',
        ecgDiagnosis: 'Post-ROSC (Return of Spontaneous Circulation) — STEMI revaskularisasi + QT panjang'
      },
      clinical: {
        scenario: 'Pasien 55 tahun, cardiac arrest VF, ROSC setelah 15 menit RJP + 3x defibrilasi + Amiodaron. EKG post-ROSC: ST elevasi + T inversi dalam. TD: 85/50, HR: 100, intubasi.',
        correlation: 'Post-ROSC care sangat penting untuk neurologik outcome. Targeted Temperature Management (TTM) 33-36°C. EKG untuk menilai STEMI (perlu angiografi). QT memanjang sering terjadi post-ROSC (iskemia, obat, hipotermi) → monitor TdP.',
        diagnosis: 'Post-Cardiac Arrest — STEMI + QT panjang post-ROSC',
        differential: 'Post-arrest myocardial stunning, Takotsubo, Ensefalopati post-anoksik'
      },
      management: {
        acute: '1. ABCDE post-ROSC\n2. TTM (Targeted Temperature Management) 33-36°C selama 24 jam\n3. Angiografi koroner emergensi (PCI)\n4. Optimasi hemodinamik: vasopresor (Norepinefrin), inotropik (Dobutamin)\n5. Ventilasi mekanik: PaCO2 35-45, PaO2 > 80, normoventilasi\n6. Monitor EKG kontinu (risiko aritmia post-ROSC)',
        drugs: 'Norepinefrin, Dobutamin, sedasi (Propofol/Midazolam), Amiodaron (profilaksis aritmia)',
        referral: 'RUJUK ICU / ICCU untuk TTM dan PCI'
      },
      osceTemplate: '"Post-ROSC setelah cardiac arrest VF. EKG: ST elevasi residual dengan T inversi reperfusi, QT 0.50. Saya lanjutkan TTM 34°C, rujuk angiografi emergensi, dan monitor aritmia."'
    },
    {
      id: 'm3-14',
      title: 'Myxoma Atrium Kiri — Tumor Jantung',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 90, prInterval: 0.20, qrsDuration: 0.09, qtInterval: 0.38,
        pVisible: true, pMitrale: true, pAmplitude: 0.18, rAmplitude: 0.8, sAmplitude: 0.2, tAmplitude: 0.3,
        leads: {}
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '90 x/menit',
        axis: 'Normal atau LAD ringan',
        prInterval: '0.20 detik (borderline memanjang)',
        qrsComplex: '0.09 detik — Low voltage umum',
        stSegment: 'Isoelektrik — Mungkin depresi non-spesifik',
        tWave: 'T inverted non-spesifik mungkin',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Left Atrial Enlargement (P mitrale) + Sinus Takikardia + Non-spesifik ST-T'
      },
      clinical: {
        scenario: 'Wanita 40 tahun, dyspnea paroksismal, sinkop saat berubah posisi (duduk ke berdiri). Bising mid-diastolik "tumor plop". Ekokardiografi: massa di atrium kiri (mobile). EKG: P mitrale, LA enlargement.',
        correlation: 'Myxoma atrium kiri: tumor jinak jantung paling sering. Gejala: CHF (obstruksi aliran), emboli sistemik, konstitusional. P mitrale menandakan beban atrium kiri. "Tumor plop" = suara tambahan saat tumor melewati katup mitral.',
        diagnosis: 'Myxoma Atrium Kiri — Tumor Jantung',
        differential: 'Stenosis mitral (bising opening snap, tidak ada tumor plop), Thrombus LA (biasanya AF + risiko, tidak mobile seperti myxoma)'
      },
      management: {
        acute: '1. Bedah reseksi — kuratif\n2. Segera setelah diagnosis, rencanakan operasi (risiko emboli)\n3. Hindari aktivitas berat/posisi ekstrem (risiko sinkop)\n4. Ekokardiografi transesofageal untuk detail anatomi',
        drugs: 'Tidak ada medikamentosa. Beta-blocker jika palpitasi.',
        referral: 'RUJUK Bedah Jantung untuk reseksi tumor'
      },
      osceTemplate: '"Dsypnea posisional, sinkop, tumor plop. EKG: P mitrale. Ekokardiografi: massa LA mobile. Diagnosis: Myxoma Atrium Kiri. Rujuk bedah jantung untuk reseksi."'
    },
    {
      id: 'm3-15',
      title: 'Thrombus Atrium Kiri + AF (Stroke Emboli)',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 88, prInterval: 0, qrsDuration: 0.08, qtInterval: 0.38,
        pVisible: false, rAmplitude: 0.9, sAmplitude: 0.2, tAmplitude: 0.25,
        fibrillation: true, irregular: true,
        leads: {}
      },
      interp: {
        irama: 'Atrial Fibrillation (irregularly irregular)',
        rate: '88 x/menit (terkontrol)',
        axis: 'Normal',
        prInterval: 'Tidak ada — f waves menggantikan P',
        qrsComplex: '0.08 detik — Sempit',
        stSegment: 'Isoelektrik',
        tWave: 'Normal',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'ATRIAL FIBRILLATION (Valvular? / Non-valvular?)'
      },
      clinical: {
        scenario: 'Wanita 68 tahun, AF diketahui (CHA2DS2-VASc 5), tanpa antikoagulasi. Tiba-tiba hemiparese kanan, sulit bicara. CT scan: infark serebri (stroke iskemik). EKG: AF.',
        correlation: 'Stroke emboli akibat AF adalah stroke yang paling dapat dicegah! Trombus terbentuk di left atrial appendage. CHA2DS2-VASc = skor risiko stroke: Congestive HF, HT, Age≥75 (2), DM, Stroke/TIA (2), Vaskular, Age 65-74, Sex female. Skor ≥2 pada pria / ≥3 pada wanita → antikoagulasi.',
        diagnosis: 'Stroke Iskemik Akut — Emboli Kardiogenik (AF)',
        differential: 'Stroke lakunar, Stroke ateroemboli (stenosis karotis), Vaskulitis'
      },
      management: {
        acute: '1. CT scan kepala (singkirkan perdarahan)\n2. Jika onset < 4.5 jam: trombolisis IV (alteplase 0.9 mg/kg) — jika memenuhi kriteria\n3. Jika onset < 24 jam: trombektomi mekanik (jika LVO)\n4. Antikoagulasi: heparin IV + bridging → DOAC/Warfarin (tunda 2-14 hari tergantung ukuran infark)\n5. Kontrol laju AF: beta-blocker',
        drugs: 'Alteplase (trombolisis), Heparin IV, DOAC (Apixaban/Rivaroxaban), Metoprolol, Atorvastatin',
        referral: 'RUJUK DARURAT Neurologi → Stroke Unit'
      },
      osceTemplate: '"Pasien AF tanpa antikoagulasi, stroke iskemik akut. EKG: AF. CHA2DS2-VASc 5. CT scan: infark tanpa perdarahan. Saya mulai heparin, rencanakan DOAC, beta-blocker untuk rate control."'
    },
    {
      id: 'm3-16',
      title: 'Hemopericardium — Post PCI Komplikasi',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 120, prInterval: 0.14, qrsDuration: 0.09, qtInterval: 0.34,
        pVisible: true, pAmplitude: 0.08, rAmplitude: 0.4, sAmplitude: 0.1, tAmplitude: 0.15,
        leads: {}
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '120 x/menit',
        axis: 'Normal',
        prInterval: '0.14 detik',
        qrsComplex: '0.09 detik — QRS voltage BERGANTIAN TINGGI-RENDAH (electrical alternans)',
        stSegment: 'Isoelektrik',
        tWave: 'Mungkin alternans (bergantian)',
        qtInterval: 'QTc normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Sinus Takikardia + Low Voltage + Electrical Alternans = Tamponade Jantung'
      },
      clinical: {
        scenario: 'Pasien STEMI post-PCI (stent LAD), 2 jam kemudian hipotensi TD 75/45, JVP meningkat, sesak, gelisah. HR 122, bunyi jantung jauh. EKG post-PCI: ST elevasi menurun (reperfusi), tapi low voltage + electrical alternans.',
        correlation: 'Komplikasi PCI: perforasi koroner → hemoperikardium → tamponade. Trias Beck: hipotensi + JVP meningkat + bunyi jantung jauh. Electrical alternans patognomonik. Perikardiosentesis segera!',
        diagnosis: 'Hemoperikardium — Tamponade Jantung (Komplikasi PCI)',
        differential: 'Syok kardiogenik (CHF, ronki, tidak ada electrical alternans), STEMI reoklusi (ST elevasi kembali)'
      },
      management: {
        acute: '1. PERIKARDIOSENTESIS DARURAT — subxiphoid\n2. IV fluids bolus (sementara)\n3. Reverse heparin (Protamin)\n4. Konsul bedah jantung: jika perforasi besar → operasi\n5. Tranfusi darah/hemodinamik support',
        drugs: 'Protamin (reversal heparin), IV fluids, Norepinefrin, Tranfusi PRC',
        referral: 'RUJUK DARURAT ke Bedah Jantung (torakotomi)'
      },
      osceTemplate: '"Pasien post-PCI, hipotensi + JVP ↑ + bunyi jantung jauh. EKG: low voltage + electrical alternans. Diagnosis: Tamponade Jantung (hemoperikardium). Perikardiosentesis darurat! Reverse heparin dengan Protamin. Rujuk bedah jantung."'
    },
    {
      id: 'm3-17',
      title: 'Aortic Dissection — STEMI Pattern',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 105, prInterval: 0.12, qrsDuration: 0.09, qtInterval: 0.36,
        pVisible: true, rAmplitude: 0.7, sAmplitude: 0.5, tAmplitude: 0.4,
        leads: {
          'V2': { stElevation: 0.35, tAmplitude: 0.5 },
          'V3': { stElevation: 0.4, tAmplitude: 0.6 },
          'V4': { stElevation: 0.35, tAmplitude: 0.5 },
          'III': { stDepression: 0.2 }
        }
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '105 x/menit',
        axis: 'Normal',
        prInterval: '0.12 detik',
        qrsComplex: '0.09 detik — Q patologis mungkin (jika diseksi melibatkan ostia koroner → STEMI)',
        stSegment: 'ST elevasi di V2-V4 (anterior) — jika diseksi meluas ke LAD → STEMI sekunder',
        tWave: 'Hiperakut di prekordial',
        qtInterval: 'QTc normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'STEMI Anterior — namun perlu curigai AORTIC DISSECTION jika ada nyeri menjalar ke punggung'
      },
      clinical: {
        scenario: 'Laki-laki 55 tahun, hipertensi tidak terkontrol, nyeri dada robek hebat menjalar ke punggung, perbedaan TD lengan kanan-kiri (160/90 vs 110/70). EKG: ST elevasi anterior.',
        correlation: 'Aortic dissection dapat menyebabkan STEMI jika diseksi melibatkan ostia arteri koroner. Bedakan dari STEMI primer: nyeri dada robek hebat menjalar ke punggung, perbedaan TD antar ekstremitas, murmur aortic regurgitasi, CT scan toraks untuk diagnosis.',
        diagnosis: 'Aortic Dissection (Stanford A) — dengan STEMI sekunder',
        differential: 'STEMI primer (nyeri dada substernal, tidak menjalar ke punggung, TD simetris), ACS, Perikarditis'
      },
      management: {
        acute: '1. JANGAN BERIKAN TROMBOLISIS (untuk STEMI) — dapat perdarahan fatal!\n2. Berikan Aspirin 160-320 mg (kunyah) + Clopidogrel secara oral jika tidak ada kontraindikasi\n2. Turunkan HR ke 60: Esmolol IV bolus + drip (beta-blocker)\n3. Turunkan TD: Nitroprusside IV (setelah beta-blocker)\n4. CT angiografi toraks untuk konfirmasi\n5. Bedah emergensi (if Stanford A — ascending aorta involved)',
        drugs: 'Esmolol/Labetalol IV, Nitroprusside IV, Morfin IV',
        referral: 'RUJUK DARURAT ke Bedah Jantung/RS dengan fasilitas CT scan emergensi'
      },
      osceTemplate: '"Nyeri dada robek ke punggung, TD kiri 160/90, kanan 110/70, ST elevasi anterior. CURIGAI AORTIC DISSECTION Stanford A dengan STEMI sekunder. JANGAN fibrinolitik! Beri Esmolol + Nitroprusside, CT toraks emergensi, rujuk bedah jantung."'
    },
    {
      id: 'm3-18',
      title: 'Takayasu Arteritis — Aortitis',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 88, prInterval: 0.16, qrsDuration: 0.08, qtInterval: 0.40,
        pVisible: true, rAmplitude: 1.0, sAmplitude: 0.2, tAmplitude: 0.3,
        leads: {}
      },
      interp: {
        irama: 'Sinus ritmis',
        rate: '88 x/menit',
        axis: 'Normal',
        prInterval: '0.16 detik (Normal)',
        qrsComplex: '0.08 detik — Normal',
        stSegment: 'Isoelektrik',
        tWave: 'Tegak normal',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'EKG dalam batas normal (penyakit vaskular inflamasi tanpa keterlibatan jantung langsung)'
      },
      clinical: {
        scenario: 'Wanita 22 tahun, mudah lelah, nyeri tungkai saat berjalan (klaudikasio), perbedaan TD lengan kiri-kanan, bruit karotis. LED dan CRP meningkat. EKG normal.',
        correlation: 'Takayasu arteritis = vaskulitis pembuluh darah besar (aorta dan cabang-cabangnya). EKG mungkin normal atau LVH jika hipertensi renal. Diagnosis dengan angiografi atau MRI. Pengobatan: kortikosteroid ± imunosupresan.',
        diagnosis: 'Takayasu Arteritis — Aortitis dengan Klaudikasio Ekstremitas Atas',
        differential: 'Aterosklerosis prematur (jarang pada usia < 30 tanpa risiko), Giant cell arteritis (> 50 tahun)'
      },
      management: {
        acute: '1. Kortikosteroid dosis tinggi: Prednison 1 mg/kg/hari\n2. Jika tidak respon: tambah Metotreksat/Azatioprine/Tocilizumab\n3. Antiplatelet: Aspirin 80-100 mg\n4. Monitor komplikasi: hipertensi renovaskular, regurgitasi aorta, aneurisma',
        drugs: 'Prednison 1 mg/kg/hari, Metotreksat, Aspirin, Antihipertensi',
        referral: 'RUJUK Reumatologi + Kardiologi (untuk manajemen vaskulitis dan komplikasi kardiovaskular)'
      },
      osceTemplate: '"Wanita 22 tahun, klaudikasio lengan, perbedaan TD, bruit karotis. EKG normal. Diagnosis: Takayasu Arteritis. Saya mulai Prednison 1 mg/kg/hari, Aspirin, dan rujuk reumatologi."'
    },
    {
      id: 'm3-19',
      title: 'HIV/AIDS — HIV-Associated Cardiomyopathy',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 105, prInterval: 0.18, qrsDuration: 0.10, qtInterval: 0.40,
        pVisible: true, rAmplitude: 0.6, sAmplitude: 0.4, tAmplitude: 0.2,
        leads: {}
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '105 x/menit',
        axis: 'Normal',
        prInterval: '0.18 detik (borderline memanjang)',
        qrsComplex: '0.10 detik — Low voltage (khas kardiomiopati)',
        stSegment: 'Isoelektrik',
        tWave: 'Non-spesifik T inversi',
        qtInterval: 'QTc normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Sinus takikardia + Low Voltage + Non-spesifik ST/T (kardiomiopati)'
      },
      clinical: {
        scenario: 'Laki-laki 35 tahun, HIV/AIDS tidak diobati (CD4 120), sesak progresif, edema tungkai. Ekokardiografi: EF 30%, dilatasi keempat ruang jantung. EKG: low voltage, sinus takikardia.',
        correlation: 'HIV dapat menyebabkan dilated cardiomyopathy melalui miokarditis (HIV langsung, oportunistik — CMV, Toksoplasma, atau ARV toksik — AZT). Low voltage + takikardia = kardiomiopati. Prognosis lebih buruk dibanding DCM non-HIV.',
        diagnosis: 'HIV-Associated Dilated Cardiomyopathy — CHF (NYHA III)',
        differential: 'TB pericarditis (efusi + low voltage), HIV myocarditis, Pulmonary hypertension (HIV-associated PAH)'
      },
      management: {
        acute: '1. GDMT: ACE-inhibitor, Beta-blocker, Diuretik, Spironolakton\n2. ARV (Antiretroviral) — konsul HIV\n3. Profilaksis oportunistik jika CD4 < 200\n4. Monitor pemeriksaan: viral load, CD4, fungsi jantung',
        drugs: 'Ramipril, Bisoprolol, Furosemid, Spironolakton, ARV (TDF/FTC/DTG)',
        referral: 'RUJUK ke Kardiologi + HIV/Infeksi'
      },
      osceTemplate: '"HIV CD4 120, CHF, EF 30%, low voltage EKG. Diagnosis: HIV-Associated Dilated Cardiomyopathy. Saya mulai GDMT, rujuk HIV untuk ARV, dan monitor fungsi ventrikel."'
    },
    {
      id: 'm3-20',
      title: 'Amyloidosis Jantung (Restrictive Cardiomyopathy)',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 95, prInterval: 0.20, qrsDuration: 0.10, qtInterval: 0.42,
        pVisible: true, pAmplitude: 0.05, rAmplitude: 0.3, sAmplitude: 0.1, tAmplitude: 0.15,
        leads: {}
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '95 x/menit',
        axis: 'Normal atau LAD',
        prInterval: '0.20 detik (borderline memanjang)',
        qrsComplex: '0.10 detik — LOW VOLTAGE (sangat khas untuk infiltrative cardiomyopathy)',
        stSegment: 'Isoelektrik',
        tWave: 'Low T wave',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'LOW VOLTAGE (semua lead < 5mm) + Pseudo-infark pattern (hilang R wave) + AV block'
      },
      clinical: {
        scenario: 'Laki-laki 65 tahun, gagal jantung diastolik (HFpEF), penebalan dinding ventrikel pada ekokardiografi (granular sparkling). EKG: low voltage — paradoks dengan LVH pada echo. Riwayat carpal tunnel syndrome bilateral.',
        correlation: 'Amyloidosis jantung = infiltrasi protein amyloid di miokardium. Klasik: LOW VOLTAGE di EKG namun LVH/penebalan dinding di echo — "paradoks". Penebalan dinding + low voltage → patognomonik. Prognosis buruk.',
        diagnosis: 'Cardiac Amyloidosis (AL / TTR) — Restrictive Cardiomyopathy',
        differential: 'Constrictive pericarditis (CT calcification, septal bounce, bukan low voltage), Hipertrofi fisiologis (EKG normal voltage), LVH karena hipertensi (EKG high voltage)'
      },
      management: {
        acute: '1. Ekokardiografi: global longitudinal strain (apical sparing pattern)\n2. MRI jantung: subendocardial LGE + ECV ↑\n3. Skintigrafi: DPDP pyrophosphate scan (untuk ATTR-CM)\n4. Biopsi endomiokardial + biopsi lemak abdominal\n5. Obat: Tafamidis (untuk ATTR), Daratumumab/CyBorD (untuk AL)',
        drugs: 'Furosemid (hati-hati — preload dependent), Beta-blocker dosis rendah, Tafamidis (ATTR), Chemotherapy (AL)',
        referral: 'RUJUK Kardiologi + Hematologi (untuk AL) atau Neurologi (untuk ATTR)'
      },
      osceTemplate: '"Gagal jantung diastolik, echo penebalan dinding. EKG: low voltage (paradoks!). Curiga Cardiac Amyloidosis. Rujuk skintigrafi DPDP dan biopsi untuk konfirmasi tipe."'
    },
    {
            id: 'm3-21',
      title: 'Mitral Stenosis',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 75, prInterval: 0, qrsDuration: 0.08, qtInterval: 0.38,
        pVisible: false, rAmplitude: 0.9, sAmplitude: 0.2, tAmplitude: 0.25,
        fibrillation: true, irregular: true,
        leads: {}
      },
      interp: {
        irama: 'Atrial Fibrillation',
        rate: '~75 x/menit (terkontrol)',
        axis: 'Normal atau RAD (jika hipertensi pulmonal)',
        prInterval: 'Tidak ada',
        qrsComplex: '0.08 detik — Sempit',
        stSegment: 'Isoelektrik',
        tWave: 'Normal',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Atrial Fibrillation (curigai MS jika LA enlargement)'
      },
      clinical: {
        scenario: 'Wanita 40 tahun, sesak saat aktivitas progresif, hemoptisis, pernah stroke. Riwayat demam rematik. Bising mid-diastolik (rumble) di apex + opening snap. EKG: AF. Ekokardiografi: MS (MVA 1.0 cm²).',
        correlation: 'MS hampir selalu akibat demam rematik. EKG: AF (paling sering), P mitrale jika masih sinus, RVH jika hipertensi pulmonal. Komplikasi: stroke emboli, hipertensi pulmonal, gagal jantung kanan.',
        diagnosis: 'Mitral Stenosis Berat (MVA 1.0 cm²) + AF + Status Post-Stroke',
        differential: 'Myxoma LA (tumor plop, P mitrale, bisa sinus), Cor triatriatum (echo khas), MS ringan'
      },
      management: {
        acute: '1. Antikoagulasi (warfarin/DOAC) — semua MS + AF harus antikoagulasi\n2. Rate control: beta-blocker/digoksin\n3. Diuretik jika CHF\n4. Intervensi: PBMV (Percutaneous Balloon Mitral Valvuloplasty) atau MVR (Mitral Valve Replacement)\n5. Antibiotik profilaksis endokarditis tidak rutin',
        drugs: 'Warfarin (INR 2-3) / DOAC, Bisoprolol, Digoksin, Furosemid',
        referral: 'RUJUK Sp.JP untuk PBMV atau bedah jantung untuk MVR'
      },
      osceTemplate: '"Wanita dengan bising mid-diastolik apex + opening snap, AF, riwayat stroke. Diagnosis: Mitral Stenosis Berat. Antikoagulasi warfarin, rate control, rencanakan PBMV."'
    },
    {
      id: 'm3-22',
      title: 'Constrictive Pericarditis',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 95, prInterval: 0.16, qrsDuration: 0.09, qtInterval: 0.38,
        pVisible: true, pAmplitude: 0.08, rAmplitude: 0.4, sAmplitude: 0.1, tAmplitude: 0.15,
        leads: {}
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '95 x/menit',
        axis: 'Normal',
        prInterval: '0.16 detik',
        qrsComplex: '0.09 detik — Low voltage difus',
        stSegment: 'Isoelektrik — ST depresi non-spesifik',
        tWave: 'T inversi difus/ flat — non-spesifik',
        qtInterval: 'Normal',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Low voltage difus + T inverted difus + Sinus takikardia (curigai konstriksi)'
      },
      clinical: {
        scenario: 'Laki-laki 35 tahun, TB paru 2 tahun lalu, sesak progresif, edema, asites, hepatomegali. TD: 100/70, JVP meningkat (sign: Kussmaul sign +). Ekokardiografi: septal bounce, annulus reversus. CT: kalsifikasi perikardial.',
        correlation: 'Konstriksi perikardial = perikardium kaku (sering TB, post-kardiotomi, radiasi). Trias: JVP meningkat + asites + edema. Kussmaul sign: JVP naik saat inspirasi (paradoks). EKG: low voltage + T inverted difus. Bedakan dari restriktif (amyloid).',
        diagnosis: 'Constrictive Pericarditis (TB) — Gagal Jantung Kanan',
        differential: 'Restrictive cardiomyopathy (amyloid, EKG low voltage, echo E/A mitral restriktif, MRI LGE), Sirosis hati (JVP normal, tidak ada Kussmaul)'
      },
      management: {
        acute: '1. Diuretik (Furosemid + Spironolakton)\n2. Kausatif: terapi TB jika TB\n3. BEDAH: PERIKARDEKTOMI — terapi definitif\n4. Evaluasi hemodinamik dengan kateterisasi jantung kanan (square root sign, dip-plateau)',
        drugs: 'Furosemid, Spironolakton, OAT jika TB',
        referral: 'RUJUK Sp.JP untuk kateterisasi → Bedah Jantung untuk perikardektomi'
      },
      osceTemplate: '"TB paru, asites, edema, JVP↑, Kussmaul sign +. EKG: low voltage. Diagnosis: Constrictive Pericarditis TB. Beri diuretik, OAT, rencanakan perikardektomi."'
    },
    {
      id: 'm3-23',
      title: 'Sepsis — Myocardial Depression',
      priority: 'priority-tinggi',
      ecgParams: {
        heartRate: 125, prInterval: 0.14, qrsDuration: 0.08, qtInterval: 0.36,
        pVisible: true, rAmplitude: 0.7, sAmplitude: 0.3, tAmplitude: 0.25,
        leads: {}
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '125 x/menit',
        axis: 'Normal',
        prInterval: '0.14 detik',
        qrsComplex: '0.08 detik — Normal',
        stSegment: 'ST depresi non-spesifik mungkin (demand ischemia)',
        tWave: 'T inverted ringan mungkin',
        qtInterval: 'QTc normal atau memanjang (elektrolit)',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Sinus Takikardia + Non-spesifik ST/T (depresi miokard sepsis)'
      },
      clinical: {
        scenario: 'Laki-laki 60 tahun, pneumonia berat, sepsis, TD 75/45 (respon cairan minimal), HR 128, vasopresor diperlukan. Ekokardiografi: EF turun dari 60% menjadi 35% (sepsis-induce cardiomyopathy). Troponin meningkat ringan.',
        correlation: 'Sepsis-induced myocardial depression = disfungsi miokard reversibel akibat inflamasi (TNF-α, IL-1). EKG: takikardia sinus + non-spesifik ST/T. Troponin ↑ (bukan oklusi koroner). Pemulihan dalam 7-10 hari.',
        diagnosis: 'Syok Septik dengan Sepsis-Induced Cardiomyopathy',
        differential: 'ACS dengan syok kardiogenik (koroner abnormal), Takotsubo (stres), Miokarditis (inflamasi)'
      },
      management: {
        acute: '1. Sepsis 1 jam bundle: blood culture, laktat, ABX broad-spectrum, cairan 30 mL/kg\n2. Vasopresor: Norepinefrin lini pertama\n3. Jika EF rendah: tambah Dobutamin\n4. Sumber kontrol: drainase abses, antibiotic\n5. Monitor EKG serial + Troponin + Ekokardiografi',
        drugs: 'Norepinefrin IV, Dobutamin IV, Antibiotik broad-spectrum (Piperacillin-Tazobactam), IV fluids',
        referral: 'RUJUK ICU untuk manajemen syok septik'
      },
      osceTemplate: '"Sepsis pneumonia, syok, EF turun 35%, takikardia. Diagnosis: Syok Septik dengan Sepsis-Induced Cardiomyopathy. Saya beri cairan, ABX, Norepinefrin, dan Dobutamin. Monitor serial fungsi jantung."'
    },
    {
      id: 'm3-24',
      title: 'Thyroid Storm — Sinus Tachycardia + AF',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 155, prInterval: 0, qrsDuration: 0.08, qtInterval: 0.28,
        pVisible: false, rAmplitude: 0.9, sAmplitude: 0.2, tAmplitude: 0.2,
        fibrillation: true, irregular: true,
        leads: {}
      },
      interp: {
        irama: 'Atrial Fibrillation atau Sinus Tachycardia (takikardia sinus > sinus, atau AF)',
        rate: '155 x/menit (sangat cepat)',
        axis: 'Normal',
        prInterval: 'Sulit dinilai (P tidak jelas jika AF)',
        qrsComplex: '0.08 detik — Sempit',
        stSegment: 'ST depresi ringan sekunder takikardia',
        tWave: 'Normal atau inverted',
        qtInterval: 'QT pendek (khas hipertiroid)',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'AF dengan RVR / Sinus Takikardia Ekstrem — QT pendek (susp. Tirotoksikosis)'
      },
      clinical: {
        scenario: 'Wanita 30 tahun, Basedow, tidak minum obat. Tiba-tiba demam 40°C, palpitasi, agitasi, muntah, diare. TD: 150/40 (tekanan nadi lebar), HR 158 (AF/ST). Keringat banyak, tremor.',
        correlation: 'Thyroid storm = krisis tirotoksikosis. EKG: AF atau sinus takikardia ekstrem, QT pendek (khas hipertiroid). Tatalaksana: β-blocker dosis tinggi (Propranolol), tirostatik (PTU/Methimazole), iodine, steroid, antipiretik.',
        diagnosis: 'Thyroid Storm (Krisis Tirotoksikosis) — AF RVR',
        differential: 'Sepsis (demam, takikardia, namun thyroid function normal), Feokromositoma (HT, palpitasi, tapi thyroid normal), SVT/AF biasa'
      },
      management: {
        acute: '1. β-blocker: Propranolol 60-80 mg oral tiap 4 jam (atau Esmolol IV) — menurunkan HR & konversi T4 ke T3\n2. Tirostatik: PTU 500-1000 mg oral loading, lalu 250 mg tiap 4 jam ILU; atau Methimazole 20 mg tiap 6 jam\n3. Iodine (Lugol iodine 4-8 tetes tiap 6 jam) — 1 jam setelah tirostatik\n4. Kortikosteroid: Hidrokortison 100 mg IV tiap 8 jam\n5. Antipiretik, koreksi dehidrasi, cooling blanket',
        drugs: 'Propranolol oral/IV, PTU/Methimazole, Lugol iodine, Hidrokortison IV, Parasetamol',
        referral: 'RUJUK ICU untuk monitoring dan terapi agresif'
      },
      osceTemplate: '"Basedow, demam 40°, takikardia 155, AF, agitasi. Diagnosis: Thyroid Storm. Saya beri Propranolol 80 mg oral, PTU 500 mg, Hidrokortison 100 mg, dan rujuk ICU."'
    },
    {
      id: 'm3-25',
      title: 'Phaeochromocytoma — Hipertensi Paroksismal',
      priority: 'priority-menengah',
      ecgParams: {
        heartRate: 135, prInterval: 0.12, qrsDuration: 0.08, qtInterval: 0.32,
        pVisible: true, rAmplitude: 1.0, sAmplitude: 0.2, tAmplitude: -0.2,
        leads: {
          'V3': { stDepression: 0.15 },
          'V4': { stDepression: 0.2 },
          'V5': { stDepression: 0.15 },
          'V6': { stDepression: 0.1 }
        }
      },
      interp: {
        irama: 'Sinus takikardia',
        rate: '135 x/menit',
        axis: 'Normal',
        prInterval: '0.12 detik',
        qrsComplex: '0.08 detik — Normal',
        stSegment: 'ST depresi inferolateral (+/- T inversi) — "katekolamin cardiotoxicity"',
        tWave: 'T inverted mungkin di prekordial lateral',
        qtInterval: 'QT pendek',
        uWave: 'Tidak tampak',
        ecgDiagnosis: 'Sinus Takikardia + ST/T non-spesifik (Katekolamin Kardiotoksisitas)'
      },
      clinical: {
        scenario: 'Wanita 35 tahun, serangan hipertensi mendadak TD 240/130, sakit kepala hebat, palpitasi, keringat dingin, episode 15 menit lalu normal lagi. Riwayat hipertensi tidak terkontrol dengan 4 obat.',
        correlation: 'Pheochromocytoma = tumor adrenal medula → produksi katekolamin berlebih. Episode paroksismal: HT spike + sakit kepala + palpitasi + keringat. EKG: takikardia, ST/T non-spesifik, QT pendek. Risiko miokarditis katekolamin (Takotsubo-like).',
        diagnosis: 'Pheochromocytoma — Hipertensi Paroksismal',
        differential: 'Panic attack (TD normal saat serangan? jarang), Hipertensi renovaskular (bruit renal, tanpa paroksismal), Thyroid storm'
      },
      management: {
        acute: '1. Pre-op: Phenoxybenzamine (α-blocker non-selektif) — MULAI 10 mg bid, titrasi untuk kontrol HT\n2. Setelah α-blocker > 2 minggu: tambah β-blocker (Propranolol) — hanya setelah α-blocker adekuat!\n3. JANGAN BERI β-blocker dulu → krisis HT (vasokonstriksi tak tertandingi)\n4. BEDAH: Adrenalektomi laparoskopi\n5. Cek metanephrine urin/plasma untuk diagnosis',
        drugs: 'Phenoxybenzamine, Propranolol, Nifedipin (jika perlu), Metirosin (jika refrakter)',
        referral: 'RUJUK Endokrinologi + Bedah Urologi untuk adrenalektomi'
      },
      osceTemplate: '"HT paroksismal 240/130 + sakit kepala + palpitasi + keringat. EKG: takikardia + ST depresi. Diagnosis: Phaeochromocytoma. Saya mulai Phenoxybenzamine, lalu β-blocker setelah 2 minggu, rencanakan adrenalektomi."'
    }
  ]
};
