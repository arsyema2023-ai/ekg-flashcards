const ecgData = [
    // Prioritas Tertinggi (1-10)
    {
        id: 1,
        priority: 'prioritas-tinggi',
        title: 'Normal Sinus Rhythm',
        generatorConfig: { rate: 75, beatConfig: { } },
        interp: {
            irama: 'Sinus',
            rate: '75 x/menit (Reguler)',
            axis: 'Normal',
            intervals: 'PR 0.16s, QRS 0.08s, QT normal',
            stt: 'Isoelektrik, tidak ada ST elevasi/depresi',
            clinical: 'Jantung normal, fisiologis.',
            management: 'Edukasi pola hidup sehat, tidak ada indikasi medis.'
        }
    },
    {
        id: 2,
        priority: 'prioritas-tinggi',
        title: 'STEMI (ST Elevation Myocardial Infarction)',
        generatorConfig: { rate: 80, beatConfig: { stElevMv: 0.3 } },
        interp: {
            irama: 'Sinus',
            rate: '80 x/menit (Reguler)',
            axis: 'Normal',
            intervals: 'PR 0.16s, QRS 0.08s',
            stt: 'ST Elevasi patologis pada lead yang sesuai teritori, misal inferior (II, III, aVF) atau anterior (V1-V4).',
            clinical: 'Nyeri dada kiri menjalar, keringat dingin, mual (sindrom koroner akut).',
            management: 'MONACO (Morfin, Oksigen, Nitrat, Aspirin, Clopidogrel), persiapan PCI primer / Trombolitik.'
        }
    },
    {
        id: 3,
        priority: 'prioritas-tinggi',
        title: 'NSTEMI / Iskemia Miokard',
        generatorConfig: { rate: 85, beatConfig: { stElevMv: -0.15, tInverted: true } },
        interp: {
            irama: 'Sinus',
            rate: '85 x/menit (Reguler)',
            axis: 'Normal',
            intervals: 'PR 0.16s, QRS 0.08s',
            stt: 'ST depresi dan/atau T inversi dalam (iskemia).',
            clinical: 'Nyeri dada khas infark, biomarker jantung meningkat (NSTEMI) atau normal (UAP).',
            management: 'MONACO, antikoagulan, rujuk untuk stratifikasi risiko (angiografi).'
        }
    },
    {
        id: 4,
        priority: 'prioritas-tinggi',
        title: 'Sinus Takikardia',
        generatorConfig: { rate: 130, beatConfig: { } },
        interp: {
            irama: 'Sinus',
            rate: '130 x/menit (Reguler, HR > 100)',
            axis: 'Normal',
            intervals: 'PR 0.14s, QRS 0.08s',
            stt: 'Normal',
            clinical: 'Sering reaktif terhadap demam, nyeri, dehidrasi, anemia, tirotoksikosis.',
            management: 'Atasi penyebab dasar (cairan, penurun panas, antinyeri).'
        }
    },
    {
        id: 5,
        priority: 'prioritas-tinggi',
        title: 'Sinus Bradikardia',
        generatorConfig: { rate: 45, beatConfig: { } },
        interp: {
            irama: 'Sinus',
            rate: '45 x/menit (Reguler, HR < 60)',
            axis: 'Normal',
            intervals: 'PR 0.16s, QRS 0.08s',
            stt: 'Normal',
            clinical: 'Fisiologis pada atlet, atau patologis (sinkop, pusing, hipotensi).',
            management: 'Jika stabil: observasi. Jika tidak stabil (syok/sinkop): Sulfas Atropin 1 mg IV, siapkan pacu jantung.'
        }
    },
    {
        id: 6,
        priority: 'prioritas-tinggi',
        title: 'Atrial Fibrillation (AF)',
        generatorConfig: { rate: 110, rhythm: 'irregularly_irregular' },
        interp: {
            irama: 'Tidak teratur (Irregularly irregular), gelombang P tidak jelas (fibrilasi)',
            rate: 'Bervariasi, respon ventrikel cepat >100 (AF RVR)',
            axis: 'Normal',
            intervals: 'PR tidak dapat dinilai, QRS sempit',
            stt: 'Normal / depresi sekunder',
            clinical: 'Berdebar, sesak napas. Risiko stroke iskemik.',
            management: 'Kontrol laju (Beta-blocker/CCB non-dihydropyridine), antikoagulan (CHADS2-VASc), kardioversi jika tidak stabil.'
        }
    },
    {
        id: 7,
        priority: 'prioritas-tinggi',
        title: 'SVT (Supraventricular Tachycardia)',
        generatorConfig: { rate: 180, beatConfig: { pWave: false, qrsMs: 70 } },
        interp: {
            irama: 'Reguler, gelombang P tersembunyi / tertanam di kompleks QRS',
            rate: '150-250 x/menit',
            axis: 'Normal',
            intervals: 'QRS sempit (<0.12s)',
            stt: 'Sering normal, bisa ada depresi ST sekunder laju cepat',
            clinical: 'Berdebar mendadak (paroksismal), dada sesak.',
            management: 'Manuver vagal, Adenosin 6mg -> 12mg IV cepat. Kardioversi tersinkronisasi jika tidak stabil.'
        }
    },
    {
        id: 8,
        priority: 'prioritas-tinggi',
        title: 'Ventricular Tachycardia (VT)',
        generatorConfig: { rate: 160, beatConfig: { pWave: false, vt: true, qrsMs: 140 } },
        interp: {
            irama: 'Berasal dari ventrikel',
            rate: '160 x/menit (Reguler)',
            axis: 'Extreme axis deviation sering terjadi',
            intervals: 'QRS LEBAR (>0.12s), tidak ada P',
            stt: 'Arah berlawanan dengan QRS utama',
            clinical: 'Bisa stabil (sadar), tidak stabil (hipotensi), atau tanpa nadi (henti jantung).',
            management: 'VT tanpa nadi: Defibrilasi + RJP. VT tidak stabil: Kardioversi. VT stabil: Amiodaron IV.'
        }
    },
    {
        id: 9,
        priority: 'prioritas-tinggi',
        title: 'Ventricular Fibrillation (VF)',
        generatorConfig: { rate: 200, beatConfig: { vf: true } },
        interp: {
            irama: 'Kacau, tidak teratur sama sekali',
            rate: 'Sangat cepat dan ireguler',
            axis: 'Tidak dapat dinilai',
            intervals: 'Tidak ada kompleks QRS, P, atau T yang dapat diidentifikasi',
            stt: 'Tidak dapat dinilai',
            clinical: 'Pasien tidak sadar, henti napas, tidak ada nadi (cardiac arrest).',
            management: 'RJP segera + Defibrilasi (shockable rhythm).'
        }
    },
    {
        id: 10,
        priority: 'prioritas-tinggi',
        title: 'Asystole',
        generatorConfig: { rate: 0, beatConfig: { asystole: true } },
        interp: {
            irama: 'Garis lurus (flatline)',
            rate: '0',
            axis: 'Tidak dapat dinilai',
            intervals: 'Tidak ada kompleks apapun',
            stt: 'Tidak dapat dinilai',
            clinical: 'Henti jantung. Pastikan true asystole (cek lead/kabel/gain).',
            management: 'RJP segera + Epinefrin 1 mg IV tiap 3-5 menit (Non-shockable).'
        }
    },
    
    // Prioritas Menengah (11-20)
    {
        id: 11,
        priority: 'prioritas-menengah',
        title: 'AV Block Derajat 1',
        generatorConfig: { rate: 70, beatConfig: { prMs: 280 } }, // PR > 200ms
        interp: {
            irama: 'Sinus',
            rate: '70 x/menit',
            axis: 'Normal',
            intervals: 'PR Interval memanjang konstan (>0.20s / >5 kotak kecil), QRS normal',
            stt: 'Normal',
            clinical: 'Sering asimtomatik, ditemukan insidental.',
            management: 'Observasi, tidak perlu terapi spesifik jika tidak ada gejala.'
        }
    },
    {
        id: 12,
        priority: 'prioritas-menengah',
        title: 'AV Block Derajat 2 Mobitz I (Wenckebach)',
        generatorConfig: { 
            rate: 70, 
            beats: [
                { prMs: 160 }, { prMs: 220 }, { prMs: 280 }, { dropped: true }
            ] 
        },
        interp: {
            irama: 'Sinus, tidak teratur',
            rate: 'Bervariasi',
            axis: 'Normal',
            intervals: 'PR Interval makin lama makin panjang, lalu QRS hilang (drop beat)',
            stt: 'Normal',
            clinical: 'Bisa asimtomatik atau berdebar/pusing ringan.',
            management: 'Observasi, evaluasi obat-obatan penurun HR.'
        }
    },
    {
        id: 13,
        priority: 'prioritas-menengah',
        title: 'AV Block Derajat 2 Mobitz II',
        generatorConfig: { 
            rate: 65, 
            beats: [
                { prMs: 180 }, { prMs: 180 }, { prMs: 180, dropped: true }
            ] 
        },
        interp: {
            irama: 'Sinus, drop beat',
            rate: 'Bradikardia sering terjadi',
            axis: 'Normal',
            intervals: 'PR Interval KONSTAN, tiba-tiba ada gelombang P yang tidak diikuti QRS',
            stt: 'Normal',
            clinical: 'Berbahaya, risiko tinggi jatuh ke total block (derajat 3) dan henti jantung.',
            management: 'Atropin (respons kurang baik), Rujuk untuk Pemasangan Pacu Jantung Permanen.'
        }
    },
    {
        id: 14,
        priority: 'prioritas-menengah',
        title: 'AV Block Derajat 3 (Total AV Block)',
        generatorConfig: { rate: 35, beatConfig: { qrsMs: 120 } }, // Asumsi escape rhythm lambat
        // In reality P and QRS are dissociated. Hard to procedurally simulate simply without overlapping, 
        // but we'll represent it as very wide QRS and very slow rate for the visual representation.
        interp: {
            irama: 'Atrium dan Ventrikel berdetak sendiri-sendiri (Disosiasi AV)',
            rate: 'Atrial rate normal, Ventricular rate sangat lambat (30-40 x/menit)',
            axis: 'Bervariasi',
            intervals: 'PR Interval acak (tidak ada hubungan P dan QRS), QRS bisa sempit/lebar',
            stt: 'Normal/bervariasi',
            clinical: 'Sinkop, pusing berat, kelelahan, gagal jantung.',
            management: 'Pacu jantung transkutan/transvena emergensi, siapkan pacemaker permanen.'
        }
    },
    {
        id: 15,
        priority: 'prioritas-menengah',
        title: 'Right Bundle Branch Block (RBBB)',
        generatorConfig: { rate: 70, beatConfig: { rbbb: true, qrsMs: 130 } },
        interp: {
            irama: 'Sinus',
            rate: '70 x/menit',
            axis: 'Bisa RAD',
            intervals: 'QRS Lebar (>0.12s)',
            stt: 'Gelombang S lebar di V6, rSR\' (Telinga kelinci) di V1-V2',
            clinical: 'Bisa normal pada orang sehat, atau tanda kor pulmonal / emboli paru.',
            management: 'Cari penyakit penyerta, jika asimtomatik tidak perlu terapi spesifik.'
        }
    },
    {
        id: 16,
        priority: 'prioritas-menengah',
        title: 'Left Bundle Branch Block (LBBB)',
        generatorConfig: { rate: 75, beatConfig: { lbbb: true, qrsMs: 140 } },
        interp: {
            irama: 'Sinus',
            rate: '75 x/menit',
            axis: 'LAD sering terjadi',
            intervals: 'QRS Lebar (>0.12s)',
            stt: 'R lebar ter-notched di I, aVL, V5-V6. S dalam di V1',
            clinical: 'Sering tanda penyakit jantung iskemik, hipertensi, atau kardiomiopati.',
            management: 'LBBB baru + nyeri dada = setara STEMI. Rujuk ke spesialis jantung.'
        }
    },
    {
        id: 17,
        priority: 'prioritas-menengah',
        title: 'Premature Ventricular Contraction (PVC/VES)',
        generatorConfig: { 
            rate: 75, 
            beats: [
                { }, { }, { pvc: true, qrsMs: 140, pWave: false }, { } // every 3rd beat is PVC
            ] 
        },
        interp: {
            irama: 'Dasar sinus, disela denyut prematur',
            rate: 'Tergantung irama dasar',
            axis: 'Normal',
            intervals: 'Kompleks QRS lebar prematur tanpa gelombang P mendahului, diikuti kompensatori pause',
            stt: 'Arah berlawanan dari QRS PVC',
            clinical: 'Sering terasa "deg-degan" loncat. Akibat kafein, stres, elektrolit, atau iskemia.',
            management: 'Hindari pencetus. Jika sangat sering / memicu VT, berikan Beta-blocker / Amiodaron.'
        }
    },
    {
        id: 18,
        priority: 'prioritas-menengah',
        title: 'Atrial Flutter',
        generatorConfig: { rate: 75, rhythm: 'flutter' }, // 300bpm flutter, 4:1 block -> 75 HR
        interp: {
            irama: 'Reguler / irregular',
            rate: 'Laju ventrikel sering 150 (blok 2:1) atau 75 (blok 4:1)',
            axis: 'Normal',
            intervals: 'Tidak ada P normal, melainkan gelombang "Gergaji" (Sawtooth)',
            stt: 'Sulit dinilai karena gelombang flutter',
            clinical: 'Berdebar, sering terkait penyakit paru / jantung struktural.',
            management: 'Mirip AF: kontrol laju, antikoagulan, kardioversi / ablasi.'
        }
    },
    {
        id: 19,
        priority: 'prioritas-menengah',
        title: 'Hiperkalemia',
        generatorConfig: { rate: 60, beatConfig: { hyperkalemia: true, qrsMs: 120, prMs: 220 } },
        interp: {
            irama: 'Sinus',
            rate: '60 x/menit',
            axis: 'Normal',
            intervals: 'PR memanjang, QRS melebar',
            stt: 'Gelombang T tinggi dan runcing (Tall tented T waves)',
            clinical: 'Pasien gagal ginjal dengan lemas. Emergensi medis (risiko VT/VF).',
            management: 'Kalsium Glukonas IV (stabilisasi), Insulin+Glukosa, Diuretik, Hemodialisis.'
        }
    },
    {
        id: 20,
        priority: 'prioritas-menengah',
        title: 'Hipokalemia',
        generatorConfig: { rate: 75, beatConfig: { hypokalemia: true, stElevMv: -0.1 } },
        interp: {
            irama: 'Sinus',
            rate: '75 x/menit',
            axis: 'Normal',
            intervals: 'PR bisa memanjang',
            stt: 'ST depresi, T flattening, terlihat GELOMBANG U prominen setelah T',
            clinical: 'Pasien diare berat, muntah, pemakaian diuretik. Lemas otot.',
            management: 'Koreksi kalium (KCl oral/IV hati-hati).'
        }
    },
    
    // Tambahan (21-25)
    {
        id: 21,
        priority: 'tambahan',
        title: 'Perikarditis Akut',
        generatorConfig: { rate: 85, beatConfig: { stElevMv: 0.2 } },
        interp: {
            irama: 'Sinus',
            rate: '85 x/menit',
            axis: 'Normal',
            intervals: 'PR depresi khas',
            stt: 'ST elevasi konkav difus (hampir di semua lead)',
            clinical: 'Nyeri dada membaik saat condong ke depan, demam.',
            management: 'NSAID dosis tinggi, Colchicine.'
        }
    },
    {
        id: 22,
        priority: 'tambahan',
        title: 'Left Ventricular Hypertrophy (LVH)',
        generatorConfig: { rate: 75, beatConfig: { lvh: true, qrsMs: 90, stElevMv: -0.1, tInverted: true } },
        interp: {
            irama: 'Sinus',
            rate: '75 x/menit',
            axis: 'LAD',
            intervals: 'QRS amplitudo sangat tinggi (Sokalow-Lyon: S di V1 + R di V5/V6 > 35mm)',
            stt: 'Bisa ada LV strain pattern (ST depresi & T inversi asimetris di V5-V6)',
            clinical: 'Pasien dengan riwayat hipertensi lama tak terkontrol.',
            management: 'Kontrol tekanan darah ketat (ACE-i / ARB).'
        }
    },
    {
        id: 23,
        priority: 'tambahan',
        title: 'WPW Syndrome (Wolff-Parkinson-White)',
        generatorConfig: { rate: 75, beatConfig: { wpw: true, prMs: 100, qrsMs: 120 } },
        interp: {
            irama: 'Sinus',
            rate: '75 x/menit',
            axis: 'Normal',
            intervals: 'PR Pendek (<0.12s), QRS melebar',
            stt: 'Terdapat GELOMBANG DELTA (upstroke QRS landai)',
            clinical: 'Riwayat SVT berulang (berdebar hebat). Ada jalur aksesori.',
            management: 'Rujuk untuk elektrofisiologi / ablasi RF.'
        }
    },
    {
        id: 24,
        priority: 'tambahan',
        title: 'Torsades de Pointes',
        generatorConfig: { rate: 220, beatConfig: { vf: true } }, // Visually similar to VF for generator simplicity, but twisting
        interp: {
            irama: 'Polimorfik VT',
            rate: 'Sangat cepat >200',
            axis: 'Berubah-ubah',
            intervals: 'QRS lebar dengan amplitudo yang bervariasi ("Twisting around the point")',
            stt: 'Biasanya didahului oleh QT memanjang (Long QT)',
            clinical: 'Sinkop, henti jantung. Sering dipicu obat pemanjang QT atau hipomagnesemia.',
            management: 'Magnesium Sulfat 2g IV. Jika tidak stabil: Defibrilasi.'
        }
    },
    {
        id: 25,
        priority: 'tambahan',
        title: 'Pulmonary Embolism (S1Q3T3 Pattern)',
        generatorConfig: { rate: 120, beatConfig: { rbbb: true } }, // Tachycardia + RBBB morphology typical
        interp: {
            irama: 'Sinus',
            rate: '120 x/menit (Sinus Takikardia paling umum)',
            axis: 'Sering RAD',
            intervals: 'Bisa ada RBBB inkomplit/komplit',
            stt: 'S1Q3T3 (S dalam di lead I, Q patologis dan T inversi di lead III)',
            clinical: 'Sesak napas mendadak, nyeri dada pleuritik, riwayat imobilisasi/DVT.',
            management: 'Oksigen, antikoagulan (Heparin), pertimbangkan trombolitik bila syok.'
        }
    }
];
