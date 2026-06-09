/**
 * Database Kasus EKG OSCE Dokter Umum (SKDI 2019)
 * Format Interpretasi: Irama - Frekuensi - Aksis - PR/QRS/QT - ST-T - Diagnosis - Korelasi - Tatalaksana
 */

const ecgDataset = [
  {
    id: "normal",
    title: "EKG Normal (Sinus Rhythm)",
    category: "inti",
    subCategory: "Normal",
    clinicalContext: "Laki-laki 25 tahun datang untuk pemeriksaan kesehatan berkala (medical check-up) untuk melamar pekerjaan. Pasien tidak memiliki riwayat penyakit medis, tidak merokok, dan tidak memiliki keluhan nyeri dada atau sesak napas. Tanda vital dalam batas normal.",
    interpretation: {
      irama: "Sinus Ritmis (Gelombang P tegak di lead II dan terbalik di aVR, diikuti oleh kompleks QRS)",
      frekuensi: "75 kali/menit (Reguler, jarak antar R-R ± 4 kotak besar)",
      aksis: "Normoaksis (Positif di Lead I dan aVF)",
      prInterval: "0.16 detik (Normal, 4 kotak kecil; rentang normal 0.12 - 0.20 detik)",
      qrsComplex: "0.08 detik (Sempit/Normal; rentang normal < 0.12 detik)",
      sttChange: "Segmen ST di garis isoelektrik, Gelombang T tegak (upright) dan asimetris (Normal)",
      diagnosis: "Sinus Rhythm (Irama Sinus Normal)",
      korelasiKlinis: "Menunjukkan sistem konduksi jantung normal. Tidak ada bukti iskemia, infark, hipertrofi, atau gangguan elektrolit makroskopis.",
      tatalaksana: "Tidak memerlukan tatalaksana aktif. Edukasi pasien untuk menjaga gaya hidup sehat dan lakukan pemeriksaan berkala jika diperlukan."
    },
    waveParams: {
      heartRate: 75,
      pWaveVisible: true,
      prLength: 0.16,
      qrsWidth: 0.08,
      rAmplitude: 1.0,
      stElevation: 0,
      tAmplitude: 0.35,
      qtLength: 0.40,
      leads: {
        "II": { pAmp: 0.15, qrsAmp: 1.0, tAmp: 0.35, stElev: 0 },
        "I": { pAmp: 0.12, qrsAmp: 0.8, tAmp: 0.25, stElev: 0 },
        "aVF": { pAmp: 0.12, qrsAmp: 0.9, tAmp: 0.30, stElev: 0 },
        "V5": { pAmp: 0.10, qrsAmp: 1.5, tAmp: 0.40, stElev: 0 }
      }
    }
  },
  {
    id: "stemi-inferior",
    title: "STEMI Inferior",
    category: "inti",
    subCategory: "Iskemia & Infark",
    clinicalContext: "Laki-laki 56 tahun datang ke IGD dengan keluhan nyeri dada substernal seperti ditindih beban berat sejak 3 jam yang lalu. Nyeri menjalar ke bahu kiri dan rahang, disertai keringat dingin dan mual. Riwayat hipertensi dan merokok aktif 1 bungkus per hari. TD: 110/70 mmHg, HR: 88 x/m.",
    interpretation: {
      irama: "Sinus Ritmis",
      frekuensi: "88 kali/menit",
      aksis: "Normoaksis atau LAD (tergantung ada/tidaknya hemiblock)",
      prInterval: "0.14 detik (Normal)",
      qrsComplex: "0.08 detik (Normal)",
      sttChange: "ST Elevasi di lead II, III, dan aVF. Terdapat reciprocal ST depression di lead I dan aVL.",
      diagnosis: "ST-Elevation Myocardial Infarction (STEMI) Inferior",
      korelasiKlinis: "Sumbatan akut pada Arteri Koroner Kanan (Right Coronary Artery / RCA) atau cabang sirkumfleks (LCx). Risiko komplikasi bradikardia atau AV block karena iskemia nodus AV.",
      tatalaksana: "1. Oksigenasi jika SaO2 < 90%\n2. Loading Antiplatelet ganda: Aspirin 160-320 mg (dikunyah) + Clopidogrel 300 mg (atau Ticagrelor 180 mg)\n3. Nitrat Sublingual (Isosorbide Dinitrate / ISDN 5 mg) maksimal 3 kali (Hati-hati, kontraindikasi jika curiga infark ventrikel kanan)\n4. Analgetik: Morfin IV jika nyeri dada tidak respon nitrat\n5. Persiapan Reperfusi segera: Primary PCI (jika < 120 menit sejak kontak medis pertama) atau Fibrinolitik (Alteplase/Streptokinase) jika PCI tidak tersedia."
    },
    waveParams: {
      heartRate: 88,
      pWaveVisible: true,
      prLength: 0.14,
      qrsWidth: 0.08,
      rAmplitude: 0.9,
      tAmplitude: 0.2,
      leads: {
        "II": { pAmp: 0.12, qrsAmp: 0.9, tAmp: 0.5, stElev: 0.4 },
        "III": { pAmp: 0.10, qrsAmp: 0.8, tAmp: 0.6, stElev: 0.5 },
        "aVF": { pAmp: 0.11, qrsAmp: 0.9, tAmp: 0.5, stElev: 0.45 },
        "I": { pAmp: 0.12, qrsAmp: 0.8, tAmp: 0.2, stElev: -0.2 },
        "aVL": { pAmp: 0.08, qrsAmp: 0.5, tAmp: -0.1, stElev: -0.25 }
      }
    }
  },
  {
    id: "stemi-anterior",
    title: "STEMI Anterior (Septal-Anterior)",
    category: "inti",
    subCategory: "Iskemia & Infark",
    clinicalContext: "Laki-laki 48 tahun datang ke IGD dengan nyeri dada kiri menjalar ke punggung dan lengan kiri sejak 1 jam SMRS. Keluhan muncul mendadak saat beristirahat. Pasien tampak sangat gelisah dan basah oleh keringat dingin. TD: 140/90 mmHg, HR: 104 x/m, Napas: 24 x/m.",
    interpretation: {
      irama: "Sinus Ritmis / Sinus Takikardia",
      frekuensi: "104 kali/menit (Takikardia)",
      aksis: "Normoaksis",
      prInterval: "0.12 detik (Normal)",
      qrsComplex: "0.08 detik (Normal)",
      sttChange: "ST Elevasi di lead V1, V2, V3, dan V4. Terdapat reciprocal ST depression di lead II, III, dan aVF.",
      diagnosis: "ST-Elevation Myocardial Infarction (STEMI) Anteroseptal",
      korelasiKlinis: "Oklusi total akut pada Arteri Koroner Desenden Anterior Kiri (Left Anterior Descending / LAD). Risiko tinggi terjadinya gagal jantung akut, syok kardiogenik, atau aritmia ventrikular karena infark dinding luas.",
      tatalaksana: "1. Oksigenasi jika SaO2 < 90%\n2. Loading Antiplatelet ganda: Aspirin 160-320 mg (dikunyah) + Clopidogrel 300 mg (atau Ticagrelor 180 mg)\n3. Nitrat Sublingual (ISDN 5 mg) jika tidak ada hipotensi\n4. Atasi nyeri dengan Morfin IV\n5. Rujuk segera untuk reperfusi darurat: Primary PCI (prioritas utama) atau Fibrinolitik."
    },
    waveParams: {
      heartRate: 104,
      pWaveVisible: true,
      prLength: 0.12,
      qrsWidth: 0.08,
      rAmplitude: 1.0,
      tAmplitude: 0.2,
      leads: {
        "V1": { pAmp: 0.05, qrsAmp: -0.6, tAmp: 0.4, stElev: 0.3 },
        "V2": { pAmp: 0.08, qrsAmp: -0.4, tAmp: 0.6, stElev: 0.5 },
        "V3": { pAmp: 0.10, qrsAmp: 0.8, tAmp: 0.7, stElev: 0.6 },
        "V4": { pAmp: 0.12, qrsAmp: 1.2, tAmp: 0.6, stElev: 0.4 },
        "III": { pAmp: 0.10, qrsAmp: 0.7, tAmp: -0.1, stElev: -0.15 },
        "aVF": { pAmp: 0.11, qrsAmp: 0.8, tAmp: -0.05, stElev: -0.1 }
      }
    }
  },
  {
    id: "stemi-lateral",
    title: "STEMI Lateral",
    category: "inti",
    subCategory: "Iskemia & Infark",
    clinicalContext: "Perempuan 62 tahun dibawa ke IGD karena nyeri dada kiri menjalar ke ketiak kiri dan punggung belakang sejak 4 jam yang lalu. Pasien memiliki riwayat diabetes melitus tipe 2 tidak terkontrol dan dislipidemia. TD: 130/80 mmHg, HR: 95 x/m.",
    interpretation: {
      irama: "Sinus Ritmis",
      frekuensi: "95 kali/menit",
      aksis: "Normoaksis atau LAD",
      prInterval: "0.14 detik (Normal)",
      qrsComplex: "0.09 detik (Normal)",
      sttChange: "ST Elevasi di lead I, aVL, V5, dan V6. Reciprocal ST depression di lead inferior (II, III, aVF).",
      diagnosis: "ST-Elevation Myocardial Infarction (STEMI) Lateral",
      korelasiKlinis: "Oklusi pada Left Circumflex artery (LCx) atau cabang diagonal dari LAD (D1).",
      tatalaksana: "1. Oksigenasi bila SaO2 < 90%\n2. Loading Aspirin 160-320 mg + Clopidogrel 300 mg\n3. Nitrat sublingual jika tidak ada kontraindikasi\n4. Manajemen nyeri dan rujuk segera untuk Primary PCI atau terapi fibrinolitik."
    },
    waveParams: {
      heartRate: 95,
      pWaveVisible: true,
      prLength: 0.14,
      qrsWidth: 0.09,
      rAmplitude: 1.0,
      tAmplitude: 0.2,
      leads: {
        "I": { pAmp: 0.12, qrsAmp: 1.0, tAmp: 0.4, stElev: 0.35 },
        "aVL": { pAmp: 0.10, qrsAmp: 0.8, tAmp: 0.3, stElev: 0.3 },
        "V5": { pAmp: 0.08, qrsAmp: 1.6, tAmp: 0.5, stElev: 0.4 },
        "V6": { pAmp: 0.08, qrsAmp: 1.4, tAmp: 0.4, stElev: 0.3 },
        "III": { pAmp: 0.10, qrsAmp: -0.6, tAmp: -0.1, stElev: -0.2 }
      }
    }
  },
  {
    id: "stemi-posterior",
    title: "STEMI Posterior",
    category: "inti",
    subCategory: "Iskemia & Infark",
    clinicalContext: "Laki-laki 60 tahun datang dengan keluhan nyeri dada hebat substernal menjalar ke punggung sejak 2 jam SMRS. Pada EKG 12 lead standar awal tidak tampak ST elevasi yang jelas, namun terlihat gambaran ST depresi yang signifikan di lead V1-V3. TD: 115/75 mmHg, HR: 82 x/m.",
    interpretation: {
      irama: "Sinus Ritmis",
      frekuensi: "82 kali/menit",
      aksis: "Normoaksis",
      prInterval: "0.15 detik (Normal)",
      qrsComplex: "0.08 detik (Normal)",
      sttChange: "ST Depresi horizontal/downsloping yang dalam di lead V1, V2, dan V3 dengan gelombang T tegak tinggi (tall T wave) dan gelombang R tinggi di V1-V2 (ekuivalen ST elevasi di lead posterior V7-V9).",
      diagnosis: "ST-Elevation Myocardial Infarction (STEMI) Posterior (atau ekuivalen)",
      korelasiKlinis: "Oklusi pada RCA bagian distal atau LCx. Sangat penting dikenali karena sering terlewat karena tidak adanya elevasi di lead anterior/inferior biasa. Disarankan melakukan perekaman lead posterior tambahan (V7, V8, V9) untuk konfirmasi ST elevasi.",
      tatalaksana: "1. Oksigenasi jika SaO2 < 90%\n2. Loading Aspirin 160-320 mg + Clopidogrel 300 mg\n3. Nitrat sublingual (waspada jika ada keterlibatan ventrikel kanan)\n4. Tatalaksana agresif sama seperti STEMI: rujuk segera untuk reperfusi (PCI)."
    },
    waveParams: {
      heartRate: 82,
      pWaveVisible: true,
      prLength: 0.15,
      qrsWidth: 0.08,
      rAmplitude: 1.2,
      tAmplitude: 0.3,
      leads: {
        "V1": { pAmp: 0.05, qrsAmp: 0.8, tAmp: 0.4, stElev: -0.4 },
        "V2": { pAmp: 0.06, qrsAmp: 1.0, tAmp: 0.5, stElev: -0.5 },
        "V3": { pAmp: 0.08, qrsAmp: 1.2, tAmp: 0.5, stElev: -0.4 },
        "II": { pAmp: 0.12, qrsAmp: 0.9, tAmp: 0.2, stElev: 0 }
      }
    }
  },
  {
    id: "stemi-rv",
    title: "STEMI Inferior + Infark Ventrikel Kanan (RV Infarct)",
    category: "inti",
    subCategory: "Iskemia & Infark",
    clinicalContext: "Laki-laki 65 tahun mengeluh nyeri dada substernal menjalar ke rahang sejak 2 jam SMRS. Pasien juga merasa sangat pusing, lemas, dan sempat pingsan (sinkop) sekali. Pada pemeriksaan fisik tampak JVP meningkat, paru bersih dari ronkhi. TD: 80/50 mmHg (hipotensi berat), HR: 58 x/m (bradikardia relatif), Napas: 20 x/m.",
    interpretation: {
      irama: "Sinus Bradikardia / Sinus Ritmis lambat",
      frekuensi: "58 kali/menit",
      aksis: "Normoaksis",
      prInterval: "0.16 detik (Normal)",
      qrsComplex: "0.08 detik (Normal)",
      sttChange: "ST Elevasi di lead II, III, aVF (STEMI inferior). Pada lead sisi kanan tambahan, terdapat ST Elevasi di lead V3R dan V4R (terutama V4R > 1mm).",
      diagnosis: "STEMI Inferior dengan Infark Ventrikel Kanan (Right Ventricular Infarction)",
      korelasiKlinis: "Oklusi proksimal RCA yang menyebabkan iskemia ventrikel kanan. Akibatnya preload ventrikel kiri turun drastis, menyebabkan hipotensi berat. **KONTRAINDIKASI NITRAT** (dan morfin/diuretik) karena dapat menurunkan preload lebih lanjut dan memperparah syok.",
      tatalaksana: "1. **HINDARI NITRAT**, Morfin, dan Diuretik.\n2. **Resusitasi Cairan Agresif**: Berikan bolus cairan kristaloid (NaCl 0.9% atau Ringer Laktat) 500-1000 mL untuk menjaga preload.\n3. Loading Antiplatelet ganda: Aspirin 160-320 mg + Clopidogrel 300 mg.\n4. Berikan Inotropik/Vasopresor (misal: Dobutamin atau Dopamin) jika hipotensi tidak membaik setelah resusitasi cairan.\n5. Pasang akses IV, monitor ketat, rujuk segera untuk PCI darurat."
    },
    waveParams: {
      heartRate: 58,
      pWaveVisible: true,
      prLength: 0.16,
      qrsWidth: 0.08,
      rAmplitude: 0.8,
      tAmplitude: 0.2,
      leads: {
        "II": { pAmp: 0.10, qrsAmp: 0.8, tAmp: 0.4, stElev: 0.3 },
        "III": { pAmp: 0.08, qrsAmp: 0.7, tAmp: 0.5, stElev: 0.4 },
        "aVF": { pAmp: 0.09, qrsAmp: 0.8, tAmp: 0.4, stElev: 0.35 },
        "V4R": { pAmp: 0.05, qrsAmp: 0.6, tAmp: 0.3, stElev: 0.25 }
      }
    }
  },
  {
    id: "nstemi-iskemia",
    title: "Iskemia Miokard / NSTEMI / Unstable Angina",
    category: "inti",
    subCategory: "Iskemia & Infark",
    clinicalContext: "Perempuan 58 tahun datang dengan nyeri dada kiri menjalar ke leher yang dirasakan hilang timbul sejak 1 hari yang lalu. Nyeri dirasakan terutama saat beraktivitas dan membaik dengan istirahat, namun 4 jam terakhir nyeri menetap lebih dari 20 menit meskipun sudah beristirahat. Riwayat DM dan Hipertensi (+) terkontrol. TD: 150/90 mmHg, HR: 92 x/m.",
    interpretation: {
      irama: "Sinus Ritmis",
      frekuensi: "92 kali/menit",
      aksis: "Normoaksis atau LAD",
      prInterval: "0.14 detik (Normal)",
      qrsComplex: "0.08 detik (Normal)",
      sttChange: "ST Depresi horizontal atau downsloping > 0.5 mm di lead lateral (I, aVL, V5, V6) atau anterolateral, disertai Gelombang T inversi (T-wave inversion) simetris.",
      diagnosis: "Iskemia Miokard Akut / Suspek Non-ST Elevation Myocardial Infarction (NSTEMI) / Unstable Angina Pectoris (UAP)",
      korelasiKlinis: "Iskemia miokard subendokardial akibat penyempitan arteri koroner yang signifikan tanpa oklusi total. Perlu pemeriksaan serial Cardiac Troponin (I/T) untuk membedakan NSTEMI (Troponin naik) dari UAP (Troponin normal).",
      tatalaksana: "1. Oksigenasi jika SaO2 < 90%\n2. Loading Antiplatelet ganda: Aspirin 160-320 mg + Clopidogrel 300 mg (atau Ticagrelor 180 mg)\n3. Nitrat sublingual atau IV (ISDN) jika nyeri dada persisten (kecuali jika dicurigai infark RV atau ada hipotensi)\n4. Antikoagulan (misalnya: Fondaparinux 2.5 mg SC atau Enoxaparin/LMWH) setelah diagnosis tegak\n5. Evaluasi stratifikasi risiko (TIMI atau GRACE score) untuk menentukan waktu angiografi koroner (PCI) - darurat, segera, atau elektif."
    },
    waveParams: {
      heartRate: 92,
      pWaveVisible: true,
      prLength: 0.14,
      qrsWidth: 0.08,
      rAmplitude: 1.0,
      tAmplitude: -0.3,
      leads: {
        "V5": { pAmp: 0.10, qrsAmp: 1.5, tAmp: -0.4, stElev: -0.2 },
        "V6": { pAmp: 0.08, qrsAmp: 1.3, tAmp: -0.3, stElev: -0.15 },
        "I": { pAmp: 0.12, qrsAmp: 0.8, tAmp: -0.2, stElev: -0.1 },
        "aVL": { pAmp: 0.10, qrsAmp: 0.6, tAmp: -0.25, stElev: -0.1 }
      }
    }
  },
  {
    id: "sinus-tachycardia",
    title: "Sinus Takikardia",
    category: "inti",
    subCategory: "Aritmia",
    clinicalContext: "Anak perempuan 17 tahun dibawa ke puskesmas karena demam tinggi hari ke-3, lemas, mual, dan jantung berdebar-debar sejak kemarin. Pada pemeriksaan fisik didapatkan pasien tampak lemas, akral hangat, TD: 100/60 mmHg, HR: 130 x/m, Suhu: 39.2°C, Napas: 22 x/m.",
    interpretation: {
      irama: "Sinus Ritmis (Ada gelombang P sebelum setiap QRS, P tegak di II)",
      frekuensi: "130 kali/menit (Takikardia, > 100 x/m)",
      aksis: "Normoaksis",
      prInterval: "0.12 detik (Normal)",
      qrsComplex: "0.07 detik (Sempit/Normal)",
      sttChange: "Tidak ada kelainan segmen ST atau gelombang T (dapat terlihat ST depresi ringan non-spesifik akibat HR sangat cepat)",
      diagnosis: "Sinus Takikardia",
      korelasiKlinis: "Respon fisiologis normal jantung terhadap kondisi sekunder seperti demam, dehidrasi, syok, anemia, kecemasan, hipertiroidisme, atau nyeri. Bukan kelainan primer konduksi jantung.",
      tatalaksana: "1. **Tatalaksana penyakit dasar / penyebab**: berikan antipiretik (Parasetamol) jika karena demam, berikan cairan IV kristaloid jika karena dehidrasi/syok.\n2. Tidak diindikasikan beta-blocker atau kardioversi kecuali ada kondisi khusus yang mendasarinya.\n3. Re-evaluasi denyut jantung setelah tatalaksana penyebab teratasi."
    },
    waveParams: {
      heartRate: 130,
      pWaveVisible: true,
      prLength: 0.12,
      qrsWidth: 0.07,
      rAmplitude: 1.0,
      tAmplitude: 0.3,
      leads: {
        "II": { pAmp: 0.15, qrsAmp: 1.0, tAmp: 0.3, stElev: 0 },
        "I": { pAmp: 0.12, qrsAmp: 0.8, tAmp: 0.25, stElev: 0 }
      }
    }
  },
  {
    id: "sinus-bradycardia",
    title: "Sinus Bradikardia",
    category: "inti",
    subCategory: "Aritmia",
    clinicalContext: "Laki-laki 72 tahun datang dengan keluhan sering merasa melayang, pusing, dan hampir pingsan (presinkop) terutama saat berdiri dari posisi duduk sejak 1 minggu terakhir. Pasien sedang mengonsumsi obat Bisoprolol 5 mg sekali sehari untuk hipertensi. TD: 105/65 mmHg, HR: 42 x/m, Suhu: 36.5°C.",
    interpretation: {
      irama: "Sinus Ritmis (P tegak di II, selalu diikuti QRS)",
      frekuensi: "42 kali/menit (Bradikardia, < 60 x/m)",
      aksis: "Normoaksis",
      prInterval: "0.18 detik (Normal)",
      qrsComplex: "0.08 detik (Sempit/Normal)",
      sttChange: "Tidak ada kelainan segmen ST atau gelombang T",
      diagnosis: "Sinus Bradikardia Simptomatik",
      korelasiKlinis: "Kemungkinan akibat efek samping obat golongan beta-blocker (Bisoprolol) atau disfungsi nodus SA (Sick Sinus Syndrome). Membutuhkan perhatian karena menimbulkan gejala hipoperfusi otak (lemas, pusing, presinkop).",
      tatalaksana: "1. Evaluasi stabilitas hemodinamik (cek apakah ada tanda syok, penurunan kesadaran, nyeri dada, atau gagal jantung akut).\n2. Jika **Simptomatik / Tidak Stabil**: Berikan **Atropin Sulfat 1 mg IV** push. Dapat diulang tiap 3-5 menit (maksimal 3 mg).\n3. Jika tidak respon Atropin: Siapkan Transcutaneous Pacing (TCP) atau infus Dopamin (5-20 mcg/kg/menit) atau Epinefrin (2-10 mcg/menit).\n4. Rujuk ke dokter spesialis jantung untuk evaluasi penghentian obat beta-blocker atau pemasangan Pacemaker permanen jika diperlukan."
    },
    waveParams: {
      heartRate: 42,
      pWaveVisible: true,
      prLength: 0.18,
      qrsWidth: 0.08,
      rAmplitude: 1.0,
      tAmplitude: 0.3,
      leads: {
        "II": { pAmp: 0.12, qrsAmp: 1.0, tAmp: 0.3, stElev: 0 },
        "I": { pAmp: 0.10, qrsAmp: 0.8, tAmp: 0.25, stElev: 0 }
      }
    }
  },
  {
    id: "atrial-fibrillation",
    title: "Atrial Fibrillation (AF) dengan Rapid Ventricular Response",
    category: "inti",
    subCategory: "Aritmia",
    clinicalContext: "Perempuan 64 tahun datang dengan keluhan dada berdebar-debar seperti genderang perang yang tidak beraturan sejak 12 jam yang lalu. Keluhan disertai rasa agak sesak napas dan badan lemas. Pasien memiliki riwayat penyakit jantung koroner dan tirotoksikosis. TD: 115/70 mmHg, HR: 145 x/m (tidak teratur), Napas: 22 x/m.",
    interpretation: {
      irama: "Irregularly Irregular (Sangat tidak teratur, jarak R-R bervariasi acak)",
      frekuensi: "145 kali/menit (Rapid Ventricular Response / RVR)",
      aksis: "Normoaksis",
      prInterval: "Tidak dapat dinilai (karena tidak ada gelombang P yang jelas/stabil)",
      qrsComplex: "0.08 detik (Sempit/Normal)",
      sttChange: "Gelombang P digantikan oleh gelombang fibrilasi yang halus, cepat, dan kacau (f-wave). Segmen ST dan gelombang T normal.",
      diagnosis: "Atrial Fibrillation (AF) dengan Rapid Ventricular Response (RVR)",
      korelasiKlinis: "Aktivitas listrik atrium yang sangat cepat dan kacau tanpa kontraksi atrium terkoordinasi. Mengakibatkan penurunan pengisian ventrikel dan curah jantung. Risiko tinggi pembentukan trombus di atrium kiri yang dapat menyebabkan stroke emboli.",
      tatalaksana: "1. Evaluasi stabilitas hemodinamik:\n   - **Jika Tidak Stabil** (hipotensi, syok, nyeri dada iskemik, gagal jantung akut): Lakukan **Kardioversi Terbimbing (Synchronized Cardioversion)** dimulai dari 100-200 Joule.\n   - **Jika Stabil**: Prioritaskan kendali laju jantung (rate control) dengan obat golongan Beta-blocker (misal: Metoprolol IV, Bisoprolol oral) atau Non-dihidropiridin CCB (Diltiazem IV/oral) atau Digoksin (terutama jika ada gagal jantung).\n2. Evaluasi risiko stroke dengan CHADS2-VASc score untuk menentukan kebutuhan antikoagulan jangka panjang (misal: Warfarin atau DOAC seperti Rivaroxaban/Apixaban)."
    },
    waveParams: {
      heartRate: 145,
      pWaveVisible: false,
      irregularity: 0.8,
      qrsWidth: 0.08,
      rAmplitude: 0.95,
      tAmplitude: 0.25,
      leads: {
        "II": { pAmp: 0, qrsAmp: 0.9, tAmp: 0.25, stElev: 0 }
      }
    }
  },
  {
    id: "svt",
    title: "Supraventricular Tachycardia (SVT)",
    category: "inti",
    subCategory: "Aritmia",
    clinicalContext: "Perempuan 28 tahun datang ke IGD dengan keluhan jantung tiba-tiba berdebar sangat cepat dan konstan sejak 30 menit yang lalu setelah minum kopi. Keluhan disertai pusing ringan dan lemas. Pasien pernah mengalami episode serupa sebelumnya yang membaik sendiri setelah beberapa menit. TD: 110/70 mmHg, HR: 190 x/m (teratur, cepat), Napas: 18 x/m.",
    interpretation: {
      irama: "Regularly Regular (Sangat teratur, jarak R-R persis sama)",
      frekuensi: "190 kali/menit (Takikardia cepat, biasanya 150-250 x/m)",
      aksis: "Normoaksis",
      prInterval: "Tidak dapat dinilai (gelombang P terpendam dalam kompleks QRS atau terbalik segera setelah QRS / retrograde P wave)",
      qrsComplex: "0.08 detik (Sempit/Normal)",
      sttChange: "Segmen ST depresi ringan non-spesifik karena takikardia ekstrem.",
      diagnosis: "Supraventricular Tachycardia (SVT) - kemungkinan besar AVNRT",
      korelasiKlinis: "Adanya sirkuit re-entry listrik di tingkat nodus AV atau jalur aksesoris. Onset biasanya mendadak (paroksismal) dan dihentikan dengan manuver vagal atau obat yang menghambat nodus AV.",
      tatalaksana: "1. Evaluasi stabilitas hemodinamik:\n   - **Jika Tidak Stabil**: Lakukan **Kardioversi Terbimbing (Synchronized Cardioversion)** dosis awal 50-100 Joule.\n   - **Jika Stabil**:\n     a. Lakukan **Manuver Vagal** (misal: modifikasi manuver Valsava, pijat sinus karotis jika tidak ada bruit karotis).\n     b. Jika gagal manuver vagal: Berikan **Adenosin IV** cepat (rapid IV push) lewat vena besar sedekat mungkin dengan jantung: dosis pertama **6 mg**, diikuti bilas NaCl 0.9% cepat. Jika dalam 1-2 menit tidak respon, berikan dosis kedua **12 mg**.\n     c. Jika Adenosin gagal/kontraindikasi: pertimbangkan CCB non-dihidropiridin (Diltiazem) atau Beta-blocker."
    },
    waveParams: {
      heartRate: 190,
      pWaveVisible: false,
      qrsWidth: 0.08,
      rAmplitude: 1.0,
      tAmplitude: 0.3,
      leads: {
        "II": { pAmp: 0.0, qrsAmp: 1.0, tAmp: 0.25, stElev: 0 }
      }
    }
  },
  {
    id: "vt",
    title: "Ventricular Tachycardia (VT) Monomorfik",
    category: "inti",
    subCategory: "Aritmia",
    clinicalContext: "Laki-laki 59 tahun dibawa ke IGD dengan keluhan dada berdebar-debar hebat disertai sesak napas, pusing, dan keringat dingin sejak 1 jam yang lalu. Pasien memiliki riwayat serangan jantung (STEMI inferior) 2 tahun lalu. TD: 90/60 mmHg (borderline hipotensi), HR: 160 x/m, Napas: 24 x/m. Pasien masih sadar dan kooperatif.",
    interpretation: {
      irama: "Ritmis dan Reguler (Jarak R-R seragam)",
      frekuensi: "160 kali/menit (Takikardia)",
      aksis: "Extreme Axis Deviation / Northwest Axis (negatif di I dan aVF)",
      prInterval: "Tidak dapat dinilai (tidak ada gelombang P sinus yang berelasi dengan QRS; terjadi disosiasi AV)",
      qrsComplex: "0.16 detik (Sangat LEBAR dan bizar, morfologi seragam/monomorfik)",
      sttChange: "Gelombang T berlawanan arah dengan kompleks QRS (sekunder terhadap kelainan konduksi ventrikel)",
      diagnosis: "Monomorphic Ventricular Tachycardia (VT)",
      korelasiKlinis: "Fokus ektopik cepat di ventrikel yang biasanya terbentuk di sekitar jaringan parut infark miokard lama. Merupakan aritmia yang mengancam jiwa yang dapat memburuk menjadi VF atau henti jantung.",
      tatalaksana: "1. **Langkah Kritis Pertama**: Cek Nadi / Hemodinamik segera!\n   - **Jika VT TANPA NADI (Pulseless VT)**: Tatalaksana sebagai Henti Jantung (Cardiac Arrest) -> Protokol RJP + **Defibrilasi (Asynchronized Shock) 200 Joule (bifasik)**.\n   - **Jika VT DENGAN NADI & TIDAK STABIL** (hipotensi berat, nyeri dada iskemik, penurunan kesadaran, syok): Lakukan **Kardioversi Terbimbing (Synchronized Cardioversion) 100 Joule** (bifasik), pertimbangkan sedasi ringan sebelum shock.\n   - **Jika VT DENGAN NADI & STABIL**: Berikan **Amiodaron 150 mg IV** dalam 10 menit (bisa diulang jika VT menetap), diikuti maintenance infus Amiodaron 1 mg/menit selama 6 jam."
    },
    waveParams: {
      heartRate: 160,
      pWaveVisible: false,
      qrsWidth: 0.16,
      rAmplitude: 1.8,
      tAmplitude: -0.6,
      leads: {
        "II": { pAmp: 0, qrsAmp: 1.8, tAmp: -0.6, stElev: 0 }
      }
    }
  },
  {
    id: "vf",
    title: "Ventricular Fibrillation (VF)",
    category: "inti",
    subCategory: "Aritmia",
    clinicalContext: "Laki-laki 52 tahun tiba-tiba tidak sadarkan diri di ruang tunggu klinik saat sedang mengantre obat. Pasien mendadak kolaps, terdengar suara mendengkur (gasping), lalu tidak bernapas dan tidak teraba nadi karotisnya. Staf medis segera membawa AED/Defibrilator dan memasang monitor EKG.",
    interpretation: {
      irama: "Kacau (Chaotic), sangat tidak teratur, tidak terorganisir",
      frekuensi: "Tidak dapat ditentukan (berosilasi cepat dari 300-500 siklus/menit)",
      aksis: "Tidak dapat ditentukan",
      prInterval: "Tidak dapat dinilai",
      qrsComplex: "Tidak terdapat kompleks QRS yang dapat diidentifikasi; hanya tampak gelombang fibrilasi yang bervariasi amplitudo dan bentuknya (kasar/coarse atau halus/fine)",
      sttChange: "Tidak dapat diidentifikasi gelombang ST atau T",
      diagnosis: "Ventricular Fibrillation (VF) - Henti Jantung",
      korelasiKlinis: "Desinkronisasi listrik total ventrikel sehingga jantung hanya bergetar dan tidak mampu memompa darah (curah jantung nol). Penyebab henti jantung mendadak tersering pada pasien PJK. Keadaan fatal dalam hitungan menit jika tidak didefibrilasi.",
      tatalaksana: "Protokol Resusitasi Jantung Paru (RJP) & Bantuan Hidup Jantung Lanjut (ACLS):\n1. Segera lakukan **RJP berkualitas tinggi** (kompresi dada 100-120 x/m, kedalaman 5-6 cm, recoil penuh) sembari menunggu alat kejut siap.\n2. Begitu Defibrilator/AED siap, lakukan **Defibrilasi segera (Asynchronized Shock) 200 Joule** (bifasik) atau 360 Joule (monofasik).\n3. Lanjutkan RJP segera selama 2 menit setelah shock sebelum memeriksa ulang irama jantung.\n4. Siapkan akses IV, berikan **Epinefrin 1 mg IV** setiap 3-5 menit (setelah shock ke-2).\n5. Pertimbangkan **Amiodaron 300 mg IV** bolus (setelah shock ke-3) atau Lidokain 1-1.5 mg/kg IV jika VF refrakter."
    },
    waveParams: {
      heartRate: 350,
      pWaveVisible: false,
      qrsWidth: 0.20,
      rAmplitude: 0,
      tAmplitude: 0,
      leads: {
        "II": { pAmp: 0, qrsAmp: 0, tAmp: 0, stElev: 0 }
      }
    }
  },
  {
    id: "asystole",
    title: "Asistol (Asystole)",
    category: "inti",
    subCategory: "Aritmia",
    clinicalContext: "Laki-laki 68 tahun dengan riwayat gagal ginjal kronik stadium akhir ditemukan tidak sadarkan diri di ranjang rumah sakit. Saat diperiksa, napas (-) dan nadi karotis tidak teraba. Monitor EKG dipasang dan menunjukkan garis hampir datar.",
    interpretation: {
      irama: "Tidak ada irama (Flatline)",
      frekuensi: "Nol (0 kali/menit)",
      aksis: "Tidak ada",
      prInterval: "Tidak ada",
      qrsComplex: "Tidak ada aktivitas listrik ventrikel (tidak ada kompleks QRS)",
      sttChange: "Tidak ada",
      diagnosis: "Asistol (Asystole) - Henti Jantung",
      korelasiKlinis: "Ketiadaan total aktivitas listrik dan mekanik ventrikel. Irama henti jantung non-shockable (tidak boleh didefibrilasi). **PERINGATAN**: Sebelum menyatakan asistol, pastikan kabel/elektroda tidak lepas, mesin EKG menyala, dan cek minimal pada 2 lead yang berbeda.",
      tatalaksana: "Protokol ACLS untuk Irama Non-Shockable (Asistol/PEA):\n1. Lanjutkan **RJP berkualitas tinggi** secara kontinu selama siklus 2 menit.\n2. **TIDAK boleh dilakukan Defibrilasi / Kejut Listrik** (karena tidak ada aktivitas listrik jantung untuk didepolarasi).\n3. Berikan **Epinefrin 1 mg IV/IO sesegera mungkin**, diulang setiap 3-5 menit.\n4. Cari dan koreksi penyebab reversible (Protokol 5H & 5T: Hipovolemia, Hipoksia, Hidrogen ion/Asidosis, Hipo/Hiperkalemia, Hipotermia; Tension pneumothorax, Tamponade jantung, Toksin, Trombosis koroner, Trombosis paru).\n5. Pertimbangkan intubasi (airway definitif) tanpa menginterupsi kompresi dada."
    },
    waveParams: {
      heartRate: 0,
      pWaveVisible: false,
      qrsWidth: 0,
      rAmplitude: 0,
      tAmplitude: 0,
      leads: {
        "II": { pAmp: 0, qrsAmp: 0, tAmp: 0, stElev: 0 }
      }
    }
  },
  {
    id: "av-block-1",
    title: "Atrioventricular (AV) Block Derajat 1",
    category: "tinggi",
    subCategory: "Kelainan Konduksi",
    clinicalContext: "Laki-laki 45 tahun datang untuk kontrol rutin hipertensi. Pasien tidak memiliki keluhan berdebar, pusing, sesak napas, atau riwayat pingsan. Pemeriksaan fisik menunjukkan TD: 130/80 mmHg, HR: 68 x/m teratur.",
    interpretation: {
      irama: "Sinus Ritmis",
      frekuensi: "68 kali/menit",
      aksis: "Normoaksis",
      prInterval: "0.28 detik (Memanjang konstan > 0.20 detik atau > 5 kotak kecil)",
      qrsComplex: "0.08 detik (Sempit, setiap gelombang P selalu diikuti kompleks QRS - rasio konduksi 1:1)",
      sttChange: "Normal",
      diagnosis: "AV Block Derajat 1",
      korelasiKlinis: "Hambatan konduksi listrik dari atrium ke ventrikel, terjadi di nodus AV. Seringkali bersifat benigna dan asimtomatik, dapat disebabkan peningkatan tonus vagal (atlet), obat (beta-blocker, diltiazem/verapamil, digoksin), atau proses degeneratif konduksi.",
      tatalaksana: "1. Bersifat asimtomatik: **Tidak memerlukan terapi khusus**.\n2. Evaluasi obat-obatan yang sedang dikonsumsi pasien (hentikan/kurangi dosis jika ada obat yang mendepresi nodus AV secara berlebihan).\n3. Lakukan observasi berkala."
    },
    waveParams: {
      heartRate: 68,
      pWaveVisible: true,
      prLength: 0.28,
      qrsWidth: 0.08,
      rAmplitude: 1.0,
      tAmplitude: 0.3,
      leads: {
        "II": { pAmp: 0.12, qrsAmp: 1.0, tAmp: 0.3, stElev: 0 }
      }
    }
  },
  {
    id: "av-block-2-mobitz-1",
    title: "AV Block Derajat 2 Mobitz I (Wenckebach)",
    category: "tinggi",
    subCategory: "Kelainan Konduksi",
    clinicalContext: "Laki-laki 32 tahun, seorang atlet marathon, datang dengan keluhan kadang-kadang merasakan denyut jantungnya terlewat (skip beat) saat sedang beristirahat santai di rumah. Pasien tidak mengalami sesak, nyeri dada, atau pusing. TD: 115/70 mmHg, HR: 52 x/m (tidak teratur).",
    interpretation: {
      irama: "Irreguler secara periodik (Grup beating)",
      frekuensi: "52 kali/menit",
      aksis: "Normoaksis",
      prInterval: "Progressive lengthening (PR interval memanjang secara bertahap pada setiap siklus berikutnya) sampai akhirnya terdapat satu gelombang P yang **tidak diikuti oleh kompleks QRS** (dropped QRS). Setelah dropped beat, siklus berulang kembali dengan PR interval yang memendek ke ukuran semula.",
      qrsComplex: "0.08 detik (Sempit)",
      sttChange: "Normal",
      diagnosis: "AV Block Derajat 2 Mobitz I (Wenckebach)",
      korelasiKlinis: "Keterlambatan konduksi progresif di nodus AV hingga terjadi blokade total sesaat. Umumnya benigna, sering terjadi pada atlet terlatih karena tonus vagal tinggi saat istirahat, atau akibat intoksikasi obat nodus AV/iskemia inferior.",
      tatalaksana: "1. Jika asimtomatik (sering pada atlet): **Tidak memerlukan tatalaksana khusus/pacemaker**.\n2. Evaluasi dan eliminasi obat-obatan penyebab (misal beta-blocker).\n3. Monitoring jika pasien menunjukkan gejala simptomatik (jarang terjadi pada derajat ini, namun jika ada, Atropin dapat diberikan)."
    },
    waveParams: {
      heartRate: 55,
      pWaveVisible: true,
      droppedBeats: "wenckebach",
      prLength: 0.16, // dynamically increases in renderer
      qrsWidth: 0.08,
      rAmplitude: 1.0,
      tAmplitude: 0.3,
      leads: {
        "II": { pAmp: 0.12, qrsAmp: 1.0, tAmp: 0.3, stElev: 0 }
      }
    }
  },
  {
    id: "av-block-2-mobitz-2",
    title: "AV Block Derajat 2 Mobitz II",
    category: "tinggi",
    subCategory: "Kelainan Konduksi",
    clinicalContext: "Laki-laki 74 tahun datang ke IGD dengan keluhan lemas, sesak napas saat beraktivitas ringan, dan sempat terjatuh pusing (presinkop) pagi ini. Pasien memiliki riwayat penyakit jantung koroner. TD: 100/60 mmHg, HR: 40 x/m teratur lambat.",
    interpretation: {
      irama: "Reguler atau Irreguler (tergantung konsistensi rasio konduksi, misal 2:1 atau 3:1)",
      frekuensi: "40 kali/menit",
      aksis: "Normoaksis atau LAD",
      prInterval: "Konstan/Tetap (PR interval sama pada setiap siklus yang terkonduksi), namun secara tiba-tiba terdapat gelombang P yang **tidak diikuti oleh kompleks QRS (dropped QRS)**.",
      qrsComplex: "0.11 detik (Seringkali melebar, karena lokasi blok biasanya di bawah nodus AV / infra-Hisian di sistem berkas His-Purkinje)",
      sttChange: "Normal atau ST-T perubahan non-spesifik",
      diagnosis: "AV Block Derajat 2 Mobitz II",
      korelasiKlinis: "Kerusakan organik struktural pada sistem konduksi sub-nodal (Sistem His-Purkinje). Memiliki prognosis buruk karena **sangat berisiko berkembang menjadi AV block derajat 3 (lengkap) atau asistol** secara mendadak.",
      tatalaksana: "1. Segera monitor ketat dan pasang akses IV.\n2. **Persiapkan Transcutaneous Pacing (TCP)** segera karena risiko asistol tinggi.\n3. Pemberian Atropin (1 mg IV) dapat dicoba tetapi seringkali tidak efektif karena lokasi blok berada di bawah nodus AV.\n4. Rujuk segera untuk pemasangan **Pacemaker Permanen**."
    },
    waveParams: {
      heartRate: 40,
      pWaveVisible: true,
      droppedBeats: "mobitz2",
      prLength: 0.16,
      qrsWidth: 0.11,
      rAmplitude: 0.9,
      tAmplitude: 0.25,
      leads: {
        "II": { pAmp: 0.12, qrsAmp: 0.9, tAmp: 0.25, stElev: 0 }
      }
    }
  },
  {
    id: "av-block-3",
    title: "AV Block Derajat 3 (Complete Heart Block)",
    category: "tinggi",
    subCategory: "Kelainan Konduksi",
    clinicalContext: "Perempuan 78 tahun dibawa oleh keluarganya ke IGD karena pingsan mendadak saat duduk di ruang tamu. Saat ini pasien sadar namun tampak sangat lemas, pucat, dingin, dan mengeluh pusing berputar. Riwayat penyakit jantung kronik (+). TD: 85/50 mmHg (hipotensi/syok), HR: 30 x/m, Napas: 20 x/m.",
    interpretation: {
      irama: "Disosiasi AV Total (Gelombang P dan kompleks QRS berjalan masing-masing tanpa hubungan konduksi). Irama P-P reguler (cepat ~80 x/m) dan R-R reguler (lambat ~30 x/m) tetapi tidak ada hubungan PR interval konstan.",
      frekuensi: "30 kali/menit (Sangat lambat/bradikardia berat, irama lolos ventrikel/escape rhythm)",
      aksis: "Tergantung fokus escape (LAD atau RAD biasa terjadi jika escape ventrikular)",
      prInterval: "Bervariasi acak secara total (tidak ada PR interval yang konstan)",
      qrsComplex: "0.14 detik (Melebar karena irama penyelamat/escape berasal dari ventrikel, atau sempit jika escape dari junctional nodus AV atas)",
      sttChange: "Dapat disertai ST-T depresi/inversi sekunder akibat konduksi ventrikular abnormal",
      diagnosis: "AV Block Derajat 3 (Complete Heart Block) Simptomatik",
      korelasiKlinis: "Kegagalan total hantaran listrik dari atrium ke ventrikel. Ventrikel berdenyut secara mandiri dengan irama penyelamat lambat. Menyebabkan penurunan drastis curah jantung dan hipoperfusi organ sistemik (sinkop/Stokes-Adams attack).",
      tatalaksana: "1. **Tatalaksana Segera**: Pemasangan **Transcutaneous Pacing (TCP)** adalah prioritas utama karena pasien tidak stabil (hipotensi/syok).\n2. Berikan terapi suportif: Oksigenasi, akses IV.\n3. Berikan obat inotropik: Infus Dopamin (5-20 mcg/kg/menit) atau Epinefrin (2-10 mcg/menit) untuk meningkatkan HR sembari menunggu pacemaker siap.\n4. Rujuk segera untuk pemasangan **Temporary Pacemaker (TPM)** diikuti **Permanent Pacemaker (PPM)**."
    },
    waveParams: {
      heartRate: 30,
      pWaveVisible: true,
      droppedBeats: "complete",
      prLength: 0.20,
      qrsWidth: 0.14,
      rAmplitude: 0.8,
      tAmplitude: -0.3,
      leads: {
        "II": { pAmp: 0.12, qrsAmp: 0.8, tAmp: -0.3, stElev: 0 }
      }
    }
  },
  {
    id: "rbbb",
    title: "Right Bundle Branch Block (RBBB)",
    category: "tinggi",
    subCategory: "Kelainan Konduksi",
    clinicalContext: "Laki-laki 49 tahun datang untuk pemeriksaan rutin hipertensi. Pasien tidak memiliki keluhan sesak atau nyeri dada. Pada pemeriksaan EKG didapatkan gambaran khas RBBB. TD: 135/85 mmHg, HR: 74 x/m.",
    interpretation: {
      irama: "Sinus Ritmis",
      frekuensi: "74 kali/menit",
      aksis: "Normoaksis atau RAD ringan",
      prInterval: "0.16 detik (Normal)",
      qrsComplex: "0.13 detik (MELEBAR, > 0.12 detik atau > 3 kotak kecil)",
      sttChange: "ST depresi dan T inversi di lead V1-V3 (perubahan repolarisasi sekunder RBBB). Gelombang T tegak di lateral.",
      diagnosis: "Complete Right Bundle Branch Block (RBBB)",
      korelasiKlinis: "Hambatan konduksi pada berkas cabang kanan (Right Bundle Branch). Karakteristik khas EKG:\n1. Pola **rSR'** atau M-shape di lead prekordial kanan (**V1, V2**)\n2. Gelombang **S yang melebar dan dalam (slurred S wave)** di lead lateral (**I, aVL, V5, V6**). Dapat terjadi pada variasi normal (RBBB inkomplit) atau penyakit jantung kanan (hipertensi pulmonal, ASD, cor pulmonale).",
      tatalaksana: "1. Jika asimtomatik isolasi tanpa penyakit jantung struktural: **Tidak memerlukan terapi spesifik**.\n2. Cari penyebab penyakit jantung yang mendasari (misal penyakit katup, PPOK, hipertensi).\n3. Pantau tanda klinis baru."
    },
    waveParams: {
      heartRate: 74,
      pWaveVisible: true,
      prLength: 0.16,
      qrsWidth: 0.13,
      rAmplitude: 1.0,
      tAmplitude: 0.3,
      leads: {
        "V1": { pAmp: 0.05, qrsAmp: 0.8, tAmp: -0.3, stElev: 0, rabbitEars: true },
        "I": { pAmp: 0.12, qrsAmp: 0.8, tAmp: 0.25, stElev: 0, slurredS: true },
        "V6": { pAmp: 0.10, qrsAmp: 1.2, tAmp: 0.35, stElev: 0, slurredS: true }
      }
    }
  },
  {
    id: "lbbb",
    title: "Left Bundle Branch Block (LBBB)",
    category: "tinggi",
    subCategory: "Kelainan Konduksi",
    clinicalContext: "Perempuan 67 tahun dengan riwayat gagal jantung dan hipertensi lama datang untuk kontrol rutin. Pasien mengeluh kadang agak sesak bila berjalan jauh, tidak ada nyeri dada saat ini. Pemeriksaan EKG menunjukkan adanya LBBB baru dibandingkan EKG tahun lalu. TD: 140/80 mmHg, HR: 80 x/m.",
    interpretation: {
      irama: "Sinus Ritmis",
      frekuensi: "80 kali/menit",
      aksis: "Left Axis Deviation (LAD) sering menyertai",
      prInterval: "0.15 detik (Normal)",
      qrsComplex: "0.14 detik (MELEBAR, > 0.12 detik atau > 3 kotak kecil)",
      sttChange: "ST depresi dan T inversi di lead lateral (I, aVL, V5, V6) dan ST elevasi diskordan (berlawanan dengan arah QRS utama) di V1-V3. Ini adalah perubahan sekunder normal pada LBBB.",
      diagnosis: "Complete Left Bundle Branch Block (LBBB)",
      korelasiKlinis: "Hambatan konduksi pada berkas cabang kiri (Left Bundle Branch). Karakteristik khas:\n1. Kompleks QRS lebar dengan **R notched/lebar berbentuk huruf M** di lead lateral (**I, aVL, V5, V6**) tanpa adanya gelombang Q.\n2. Kompleks **QS atau rS yang dalam dan lebar** di lead prekordial kanan (**V1-V3**). LBBB hampir selalu menandakan adanya **penyakit jantung struktural** (hipertensi kronik, PJK, kardiomiopati). LBBB baru harus dianggap sebagai STEMI ekuivalen jika disertai nyeri dada akut.",
      tatalaksana: "1. Karena LBBB baru menandakan kelainan jantung struktural berat, rujuk ke dokter spesialis jantung untuk evaluasi ekokardiografi.\n2. **Sangat Penting**: Jika pasien mengeluh nyeri dada khas infark dengan LBBB baru, segera tatalaksana sebagai protokol STEMI (siapkan reperfusi/PCI) karena LBBB mengaburkan visualisasi ST elevasi biasa (gunakan kriteria Sgarbossa untuk deteksi infark pada LBBB)."
    },
    waveParams: {
      heartRate: 80,
      pWaveVisible: true,
      prLength: 0.15,
      qrsWidth: 0.14,
      rAmplitude: 1.0,
      tAmplitude: 0.3,
      leads: {
        "V1": { pAmp: 0.05, qrsAmp: -1.2, tAmp: 0.4, stElev: 0.15 }, // deep QS
        "I": { pAmp: 0.12, qrsAmp: 1.1, tAmp: -0.3, stElev: -0.1, notchedR: true },
        "V6": { pAmp: 0.10, qrsAmp: 1.3, tAmp: -0.3, stElev: -0.1, notchedR: true }
      }
    }
  },
  {
    id: "pvc",
    title: "Ventricular Extrasystole (VES) / Premature Ventricular Complex (PVC)",
    category: "tinggi",
    subCategory: "Aritmia",
    clinicalContext: "Laki-laki 52 tahun datang mengeluh jantungnya sering terasa seperti berdebar 'kaget' atau 'berhenti sejenak' lalu berdenyut keras (palpitasi) sejak 3 hari ini. Pasien kurang tidur dan mengonsumsi kopi 3 cangkir sehari. TD: 125/80 mmHg, HR: 84 x/m irreguler dengan denyut prematur.",
    interpretation: {
      irama: "Irama Dasar Sinus Ritmis, diselingi oleh denyut ventrikular prematur",
      frekuensi: "84 kali/menit",
      aksis: "Normoaksis pada denyut sinus, aksis abnormal pada denyut PVC",
      prInterval: "Normal pada denyut sinus (0.16s), tidak ada gelombang P sebelum denyut PVC",
      qrsComplex: "0.08s (Normal) pada denyut sinus. Pada **denyut PVC/VES: QRS melebar (> 0.12s), bizar, muncul lebih awal (prematur) dari waktu seharusnya, diikuti pause kompensatorik lengkap**.",
      sttChange: "Gelombang T berlawanan arah (diskordan) dengan kompleks QRS pada denyut PVC.",
      diagnosis: "Premature Ventricular Contraction (PVC) / Ventricular Extrasystole (VES) - tipe Isolated Monomorfik (atau Bigeminy jika terjadi selang-seling)",
      korelasiKlinis: "Depolarisasi dini ventrikel yang dipicu oleh fokus ektopik di bawah nodus AV. Sering dipicu oleh kafein, kecemasan, kurang tidur, gangguan elektrolit (hipokalemia/hipomagnesemia), atau iskemia miokard.",
      tatalaksana: "1. Lakukan anamnesis pencetus: kurangi kafein, alkohol, rokok, atasi stres/kurang tidur.\n2. Cek kadar elektrolit darah (terutama Kalium dan Magnesium).\n3. Jika PVC sangat sering (> 10% total denyut dalam Holter monitor) atau simptomatik mengganggu, dapat diberikan terapi obat **Beta-blocker** (misal Metoprolol atau Bisoprolol).\n4. Rujuk spesialis jantung jika PVC bersifat polimorfik, multifokal, muncul berurutan (run of PVC/VT), atau ada riwayat penyakit jantung struktural."
    },
    waveParams: {
      heartRate: 75,
      pWaveVisible: true,
      pvcPattern: "isolated", // will draw a PVC every 4th beat
      prLength: 0.16,
      qrsWidth: 0.08,
      rAmplitude: 1.0,
      tAmplitude: 0.35,
      leads: {
        "II": { pAmp: 0.12, qrsAmp: 1.0, tAmp: 0.3, stElev: 0 }
      }
    }
  },
  {
    id: "atrial-flutter",
    title: "Atrial Flutter",
    category: "tinggi",
    subCategory: "Aritmia",
    clinicalContext: "Laki-laki 61 tahun mengeluh sesak napas dan dadanya berdebar-debar sedang namun konstan sejak 2 hari SMRS. Riwayat hipertensi (+) dan penyakit jantung koroner (+). TD: 120/80 mmHg, HR: 75 x/m (stabil, reguler).",
    interpretation: {
      irama: "Reguler (dengan blok konduksi tetap, misal 4:1) atau Irreguler (jika blok berubah-ubah)",
      frekuensi: "Ventricular rate: 75 kali/menit (Atrial rate: 300 kali/menit dengan blok konduksi 4:1)",
      aksis: "Normoaksis",
      prInterval: "Tidak dapat dinilai (digantikan gelombang flutter)",
      qrsComplex: "0.08 detik (Sempit/Normal)",
      sttChange: "Adanya gelombang flutter berbentuk **gigi gergaji (saw-tooth wave / F-wave)** yang sangat teratur, terlihat paling jelas di lead inferior (II, III, aVF). Segmen ST-T sulit dievaluasi karena tertutup gelombang flutter.",
      diagnosis: "Atrial Flutter dengan Blok AV 4:1",
      korelasiKlinis: "Adanya sirkuit re-entry makro di atrium kanan (biasanya mengitari katup trikuspid). Laju listrik atrium sangat cepat (~300 x/m) namun nodus AV bertindak sebagai filter konduksi (misal hanya meneruskan 1 dari 4 impuls sehingga HR ventrikel 75 x/m). Risiko tromboemboli mirip dengan AF.",
      tatalaksana: "1. **Rate Control**: Berikan Beta-blocker atau Diltiazem untuk mengontrol laju ventrikel.\n2. **Rhythm Control / Kardioversi**: Sangat responsif terhadap kardioversi listrik dosis rendah (20-50 Joule) atau obat antiaritmia.\n3. **Profilaksis Stroke**: Berikan antikoagulan oral sesuai penilaian skor CHADS2-VASc.\n4. Rujuk untuk tindakan **Kateter Ablasi** (terapi kuratif definitif untuk memutus sirkuit re-entry)."
    },
    waveParams: {
      heartRate: 75, // ventricular rate
      pWaveVisible: false,
      sawtooth: true, // will draw saw-tooth F waves (ratio 4:1)
      qrsWidth: 0.08,
      rAmplitude: 1.0,
      tAmplitude: 0.2,
      leads: {
        "II": { pAmp: 0, qrsAmp: 1.0, tAmp: 0.2, stElev: 0 }
      }
    }
  },
  {
    id: "hyperkalemia",
    title: "Hiperkalemia",
    category: "tinggi",
    subCategory: "Gangguan Elektrolit",
    clinicalContext: "Laki-laki 55 tahun dengan riwayat Gagal Ginjal Kronik stadium 5 tidak rutin cuci darah dibawa ke IGD karena lemas seluruh tubuh hingga tidak bisa berdiri sejak kemarin. Pada pemeriksaan fisik didapatkan kesadaran somnolen, TD: 90/50 mmHg, HR: 48 x/m, Napas: 24 x/m.",
    interpretation: {
      irama: "Sinus Ritmis lambat / Junctional (P wave mendatar atau hilang)",
      frekuensi: "48 kali/menit",
      aksis: "Normoaksis atau deviasi aksis kiri",
      prInterval: "PR memanjang (jika gelombang P masih tampak, seringkali rata dan lebar)",
      qrsComplex: "0.14 detik (MELEBAR, menunjukkan keterlambatan konduksi intraventrikular berat)",
      sttChange: "Gelombang **T TINGGI RUNCING, simetris, berdasar sempit (Tall Peaked T wave / tented T wave)**. Terlihat sangat menonjol di lead prekordial V2-V4.",
      diagnosis: "Hiperkalemia Berat (Suspek kadar kalium darah > 6.5 mEq/L)",
      korelasiKlinis: "Kadar kalium tinggi mendepolarisasi potensial membran istirahat sel miokard. Urutan perubahan EKG: T runcing -> PR memanjang + P rata -> QRS melebar -> gelombang P hilang -> gambaran gelombang sinus (sine wave) -> VF/asistol (henti jantung). Ini adalah **EMERGENSI MEDIS**.",
      tatalaksana: "1. **Stabilisasi Membran Miokard**: Berikan **Kalsium Glukonat 10% sebanyak 10 mL IV** perlahan dalam 5-10 menit. Ini langkah pertama yang paling krusial untuk mencegah aritmia fatal.\n2. **Redistribusi Kalium masuk sel**:\n   - Insulin reguler 10 Unit IV + Dextrose 40% 50 mL (atau D10% 500 mL) secara bolus/infus.\n   - Nebulisasi beta-2 agonis dosis tinggi (misal: Albuterol/Salbutamol 10-20 mg).\n   - Koreksi asidosis jika ada dengan Natrium Bikarbonat (Mabicar) IV.\n3. **Eliminasi Kalium dari tubuh**: Kalium-binding resins (Sorbitol/Kalitake), Diuretik Loop (Furosemid IV jika ginjal masih berfungsi).\n4. **Hemodialisis darurat** (terapi definitif tercepat untuk pasien gagal ginjal)."
    },
    waveParams: {
      heartRate: 48,
      pWaveVisible: true,
      prLength: 0.24,
      qrsWidth: 0.14,
      rAmplitude: 0.8,
      tAmplitude: 1.2, // very tall peaked T
      leads: {
        "V3": { pAmp: 0.05, qrsAmp: 0.8, tAmp: 1.2, stElev: 0 },
        "II": { pAmp: 0.06, qrsAmp: 0.7, tAmp: 0.9, stElev: 0 }
      }
    }
  },
  {
    id: "hypokalemia",
    title: "Hipokalemia",
    category: "tinggi",
    subCategory: "Gangguan Elektrolit",
    clinicalContext: "Perempuan 34 tahun dibawa ke IGD karena kelemahan otot ekstremitas hingga sulit berjalan sejak tadi pagi. Pasien mengeluh buang air besar cair lebih dari 10 kali per hari disertai muntah sejak 2 hari yang lalu. TD: 100/60 mmHg, HR: 90 x/m.",
    interpretation: {
      irama: "Sinus Ritmis",
      frekuensi: "90 kali/menit",
      aksis: "Normoaksis",
      prInterval: "0.18 detik (Normal atau memanjang ringan)",
      qrsComplex: "0.08 detik (Normal)",
      sttChange: "Segmen ST depresi ringan, Gelombang T mendatar (T-wave flattening) atau inversi ringan, dan adanya gelombang **U yang menonjol (prominent U-wave)** segera setelah gelombang T. Terlihat jelas di lead V2-V4.",
      diagnosis: "Hipokalemia (Suspek kadar kalium darah < 3.0 mEq/L)",
      korelasiKlinis: "Kadar kalium rendah mengganggu repolarisasi ventrikel. Risiko terjadinya aritmia ventrikular berbahaya seperti Torsades de Pointes, terutama jika disertai perpanjangan interval QT.",
      tatalaksana: "1. Lakukan koreksi Kalium segera:\n   - **Jika Ringan (Kalium 3.0 - 3.4 mEq/L) & Tanpa Gejala EKG**: Berikan KSR (Kalium Klorida tablet) 1200-2400 mg oral.\n   - **Jika Berat (< 3.0 mEq/L) atau Simptomatik EKG/Otot Lemas**: Berikan **KCl IV drip** lewat infus dengan kecepatan tidak melebihi 10-20 mEq/jam (wajib menggunakan syringe pump/infus monitor, jangan bolus karena bisa memicu VF/asistol).\n2. Atasi penyebab kehilangan cairan (diare/muntah) dan pantau elektrolit serial tiap 4-6 jam."
    },
    waveParams: {
      heartRate: 90,
      pWaveVisible: true,
      prLength: 0.18,
      qrsWidth: 0.08,
      rAmplitude: 1.0,
      tAmplitude: 0.05, // flat T
      uWave: 0.25, // prominent U wave
      leads: {
        "V3": { pAmp: 0.08, qrsAmp: 1.2, tAmp: 0.05, stElev: -0.05 }
      }
    }
  },
  {
    id: "pericarditis",
    title: "Perikarditis Akut",
    category: "tambahan",
    subCategory: "Lainnya",
    clinicalContext: "Laki-laki 28 tahun datang dengan keluhan nyeri dada tajam di daerah retrosternal kiri yang menjalar ke leher sejak 1 hari yang lalu. Nyeri dirasakan bertambah parah saat menarik napas dalam (nyeri pleurititik) atau saat berbaring telentang, dan membaik secara signifikan saat pasien duduk tegak dan condong ke depan. Pasien memiliki riwayat batuk dan demam ringan 1 minggu yang lalu.",
    interpretation: {
      irama: "Sinus Takikardia / Sinus Ritmis",
      frekuensi: "102 kali/menit",
      aksis: "Normoaksis",
      prInterval: "0.14 detik, terdapat **PR DEPRESI** di hampir seluruh lead (kecuali aVR yang mengalami PR elevasi)",
      qrsComplex: "0.08 detik (Normal)",
      sttChange: "ST Elevasi difus (widespread) berbentuk melengkung ke atas (concave / saddle-back) di hampir semua lead (I, II, III, aVF, aVL, V2-V6), KECUALI di lead aVR yang menunjukkan ST depresi dan PR elevasi.",
      diagnosis: "Perikarditis Akut",
      korelasiKlinis: "Inflamasi pada lapisan perikardium jantung (seringkali pasca-infeksi virus). Sangat penting dibedakan dengan STEMI inferior/anterior. Pada perikarditis: ST elevasi bersifat difus (tidak mematuhi satu teritori koroner tertentu), berbentuk konkav, tidak ada reciprocal ST depresi (kecuali di aVR dan V1), serta terdapat PR depresi yang khas.",
      tatalaksana: "1. Terapi lini pertama: **Kombinasi Aspirin dosis tinggi** (650-1000 mg setiap 8 jam) atau **NSAID dosis tinggi** (misal: Ibuprofen 600-800 mg setiap 8 jam) selama 1-2 minggu + **Kolkisin (Colchicine)** 0.5-0.6 mg sekali/dua kali sehari selama 3 bulan untuk mencegah rekurensi.\n2. Istirahat fisik (restriksi olahraga) hingga gejala membaik.\n3. Cari penyakit penyerta (tuberculosis, penyakit autoimun).\n4. Monitor ketat tanda-tanda tamponade jantung (Beck's triad: hipotensi, JVP meningkat, suara jantung menjauh)."
    },
    waveParams: {
      heartRate: 102,
      pWaveVisible: true,
      prLength: 0.14,
      qrsWidth: 0.08,
      rAmplitude: 1.0,
      tAmplitude: 0.35,
      diffuseSTE: true, // will elevate ST and depress PR in multiple leads
      leads: {
        "II": { pAmp: 0.10, qrsAmp: 1.0, tAmp: 0.35, stElev: 0.25, prDep: 0.05 },
        "V5": { pAmp: 0.08, qrsAmp: 1.5, tAmp: 0.40, stElev: 0.20, prDep: 0.05 },
        "aVR": { pAmp: 0.08, qrsAmp: -0.6, tAmp: -0.2, stElev: -0.15, prDep: -0.05 }
      }
    }
  },
  {
    id: "lvh",
    title: "Left Ventricular Hypertrophy (LVH)",
    category: "tambahan",
    subCategory: "Lainnya",
    clinicalContext: "Laki-laki 67 tahun datang dengan keluhan sering pusing kepala bagian belakang sejak 1 bulan ini. Pasien menderita hipertensi sejak 15 tahun lalu namun jarang minum obat secara teratur karena merasa tidak ada keluhan. Pemeriksaan fisik menunjukkan TD: 175/100 mmHg, HR: 82 x/m.",
    interpretation: {
      irama: "Sinus Ritmis",
      frekuensi: "82 kali/menit",
      aksis: "Left Axis Deviation (LAD) sering menyertai",
      prInterval: "0.16 detik (Normal)",
      qrsComplex: "0.10 detik (Normal atau melebar batas atas)",
      sttChange: "Adanya **Strain Pattern** di lead lateral (I, aVL, V5, V6): berupa ST depresi asimetris (downsloping) dan gelombang T inversi asimetris.",
      diagnosis: "Left Ventricular Hypertrophy (LVH) berdasarkan Kriteria Sokolow-Lyon dengan Strain Pattern",
      korelasiKlinis: "Penebalan otot ventrikel kiri akibat overload tekanan kronik (misal akibat hipertensi lama tidak terkontrol atau stenosis aorta). Kriteria diagnosis EKG (Sokolow-Lyon):\n**S di V1 + R di V5 atau V6 >= 35 mm** (atau R di aVL >= 11 mm). Adanya strain pattern menunjukkan iskemia relatif subendokardial karena massa otot yang sangat tebal.",
      tatalaksana: "1. **Kontrol Tekanan Darah secara agresif**: Berikan antihipertensi golongan ACE-inhibitor (misal Ramipril/Lisinopril) atau ARB (misal Valsartan/Candesartan) yang terbukti memiliki efek meregresi hipertrofi ventrikel kiri.\n2. Edukasi perubahan gaya hidup: diet rendah garam, olahraga intensitas sedang, hindari merokok.\n3. Evaluasi ekokardiografi untuk menilai massa ventrikel kiri dan fungsi ejeksi (LVEF)."
    },
    waveParams: {
      heartRate: 82,
      pWaveVisible: true,
      prLength: 0.16,
      qrsWidth: 0.10,
      rAmplitude: 2.2, // high voltage R
      tAmplitude: -0.4,
      leads: {
        "V1": { pAmp: 0.05, qrsAmp: -2.0, tAmp: 0.3, stElev: 0.1 }, // deep S
        "V5": { pAmp: 0.08, qrsAmp: 2.6, tAmp: -0.5, stElev: -0.2 } // tall R + strain
      }
    }
  },
  {
    id: "wpw",
    title: "Wolff-Parkinson-White (WPW) Pattern",
    category: "tambahan",
    subCategory: "Kelainan Konduksi",
    clinicalContext: "Laki-laki 21 tahun datang untuk pemeriksaan EKG sebelum mengikuti tes fisik masuk kepolisian. Pasien menyangkal adanya sesak atau nyeri dada, namun mengaku kadang-kadang merasakan jantungnya berdebar kencang secara mendadak selama beberapa menit saat berolahraga berat.",
    interpretation: {
      irama: "Sinus Ritmis",
      frekuensi: "70 kali/menit",
      aksis: "Normoaksis atau deviasi aksis kiri",
      prInterval: "0.09 detik (**MEMENDEK**, < 0.12 detik atau < 3 kotak kecil)",
      qrsComplex: "0.13 detik (**MELEBAR**, dengan terdapat landasan landai pada awal naik kompleks QRS yang disebut **Gelombang Delta (Delta Wave)**)",
      sttChange: "Dapat disertai ST-T perubahan non-spesifik sekunder terhadap kelainan depolarisasi ventrikel",
      diagnosis: "Wolff-Parkinson-White (WPW) Pattern",
      korelasiKlinis: "Sindrom pra-eksitasi ventrikel karena adanya jalur konduksi listrik tambahan (aksesoris/Bundle of Kent) yang memintas nodus AV. Mengakibatkan ventrikel terdepolarisasi lebih awal secara parsial (PR pendek + delta wave). Sangat berisiko memicu takiaritmia re-entry yang cepat seperti AVRT atau AF dengan konduksi cepat lewat jalur aksesoris.",
      tatalaksana: "1. Jika asimtomatik total tanpa riwayat berdebar: **Hanya observasi** dan edukasi tanda-tanda takikardia.\n2. Jika ada riwayat berdebar/takikardia (Sindrom WPW): Rujuk ke spesialis jantung untuk pemeriksaan elektrofisiologi (EPS) dan tindakan **Kateter Ablasi pada jalur aksesoris**.\n3. **PERINGATAN**: Jika pasien WPW mengalami AF, **HINDARI obat penyekat nodus AV** seperti Beta-blocker, CCB (Diltiazem/Verapamil), Digoksin, dan Adenosin, karena obat-obat tersebut dapat memicu konduksi eksklusif melalui jalur aksesoris tanpa hambatan, menyebabkan VF dan kematian mendadak. Gunakan antiaritmia golongan IA/IC atau Procainamide, atau kardioversi segera jika tidak stabil."
    },
    waveParams: {
      heartRate: 70,
      pWaveVisible: true,
      prLength: 0.09,
      qrsWidth: 0.13,
      rAmplitude: 1.0,
      tAmplitude: 0.25,
      deltaWave: true, // will draw delta wave at start of QRS
      leads: {
        "II": { pAmp: 0.12, qrsAmp: 1.0, tAmp: 0.25, stElev: 0 }
      }
    }
  },
  {
    id: "torsades",
    title: "Torsades de Pointes (Polymorphic VT)",
    category: "tambahan",
    subCategory: "Aritmia",
    clinicalContext: "Perempuan 45 tahun yang sedang dirawat di bangsal karena pneumonia berat tiba-tiba tidak sadarkan diri di tempat tidurnya setelah mendapat suntikan antibiotik Levofloxasin dan Ondansetron IV. Perawat merekam EKG monitor yang menunjukkan irama takikardia bizar yang berputar.",
    interpretation: {
      irama: "Sangat tidak teratur (irregularly irregular), cepat",
      frekuensi: "220 kali/menit (Takikardia ventrikular cepat, berkisar 200-250 x/m)",
      aksis: "Terus berubah secara siklis",
      prInterval: "Tidak dapat dinilai",
      qrsComplex: "Lebar dan bizar, dengan karakteristik khas **polimorfik di mana amplitudo dan sumbu kompleks QRS tampak berputar dan berpilin** di sekitar garis isoelektrik (twisting around the baseline). Irama berputar dari puncak ke lembah secara berkala.",
      sttChange: "Tidak dapat dinilai terpisah dari kompleks QRS. Biasanya dipicu oleh perpanjangan interval QT (Long QT Syndrome) pada denyut sinus sebelumnya.",
      diagnosis: "Torsades de Pointes (VT Polimorfik)",
      korelasiKlinis: "Tipe khusus takikardia ventrikel polimorfik yang berhubungan dengan perpanjangan interval QT (misal karena obat pemanjang QT seperti Fluoroquinolone, Makrolida, Ondansetron, Haloperidol; gangguan elektrolit hipokalemia/hipomagnesemia; atau kongenital). Kondisi kritis yang sering bertransisi menjadi VF dan menyebabkan kematian mendadak.",
      tatalaksana: "1. **Langkah Kritis Pertama**: Cek Nadi/Hemodinamik!\n   - **Jika Tanpa Nadi/Kolaps**: Lakukan RJP + **Defibrilasi (Asynchronized Shock) 200 Joule** segera.\n   - **Jika Ada Nadi & Tidak Stabil**: Defibrilasi segera (cardioversion sulit mensinkronisasi irama polimorfik).\n   - **Jika Ada Nadi & Stabil**:\n     a. Berikan **Magnesium Sulfat (MgSO4) 2 gram IV** bolus lambat dalam 1-2 menit (dapat diulang atau dilanjutkan dengan infus).\n     b. Hentikan segera semua obat-obatan pemanjang QT.\n     c. Koreksi gangguan elektrolit (Kalium dan Magnesium) ke batas normal atas.\n     d. Jika denyut jantung dasar lambat (bradikardia memicu Torsades), pertimbangkan pacing transvenous cepat (overdrive pacing) atau infus Isoproterenol untuk menaikkan HR dan memendekkan QT."
    },
    waveParams: {
      heartRate: 220,
      pWaveVisible: false,
      qrsWidth: 0.16,
      rAmplitude: 1.0,
      tAmplitude: 0,
      torsades: true, // will draw twisting amplitude VT
      leads: {
        "II": { pAmp: 0, qrsAmp: 1.0, tAmp: 0, stElev: 0 }
      }
    }
  },
  {
    id: "pulmonary-embolism",
    title: "Pulmonary Embolism Pattern (S1Q3T3)",
    category: "tambahan",
    subCategory: "Lainnya",
    clinicalContext: "Perempuan 52 tahun pasca-operasi ganti sendi panggul (total hip replacement) 5 hari lalu datang ke IGD dengan keluhan sesak napas mendadak disertai nyeri dada tajam saat menarik napas sejak 1 jam yang lalu. Pemeriksaan menunjukkan pasien tampak gelisah, takipnea, TD: 95/60 mmHg, HR: 118 x/m, Napas: 28 x/m, SaO2: 88% dengan udara bebas. Pada betis kiri tampak bengkak, merah, dan nyeri tekan (suspek DVT).",
    interpretation: {
      irama: "Sinus Takikardia (Temuan EKG paling sering pada emboli paru, ~80% kasus)",
      frekuensi: "118 kali/menit (Takikardia)",
      aksis: "Right Axis Deviation (RAD) menggambarkan strain ventrikel kanan",
      prInterval: "0.12 detik (Normal)",
      qrsComplex: "0.08 detik (Sempit, dapat disertai RBBB inkomplit/komplit baru)",
      sttChange: "Adanya pola klasik **S1Q3T3**: gelombang **S yang dalam di Lead I**, gelombang **Q di Lead III**, dan gelombang **T inversi di Lead III**. Dapat juga disertai T inversi di lead prekordial kanan (V1-V4) sebagai tanda disfungsi ventrikel kanan.",
      diagnosis: "Pulmonary Embolism (Emboli Paru) dengan Pola EKG S1Q3T3 dan Sinus Takikardia",
      korelasiKlinis: "Oklusi mendadak arteri pulmonalis oleh embolus (seringkali berasal dari DVT tungkai bawah). Beban sumbatan menyebabkan peningkatan tekanan mendadak pada ventrikel kanan (acute cor pulmonale/RV strain). Pola S1Q3T3 adalah tanda spesifik namun tidak sensitif (hanya muncul pada < 20% kasus emboli paru).",
      tatalaksana: "1. Berikan Oksigenasi aliran tinggi atau ventilasi mekanik jika diperlukan untuk mengatasi hipoksemia berat.\n2. Stabilisasi hemodinamik dengan cairan IV secara hati-hati (berlebihan cairan dapat memperburuk gagal jantung kanan) atau vasopresor (Norepinefrin) jika syok.\n3. Lakukan stratifikasi risiko segera (Wells score/Geneva score).\n4. Antikoagulan segera: **Low Molecular Weight Heparin (LMWH)** seperti Enoxaparin atau UFH (Unfractionated Heparin) IV jika kecurigaan tinggi dan tidak ada kontraindikasi.\n5. Terapi definitif reperfusi: **Trombolisis (misal Alteplase/rtPA)** jika emboli paru masif dengan syok kardiogenik/hipotensi persisten. Rujuk segera ke ICU."
    },
    waveParams: {
      heartRate: 118,
      pWaveVisible: true,
      prLength: 0.12,
      qrsWidth: 0.08,
      rAmplitude: 1.0,
      tAmplitude: 0.3,
      s1q3t3: true, // will draw deep S in I, Q in III, inverted T in III
      leads: {
        "I": { pAmp: 0.12, qrsAmp: 0.9, tAmp: 0.3, stElev: 0, sWave: -0.4 }, // deep S in I
        "III": { pAmp: 0.08, qrsAmp: -0.5, tAmp: -0.3, stElev: 0, qWave: -0.3 }, // Q and inverted T in III
        "II": { pAmp: 0.10, qrsAmp: 1.0, tAmp: 0.25, stElev: 0 }
      }
    }
  }
];

// Export if in Node, otherwise expose as global
if (typeof module !== "undefined" && module.exports) {
  module.exports = { ecgDataset };
}
