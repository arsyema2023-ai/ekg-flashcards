const clinicalData = [
    {
        id: "c1",
        priority: 'prioritas-tinggi',
        title: 'Deep Vein Thrombosis (DVT)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Deep_vein_thrombosis_of_the_right_leg.jpg/600px-Deep_vein_thrombosis_of_the_right_leg.jpg',
        interp: {
            deskripsi: 'Pembengkakan asimetris pada tungkai (unilateral), disertai eritema (kemerahan), teraba hangat, dan nyeri pada palpasi.',
            korelasi: 'Pasien sering mengeluh nyeri kaki setelah imobilisasi lama (perjalanan jauh, pasca-operasi) atau pada pasien kanker/hamil (Trias Virchow). Tanda Homan (Homan\'s sign) positif.',
            lab: 'D-Dimer, USG Doppler Vena Tungkai (Gold standard).',
            management: 'Elevasi tungkai, antikoagulan (LMWH atau fondaparinux dilanjutkan warfarin/DOAC). Jangan diurut/dipijat karena risiko emboli paru!'
        }
    },
    {
        id: "c2",
        priority: 'prioritas-tinggi',
        title: 'Gagal Jantung (Pitting Edema)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pitting_edema_1.JPG/600px-Pitting_edema_1.JPG',
        interp: {
            deskripsi: 'Edema pada kedua tungkai bawah. Ketika ditekan, meninggalkan lekukan (pitting) yang lambat kembali.',
            korelasi: 'Keluhan sesak napas saat berbaring (Orthopnea), terbangun malam hari karena sesak (PND), dan cepat lelah. Merupakan tanda gagal jantung kanan/kongestif.',
            lab: 'Ekokardiografi, Foto Toraks (Kardiomegali/edema paru), NT-proBNP.',
            management: 'Restriksi cairan dan garam, pemberian diuretik loop (Furosemide IV/PO), ACE-inhibitor, Beta-blocker jika stabil.'
        }
    },
    {
        id: "c3",
        priority: 'prioritas-tinggi',
        title: 'Peningkatan JVP (Jugular Venous Pressure)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Jugular_venous_distension.jpg/600px-Jugular_venous_distension.jpg',
        interp: {
            deskripsi: 'Distensi vena jugularis eksterna di leher saat pasien berbaring dengan elevasi kepala 30-45 derajat (JVP > 5+2 cmH2O).',
            korelasi: 'Menunjukkan peningkatan tekanan atrium kanan. Tanda spesifik untuk Gagal Jantung Kanan, Kor Pulmonale, atau Tamponade Jantung.',
            lab: 'Ekokardiografi untuk menilai fungsi ventrikel kanan dan tekanan arteri pulmonal.',
            management: 'Tatalaksana penyakit dasar. Jika akibat gagal jantung, berikan diuretik untuk mengurangi *preload*.'
        }
    },
    {
        id: "c4",
        priority: 'prioritas-menengah',
        title: 'Endokarditis Infektif (Osler Nodes)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Osler_nodes.jpg/600px-Osler_nodes.jpg',
        interp: {
            deskripsi: 'Nodul merah keunguan, menonjol, dan TERASA NYERI (tender) pada bantalan jari tangan atau kaki.',
            korelasi: 'Merupakan kompleks imun (deposisi imun). Pasien biasanya demam berkepanjangan, ada riwayat cabut gigi, penggunaan narkoba suntik (IVDU), atau penyakit katup jantung bawaan.',
            lab: 'Kultur darah (3 set dari lokasi berbeda sebelum antibiotik), Ekokardiografi (mencari vegetasi katup).',
            management: 'Antibiotik empiris IV dosis tinggi (misal: Vancomycin + Gentamicin) sambil menunggu hasil kultur.'
        }
    },
    {
        id: "c5",
        priority: 'prioritas-menengah',
        title: 'Endokarditis Infektif (Janeway Lesions)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Janeway_lesions.jpg/600px-Janeway_lesions.jpg',
        interp: {
            deskripsi: 'Lesi makular (datar) eritematosa atau hemoragik di telapak tangan atau telapak kaki yang TIDAK NYERI (non-tender).',
            korelasi: 'Berbeda dengan Osler nodes, Janeway lesions merupakan mikroabses akibat emboli septik dari vegetasi katup jantung.',
            lab: 'Kultur darah, Darah rutin (leukositosis), CRP/LED meningkat, Ekokardiografi.',
            management: 'Sama dengan endokarditis pada umumnya: Antibiotik IV jangka panjang (4-6 minggu).'
        }
    },
    {
        id: "c6",
        priority: 'prioritas-menengah',
        title: 'Clubbing Fingers (Jari Tabuh)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Clubbing_of_fingers_in_Eisenmenger%27s_syndrome.jpg/600px-Clubbing_of_fingers_in_Eisenmenger%27s_syndrome.jpg',
        interp: {
            deskripsi: 'Pelebaran ujung jari dengan hilangnya sudut normal antara kuku dan bantalan kuku (Sudut Lovibond > 180 derajat). Tanda Schamroth positif.',
            korelasi: 'Tanda hipoksia jaringan kronis. Penyebab kardiovaskular tersering adalah Penyakit Jantung Bawaan Sianotik (mis: Tetralogy of Fallot) atau Endokarditis.',
            lab: 'Pulse oximetry (saturasi sering rendah), Ekokardiografi untuk mencari defek anatomi jantung (Right-to-left shunt).',
            management: 'Paliatif kardiovaskular atau koreksi bedah anatomi jantung (closure of defect).'
        }
    },
    {
        id: "c7",
        priority: 'tambahan',
        title: 'Hypercholesterolemia (Xanthelasma)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Xanthelasma.jpg/600px-Xanthelasma.jpg',
        interp: {
            deskripsi: 'Plak kekuningan berbatas tegas, datar atau sedikit menonjol, biasanya di sekitar kantus medial (sudut dalam) kelopak mata atas maupun bawah.',
            korelasi: 'Sering tidak bergejala, tetapi merupakan petunjuk klinis adanya kelainan metabolisme lipid (hiperkolesterolemia) atau Familial Hypercholesterolemia.',
            lab: 'Profil Lipid Puasa (Kolesterol Total, LDL, HDL, Trigliserida).',
            management: 'Diet rendah lemak jenuh, olahraga, dan terapi farmakologis penurun lipid (Statin).'
        }
    },
    {
        id: "c8",
        priority: 'tambahan',
        title: 'Corneal Arcus (Arcus Senilis)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arcus_senilis.jpg/600px-Arcus_senilis.jpg',
        interp: {
            deskripsi: 'Cincin atau pita berwarna putih/abu-abu buram di tepi kornea mata (deposisi lipid).',
            korelasi: 'Normal pada lansia (Arcus senilis). Namun, jika ditemukan pada pasien muda (<50 tahun), sangat sugestif untuk Familial Hypercholesterolemia dan peningkatan risiko kardiovaskular.',
            lab: 'Pemeriksaan panel lipid lengkap.',
            management: 'Skrining risiko penyakit jantung koroner secara komprehensif, pemberian Statin intensitas tinggi jika profil lipid sangat tinggi.'
        }
    },
    {
        id: "c9",
        priority: 'prioritas-tinggi',
        title: 'Peripheral Arterial Disease (Arterial Ulcer)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Gangrene_of_the_toes.jpg/600px-Gangrene_of_the_toes.jpg', // Used gangrene image as ischemic ulcer indicator
        interp: {
            deskripsi: 'Ulkus iskemik pada ujung ekstremitas (jari kaki, tumit), tepi meninggi "punched-out", dasar pucat/nekrotik (eskar hitam), tanpa jaringan granulasi.',
            korelasi: 'Pasien mengeluh claudicatio intermiten (nyeri kram saat berjalan, hilang saat istirahat). Kaki teraba dingin, nadi pedis melemah/hilang, rambut kaki rontok.',
            lab: 'Ankle-Brachial Index (ABI) < 0.9, USG Doppler Arterial ekstremitas bawah.',
            management: 'Modifikasi faktor risiko (Stop merokok!), Antiplatelet (Aspirin/Cilostazol), rujukan bedah vaskular untuk revaskularisasi.'
        }
    },
    {
        id: "c10",
        priority: 'tambahan',
        title: 'Erythema Marginatum (Demam Reumatik)',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Erythema_marginatum.jpg/600px-Erythema_marginatum.jpg',
        interp: {
            deskripsi: 'Ruam makular berwarna merah muda dengan bagian tengah yang memucat (central clearing) dan tepi meninggi bergelombang (marginated), sering di batang tubuh (trunk) dan tidak gatal.',
            korelasi: 'Kriteria mayor Jones untuk Demam Reumatik Akut (Rheumatic Fever). Pasien sering anak/remaja dengan riwayat radang tenggorokan sebelumnya. Gejala lain: poliartritis, korea, karditis.',
            lab: 'ASTO (Anti-Streptolysin O), Swab tenggorok, EKG (PR memanjang), Ekokardiografi.',
            management: 'Eradikasi kuman (Penisilin G Benzatin), anti-inflamasi (Aspirin dosis tinggi), tirah baring.'
        }
    }
];
