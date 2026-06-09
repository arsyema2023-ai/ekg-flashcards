const clinicalData = [
    {
        "id": "c-1",
        "priority": "prioritas-tinggi",
        "title": "Deep Vein Thrombosis (DVT)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Deep_vein_thrombosis_of_the_right_leg.jpg",
        "interp": {
            "deskripsi": "Bengkak asimetris pada satu tungkai bawah.",
            "korelasi": "Nyeri betis kronis, riwayat imobilisasi lama.",
            "lab": "D-Dimer, USG Doppler Vena Tungkai.",
            "management": "Elevasi tungkai, antikoagulan."
        }
    },
    {
        "id": "c-2",
        "priority": "prioritas-tinggi",
        "title": "Pitting Edema",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pitting_edema.jpg",
        "interp": {
            "deskripsi": "Bengkak pada kedua tungkai yang meninggalkan cekungan saat ditekan.",
            "korelasi": "Gagal Jantung Kanan (Cor Pulmonale) atau CHF.",
            "lab": "Ekokardiografi, NT-proBNP.",
            "management": "Restriksi cairan dan garam, Diuretik (Furosemid)."
        }
    },
    {
        "id": "c-3",
        "priority": "prioritas-tinggi",
        "title": "Peningkatan JVP",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Jugular_venous_distension.jpg",
        "interp": {
            "deskripsi": "Distensi vena jugularis di leher dengan pulsasi yang terlihat jelas.",
            "korelasi": "Gagal jantung kanan, tamponade jantung.",
            "lab": "Ekokardiografi, Rontgen Thorax, EKG.",
            "management": "Tatalaksana penyakit dasar (Diuretik)."
        }
    },
    {
        "id": "c-4",
        "priority": "prioritas-tinggi",
        "title": "Osler Nodes",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Osler%27s_nodes.jpg",
        "interp": {
            "deskripsi": "Nodul merah keunguan, menonjol, dan NYERI pada ujung jari.",
            "korelasi": "Endokarditis Infektif.",
            "lab": "Kultur darah 3 set, Ekokardiografi.",
            "management": "Antibiotik empiris IV dosis tinggi."
        }
    },
    {
        "id": "c-5",
        "priority": "prioritas-tinggi",
        "title": "Janeway Lesions",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Janeway_lesions.png",
        "interp": {
            "deskripsi": "Makula merah/hemoragik, datar, TIDAK NYERI pada telapak.",
            "korelasi": "Endokarditis Infektif (mikroemboli septik).",
            "lab": "Kultur darah, Ekokardiografi.",
            "management": "Antibiotik intravena sesuai kultur."
        }
    },
    {
        "id": "c-6",
        "priority": "prioritas-tinggi",
        "title": "Clubbing Fingers",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Clubbing_of_fingers_in_Eisenmenger%27s_syndrome.jpg",
        "interp": {
            "deskripsi": "Pembengkakan jaringan lunak ujung jari, hilangnya sudut kuku.",
            "korelasi": "Penyakit jantung bawaan sianotik, endokarditis, PPOK.",
            "lab": "Pulse oximetry, Ekokardiografi.",
            "management": "Oksigenasi, cari penyebab hipoksia kronis."
        }
    },
    {
        "id": "c-7",
        "priority": "prioritas-tinggi",
        "title": "Xanthelasma",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/23/Xanthelasma.jpg",
        "interp": {
            "deskripsi": "Plak kekuningan berbatas tegas di kelopak mata.",
            "korelasi": "Hiperlipidemia familial.",
            "lab": "Profil Lipid lengkap.",
            "management": "Statin intensitas tinggi."
        }
    },
    {
        "id": "c-8",
        "priority": "prioritas-tinggi",
        "title": "Corneal Arcus (Arcus Senilis)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/26/Arcus_senilis.jpg",
        "interp": {
            "deskripsi": "Cincin abu-abu keputihan di tepi kornea mata.",
            "korelasi": "Normal pada lansia. Jika usia < 40 tahun sangat prediktif dislipidemia.",
            "lab": "Profil Lipid darah.",
            "management": "Statin jika terbukti dislipidemia pada usia muda."
        }
    },
    {
        "id": "c-9",
        "priority": "prioritas-tinggi",
        "title": "Peripheral Arterial Disease (Ulserasi)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Diabetic_foot_ulcer.jpg",
        "interp": {
            "deskripsi": "Luka ulkus dangkal di ujung jari.",
            "korelasi": "Claudicatio intermittens.",
            "lab": "Ankle-Brachial Index (ABI) < 0.9.",
            "management": "Stop merokok, Cilostazol/Aspirin."
        }
    },
    {
        "id": "c-10",
        "priority": "prioritas-tinggi",
        "title": "Erythema Marginatum",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/05/Erythema_marginatum.jpg",
        "interp": {
            "deskripsi": "Ruam makulopapular kemerahan dengan bagian tengah memudar.",
            "korelasi": "Demam Reumatik Akut.",
            "lab": "ASTO, EKG, Ekokardiografi.",
            "management": "Penisilin V atau Benzatin Penisilin G."
        }
    },
    {
        "id": "c-11",
        "priority": "prioritas-tinggi",
        "title": "Deep Vein Thrombosis (DVT)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Deep_vein_thrombosis_of_the_right_leg.jpg",
        "interp": {
            "deskripsi": "Bengkak asimetris pada satu tungkai bawah.",
            "korelasi": "Nyeri betis kronis, riwayat imobilisasi lama.",
            "lab": "D-Dimer, USG Doppler Vena Tungkai.",
            "management": "Elevasi tungkai, antikoagulan."
        }
    },
    {
        "id": "c-12",
        "priority": "prioritas-tinggi",
        "title": "Pitting Edema",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pitting_edema.jpg",
        "interp": {
            "deskripsi": "Bengkak pada kedua tungkai yang meninggalkan cekungan saat ditekan.",
            "korelasi": "Gagal Jantung Kanan (Cor Pulmonale) atau CHF.",
            "lab": "Ekokardiografi, NT-proBNP.",
            "management": "Restriksi cairan dan garam, Diuretik (Furosemid)."
        }
    },
    {
        "id": "c-13",
        "priority": "prioritas-tinggi",
        "title": "Peningkatan JVP",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Jugular_venous_distension.jpg",
        "interp": {
            "deskripsi": "Distensi vena jugularis di leher dengan pulsasi yang terlihat jelas.",
            "korelasi": "Gagal jantung kanan, tamponade jantung.",
            "lab": "Ekokardiografi, Rontgen Thorax, EKG.",
            "management": "Tatalaksana penyakit dasar (Diuretik)."
        }
    },
    {
        "id": "c-14",
        "priority": "prioritas-tinggi",
        "title": "Osler Nodes",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Osler%27s_nodes.jpg",
        "interp": {
            "deskripsi": "Nodul merah keunguan, menonjol, dan NYERI pada ujung jari.",
            "korelasi": "Endokarditis Infektif.",
            "lab": "Kultur darah 3 set, Ekokardiografi.",
            "management": "Antibiotik empiris IV dosis tinggi."
        }
    },
    {
        "id": "c-15",
        "priority": "prioritas-tinggi",
        "title": "Janeway Lesions",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Janeway_lesions.png",
        "interp": {
            "deskripsi": "Makula merah/hemoragik, datar, TIDAK NYERI pada telapak.",
            "korelasi": "Endokarditis Infektif (mikroemboli septik).",
            "lab": "Kultur darah, Ekokardiografi.",
            "management": "Antibiotik intravena sesuai kultur."
        }
    },
    {
        "id": "c-16",
        "priority": "prioritas-tinggi",
        "title": "Clubbing Fingers",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Clubbing_of_fingers_in_Eisenmenger%27s_syndrome.jpg",
        "interp": {
            "deskripsi": "Pembengkakan jaringan lunak ujung jari, hilangnya sudut kuku.",
            "korelasi": "Penyakit jantung bawaan sianotik, endokarditis, PPOK.",
            "lab": "Pulse oximetry, Ekokardiografi.",
            "management": "Oksigenasi, cari penyebab hipoksia kronis."
        }
    },
    {
        "id": "c-17",
        "priority": "prioritas-tinggi",
        "title": "Xanthelasma",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/23/Xanthelasma.jpg",
        "interp": {
            "deskripsi": "Plak kekuningan berbatas tegas di kelopak mata.",
            "korelasi": "Hiperlipidemia familial.",
            "lab": "Profil Lipid lengkap.",
            "management": "Statin intensitas tinggi."
        }
    },
    {
        "id": "c-18",
        "priority": "prioritas-tinggi",
        "title": "Corneal Arcus (Arcus Senilis)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/26/Arcus_senilis.jpg",
        "interp": {
            "deskripsi": "Cincin abu-abu keputihan di tepi kornea mata.",
            "korelasi": "Normal pada lansia. Jika usia < 40 tahun sangat prediktif dislipidemia.",
            "lab": "Profil Lipid darah.",
            "management": "Statin jika terbukti dislipidemia pada usia muda."
        }
    },
    {
        "id": "c-19",
        "priority": "prioritas-tinggi",
        "title": "Peripheral Arterial Disease (Ulserasi)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Diabetic_foot_ulcer.jpg",
        "interp": {
            "deskripsi": "Luka ulkus dangkal di ujung jari.",
            "korelasi": "Claudicatio intermittens.",
            "lab": "Ankle-Brachial Index (ABI) < 0.9.",
            "management": "Stop merokok, Cilostazol/Aspirin."
        }
    },
    {
        "id": "c-20",
        "priority": "prioritas-tinggi",
        "title": "Erythema Marginatum",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/05/Erythema_marginatum.jpg",
        "interp": {
            "deskripsi": "Ruam makulopapular kemerahan dengan bagian tengah memudar.",
            "korelasi": "Demam Reumatik Akut.",
            "lab": "ASTO, EKG, Ekokardiografi.",
            "management": "Penisilin V atau Benzatin Penisilin G."
        }
    },
    {
        "id": "c-21",
        "priority": "prioritas-tinggi",
        "title": "Deep Vein Thrombosis (DVT)",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Deep_vein_thrombosis_of_the_right_leg.jpg",
        "interp": {
            "deskripsi": "Bengkak asimetris pada satu tungkai bawah.",
            "korelasi": "Nyeri betis kronis, riwayat imobilisasi lama.",
            "lab": "D-Dimer, USG Doppler Vena Tungkai.",
            "management": "Elevasi tungkai, antikoagulan."
        }
    },
    {
        "id": "c-22",
        "priority": "prioritas-tinggi",
        "title": "Pitting Edema",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pitting_edema.jpg",
        "interp": {
            "deskripsi": "Bengkak pada kedua tungkai yang meninggalkan cekungan saat ditekan.",
            "korelasi": "Gagal Jantung Kanan (Cor Pulmonale) atau CHF.",
            "lab": "Ekokardiografi, NT-proBNP.",
            "management": "Restriksi cairan dan garam, Diuretik (Furosemid)."
        }
    },
    {
        "id": "c-23",
        "priority": "prioritas-tinggi",
        "title": "Peningkatan JVP",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Jugular_venous_distension.jpg",
        "interp": {
            "deskripsi": "Distensi vena jugularis di leher dengan pulsasi yang terlihat jelas.",
            "korelasi": "Gagal jantung kanan, tamponade jantung.",
            "lab": "Ekokardiografi, Rontgen Thorax, EKG.",
            "management": "Tatalaksana penyakit dasar (Diuretik)."
        }
    },
    {
        "id": "c-24",
        "priority": "prioritas-tinggi",
        "title": "Osler Nodes",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Osler%27s_nodes.jpg",
        "interp": {
            "deskripsi": "Nodul merah keunguan, menonjol, dan NYERI pada ujung jari.",
            "korelasi": "Endokarditis Infektif.",
            "lab": "Kultur darah 3 set, Ekokardiografi.",
            "management": "Antibiotik empiris IV dosis tinggi."
        }
    },
    {
        "id": "c-25",
        "priority": "prioritas-tinggi",
        "title": "Janeway Lesions",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Janeway_lesions.png",
        "interp": {
            "deskripsi": "Makula merah/hemoragik, datar, TIDAK NYERI pada telapak.",
            "korelasi": "Endokarditis Infektif (mikroemboli septik).",
            "lab": "Kultur darah, Ekokardiografi.",
            "management": "Antibiotik intravena sesuai kultur."
        }
    }
];