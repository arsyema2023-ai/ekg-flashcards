const ecgData = [
    {
        "id": "s1-1",
        "priority": "prioritas-menengah",
        "title": "Normal Sinus Rhythm",
        "generatorConfig": {
            "heartRate": 67,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Sinus",
            "rate": "67 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s, QRS 0.08s, QT normal",
            "stt": "Isoelektrik",
            "clinical": "Pasien Laki-laki 30 tahun, temuan sesuai EKG.",
            "management": "Edukasi kesehatan. Pasien stabil."
        }
    },
    {
        "id": "s1-2",
        "priority": "prioritas-tinggi",
        "title": "STEMI Anteroseptal",
        "generatorConfig": {
            "heartRate": 87,
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
            "rate": "87 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.14s, QRS 0.08s",
            "stt": "ST Elevasi di V1-V4",
            "clinical": "Pasien Perempuan 45 tahun, temuan sesuai EKG.",
            "management": "Oksigen, Aspirin, Clopidogrel, Rujuk PCI segera."
        }
    },
    {
        "id": "s1-3",
        "priority": "prioritas-tinggi",
        "title": "STEMI Inferior",
        "generatorConfig": {
            "heartRate": 65,
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
            "rate": "65 x/menit",
            "axis": "RAD",
            "intervals": "PR 0.16s",
            "stt": "ST Elevasi II, III, aVF, resiprokal di I, aVL",
            "clinical": "Pasien Laki-laki 70 tahun, temuan sesuai EKG.",
            "management": "MONACO. Hindari Nitrat jika curiga infark ventrikel kanan."
        }
    },
    {
        "id": "s1-4",
        "priority": "prioritas-tinggi",
        "title": "Atrial Fibrillation (RVR)",
        "generatorConfig": {
            "heartRate": 142,
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
            "rate": "142 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit",
            "stt": "Depresi ST sekunder",
            "clinical": "Pasien Perempuan 45 tahun, temuan sesuai EKG.",
            "management": "Rate control. Pertimbangkan kardioversi jika tidak stabil."
        }
    },
    {
        "id": "s1-5",
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
        "id": "s1-6",
        "priority": "prioritas-tinggi",
        "title": "Ventricular Tachycardia (VT)",
        "generatorConfig": {
            "heartRate": 183,
            "pWave": false,
            "qrsMs": 140,
            "lbbb": true,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Reguler, dari ventrikel",
            "rate": "183 x/menit",
            "axis": "LAD",
            "intervals": "QRS LEBAR",
            "stt": "Arah berlawanan dengan QRS",
            "clinical": "Pasien Perempuan 65 tahun, temuan sesuai EKG.",
            "management": "Jika nadi (-): RJP & Defibrilasi."
        }
    },
    {
        "id": "s1-7",
        "priority": "prioritas-tinggi",
        "title": "Ventricular Fibrillation (VF)",
        "generatorConfig": {
            "heartRate": 253,
            "pWave": false,
            "vf": true,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Kacau (Chaotic)",
            "rate": "253 x/menit",
            "axis": "Normal",
            "intervals": "Tidak dapat dinilai",
            "stt": "Tidak dapat dinilai",
            "clinical": "Pasien Laki-laki 30 tahun, temuan sesuai EKG.",
            "management": "Code Blue! RJP segera + Defibrilasi."
        }
    },
    {
        "id": "s1-8",
        "priority": "prioritas-menengah",
        "title": "Left Bundle Branch Block (LBBB)",
        "generatorConfig": {
            "heartRate": 72,
            "qrsMs": 130,
            "lbbb": true,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Sinus",
            "rate": "72 x/menit",
            "axis": "Normal",
            "intervals": "QRS LEBAR > 120ms",
            "stt": "R lebar/notched di V5, V6, I, aVL",
            "clinical": "Pasien Perempuan 45 tahun, temuan sesuai EKG.",
            "management": "Jika baru pada pasien nyeri dada, anggap STEMI ekivalen."
        }
    },
    {
        "id": "s1-9",
        "priority": "prioritas-menengah",
        "title": "Right Bundle Branch Block (RBBB)",
        "generatorConfig": {
            "heartRate": 72,
            "qrsMs": 120,
            "rbbb": true,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Sinus",
            "rate": "72 x/menit",
            "axis": "LAD",
            "intervals": "QRS LEBAR > 120ms",
            "stt": "Pola rSR' di V1-V2, S lebar di I, V6",
            "clinical": "Pasien Perempuan 65 tahun, temuan sesuai EKG.",
            "management": "Observasi. Jika sesak akut: curiga Emboli Paru."
        }
    },
    {
        "id": "s1-10",
        "priority": "prioritas-menengah",
        "title": "Hiperkalemia",
        "generatorConfig": {
            "heartRate": 54,
            "qrsMs": 110,
            "hyperkalemia": true,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Lambat",
            "rate": "54 x/menit",
            "axis": "Normal",
            "intervals": "PR memanjang, QRS melebar",
            "stt": "Tall Tented T-Waves",
            "clinical": "Pasien Laki-laki 30 tahun, temuan sesuai EKG.",
            "management": "Emergensi. Kalsium glukonas IV."
        }
    },
    {
        "id": "s1-11",
        "priority": "prioritas-menengah",
        "title": "Normal Sinus Rhythm",
        "generatorConfig": {
            "heartRate": 77,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Sinus",
            "rate": "77 x/menit",
            "axis": "LAD",
            "intervals": "PR 0.16s, QRS 0.08s, QT normal",
            "stt": "Isoelektrik",
            "clinical": "Pasien Perempuan 65 tahun, temuan sesuai EKG.",
            "management": "Edukasi kesehatan. Pasien stabil."
        }
    },
    {
        "id": "s1-12",
        "priority": "prioritas-tinggi",
        "title": "STEMI Anteroseptal",
        "generatorConfig": {
            "heartRate": 90,
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
            "rate": "90 x/menit",
            "axis": "RAD",
            "intervals": "PR 0.14s, QRS 0.08s",
            "stt": "ST Elevasi di V1-V4",
            "clinical": "Pasien Laki-laki 70 tahun, temuan sesuai EKG.",
            "management": "Oksigen, Aspirin, Clopidogrel, Rujuk PCI segera."
        }
    },
    {
        "id": "s1-13",
        "priority": "prioritas-tinggi",
        "title": "STEMI Inferior",
        "generatorConfig": {
            "heartRate": 69,
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
            "rate": "69 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s",
            "stt": "ST Elevasi II, III, aVF, resiprokal di I, aVL",
            "clinical": "Pasien Perempuan 45 tahun, temuan sesuai EKG.",
            "management": "MONACO. Hindari Nitrat jika curiga infark ventrikel kanan."
        }
    },
    {
        "id": "s1-14",
        "priority": "prioritas-tinggi",
        "title": "Atrial Fibrillation (RVR)",
        "generatorConfig": {
            "heartRate": 140,
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
            "rate": "140 x/menit",
            "axis": "Normal",
            "intervals": "QRS sempit",
            "stt": "Depresi ST sekunder",
            "clinical": "Pasien Laki-laki 50 tahun, temuan sesuai EKG.",
            "management": "Rate control. Pertimbangkan kardioversi jika tidak stabil."
        }
    },
    {
        "id": "s1-15",
        "priority": "prioritas-menengah",
        "title": "Atrial Flutter",
        "generatorConfig": {
            "heartRate": 149,
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
            "rate": "149 x/menit",
            "axis": "LAD",
            "intervals": "QRS sempit",
            "stt": "Sulit dinilai",
            "clinical": "Pasien Perempuan 65 tahun, temuan sesuai EKG.",
            "management": "Mirip AF."
        }
    },
    {
        "id": "s1-16",
        "priority": "prioritas-tinggi",
        "title": "Ventricular Tachycardia (VT)",
        "generatorConfig": {
            "heartRate": 176,
            "pWave": false,
            "qrsMs": 140,
            "lbbb": true,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Reguler, dari ventrikel",
            "rate": "176 x/menit",
            "axis": "LAD",
            "intervals": "QRS LEBAR",
            "stt": "Arah berlawanan dengan QRS",
            "clinical": "Pasien Perempuan 65 tahun, temuan sesuai EKG.",
            "management": "Jika nadi (-): RJP & Defibrilasi."
        }
    },
    {
        "id": "s1-17",
        "priority": "prioritas-tinggi",
        "title": "Ventricular Fibrillation (VF)",
        "generatorConfig": {
            "heartRate": 252,
            "pWave": false,
            "vf": true,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Kacau (Chaotic)",
            "rate": "252 x/menit",
            "axis": "Normal",
            "intervals": "Tidak dapat dinilai",
            "stt": "Tidak dapat dinilai",
            "clinical": "Pasien Laki-laki 50 tahun, temuan sesuai EKG.",
            "management": "Code Blue! RJP segera + Defibrilasi."
        }
    },
    {
        "id": "s1-18",
        "priority": "prioritas-menengah",
        "title": "Left Bundle Branch Block (LBBB)",
        "generatorConfig": {
            "heartRate": 74,
            "qrsMs": 130,
            "lbbb": true,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Sinus",
            "rate": "74 x/menit",
            "axis": "LAD",
            "intervals": "QRS LEBAR > 120ms",
            "stt": "R lebar/notched di V5, V6, I, aVL",
            "clinical": "Pasien Perempuan 65 tahun, temuan sesuai EKG.",
            "management": "Jika baru pada pasien nyeri dada, anggap STEMI ekivalen."
        }
    },
    {
        "id": "s1-19",
        "priority": "prioritas-menengah",
        "title": "Right Bundle Branch Block (RBBB)",
        "generatorConfig": {
            "heartRate": 74,
            "qrsMs": 120,
            "rbbb": true,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Sinus",
            "rate": "74 x/menit",
            "axis": "Normal",
            "intervals": "QRS LEBAR > 120ms",
            "stt": "Pola rSR' di V1-V2, S lebar di I, V6",
            "clinical": "Pasien Perempuan 45 tahun, temuan sesuai EKG.",
            "management": "Observasi. Jika sesak akut: curiga Emboli Paru."
        }
    },
    {
        "id": "s1-20",
        "priority": "prioritas-menengah",
        "title": "Hiperkalemia",
        "generatorConfig": {
            "heartRate": 57,
            "qrsMs": 110,
            "hyperkalemia": true,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Lambat",
            "rate": "57 x/menit",
            "axis": "RAD",
            "intervals": "PR memanjang, QRS melebar",
            "stt": "Tall Tented T-Waves",
            "clinical": "Pasien Laki-laki 70 tahun, temuan sesuai EKG.",
            "management": "Emergensi. Kalsium glukonas IV."
        }
    },
    {
        "id": "s1-21",
        "priority": "prioritas-menengah",
        "title": "Normal Sinus Rhythm",
        "generatorConfig": {
            "heartRate": 71,
            "leadOverrides": {}
        },
        "interp": {
            "irama": "Sinus",
            "rate": "71 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s, QRS 0.08s, QT normal",
            "stt": "Isoelektrik",
            "clinical": "Pasien Laki-laki 50 tahun, temuan sesuai EKG.",
            "management": "Edukasi kesehatan. Pasien stabil."
        }
    },
    {
        "id": "s1-22",
        "priority": "prioritas-tinggi",
        "title": "STEMI Anteroseptal",
        "generatorConfig": {
            "heartRate": 82,
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
            "rate": "82 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.14s, QRS 0.08s",
            "stt": "ST Elevasi di V1-V4",
            "clinical": "Pasien Laki-laki 30 tahun, temuan sesuai EKG.",
            "management": "Oksigen, Aspirin, Clopidogrel, Rujuk PCI segera."
        }
    },
    {
        "id": "s1-23",
        "priority": "prioritas-tinggi",
        "title": "STEMI Inferior",
        "generatorConfig": {
            "heartRate": 64,
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
            "rate": "64 x/menit",
            "axis": "Normal",
            "intervals": "PR 0.16s",
            "stt": "ST Elevasi II, III, aVF, resiprokal di I, aVL",
            "clinical": "Pasien Laki-laki 30 tahun, temuan sesuai EKG.",
            "management": "MONACO. Hindari Nitrat jika curiga infark ventrikel kanan."
        }
    },
    {
        "id": "s1-24",
        "priority": "prioritas-tinggi",
        "title": "Atrial Fibrillation (RVR)",
        "generatorConfig": {
            "heartRate": 137,
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
            "rate": "137 x/menit",
            "axis": "LAD",
            "intervals": "QRS sempit",
            "stt": "Depresi ST sekunder",
            "clinical": "Pasien Perempuan 65 tahun, temuan sesuai EKG.",
            "management": "Rate control. Pertimbangkan kardioversi jika tidak stabil."
        }
    },
    {
        "id": "s1-25",
        "priority": "prioritas-menengah",
        "title": "Atrial Flutter",
        "generatorConfig": {
            "heartRate": 155,
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
            "rate": "155 x/menit",
            "axis": "LAD",
            "intervals": "QRS sempit",
            "stt": "Sulit dinilai",
            "clinical": "Pasien Perempuan 65 tahun, temuan sesuai EKG.",
            "management": "Mirip AF."
        }
    }
];
