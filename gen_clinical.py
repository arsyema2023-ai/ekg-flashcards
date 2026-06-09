import json

base_clinical = [
    {
        "url": "./assets/dvt.jpg",
        "title": "Deep Vein Thrombosis (DVT)",
        "deskripsi": "Bengkak asimetris pada satu tungkai bawah, eritema, hangat, nyeri tekan (tanda Homan +).",
        "korelasi": "Nyeri betis kronis, riwayat imobilisasi lama, pasca operasi, atau hiperkoagulabilitas.",
        "lab": "D-Dimer, USG Doppler Vena Tungkai.",
        "management": "Elevasi tungkai, antikoagulan (Heparin/LMWH dilanjutkan Warfarin/DOAC)."
    },
    {
        "url": "./assets/pitting_edema.jpg",
        "title": "Pitting Edema",
        "deskripsi": "Bengkak pada kedua tungkai yang meninggalkan cekungan saat ditekan.",
        "korelasi": "Gagal Jantung Kanan (Cor Pulmonale) atau CHF, penyakit ginjal, sirosis.",
        "lab": "Ekokardiografi, NT-proBNP, Fungsi Ginjal/Hati, Urinalisis.",
        "management": "Restriksi cairan dan garam, Diuretik (Furosemid)."
    },
    {
        "url": "./assets/jvp.jpg",
        "title": "Peningkatan JVP",
        "deskripsi": "Distensi vena jugularis di leher dengan pulsasi yang terlihat jelas (JVP > 5+2 cmH2O).",
        "korelasi": "Gagal jantung kanan, tamponade jantung, konstriktif perikarditis.",
        "lab": "Ekokardiografi, Rontgen Thorax, EKG.",
        "management": "Tatalaksana penyakit dasar (Diuretik untuk fluid overload)."
    },
    {
        "url": "./assets/osler_nodes.jpg",
        "title": "Osler Nodes",
        "deskripsi": "Nodul merah keunguan, menonjol, dan NYERI pada ujung jari tangan/kaki.",
        "korelasi": "Endokarditis Infektif (kompleks imun). Gejala: demam, murmur jantung baru.",
        "lab": "Kultur darah 3 set, Ekokardiografi (TEE lebih sensitif).",
        "management": "Antibiotik empiris IV dosis tinggi (misal: Vancomycin + Gentamicin)."
    },
    {
        "url": "./assets/janeway.jpg",
        "title": "Janeway Lesions",
        "deskripsi": "Makula merah/hemoragik, datar, TIDAK NYERI pada telapak tangan/kaki.",
        "korelasi": "Endokarditis Infektif (mikroemboli septik).",
        "lab": "Kultur darah, Ekokardiografi.",
        "management": "Antibiotik intravena sesuai kultur."
    },
    {
        "url": "./assets/clubbing.jpg",
        "title": "Clubbing Fingers",
        "deskripsi": "Pembengkakan jaringan lunak ujung jari, hilangnya sudut kuku (Sudut Lovibond >180).",
        "korelasi": "Penyakit jantung bawaan sianotik (Tetralogy of Fallot), endokarditis, PPOK, Kanker paru.",
        "lab": "Pulse oximetry, AGD, Rontgen Thorax, Ekokardiografi.",
        "management": "Oksigenasi, cari dan tangani penyebab hipoksia kronis."
    },
    {
        "url": "./assets/xanthelasma.jpg",
        "title": "Xanthelasma",
        "deskripsi": "Plak kekuningan berbatas tegas di kelopak mata (deposisi kolesterol).",
        "korelasi": "Hiperlipidemia familial, risiko tinggi penyakit jantung koroner aterosklerotik dini.",
        "lab": "Profil Lipid lengkap (Kolesterol Total, LDL, HDL, Trigliserida).",
        "management": "Statin intensitas tinggi, modifikasi gaya hidup/diet."
    },
    {
        "url": "./assets/corneal_arcus.jpg",
        "title": "Corneal Arcus (Arcus Senilis)",
        "deskripsi": "Cincin abu-abu keputihan di tepi kornea mata.",
        "korelasi": "Normal pada lansia. Jika usia < 40 tahun (Arcus Juvenilis), sangat prediktif dislipidemia.",
        "lab": "Profil Lipid darah.",
        "management": "Statin jika terbukti dislipidemia pada usia muda."
    },
    {
        "url": "./assets/ischemic_ulcer.jpg",
        "title": "Peripheral Arterial Disease (Ulserasi Iskemik)",
        "deskripsi": "Luka ulkus dangkal dengan dasar pucat/nekrotik di ujung jari, kulit kering, rambut rontok.",
        "korelasi": "Claudicatio intermittens (nyeri betis saat berjalan), nadi perifer teraba lemah, riwayat DM/Merokok.",
        "lab": "Ankle-Brachial Index (ABI) < 0.9, USG Doppler Vaskular.",
        "management": "Stop merokok, Cilostazol/Aspirin, statin, revaskularisasi bedah/endovaskular."
    },
    {
        "url": "./assets/erythema_marginatum.jpg",
        "title": "Erythema Marginatum",
        "deskripsi": "Ruam makulopapular kemerahan dengan bagian tengah memudar (cincin), di badan/ekstremitas proksimal.",
        "korelasi": "Demam Reumatik Akut (Kriteria Mayor Jones). Riwayat radang tenggorokan.",
        "lab": "ASTO (Anti-Streptolysin O), EKG (PR memanjang), Ekokardiografi.",
        "management": "Penisilin V atau Benzatin Penisilin G, Anti-inflamasi (Aspirin/Kortikosteroid)."
    }
]

# Generate 25 items
final_data = []
counter = 1
while len(final_data) < 25:
    for base in base_clinical:
        if len(final_data) >= 25: break
        entry = {
            "id": f"c-{counter}",
            "priority": "prioritas-tinggi" if base['title'] in ['Peningkatan JVP', 'Deep Vein Thrombosis (DVT)'] else "prioritas-menengah",
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
print("clinical-data.js generated with 25 items.")
