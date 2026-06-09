const realEcgData = [
    {
        "id": "real-1",
        "priority": "prioritas-menengah",
        "title": "Normal Sinus Rhythm",
        "generatorConfig": {
            "heartRate": 72
        },
        "interp": {
            "irama": "Sinus",
            "rate": "72 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s, QRS 0.08s, QT normal",
            "stt": "Isoelektrik",
            "clinical": "Laki-laki 40 tahun untuk medical check-up rutin.",
            "management": "Edukasi kesehatan. Pasien stabil."
        }
    },
    {
        "id": "real-2",
        "priority": "prioritas-menengah",
        "title": "Normal Sinus Rhythm",
        "generatorConfig": {
            "heartRate": 72
        },
        "interp": {
            "irama": "Sinus",
            "rate": "80 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s, QRS 0.08s, QT normal",
            "stt": "Isoelektrik",
            "clinical": "Perempuan 25 tahun, cemas ringan.",
            "management": "Edukasi kesehatan. Pasien stabil."
        }
    },
    {
        "id": "real-3",
        "priority": "prioritas-tinggi",
        "title": "STEMI Anteroseptal",
        "generatorConfig": {
            "heartRate": 85,
            "stElevMv": 0.4,
            "tAmpMv": 0.5,
            "qWave": true
        },
        "interp": {
            "irama": "Sinus",
            "rate": "85 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.14s, QRS 0.08s",
            "stt": "ST Elevasi",
            "clinical": "Laki-laki 60 tahun dengan nyeri dada menjalar.",
            "management": "Oksigen, Aspirin, Clopidogrel, Rujuk PCI segera."
        }
    },
    {
        "id": "real-4",
        "priority": "prioritas-tinggi",
        "title": "STEMI Anteroseptal",
        "generatorConfig": {
            "heartRate": 85,
            "stElevMv": 0.4,
            "tAmpMv": 0.5,
            "qWave": true
        },
        "interp": {
            "irama": "Sinus",
            "rate": "92 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.14s, QRS 0.08s",
            "stt": "ST Elevasi",
            "clinical": "Laki-laki 55 tahun perokok berat, nyeri dada mendadak.",
            "management": "Oksigen, Aspirin, Clopidogrel, Rujuk PCI segera."
        }
    },
    {
        "id": "real-5",
        "priority": "prioritas-tinggi",
        "title": "STEMI Anteroseptal",
        "generatorConfig": {
            "heartRate": 85,
            "stElevMv": 0.4,
            "tAmpMv": 0.5,
            "qWave": true
        },
        "interp": {
            "irama": "Sinus",
            "rate": "76 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.14s, QRS 0.08s",
            "stt": "ST Elevasi",
            "clinical": "Perempuan 65 tahun mengeluh dada ampek.",
            "management": "Oksigen, Aspirin, Clopidogrel, Rujuk PCI segera."
        }
    },
    {
        "id": "real-6",
        "priority": "prioritas-tinggi",
        "title": "STEMI Inferior",
        "generatorConfig": {
            "heartRate": 65,
            "stElevMv": 0.3,
            "qWave": true
        },
        "interp": {
            "irama": "Sinus",
            "rate": "65 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s",
            "stt": "ST Elevasi II, III, aVF (Simulasi)",
            "clinical": "Laki-laki 50 tahun, nyeri ulu hati tembus ke punggung.",
            "management": "MONACO. Hindari Nitrat jika curiga infark ventrikel kanan."
        }
    },
    {
        "id": "real-7",
        "priority": "prioritas-tinggi",
        "title": "STEMI Inferior",
        "generatorConfig": {
            "heartRate": 65,
            "stElevMv": 0.3,
            "qWave": true
        },
        "interp": {
            "irama": "Sinus",
            "rate": "58 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s",
            "stt": "ST Elevasi II, III, aVF (Simulasi)",
            "clinical": "Laki-laki 65 tahun, nyeri ulu hati + bradikardia ringan.",
            "management": "MONACO. Hindari Nitrat jika curiga infark ventrikel kanan."
        }
    },
    {
        "id": "real-8",
        "priority": "prioritas-tinggi",
        "title": "STEMI Inferior",
        "generatorConfig": {
            "heartRate": 65,
            "stElevMv": 0.3,
            "qWave": true
        },
        "interp": {
            "irama": "Sinus",
            "rate": "70 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s",
            "stt": "ST Elevasi II, III, aVF (Simulasi)",
            "clinical": "Perempuan 60 tahun, keringat dingin, hipotensi.",
            "management": "MONACO. Hindari Nitrat jika curiga infark ventrikel kanan."
        }
    },
    {
        "id": "real-9",
        "priority": "prioritas-tinggi",
        "title": "Atrial Fibrillation (RVR)",
        "generatorConfig": {
            "heartRate": 140,
            "pWave": false,
            "fibrillation": true,
            "irregular": true
        },
        "interp": {
            "irama": "Irregularly irregular, tidak ada gelombang P",
            "rate": "140 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit",
            "stt": "Depresi ST sekunder",
            "clinical": "Laki-laki 65 tahun mengeluh berdebar hebat.",
            "management": "Rate control. Pertimbangkan kardioversi jika tidak stabil."
        }
    },
    {
        "id": "real-10",
        "priority": "prioritas-tinggi",
        "title": "Atrial Fibrillation (RVR)",
        "generatorConfig": {
            "heartRate": 140,
            "pWave": false,
            "fibrillation": true,
            "irregular": true
        },
        "interp": {
            "irama": "Irregularly irregular, tidak ada gelombang P",
            "rate": "155 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit",
            "stt": "Depresi ST sekunder",
            "clinical": "Perempuan 70 tahun dengan riwayat hipertiroid.",
            "management": "Rate control. Pertimbangkan kardioversi jika tidak stabil."
        }
    },
    {
        "id": "real-11",
        "priority": "prioritas-menengah",
        "title": "Atrial Flutter",
        "generatorConfig": {
            "heartRate": 150,
            "pWave": false,
            "flutter": true,
            "irregular": false
        },
        "interp": {
            "irama": "Saw-tooth di inferior leads",
            "rate": "150 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit",
            "stt": "Sulit dinilai",
            "clinical": "Laki-laki 60 tahun dengan COPD, berdebar teratur.",
            "management": "Mirip AF."
        }
    },
    {
        "id": "real-12",
        "priority": "prioritas-menengah",
        "title": "Atrial Flutter",
        "generatorConfig": {
            "heartRate": 150,
            "pWave": false,
            "flutter": true,
            "irregular": false
        },
        "interp": {
            "irama": "Saw-tooth di inferior leads",
            "rate": "75 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit",
            "stt": "Sulit dinilai",
            "clinical": "Laki-laki 55 tahun sedang dalam pengobatan digoxin.",
            "management": "Mirip AF."
        }
    },
    {
        "id": "real-13",
        "priority": "prioritas-tinggi",
        "title": "Ventricular Tachycardia (VT)",
        "generatorConfig": {
            "heartRate": 180,
            "pWave": false,
            "qrsMs": 140,
            "lbbb": true
        },
        "interp": {
            "irama": "Reguler, dari ventrikel",
            "rate": "180 x/menit",
            "axis": "Extreme RAD",
            "intervals": "QRS LEBAR",
            "stt": "Arah berlawanan dengan QRS",
            "clinical": "Laki-laki 65 tahun riwayat iskemik, sinkop.",
            "management": "Jika nadi (-): RJP & Defibrilasi."
        }
    },
    {
        "id": "real-14",
        "priority": "prioritas-tinggi",
        "title": "Ventricular Tachycardia (VT)",
        "generatorConfig": {
            "heartRate": 180,
            "pWave": false,
            "qrsMs": 140,
            "lbbb": true
        },
        "interp": {
            "irama": "Reguler, dari ventrikel",
            "rate": "165 x/menit",
            "axis": "Extreme RAD",
            "intervals": "QRS LEBAR",
            "stt": "Arah berlawanan dengan QRS",
            "clinical": "Laki-laki 70 tahun, penurunan kesadaran.",
            "management": "Jika nadi (-): RJP & Defibrilasi."
        }
    },
    {
        "id": "real-15",
        "priority": "prioritas-tinggi",
        "title": "Ventricular Fibrillation (VF)",
        "generatorConfig": {
            "heartRate": 250,
            "pWave": false,
            "vf": true
        },
        "interp": {
            "irama": "Kacau (Chaotic)",
            "rate": "N/A",
            "axis": "N/A",
            "intervals": "Tidak dapat dinilai",
            "stt": "Tidak dapat dinilai",
            "clinical": "Laki-laki 55 tahun collapse mendadak di IGD.",
            "management": "Code Blue! RJP segera + Defibrilasi."
        }
    },
    {
        "id": "real-16",
        "priority": "prioritas-tinggi",
        "title": "Ventricular Fibrillation (VF)",
        "generatorConfig": {
            "heartRate": 250,
            "pWave": false,
            "vf": true
        },
        "interp": {
            "irama": "Kacau (Chaotic)",
            "rate": "N/A",
            "axis": "N/A",
            "intervals": "Tidak dapat dinilai",
            "stt": "Tidak dapat dinilai",
            "clinical": "Perempuan 60 tahun henti jantung.",
            "management": "Code Blue! RJP segera + Defibrilasi."
        }
    },
    {
        "id": "real-17",
        "priority": "prioritas-menengah",
        "title": "Left Bundle Branch Block (LBBB)",
        "generatorConfig": {
            "heartRate": 70,
            "qrsMs": 130,
            "lbbb": true
        },
        "interp": {
            "irama": "Sinus",
            "rate": "70 x/menit",
            "axis": "LAD",
            "intervals": "QRS LEBAR",
            "stt": "R lebar/notched",
            "clinical": "Laki-laki 65 tahun, keluhan sesak napas kronis.",
            "management": "Jika baru pada pasien nyeri dada, anggap STEMI ekivalen."
        }
    },
    {
        "id": "real-18",
        "priority": "prioritas-menengah",
        "title": "Left Bundle Branch Block (LBBB)",
        "generatorConfig": {
            "heartRate": 70,
            "qrsMs": 130,
            "lbbb": true
        },
        "interp": {
            "irama": "Sinus",
            "rate": "85 x/menit",
            "axis": "LAD",
            "intervals": "QRS LEBAR",
            "stt": "R lebar/notched",
            "clinical": "Perempuan 70 tahun datang dengan nyeri dada akut.",
            "management": "Jika baru pada pasien nyeri dada, anggap STEMI ekivalen."
        }
    },
    {
        "id": "real-19",
        "priority": "prioritas-menengah",
        "title": "Right Bundle Branch Block (RBBB)",
        "generatorConfig": {
            "heartRate": 75,
            "qrsMs": 120,
            "rbbb": true
        },
        "interp": {
            "irama": "Sinus",
            "rate": "75 x/menit",
            "axis": "RAD",
            "intervals": "QRS LEBAR",
            "stt": "Pola rSR'",
            "clinical": "Laki-laki 40 tahun MCU rutin.",
            "management": "Observasi. Jika sesak akut: curiga Emboli Paru."
        }
    },
    {
        "id": "real-20",
        "priority": "prioritas-menengah",
        "title": "Right Bundle Branch Block (RBBB)",
        "generatorConfig": {
            "heartRate": 75,
            "qrsMs": 120,
            "rbbb": true
        },
        "interp": {
            "irama": "Sinus",
            "rate": "95 x/menit",
            "axis": "RAD",
            "intervals": "QRS LEBAR",
            "stt": "Pola rSR'",
            "clinical": "Perempuan 60 tahun eksaserbasi PPOK.",
            "management": "Observasi. Jika sesak akut: curiga Emboli Paru."
        }
    },
    {
        "id": "real-21",
        "priority": "prioritas-tinggi",
        "title": "Supraventricular Tachycardia (SVT)",
        "generatorConfig": {
            "heartRate": 190,
            "pWave": false
        },
        "interp": {
            "irama": "Reguler cepat, P tertutup QRS",
            "rate": "190 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit",
            "stt": "Depresi ST akibat rate cepat",
            "clinical": "Perempuan 25 tahun, dada berdebar mendadak.",
            "management": "Manuver vagal, Adenosin IV cepat."
        }
    },
    {
        "id": "real-22",
        "priority": "prioritas-tinggi",
        "title": "Supraventricular Tachycardia (SVT)",
        "generatorConfig": {
            "heartRate": 190,
            "pWave": false
        },
        "interp": {
            "irama": "Reguler cepat, P tertutup QRS",
            "rate": "210 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit",
            "stt": "Depresi ST akibat rate cepat",
            "clinical": "Laki-laki 30 tahun keringat dingin.",
            "management": "Manuver vagal, Adenosin IV cepat."
        }
    },
    {
        "id": "real-23",
        "priority": "prioritas-menengah",
        "title": "Hiperkalemia",
        "generatorConfig": {
            "heartRate": 55,
            "qrsMs": 110,
            "hyperkalemia": true
        },
        "interp": {
            "irama": "Lambat",
            "rate": "55 x/menit",
            "axis": "Normal",
            "intervals": "PR memanjang, QRS melebar",
            "stt": "Tall Tented T-Waves",
            "clinical": "Laki-laki 50 tahun CKD telat hemodialisis.",
            "management": "Emergensi. Kalsium glukonas IV."
        }
    },
    {
        "id": "real-24",
        "priority": "prioritas-menengah",
        "title": "Hiperkalemia",
        "generatorConfig": {
            "heartRate": 55,
            "qrsMs": 110,
            "hyperkalemia": true
        },
        "interp": {
            "irama": "Lambat",
            "rate": "45 x/menit",
            "axis": "Normal",
            "intervals": "PR memanjang, QRS melebar",
            "stt": "Tall Tented T-Waves",
            "clinical": "Laki-laki 60 tahun anuria.",
            "management": "Emergensi. Kalsium glukonas IV."
        }
    },
    {
        "id": "real-25",
        "priority": "prioritas-tinggi",
        "title": "AV Block Derajat 1",
        "generatorConfig": {
            "heartRate": 65,
            "prMs": 280
        },
        "interp": {
            "irama": "Sinus",
            "rate": "65 x/menit",
            "axis": "Normal",
            "intervals": "PR Interval > 0.20s",
            "stt": "Normal",
            "clinical": "Laki-laki 25 tahun, atlet terlatih.",
            "management": "Observasi, tidak butuh tata laksana."
        }
    }
];