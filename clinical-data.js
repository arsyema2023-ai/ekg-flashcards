const clinicalData = [
    {
        "id": "s2-1",
        "priority": "prioritas-menengah",
        "title": "Normal Sinus Rhythm",
        "generatorConfig": {
            "heartRate": 77,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Sinus",
            "rate": "77 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s, QRS 0.08s, QT normal",
            "stt": "Isoelektrik",
            "clinical": "Pasien Laki-laki 30 tahun, temuan sesuai EKG.",
            "management": "Edukasi kesehatan. Pasien stabil."
        }
    },
    {
        "id": "s2-2",
        "priority": "prioritas-tinggi",
        "title": "STEMI Anteroseptal",
        "generatorConfig": {
            "heartRate": 86,
            "leadOverrides": {
                "V1": {
                    "stElevMv": 0.3,
                    "tAmpMv": 0.5,
                    "qWave": true
                },
                "V2": {
                    "stElevMv": 0.4,
                    "tAmpMv": 0.6,
                    "qWave": true
                },
                "V3": {
                    "stElevMv": 0.4,
                    "tAmpMv": 0.6,
                    "qWave": true
                },
                "V4": {
                    "stElevMv": 0.2,
                    "tAmpMv": 0.4
                }
            }
        },
        "interp": {
            "irama": "Sinus",
            "rate": "86 x/menit",
            "axis": "LAD",
            "intervals": "PR 0.14s, QRS 0.08s",
            "stt": "ST Elevasi di V1-V4",
            "clinical": "Pasien Perempuan 65 tahun, temuan sesuai EKG.",
            "management": "Oksigen, Aspirin, Clopidogrel, Rujuk PCI segera."
        }
    },
    {
        "id": "s2-3",
        "priority": "prioritas-tinggi",
        "title": "STEMI Inferior",
        "generatorConfig": {
            "heartRate": 60,
            "leadOverrides": {
                "II": {
                    "stElevMv": 0.3,
                    "qWave": true
                },
                "III": {
                    "stElevMv": 0.4,
                    "qWave": true
                },
                "aVF": {
                    "stElevMv": 0.3,
                    "qWave": true
                },
                "I": {
                    "stElevMv": -0.1,
                    "tInverted": true
                },
                "aVL": {
                    "stElevMv": -0.2,
                    "tInverted": true
                }
            }
        },
        "interp": {
            "irama": "Sinus",
            "rate": "60 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s",
            "stt": "ST Elevasi II, III, aVF, resiprokal di I, aVL",
            "clinical": "Pasien Laki-laki 50 tahun, temuan sesuai EKG.",
            "management": "MONACO. Hindari Nitrat jika curiga infark ventrikel kanan."
        }
    },
    {
        "id": "s2-4",
        "priority": "prioritas-tinggi",
        "title": "Atrial Fibrillation (RVR)",
        "generatorConfig": {
            "heartRate": 136,
            "pWave": false,
            "fibrillation": true,
            "irregular": true,
            "leadOverrides": {
                "V1": {
                    "fibrillation": true
                }
            }
        },
        "interp": {
            "irama": "Irregularly irregular, tidak ada gelombang P",
            "rate": "136 x/menit",
            "axis": "RAD",
            "intervals": "QRS sempit",
            "stt": "Depresi ST sekunder",
            "clinical": "Pasien Laki-laki 70 tahun, temuan sesuai EKG.",
            "management": "Rate control. Pertimbangkan kardioversi jika tidak stabil."
        }
    },
    {
        "id": "s2-5",
        "priority": "prioritas-menengah",
        "title": "Atrial Flutter",
        "generatorConfig": {
            "heartRate": 151,
            "pWave": false,
            "flutter": true,
            "irregular": false,
            "leadOverrides": {
                "II": {
                    "flutter": true
                },
                "III": {
                    "flutter": true
                },
                "aVF": {
                    "flutter": true
                }
            }
        },
        "interp": {
            "irama": "Saw-tooth di inferior leads",
            "rate": "151 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit",
            "stt": "Sulit dinilai",
            "clinical": "Pasien Perempuan 45 tahun, temuan sesuai EKG.",
            "management": "Mirip AF."
        }
    },
    {
        "id": "s2-6",
        "priority": "prioritas-tinggi",
        "title": "Ventricular Tachycardia (VT)",
        "generatorConfig": {
            "heartRate": 182,
            "pWave": false,
            "qrsMs": 140,
            "lbbb": true,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Reguler, dari ventrikel",
            "rate": "182 x/menit",
            "axis": "RAD",
            "intervals": "QRS LEBAR",
            "stt": "Arah berlawanan dengan QRS",
            "clinical": "Pasien Laki-laki 70 tahun, temuan sesuai EKG.",
            "management": "Jika nadi (-): RJP & Defibrilasi."
        }
    },
    {
        "id": "s2-7",
        "priority": "prioritas-tinggi",
        "title": "Ventricular Fibrillation (VF)",
        "generatorConfig": {
            "heartRate": 246,
            "pWave": false,
            "vf": true,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Kacau (Chaotic)",
            "rate": "246 x/menit",
            "axis": "LAD",
            "intervals": "Tidak dapat dinilai",
            "stt": "Tidak dapat dinilai",
            "clinical": "Pasien Perempuan 65 tahun, temuan sesuai EKG.",
            "management": "Code Blue! RJP segera + Defibrilasi."
        }
    },
    {
        "id": "s2-8",
        "priority": "prioritas-menengah",
        "title": "Left Bundle Branch Block (LBBB)",
        "generatorConfig": {
            "heartRate": 65,
            "qrsMs": 130,
            "lbbb": true,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Sinus",
            "rate": "65 x/menit",
            "axis": "LAD",
            "intervals": "QRS LEBAR > 120ms",
            "stt": "R lebar/notched di V5, V6, I, aVL",
            "clinical": "Pasien Perempuan 65 tahun, temuan sesuai EKG.",
            "management": "Jika baru pada pasien nyeri dada, anggap STEMI ekivalen."
        }
    },
    {
        "id": "s2-9",
        "priority": "prioritas-menengah",
        "title": "Right Bundle Branch Block (RBBB)",
        "generatorConfig": {
            "heartRate": 75,
            "qrsMs": 120,
            "rbbb": true,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Sinus",
            "rate": "75 x/menit",
            "axis": "Normal",
            "intervals": "QRS LEBAR > 120ms",
            "stt": "Pola rSR' di V1-V2, S lebar di I, V6",
            "clinical": "Pasien Laki-laki 50 tahun, temuan sesuai EKG.",
            "management": "Observasi. Jika sesak akut: curiga Emboli Paru."
        }
    },
    {
        "id": "s2-10",
        "priority": "prioritas-menengah",
        "title": "Hiperkalemia",
        "generatorConfig": {
            "heartRate": 59,
            "qrsMs": 110,
            "hyperkalemia": true,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Lambat",
            "rate": "59 x/menit",
            "axis": "RAD",
            "intervals": "PR memanjang, QRS melebar",
            "stt": "Tall Tented T-Waves",
            "clinical": "Pasien Laki-laki 70 tahun, temuan sesuai EKG.",
            "management": "Emergensi. Kalsium glukonas IV."
        }
    }
];
