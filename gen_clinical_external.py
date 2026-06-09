import json

base_clinical = [
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Deep_vein_thrombosis_of_the_right_leg.jpg",
        "title": "Deep Vein Thrombosis (DVT)",
        "deskripsi": "Bengkak asimetris pada satu tungkai bawah.",
        "korelasi": "Nyeri betis kronis, riwayat imobilisasi lama.",
        "lab": "D-Dimer, USG Doppler Vena Tungkai.",
        "management": "Elevasi tungkai, antikoagulan."
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pitting_edema.jpg",
        "title": "Pitting Edema",
        "deskripsi": "Bengkak pada kedua tungkai yang meninggalkan cekungan saat ditekan.",
        "korelasi": "Gagal Jantung Kanan (Cor Pulmonale) atau CHF.",
        "lab": "Ekokardiografi, NT-proBNP.",
        "management": "Restriksi cairan dan garam, Diuretik (Furosemid)."
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Jugular_venous_distension.jpg",
        "title": "Peningkatan JVP",
        "deskripsi": "Distensi vena jugularis di leher dengan pulsasi yang terlihat jelas.",
        "korelasi": "Gagal jantung kanan, tamponade jantung.",
        "lab": "Ekokardiografi, Rontgen Thorax, EKG.",
        "management": "Tatalaksana penyakit dasar (Diuretik)."
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Osler%27s_nodes.jpg",
        "title": "Osler Nodes",
        "deskripsi": "Nodul merah keunguan, menonjol, dan NYERI pada ujung jari.",
        "korelasi": "Endokarditis Infektif.",
        "lab": "Kultur darah 3 set, Ekokardiografi.",
        "management": "Antibiotik empiris IV dosis tinggi."
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Janeway_lesions.png",
        "title": "Janeway Lesions",
        "deskripsi": "Makula merah/hemoragik, datar, TIDAK NYERI pada telapak.",
        "korelasi": "Endokarditis Infektif (mikroemboli septik).",
        "lab": "Kultur darah, Ekokardiografi.",
        "management": "Antibiotik intravena sesuai kultur."
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Clubbing_of_fingers_in_Eisenmenger%27s_syndrome.jpg",
        "title": "Clubbing Fingers",
        "deskripsi": "Pembengkakan jaringan lunak ujung jari, hilangnya sudut kuku.",
        "korelasi": "Penyakit jantung bawaan sianotik, endokarditis, PPOK.",
        "lab": "Pulse oximetry, Ekokardiografi.",
        "management": "Oksigenasi, cari penyebab hipoksia kronis."
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/23/Xanthelasma.jpg",
        "title": "Xanthelasma",
        "deskripsi": "Plak kekuningan berbatas tegas di kelopak mata.",
        "korelasi": "Hiperlipidemia familial.",
        "lab": "Profil Lipid lengkap.",
        "management": "Statin intensitas tinggi."
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/26/Arcus_senilis.jpg",
        "title": "Corneal Arcus (Arcus Senilis)",
        "deskripsi": "Cincin abu-abu keputihan di tepi kornea mata.",
        "korelasi": "Normal pada lansia. Jika usia < 40 tahun sangat prediktif dislipidemia.",
        "lab": "Profil Lipid darah.",
        "management": "Statin jika terbukti dislipidemia pada usia muda."
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Diabetic_foot_ulcer.jpg",
        "title": "Peripheral Arterial Disease (Ulserasi)",
        "deskripsi": "Luka ulkus dangkal di ujung jari.",
        "korelasi": "Claudicatio intermittens.",
        "lab": "Ankle-Brachial Index (ABI) < 0.9.",
        "management": "Stop merokok, Cilostazol/Aspirin."
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/0/05/Erythema_marginatum.jpg",
        "title": "Erythema Marginatum",
        "deskripsi": "Ruam makulopapular kemerahan dengan bagian tengah memudar.",
        "korelasi": "Demam Reumatik Akut.",
        "lab": "ASTO, EKG, Ekokardiografi.",
        "management": "Penisilin V atau Benzatin Penisilin G."
    }
]

final_data = []
counter = 1
while len(final_data) < 25:
    for base in base_clinical:
        if len(final_data) >= 25: break
        entry = {
            "id": f"c-{counter}",
            "priority": "prioritas-tinggi",
            "title": base['title'],
            "imageUrl": base['url'],
            "interp": {
                "deskripsi": base['deskripsi'],
                "korelasi": base['korelasi'],
                "lab": base['lab'],
                "management": base['management']
            }
        }
        final_data.append(entry)
        counter += 1

js_output = "const clinicalData = " + json.dumps(final_data, indent=4) + ";"
with open("clinical-data.js", "w") as f:
    f.write(js_output)
