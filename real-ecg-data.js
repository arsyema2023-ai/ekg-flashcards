const realEcgData = [
    {
        "id": "real-1",
        "priority": "prioritas-menengah",
        "title": "Normal Sinus Rhythm",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/12_Lead_ECG_-_Normal_Sinus_Rhythm.png/1024px-12_Lead_ECG_-_Normal_Sinus_Rhythm.png",
        "interp": {
            "irama": "Sinus (Gelombang P positif di II, negatif di aVR)",
            "rate": "72 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s, QRS 0.08s, QT normal",
            "stt": "Isoelektrik, tidak ada perubahan patologis",
            "clinical": "Laki-laki 40 tahun untuk medical check-up rutin. Tidak ada keluhan.",
            "management": "Edukasi kesehatan. Pasien stabil."
        }
    },
    {
        "id": "real-2",
        "priority": "prioritas-menengah",
        "title": "Normal Sinus Rhythm",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/12_Lead_ECG_-_Normal_Sinus_Rhythm.png/1024px-12_Lead_ECG_-_Normal_Sinus_Rhythm.png",
        "interp": {
            "irama": "Sinus (Gelombang P positif di II, negatif di aVR)",
            "rate": "80 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s, QRS 0.08s, QT normal",
            "stt": "Isoelektrik, tidak ada perubahan patologis",
            "clinical": "Perempuan 25 tahun, cemas ringan. EKG normal.",
            "management": "Edukasi kesehatan. Pasien stabil."
        }
    },
    {
        "id": "real-3",
        "priority": "prioritas-menengah",
        "title": "Normal Sinus Rhythm",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/12_Lead_ECG_-_Normal_Sinus_Rhythm.png/1024px-12_Lead_ECG_-_Normal_Sinus_Rhythm.png",
        "interp": {
            "irama": "Sinus (Gelombang P positif di II, negatif di aVR)",
            "rate": "65 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s, QRS 0.08s, QT normal",
            "stt": "Isoelektrik, tidak ada perubahan patologis",
            "clinical": "Laki-laki 30 tahun sehat, tidak ada riwayat penyakit.",
            "management": "Edukasi kesehatan. Pasien stabil."
        }
    },
    {
        "id": "real-4",
        "priority": "prioritas-menengah",
        "title": "Normal Sinus Rhythm",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/12_Lead_ECG_-_Normal_Sinus_Rhythm.png/1024px-12_Lead_ECG_-_Normal_Sinus_Rhythm.png",
        "interp": {
            "irama": "Sinus (Gelombang P positif di II, negatif di aVR)",
            "rate": "78 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s, QRS 0.08s, QT normal",
            "stt": "Isoelektrik, tidak ada perubahan patologis",
            "clinical": "Perempuan 55 tahun, kontrol hipertensi terkendali.",
            "management": "Edukasi kesehatan. Pasien stabil."
        }
    },
    {
        "id": "real-5",
        "priority": "prioritas-menengah",
        "title": "Normal Sinus Rhythm",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/12_Lead_ECG_-_Normal_Sinus_Rhythm.png/1024px-12_Lead_ECG_-_Normal_Sinus_Rhythm.png",
        "interp": {
            "irama": "Sinus (Gelombang P positif di II, negatif di aVR)",
            "rate": "75 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s, QRS 0.08s, QT normal",
            "stt": "Isoelektrik, tidak ada perubahan patologis",
            "clinical": "Laki-laki 50 tahun evaluasi pra-operasi hernia. Jantung normal.",
            "management": "Edukasi kesehatan. Pasien stabil."
        }
    },
    {
        "id": "real-6",
        "priority": "prioritas-tinggi",
        "title": "STEMI Anteroseptal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Anteroseptal_myocardial_infarction.jpg/1024px-Anteroseptal_myocardial_infarction.jpg",
        "interp": {
            "irama": "Sinus",
            "rate": "85 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.14s, QRS 0.08s",
            "stt": "ST Elevasi di V1-V4 dengan gelombang Q patologis (QS pattern)",
            "clinical": "Laki-laki 60 tahun dengan nyeri dada kiri menjalar ke rahang sejak 2 jam lalu.",
            "management": "Oksigen, Aspirin, Clopidogrel, Rujuk PCI segera (Code STEMI)."
        }
    },
    {
        "id": "real-7",
        "priority": "prioritas-tinggi",
        "title": "STEMI Anteroseptal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Anteroseptal_myocardial_infarction.jpg/1024px-Anteroseptal_myocardial_infarction.jpg",
        "interp": {
            "irama": "Sinus",
            "rate": "92 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.14s, QRS 0.08s",
            "stt": "ST Elevasi di V1-V4 dengan gelombang Q patologis (QS pattern)",
            "clinical": "Laki-laki 55 tahun perokok berat, nyeri dada mendadak disertai keringat dingin.",
            "management": "Oksigen, Aspirin, Clopidogrel, Rujuk PCI segera (Code STEMI)."
        }
    },
    {
        "id": "real-8",
        "priority": "prioritas-tinggi",
        "title": "STEMI Anteroseptal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Anteroseptal_myocardial_infarction.jpg/1024px-Anteroseptal_myocardial_infarction.jpg",
        "interp": {
            "irama": "Sinus",
            "rate": "76 x/menit",
            "axis": "LAD",
            "intervals": "PR 0.14s, QRS 0.08s",
            "stt": "ST Elevasi di V1-V4 dengan gelombang Q patologis (QS pattern)",
            "clinical": "Perempuan 65 tahun DM tipe 2, mengeluh ampek di dada dan mual.",
            "management": "Oksigen, Aspirin, Clopidogrel, Rujuk PCI segera (Code STEMI)."
        }
    },
    {
        "id": "real-9",
        "priority": "prioritas-tinggi",
        "title": "STEMI Anteroseptal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Anteroseptal_myocardial_infarction.jpg/1024px-Anteroseptal_myocardial_infarction.jpg",
        "interp": {
            "irama": "Sinus",
            "rate": "88 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.14s, QRS 0.08s",
            "stt": "ST Elevasi di V1-V4 dengan gelombang Q patologis (QS pattern)",
            "clinical": "Laki-laki 45 tahun, kolesterol tinggi, keluhan dada seperti tertimpa beban berat.",
            "management": "Oksigen, Aspirin, Clopidogrel, Rujuk PCI segera (Code STEMI)."
        }
    },
    {
        "id": "real-10",
        "priority": "prioritas-tinggi",
        "title": "STEMI Anteroseptal",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Anteroseptal_myocardial_infarction.jpg/1024px-Anteroseptal_myocardial_infarction.jpg",
        "interp": {
            "irama": "Sinus",
            "rate": "95 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.14s, QRS 0.08s",
            "stt": "ST Elevasi di V1-V4 dengan gelombang Q patologis (QS pattern)",
            "clinical": "Laki-laki 70 tahun, sesak napas dan nyeri prekordial sejak pagi.",
            "management": "Oksigen, Aspirin, Clopidogrel, Rujuk PCI segera (Code STEMI)."
        }
    },
    {
        "id": "real-11",
        "priority": "prioritas-tinggi",
        "title": "STEMI Inferior",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Inferior_Myocardial_Infarction.jpg/1024px-Inferior_Myocardial_Infarction.jpg",
        "interp": {
            "irama": "Sinus",
            "rate": "65 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s, QRS sempit",
            "stt": "ST Elevasi di II, III, aVF. ST Depresi resiprokal di I, aVL.",
            "clinical": "Laki-laki 50 tahun, nyeri ulu hati tembus ke punggung, disangka maag.",
            "management": "MONACO. Hindari Nitrat jika curiga infark ventrikel kanan! Cek V3R-V4R."
        }
    },
    {
        "id": "real-12",
        "priority": "prioritas-tinggi",
        "title": "STEMI Inferior",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Inferior_Myocardial_Infarction.jpg/1024px-Inferior_Myocardial_Infarction.jpg",
        "interp": {
            "irama": "Sinus",
            "rate": "58 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s, QRS sempit",
            "stt": "ST Elevasi di II, III, aVF. ST Depresi resiprokal di I, aVL.",
            "clinical": "Laki-laki 65 tahun, nyeri ulu hati + bradikardia ringan (keterlibatan RCA).",
            "management": "MONACO. Hindari Nitrat jika curiga infark ventrikel kanan! Cek V3R-V4R."
        }
    },
    {
        "id": "real-13",
        "priority": "prioritas-tinggi",
        "title": "STEMI Inferior",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Inferior_Myocardial_Infarction.jpg/1024px-Inferior_Myocardial_Infarction.jpg",
        "interp": {
            "irama": "Sinus",
            "rate": "70 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s, QRS sempit",
            "stt": "ST Elevasi di II, III, aVF. ST Depresi resiprokal di I, aVL.",
            "clinical": "Perempuan 60 tahun, keringat dingin, hipotensi.",
            "management": "MONACO. Hindari Nitrat jika curiga infark ventrikel kanan! Cek V3R-V4R."
        }
    },
    {
        "id": "real-14",
        "priority": "prioritas-tinggi",
        "title": "STEMI Inferior",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Inferior_Myocardial_Infarction.jpg/1024px-Inferior_Myocardial_Infarction.jpg",
        "interp": {
            "irama": "Sinus",
            "rate": "68 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s, QRS sempit",
            "stt": "ST Elevasi di II, III, aVF. ST Depresi resiprokal di I, aVL.",
            "clinical": "Laki-laki 55 tahun, mual muntah hebat dan dada terasa ampek.",
            "management": "MONACO. Hindari Nitrat jika curiga infark ventrikel kanan! Cek V3R-V4R."
        }
    },
    {
        "id": "real-15",
        "priority": "prioritas-tinggi",
        "title": "STEMI Inferior",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Inferior_Myocardial_Infarction.jpg/1024px-Inferior_Myocardial_Infarction.jpg",
        "interp": {
            "irama": "Sinus",
            "rate": "62 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s, QRS sempit",
            "stt": "ST Elevasi di II, III, aVF. ST Depresi resiprokal di I, aVL.",
            "clinical": "Laki-laki 40 tahun post makan besar, tiba-tiba pingsan sesaat karena nyeri dada.",
            "management": "MONACO. Hindari Nitrat jika curiga infark ventrikel kanan! Cek V3R-V4R."
        }
    },
    {
        "id": "real-16",
        "priority": "prioritas-menengah",
        "title": "Atrial Fibrillation dengan RVR",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/AF_RVR_ECG.png/1024px-AF_RVR_ECG.png",
        "interp": {
            "irama": "Irregularly irregular, tidak ada gelombang P",
            "rate": "140 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit (<0.12s)",
            "stt": "Depresi ST sekunder akibat laju cepat",
            "clinical": "Laki-laki 65 tahun mengeluh berdebar hebat dan sesak napas saat berjalan.",
            "management": "Kontrol laju (Beta-blocker/CCB). Pertimbangkan kardioversi jika tidak stabil."
        }
    },
    {
        "id": "real-17",
        "priority": "prioritas-menengah",
        "title": "Atrial Fibrillation dengan RVR",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/AF_RVR_ECG.png/1024px-AF_RVR_ECG.png",
        "interp": {
            "irama": "Irregularly irregular, tidak ada gelombang P",
            "rate": "155 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit (<0.12s)",
            "stt": "Depresi ST sekunder akibat laju cepat",
            "clinical": "Perempuan 70 tahun dengan riwayat hipertiroid, berdebar dan gemetar.",
            "management": "Kontrol laju (Beta-blocker/CCB). Pertimbangkan kardioversi jika tidak stabil."
        }
    },
    {
        "id": "real-18",
        "priority": "prioritas-menengah",
        "title": "Atrial Fibrillation dengan RVR",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/AF_RVR_ECG.png/1024px-AF_RVR_ECG.png",
        "interp": {
            "irama": "Irregularly irregular, tidak ada gelombang P",
            "rate": "135 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit (<0.12s)",
            "stt": "Depresi ST sekunder akibat laju cepat",
            "clinical": "Laki-laki 50 tahun post minum alkohol (Holiday Heart Syndrome).",
            "management": "Kontrol laju (Beta-blocker/CCB). Pertimbangkan kardioversi jika tidak stabil."
        }
    },
    {
        "id": "real-19",
        "priority": "prioritas-menengah",
        "title": "Atrial Fibrillation dengan RVR",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/AF_RVR_ECG.png/1024px-AF_RVR_ECG.png",
        "interp": {
            "irama": "Irregularly irregular, tidak ada gelombang P",
            "rate": "160 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit (<0.12s)",
            "stt": "Depresi ST sekunder akibat laju cepat",
            "clinical": "Perempuan 60 tahun dengan gagal jantung kongestif eksaserbasi akut.",
            "management": "Kontrol laju (Beta-blocker/CCB). Pertimbangkan kardioversi jika tidak stabil."
        }
    },
    {
        "id": "real-20",
        "priority": "prioritas-menengah",
        "title": "Atrial Fibrillation dengan RVR",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/AF_RVR_ECG.png/1024px-AF_RVR_ECG.png",
        "interp": {
            "irama": "Irregularly irregular, tidak ada gelombang P",
            "rate": "145 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit (<0.12s)",
            "stt": "Depresi ST sekunder akibat laju cepat",
            "clinical": "Laki-laki 75 tahun asimtomatik tapi nadi ireguler sangat cepat.",
            "management": "Kontrol laju (Beta-blocker/CCB). Pertimbangkan kardioversi jika tidak stabil."
        }
    },
    {
        "id": "real-21",
        "priority": "prioritas-menengah",
        "title": "Atrial Flutter",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Atrial_flutter.jpg/1024px-Atrial_flutter.jpg",
        "interp": {
            "irama": "Teratur/Ireguler dengan gelombang flutter (saw-tooth) di inferior leads",
            "rate": "150 x/menit (2:1 block)",
            "axis": "Normal",
            "intervals": "QRS sempit",
            "stt": "Sulit dinilai karena gelombang flutter",
            "clinical": "Laki-laki 60 tahun dengan COPD, berdebar teratur sejak kemarin.",
            "management": "Mirip AF (Rate control, antikoagulan, kardioversi)."
        }
    },
    {
        "id": "real-22",
        "priority": "prioritas-menengah",
        "title": "Atrial Flutter",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Atrial_flutter.jpg/1024px-Atrial_flutter.jpg",
        "interp": {
            "irama": "Teratur/Ireguler dengan gelombang flutter (saw-tooth) di inferior leads",
            "rate": "75 x/menit (4:1 block)",
            "axis": "Normal",
            "intervals": "QRS sempit",
            "stt": "Sulit dinilai karena gelombang flutter",
            "clinical": "Laki-laki 55 tahun sedang dalam pengobatan digoxin, berdebar ringan.",
            "management": "Mirip AF (Rate control, antikoagulan, kardioversi)."
        }
    },
    {
        "id": "real-23",
        "priority": "prioritas-menengah",
        "title": "Atrial Flutter",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Atrial_flutter.jpg/1024px-Atrial_flutter.jpg",
        "interp": {
            "irama": "Teratur/Ireguler dengan gelombang flutter (saw-tooth) di inferior leads",
            "rate": "100 x/menit (3:1 block)",
            "axis": "Normal",
            "intervals": "QRS sempit",
            "stt": "Sulit dinilai karena gelombang flutter",
            "clinical": "Perempuan 65 tahun riwayat operasi katup mitral.",
            "management": "Mirip AF (Rate control, antikoagulan, kardioversi)."
        }
    },
    {
        "id": "real-24",
        "priority": "prioritas-menengah",
        "title": "Atrial Flutter",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Atrial_flutter.jpg/1024px-Atrial_flutter.jpg",
        "interp": {
            "irama": "Teratur/Ireguler dengan gelombang flutter (saw-tooth) di inferior leads",
            "rate": "145 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit",
            "stt": "Sulit dinilai karena gelombang flutter",
            "clinical": "Laki-laki 50 tahun kelelahan kronis dan dada tidak nyaman.",
            "management": "Mirip AF (Rate control, antikoagulan, kardioversi)."
        }
    },
    {
        "id": "real-25",
        "priority": "prioritas-menengah",
        "title": "Atrial Flutter",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Atrial_flutter.jpg/1024px-Atrial_flutter.jpg",
        "interp": {
            "irama": "Teratur/Ireguler dengan gelombang flutter (saw-tooth) di inferior leads",
            "rate": "150 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit",
            "stt": "Sulit dinilai karena gelombang flutter",
            "clinical": "Perempuan 45 tahun datang dengan palpitasi mendadak saat olahraga.",
            "management": "Mirip AF (Rate control, antikoagulan, kardioversi)."
        }
    },
    {
        "id": "real-26",
        "priority": "prioritas-tinggi",
        "title": "Monomorphic Ventricular Tachycardia (VT)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Monomorphic_VT.jpg/1024px-Monomorphic_VT.jpg",
        "interp": {
            "irama": "Reguler, dari ventrikel",
            "rate": "180 x/menit",
            "axis": "Extreme RAD",
            "intervals": "QRS LEBAR (>0.12s)",
            "stt": "Arah berlawanan dengan QRS utama",
            "clinical": "Laki-laki 65 tahun dengan riwayat iskemik, datang dengan sinkop.",
            "management": "Jika nadi (-): RJP & Defibrilasi. Nadi (+) tak stabil: Kardioversi. Stabil: Amiodaron IV."
        }
    },
    {
        "id": "real-27",
        "priority": "prioritas-tinggi",
        "title": "Monomorphic Ventricular Tachycardia (VT)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Monomorphic_VT.jpg/1024px-Monomorphic_VT.jpg",
        "interp": {
            "irama": "Reguler, dari ventrikel",
            "rate": "165 x/menit",
            "axis": "Extreme RAD",
            "intervals": "QRS LEBAR (>0.12s)",
            "stt": "Arah berlawanan dengan QRS utama",
            "clinical": "Laki-laki 70 tahun, penurunan kesadaran, hipotensi (70/40).",
            "management": "Jika nadi (-): RJP & Defibrilasi. Nadi (+) tak stabil: Kardioversi. Stabil: Amiodaron IV."
        }
    },
    {
        "id": "real-28",
        "priority": "prioritas-tinggi",
        "title": "Monomorphic Ventricular Tachycardia (VT)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Monomorphic_VT.jpg/1024px-Monomorphic_VT.jpg",
        "interp": {
            "irama": "Reguler, dari ventrikel",
            "rate": "175 x/menit",
            "axis": "Extreme RAD",
            "intervals": "QRS LEBAR (>0.12s)",
            "stt": "Arah berlawanan dengan QRS utama",
            "clinical": "Perempuan 60 tahun dengan palpitasi sangat kencang, masih sadar penuh.",
            "management": "Jika nadi (-): RJP & Defibrilasi. Nadi (+) tak stabil: Kardioversi. Stabil: Amiodaron IV."
        }
    },
    {
        "id": "real-29",
        "priority": "prioritas-tinggi",
        "title": "Monomorphic Ventricular Tachycardia (VT)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Monomorphic_VT.jpg/1024px-Monomorphic_VT.jpg",
        "interp": {
            "irama": "Reguler, dari ventrikel",
            "rate": "190 x/menit",
            "axis": "Extreme RAD",
            "intervals": "QRS LEBAR (>0.12s)",
            "stt": "Arah berlawanan dengan QRS utama",
            "clinical": "Laki-laki 55 tahun post infark miokard bulan lalu, nyeri dada dan berdebar.",
            "management": "Jika nadi (-): RJP & Defibrilasi. Nadi (+) tak stabil: Kardioversi. Stabil: Amiodaron IV."
        }
    },
    {
        "id": "real-30",
        "priority": "prioritas-tinggi",
        "title": "Monomorphic Ventricular Tachycardia (VT)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Monomorphic_VT.jpg/1024px-Monomorphic_VT.jpg",
        "interp": {
            "irama": "Reguler, dari ventrikel",
            "rate": "160 x/menit",
            "axis": "Extreme RAD",
            "intervals": "QRS LEBAR (>0.12s)",
            "stt": "Arah berlawanan dengan QRS utama",
            "clinical": "Perempuan 50 tahun datang dengan syok kardiogenik.",
            "management": "Jika nadi (-): RJP & Defibrilasi. Nadi (+) tak stabil: Kardioversi. Stabil: Amiodaron IV."
        }
    },
    {
        "id": "real-31",
        "priority": "prioritas-menengah",
        "title": "Ventricular Fibrillation (VF)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ventricular_fibrillation.png/1024px-Ventricular_fibrillation.png",
        "interp": {
            "irama": "Kacau (Chaotic)",
            "rate": "Tidak dapat dihitung",
            "axis": "N/A",
            "intervals": "Tidak dapat dinilai",
            "stt": "Tidak dapat dinilai",
            "clinical": "Laki-laki 55 tahun collapse mendadak di IGD, tidak ada nadi.",
            "management": "Code Blue! RJP segera + Defibrilasi (Shockable rhythm)."
        }
    },
    {
        "id": "real-32",
        "priority": "prioritas-menengah",
        "title": "Ventricular Fibrillation (VF)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ventricular_fibrillation.png/1024px-Ventricular_fibrillation.png",
        "interp": {
            "irama": "Kacau (Chaotic)",
            "rate": "Tidak dapat dihitung",
            "axis": "N/A",
            "intervals": "Tidak dapat dinilai",
            "stt": "Tidak dapat dinilai",
            "clinical": "Perempuan 60 tahun henti jantung saat menunggu di poli.",
            "management": "Code Blue! RJP segera + Defibrilasi (Shockable rhythm)."
        }
    },
    {
        "id": "real-33",
        "priority": "prioritas-menengah",
        "title": "Ventricular Fibrillation (VF)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ventricular_fibrillation.png/1024px-Ventricular_fibrillation.png",
        "interp": {
            "irama": "Kacau (Chaotic)",
            "rate": "Tidak dapat dihitung",
            "axis": "N/A",
            "intervals": "Tidak dapat dinilai",
            "stt": "Tidak dapat dinilai",
            "clinical": "Laki-laki 45 tahun dibawa polisi dengan cardiac arrest.",
            "management": "Code Blue! RJP segera + Defibrilasi (Shockable rhythm)."
        }
    },
    {
        "id": "real-34",
        "priority": "prioritas-menengah",
        "title": "Ventricular Fibrillation (VF)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ventricular_fibrillation.png/1024px-Ventricular_fibrillation.png",
        "interp": {
            "irama": "Kacau (Chaotic)",
            "rate": "Tidak dapat dihitung",
            "axis": "N/A",
            "intervals": "Tidak dapat dinilai",
            "stt": "Tidak dapat dinilai",
            "clinical": "Laki-laki 70 tahun tiba-tiba kejang lalu apnea dan tidak bernadi.",
            "management": "Code Blue! RJP segera + Defibrilasi (Shockable rhythm)."
        }
    },
    {
        "id": "real-35",
        "priority": "prioritas-menengah",
        "title": "Ventricular Fibrillation (VF)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ventricular_fibrillation.png/1024px-Ventricular_fibrillation.png",
        "interp": {
            "irama": "Kacau (Chaotic)",
            "rate": "Tidak dapat dihitung",
            "axis": "N/A",
            "intervals": "Tidak dapat dinilai",
            "stt": "Tidak dapat dinilai",
            "clinical": "Perempuan 65 tahun unresponsive saat EKG sedang dipasang.",
            "management": "Code Blue! RJP segera + Defibrilasi (Shockable rhythm)."
        }
    },
    {
        "id": "real-36",
        "priority": "prioritas-menengah",
        "title": "Left Bundle Branch Block (LBBB)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Left_bundle_branch_block.png/1024px-Left_bundle_branch_block.png",
        "interp": {
            "irama": "Sinus",
            "rate": "70 x/menit",
            "axis": "LAD",
            "intervals": "QRS LEBAR (>0.12s)",
            "stt": "R lebar/notched di I, aVL, V5-V6. S dalam di V1",
            "clinical": "Laki-laki 65 tahun, keluhan sesak napas kronis (Hipertensi kronis).",
            "management": "Jika LBBB BARU pada pasien nyeri dada, anggap sebagai STEMI ekivalen."
        }
    },
    {
        "id": "real-37",
        "priority": "prioritas-menengah",
        "title": "Left Bundle Branch Block (LBBB)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Left_bundle_branch_block.png/1024px-Left_bundle_branch_block.png",
        "interp": {
            "irama": "Sinus",
            "rate": "85 x/menit",
            "axis": "LAD",
            "intervals": "QRS LEBAR (>0.12s)",
            "stt": "R lebar/notched di I, aVL, V5-V6. S dalam di V1",
            "clinical": "Perempuan 70 tahun datang dengan nyeri dada akut (Suspect LBBB baru).",
            "management": "Jika LBBB BARU pada pasien nyeri dada, anggap sebagai STEMI ekivalen."
        }
    },
    {
        "id": "real-38",
        "priority": "prioritas-menengah",
        "title": "Left Bundle Branch Block (LBBB)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Left_bundle_branch_block.png/1024px-Left_bundle_branch_block.png",
        "interp": {
            "irama": "Sinus",
            "rate": "60 x/menit",
            "axis": "LAD",
            "intervals": "QRS LEBAR (>0.12s)",
            "stt": "R lebar/notched di I, aVL, V5-V6. S dalam di V1",
            "clinical": "Laki-laki 60 tahun gagal jantung kongestif (HFrEF).",
            "management": "Jika LBBB BARU pada pasien nyeri dada, anggap sebagai STEMI ekivalen."
        }
    },
    {
        "id": "real-39",
        "priority": "prioritas-menengah",
        "title": "Left Bundle Branch Block (LBBB)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Left_bundle_branch_block.png/1024px-Left_bundle_branch_block.png",
        "interp": {
            "irama": "Sinus",
            "rate": "75 x/menit",
            "axis": "LAD",
            "intervals": "QRS LEBAR (>0.12s)",
            "stt": "R lebar/notched di I, aVL, V5-V6. S dalam di V1",
            "clinical": "Perempuan 55 tahun MCU rutin, asimtomatik tapi hipertensi tidak terkontrol.",
            "management": "Jika LBBB BARU pada pasien nyeri dada, anggap sebagai STEMI ekivalen."
        }
    },
    {
        "id": "real-40",
        "priority": "prioritas-menengah",
        "title": "Left Bundle Branch Block (LBBB)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Left_bundle_branch_block.png/1024px-Left_bundle_branch_block.png",
        "interp": {
            "irama": "Sinus",
            "rate": "80 x/menit",
            "axis": "LAD",
            "intervals": "QRS LEBAR (>0.12s)",
            "stt": "R lebar/notched di I, aVL, V5-V6. S dalam di V1",
            "clinical": "Laki-laki 75 tahun kardiomiopati iskemik lama.",
            "management": "Jika LBBB BARU pada pasien nyeri dada, anggap sebagai STEMI ekivalen."
        }
    },
    {
        "id": "real-41",
        "priority": "prioritas-menengah",
        "title": "Right Bundle Branch Block (RBBB)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Right_bundle_branch_block.png/1024px-Right_bundle_branch_block.png",
        "interp": {
            "irama": "Sinus",
            "rate": "75 x/menit",
            "axis": "RAD",
            "intervals": "QRS LEBAR (>0.12s)",
            "stt": "Pola rSR' (telinga kelinci) di V1-V2, S lebar di V6",
            "clinical": "Laki-laki 40 tahun MCU rutin, sehat dan asimtomatik.",
            "management": "Jika asimtomatik: observasi. Jika sesak akut: curiga Emboli Paru/Kor Pulmonale."
        }
    },
    {
        "id": "real-42",
        "priority": "prioritas-menengah",
        "title": "Right Bundle Branch Block (RBBB)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Right_bundle_branch_block.png/1024px-Right_bundle_branch_block.png",
        "interp": {
            "irama": "Sinus",
            "rate": "95 x/menit",
            "axis": "RAD",
            "intervals": "QRS LEBAR (>0.12s)",
            "stt": "Pola rSR' (telinga kelinci) di V1-V2, S lebar di V6",
            "clinical": "Perempuan 60 tahun dengan PPOK berat, eksaserbasi akut.",
            "management": "Jika asimtomatik: observasi. Jika sesak akut: curiga Emboli Paru/Kor Pulmonale."
        }
    },
    {
        "id": "real-43",
        "priority": "prioritas-menengah",
        "title": "Right Bundle Branch Block (RBBB)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Right_bundle_branch_block.png/1024px-Right_bundle_branch_block.png",
        "interp": {
            "irama": "Sinus",
            "rate": "110 x/menit",
            "axis": "RAD",
            "intervals": "QRS LEBAR (>0.12s)",
            "stt": "Pola rSR' (telinga kelinci) di V1-V2, S lebar di V6",
            "clinical": "Laki-laki 50 tahun sesak napas mendadak pasca bedah tulang (Curiga Emboli Paru).",
            "management": "Jika asimtomatik: observasi. Jika sesak akut: curiga Emboli Paru/Kor Pulmonale."
        }
    },
    {
        "id": "real-44",
        "priority": "prioritas-menengah",
        "title": "Right Bundle Branch Block (RBBB)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Right_bundle_branch_block.png/1024px-Right_bundle_branch_block.png",
        "interp": {
            "irama": "Sinus",
            "rate": "65 x/menit",
            "axis": "RAD",
            "intervals": "QRS LEBAR (>0.12s)",
            "stt": "Pola rSR' (telinga kelinci) di V1-V2, S lebar di V6",
            "clinical": "Laki-laki 35 tahun MCU pra-kerja, ekokardiografi normal.",
            "management": "Jika asimtomatik: observasi. Jika sesak akut: curiga Emboli Paru/Kor Pulmonale."
        }
    },
    {
        "id": "real-45",
        "priority": "prioritas-menengah",
        "title": "Right Bundle Branch Block (RBBB)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Right_bundle_branch_block.png/1024px-Right_bundle_branch_block.png",
        "interp": {
            "irama": "Sinus",
            "rate": "80 x/menit",
            "axis": "RAD",
            "intervals": "QRS LEBAR (>0.12s)",
            "stt": "Pola rSR' (telinga kelinci) di V1-V2, S lebar di V6",
            "clinical": "Perempuan 65 tahun kor pulmonal akibat tuberkulosis paru lama.",
            "management": "Jika asimtomatik: observasi. Jika sesak akut: curiga Emboli Paru/Kor Pulmonale."
        }
    },
    {
        "id": "real-46",
        "priority": "prioritas-menengah",
        "title": "Supraventricular Tachycardia (SVT)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/SVT_ECG.png/1024px-SVT_ECG.png",
        "interp": {
            "irama": "Reguler cepat, P tertutup QRS",
            "rate": "190 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit (<0.12s)",
            "stt": "Depresi ST akibat rate cepat",
            "clinical": "Perempuan 25 tahun, dada berdebar mendadak saat minum kopi.",
            "management": "Manuver vagal, Adenosin IV cepat (6mg, 12mg). Jika tidak stabil: Kardioversi tersinkronisasi."
        }
    },
    {
        "id": "real-47",
        "priority": "prioritas-menengah",
        "title": "Supraventricular Tachycardia (SVT)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/SVT_ECG.png/1024px-SVT_ECG.png",
        "interp": {
            "irama": "Reguler cepat, P tertutup QRS",
            "rate": "210 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit (<0.12s)",
            "stt": "Depresi ST akibat rate cepat",
            "clinical": "Laki-laki 30 tahun, panik dan keringat dingin karena debaran jantung tak wajar.",
            "management": "Manuver vagal, Adenosin IV cepat (6mg, 12mg). Jika tidak stabil: Kardioversi tersinkronisasi."
        }
    },
    {
        "id": "real-48",
        "priority": "prioritas-menengah",
        "title": "Supraventricular Tachycardia (SVT)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/SVT_ECG.png/1024px-SVT_ECG.png",
        "interp": {
            "irama": "Reguler cepat, P tertutup QRS",
            "rate": "180 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit (<0.12s)",
            "stt": "Depresi ST akibat rate cepat",
            "clinical": "Perempuan 40 tahun, riwayat SVT berulang, kali ini dengan pusing hebat.",
            "management": "Manuver vagal, Adenosin IV cepat (6mg, 12mg). Jika tidak stabil: Kardioversi tersinkronisasi."
        }
    },
    {
        "id": "real-49",
        "priority": "prioritas-menengah",
        "title": "Supraventricular Tachycardia (SVT)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/SVT_ECG.png/1024px-SVT_ECG.png",
        "interp": {
            "irama": "Reguler cepat, P tertutup QRS",
            "rate": "195 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit (<0.12s)",
            "stt": "Depresi ST akibat rate cepat",
            "clinical": "Laki-laki 20 tahun, mahasiswa sedang stres ujian, palpitasi paroksismal.",
            "management": "Manuver vagal, Adenosin IV cepat (6mg, 12mg). Jika tidak stabil: Kardioversi tersinkronisasi."
        }
    },
    {
        "id": "real-50",
        "priority": "prioritas-menengah",
        "title": "Supraventricular Tachycardia (SVT)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/SVT_ECG.png/1024px-SVT_ECG.png",
        "interp": {
            "irama": "Reguler cepat, P tertutup QRS",
            "rate": "205 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit (<0.12s)",
            "stt": "Depresi ST akibat rate cepat",
            "clinical": "Perempuan 35 tahun berdebar setelah latihan fisik aerobik keras.",
            "management": "Manuver vagal, Adenosin IV cepat (6mg, 12mg). Jika tidak stabil: Kardioversi tersinkronisasi."
        }
    },
    {
        "id": "real-51",
        "priority": "prioritas-menengah",
        "title": "Hiperkalemia",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hyperkalaemia.png/1024px-Hyperkalaemia.png",
        "interp": {
            "irama": "Sinus / Junctional lambat",
            "rate": "55 x/menit",
            "axis": "Normal",
            "intervals": "PR memanjang, QRS melebar",
            "stt": "Tall Tented T-Waves (Gelombang T tinggi runcing), QRS wide.",
            "clinical": "Laki-laki 50 tahun CKD stage 5, telat jadwal hemodialisis 1 minggu.",
            "management": "Emergensi. Kalsium glukonas IV untuk stabilisasi membran sel, insulin/glukosa, albuterol."
        }
    },
    {
        "id": "real-52",
        "priority": "prioritas-menengah",
        "title": "Hiperkalemia",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hyperkalaemia.png/1024px-Hyperkalaemia.png",
        "interp": {
            "irama": "Sinus / Junctional lambat",
            "rate": "60 x/menit",
            "axis": "Normal",
            "intervals": "PR memanjang, QRS melebar",
            "stt": "Tall Tented T-Waves (Gelombang T tinggi runcing), QRS wide.",
            "clinical": "Perempuan 65 tahun pengguna ACE inhibitor dan spironolactone, mual lemas.",
            "management": "Emergensi. Kalsium glukonas IV untuk stabilisasi membran sel, insulin/glukosa, albuterol."
        }
    },
    {
        "id": "real-53",
        "priority": "prioritas-menengah",
        "title": "Hiperkalemia",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hyperkalaemia.png/1024px-Hyperkalaemia.png",
        "interp": {
            "irama": "Sinus / Junctional lambat",
            "rate": "45 x/menit",
            "axis": "Normal",
            "intervals": "PR memanjang, QRS melebar",
            "stt": "Tall Tented T-Waves (Gelombang T tinggi runcing), QRS wide.",
            "clinical": "Laki-laki 60 tahun oliguria, kreatinin 12 mg/dL.",
            "management": "Emergensi. Kalsium glukonas IV untuk stabilisasi membran sel, insulin/glukosa, albuterol."
        }
    },
    {
        "id": "real-54",
        "priority": "prioritas-menengah",
        "title": "Hiperkalemia",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hyperkalaemia.png/1024px-Hyperkalaemia.png",
        "interp": {
            "irama": "Sinus / Junctional lambat",
            "rate": "50 x/menit",
            "axis": "Normal",
            "intervals": "PR memanjang, QRS melebar",
            "stt": "Tall Tented T-Waves (Gelombang T tinggi runcing), QRS wide.",
            "clinical": "Perempuan 45 tahun kelemahan otot ekstremitas hebat, K+ lab 7.5 mEq/L.",
            "management": "Emergensi. Kalsium glukonas IV untuk stabilisasi membran sel, insulin/glukosa, albuterol."
        }
    },
    {
        "id": "real-55",
        "priority": "prioritas-menengah",
        "title": "Hiperkalemia",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hyperkalaemia.png/1024px-Hyperkalaemia.png",
        "interp": {
            "irama": "Sinus / Junctional lambat",
            "rate": "52 x/menit",
            "axis": "Normal",
            "intervals": "PR memanjang, QRS melebar",
            "stt": "Tall Tented T-Waves (Gelombang T tinggi runcing), QRS wide.",
            "clinical": "Laki-laki 70 tahun syok sepsis dengan asidosis metabolik dan anuria.",
            "management": "Emergensi. Kalsium glukonas IV untuk stabilisasi membran sel, insulin/glukosa, albuterol."
        }
    },
    {
        "id": "real-56",
        "priority": "prioritas-menengah",
        "title": "AV Block Derajat 1",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/1st_degree_heart_block.jpg/1024px-1st_degree_heart_block.jpg",
        "interp": {
            "irama": "Sinus",
            "rate": "65 x/menit",
            "axis": "Normal",
            "intervals": "PR Interval > 0.20s (konstan), QRS sempit",
            "stt": "Normal",
            "clinical": "Laki-laki 25 tahun, atlet terlatih, asimtomatik.",
            "management": "Observasi, tidak butuh tata laksana jika asimtomatik."
        }
    },
    {
        "id": "real-57",
        "priority": "prioritas-menengah",
        "title": "AV Block Derajat 1",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/1st_degree_heart_block.jpg/1024px-1st_degree_heart_block.jpg",
        "interp": {
            "irama": "Sinus",
            "rate": "70 x/menit",
            "axis": "Normal",
            "intervals": "PR Interval > 0.20s (konstan), QRS sempit",
            "stt": "Normal",
            "clinical": "Perempuan 60 tahun pengguna amiodarone, tanpa keluhan.",
            "management": "Observasi, tidak butuh tata laksana jika asimtomatik."
        }
    },
    {
        "id": "real-58",
        "priority": "prioritas-menengah",
        "title": "AV Block Derajat 1",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/1st_degree_heart_block.jpg/1024px-1st_degree_heart_block.jpg",
        "interp": {
            "irama": "Sinus",
            "rate": "60 x/menit",
            "axis": "Normal",
            "intervals": "PR Interval > 0.20s (konstan), QRS sempit",
            "stt": "Normal",
            "clinical": "Laki-laki 55 tahun hipertensi esensial terkontrol.",
            "management": "Observasi, tidak butuh tata laksana jika asimtomatik."
        }
    },
    {
        "id": "real-59",
        "priority": "prioritas-menengah",
        "title": "AV Block Derajat 1",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/1st_degree_heart_block.jpg/1024px-1st_degree_heart_block.jpg",
        "interp": {
            "irama": "Sinus",
            "rate": "72 x/menit",
            "axis": "Normal",
            "intervals": "PR Interval > 0.20s (konstan), QRS sempit",
            "stt": "Normal",
            "clinical": "Perempuan 45 tahun, demam reumatik akut ringan.",
            "management": "Observasi, tidak butuh tata laksana jika asimtomatik."
        }
    },
    {
        "id": "real-60",
        "priority": "prioritas-menengah",
        "title": "AV Block Derajat 1",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/1st_degree_heart_block.jpg/1024px-1st_degree_heart_block.jpg",
        "interp": {
            "irama": "Sinus",
            "rate": "68 x/menit",
            "axis": "Normal",
            "intervals": "PR Interval > 0.20s (konstan), QRS sempit",
            "stt": "Normal",
            "clinical": "Laki-laki 75 tahun, asimtomatik temuan insidental saat MCU.",
            "management": "Observasi, tidak butuh tata laksana jika asimtomatik."
        }
    }
];