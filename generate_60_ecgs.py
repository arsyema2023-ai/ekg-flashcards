import json
import random

base_templates = [
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/12_Lead_ECG_-_Normal_Sinus_Rhythm.png/1024px-12_Lead_ECG_-_Normal_Sinus_Rhythm.png",
        "title": "Normal Sinus Rhythm",
        "irama": "Sinus (Gelombang P positif di II, negatif di aVR)",
        "intervals": "PR 0.16s, QRS 0.08s, QT normal",
        "stt": "Isoelektrik, tidak ada perubahan patologis",
        "management": "Edukasi kesehatan. Pasien stabil.",
        "cases": [
            ("72 x/menit", "Normal", "Laki-laki 40 tahun untuk medical check-up rutin. Tidak ada keluhan."),
            ("80 x/menit", "Normal", "Perempuan 25 tahun, cemas ringan. EKG normal."),
            ("65 x/menit", "Normal", "Laki-laki 30 tahun sehat, tidak ada riwayat penyakit."),
            ("78 x/menit", "Normal", "Perempuan 55 tahun, kontrol hipertensi terkendali."),
            ("75 x/menit", "Normal", "Laki-laki 50 tahun evaluasi pra-operasi hernia. Jantung normal.")
        ]
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Anteroseptal_myocardial_infarction.jpg/1024px-Anteroseptal_myocardial_infarction.jpg",
        "title": "STEMI Anteroseptal",
        "irama": "Sinus",
        "intervals": "PR 0.14s, QRS 0.08s",
        "stt": "ST Elevasi di V1-V4 dengan gelombang Q patologis (QS pattern)",
        "management": "Oksigen, Aspirin, Clopidogrel, Rujuk PCI segera (Code STEMI).",
        "cases": [
            ("85 x/menit", "Normal", "Laki-laki 60 tahun dengan nyeri dada kiri menjalar ke rahang sejak 2 jam lalu."),
            ("92 x/menit", "Normal", "Laki-laki 55 tahun perokok berat, nyeri dada mendadak disertai keringat dingin."),
            ("76 x/menit", "LAD", "Perempuan 65 tahun DM tipe 2, mengeluh ampek di dada dan mual."),
            ("88 x/menit", "Normal", "Laki-laki 45 tahun, kolesterol tinggi, keluhan dada seperti tertimpa beban berat."),
            ("95 x/menit", "Normal", "Laki-laki 70 tahun, sesak napas dan nyeri prekordial sejak pagi.")
        ]
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Inferior_Myocardial_Infarction.jpg/1024px-Inferior_Myocardial_Infarction.jpg",
        "title": "STEMI Inferior",
        "irama": "Sinus",
        "intervals": "PR 0.16s, QRS sempit",
        "stt": "ST Elevasi di II, III, aVF. ST Depresi resiprokal di I, aVL.",
        "management": "MONACO. Hindari Nitrat jika curiga infark ventrikel kanan! Cek V3R-V4R.",
        "cases": [
            ("65 x/menit", "Normal", "Laki-laki 50 tahun, nyeri ulu hati tembus ke punggung, disangka maag."),
            ("58 x/menit", "Normal", "Laki-laki 65 tahun, nyeri ulu hati + bradikardia ringan (keterlibatan RCA)."),
            ("70 x/menit", "Normal", "Perempuan 60 tahun, keringat dingin, hipotensi."),
            ("68 x/menit", "Normal", "Laki-laki 55 tahun, mual muntah hebat dan dada terasa ampek."),
            ("62 x/menit", "Normal", "Laki-laki 40 tahun post makan besar, tiba-tiba pingsan sesaat karena nyeri dada.")
        ]
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/AF_RVR_ECG.png/1024px-AF_RVR_ECG.png",
        "title": "Atrial Fibrillation dengan RVR",
        "irama": "Irregularly irregular, tidak ada gelombang P",
        "intervals": "QRS sempit (<0.12s)",
        "stt": "Depresi ST sekunder akibat laju cepat",
        "management": "Kontrol laju (Beta-blocker/CCB). Pertimbangkan kardioversi jika tidak stabil.",
        "cases": [
            ("140 x/menit", "Normal", "Laki-laki 65 tahun mengeluh berdebar hebat dan sesak napas saat berjalan."),
            ("155 x/menit", "Normal", "Perempuan 70 tahun dengan riwayat hipertiroid, berdebar dan gemetar."),
            ("135 x/menit", "Normal", "Laki-laki 50 tahun post minum alkohol (Holiday Heart Syndrome)."),
            ("160 x/menit", "Normal", "Perempuan 60 tahun dengan gagal jantung kongestif eksaserbasi akut."),
            ("145 x/menit", "Normal", "Laki-laki 75 tahun asimtomatik tapi nadi ireguler sangat cepat.")
        ]
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Atrial_flutter.jpg/1024px-Atrial_flutter.jpg",
        "title": "Atrial Flutter",
        "irama": "Teratur/Ireguler dengan gelombang flutter (saw-tooth) di inferior leads",
        "intervals": "QRS sempit",
        "stt": "Sulit dinilai karena gelombang flutter",
        "management": "Mirip AF (Rate control, antikoagulan, kardioversi).",
        "cases": [
            ("150 x/menit (2:1 block)", "Normal", "Laki-laki 60 tahun dengan COPD, berdebar teratur sejak kemarin."),
            ("75 x/menit (4:1 block)", "Normal", "Laki-laki 55 tahun sedang dalam pengobatan digoxin, berdebar ringan."),
            ("100 x/menit (3:1 block)", "Normal", "Perempuan 65 tahun riwayat operasi katup mitral."),
            ("145 x/menit", "Normal", "Laki-laki 50 tahun kelelahan kronis dan dada tidak nyaman."),
            ("150 x/menit", "Normal", "Perempuan 45 tahun datang dengan palpitasi mendadak saat olahraga.")
        ]
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Monomorphic_VT.jpg/1024px-Monomorphic_VT.jpg",
        "title": "Monomorphic Ventricular Tachycardia (VT)",
        "irama": "Reguler, dari ventrikel",
        "intervals": "QRS LEBAR (>0.12s)",
        "stt": "Arah berlawanan dengan QRS utama",
        "management": "Jika nadi (-): RJP & Defibrilasi. Nadi (+) tak stabil: Kardioversi. Stabil: Amiodaron IV.",
        "cases": [
            ("180 x/menit", "Extreme RAD", "Laki-laki 65 tahun dengan riwayat iskemik, datang dengan sinkop."),
            ("165 x/menit", "Extreme RAD", "Laki-laki 70 tahun, penurunan kesadaran, hipotensi (70/40)."),
            ("175 x/menit", "Extreme RAD", "Perempuan 60 tahun dengan palpitasi sangat kencang, masih sadar penuh."),
            ("190 x/menit", "Extreme RAD", "Laki-laki 55 tahun post infark miokard bulan lalu, nyeri dada dan berdebar."),
            ("160 x/menit", "Extreme RAD", "Perempuan 50 tahun datang dengan syok kardiogenik.")
        ]
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ventricular_fibrillation.png/1024px-Ventricular_fibrillation.png",
        "title": "Ventricular Fibrillation (VF)",
        "irama": "Kacau (Chaotic)",
        "intervals": "Tidak dapat dinilai",
        "stt": "Tidak dapat dinilai",
        "management": "Code Blue! RJP segera + Defibrilasi (Shockable rhythm).",
        "cases": [
            ("Tidak dapat dihitung", "N/A", "Laki-laki 55 tahun collapse mendadak di IGD, tidak ada nadi."),
            ("Tidak dapat dihitung", "N/A", "Perempuan 60 tahun henti jantung saat menunggu di poli."),
            ("Tidak dapat dihitung", "N/A", "Laki-laki 45 tahun dibawa polisi dengan cardiac arrest."),
            ("Tidak dapat dihitung", "N/A", "Laki-laki 70 tahun tiba-tiba kejang lalu apnea dan tidak bernadi."),
            ("Tidak dapat dihitung", "N/A", "Perempuan 65 tahun unresponsive saat EKG sedang dipasang.")
        ]
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Left_bundle_branch_block.png/1024px-Left_bundle_branch_block.png",
        "title": "Left Bundle Branch Block (LBBB)",
        "irama": "Sinus",
        "intervals": "QRS LEBAR (>0.12s)",
        "stt": "R lebar/notched di I, aVL, V5-V6. S dalam di V1",
        "management": "Jika LBBB BARU pada pasien nyeri dada, anggap sebagai STEMI ekivalen.",
        "cases": [
            ("70 x/menit", "LAD", "Laki-laki 65 tahun, keluhan sesak napas kronis (Hipertensi kronis)."),
            ("85 x/menit", "LAD", "Perempuan 70 tahun datang dengan nyeri dada akut (Suspect LBBB baru)."),
            ("60 x/menit", "LAD", "Laki-laki 60 tahun gagal jantung kongestif (HFrEF)."),
            ("75 x/menit", "LAD", "Perempuan 55 tahun MCU rutin, asimtomatik tapi hipertensi tidak terkontrol."),
            ("80 x/menit", "LAD", "Laki-laki 75 tahun kardiomiopati iskemik lama.")
        ]
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Right_bundle_branch_block.png/1024px-Right_bundle_branch_block.png",
        "title": "Right Bundle Branch Block (RBBB)",
        "irama": "Sinus",
        "intervals": "QRS LEBAR (>0.12s)",
        "stt": "Pola rSR' (telinga kelinci) di V1-V2, S lebar di V6",
        "management": "Jika asimtomatik: observasi. Jika sesak akut: curiga Emboli Paru/Kor Pulmonale.",
        "cases": [
            ("75 x/menit", "RAD", "Laki-laki 40 tahun MCU rutin, sehat dan asimtomatik."),
            ("95 x/menit", "RAD", "Perempuan 60 tahun dengan PPOK berat, eksaserbasi akut."),
            ("110 x/menit", "RAD", "Laki-laki 50 tahun sesak napas mendadak pasca bedah tulang (Curiga Emboli Paru)."),
            ("65 x/menit", "RAD", "Laki-laki 35 tahun MCU pra-kerja, ekokardiografi normal."),
            ("80 x/menit", "RAD", "Perempuan 65 tahun kor pulmonal akibat tuberkulosis paru lama.")
        ]
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/SVT_ECG.png/1024px-SVT_ECG.png",
        "title": "Supraventricular Tachycardia (SVT)",
        "irama": "Reguler cepat, P tertutup QRS",
        "intervals": "QRS sempit (<0.12s)",
        "stt": "Depresi ST akibat rate cepat",
        "management": "Manuver vagal, Adenosin IV cepat (6mg, 12mg). Jika tidak stabil: Kardioversi tersinkronisasi.",
        "cases": [
            ("190 x/menit", "Normal", "Perempuan 25 tahun, dada berdebar mendadak saat minum kopi."),
            ("210 x/menit", "Normal", "Laki-laki 30 tahun, panik dan keringat dingin karena debaran jantung tak wajar."),
            ("180 x/menit", "Normal", "Perempuan 40 tahun, riwayat SVT berulang, kali ini dengan pusing hebat."),
            ("195 x/menit", "Normal", "Laki-laki 20 tahun, mahasiswa sedang stres ujian, palpitasi paroksismal."),
            ("205 x/menit", "Normal", "Perempuan 35 tahun berdebar setelah latihan fisik aerobik keras.")
        ]
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hyperkalaemia.png/1024px-Hyperkalaemia.png",
        "title": "Hiperkalemia",
        "irama": "Sinus / Junctional lambat",
        "intervals": "PR memanjang, QRS melebar",
        "stt": "Tall Tented T-Waves (Gelombang T tinggi runcing), QRS wide.",
        "management": "Emergensi. Kalsium glukonas IV untuk stabilisasi membran sel, insulin/glukosa, albuterol.",
        "cases": [
            ("55 x/menit", "Normal", "Laki-laki 50 tahun CKD stage 5, telat jadwal hemodialisis 1 minggu."),
            ("60 x/menit", "Normal", "Perempuan 65 tahun pengguna ACE inhibitor dan spironolactone, mual lemas."),
            ("45 x/menit", "Normal", "Laki-laki 60 tahun oliguria, kreatinin 12 mg/dL."),
            ("50 x/menit", "Normal", "Perempuan 45 tahun kelemahan otot ekstremitas hebat, K+ lab 7.5 mEq/L."),
            ("52 x/menit", "Normal", "Laki-laki 70 tahun syok sepsis dengan asidosis metabolik dan anuria.")
        ]
    },
    {
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/1st_degree_heart_block.jpg/1024px-1st_degree_heart_block.jpg",
        "title": "AV Block Derajat 1",
        "irama": "Sinus",
        "intervals": "PR Interval > 0.20s (konstan), QRS sempit",
        "stt": "Normal",
        "management": "Observasi, tidak butuh tata laksana jika asimtomatik.",
        "cases": [
            ("65 x/menit", "Normal", "Laki-laki 25 tahun, atlet terlatih, asimtomatik."),
            ("70 x/menit", "Normal", "Perempuan 60 tahun pengguna amiodarone, tanpa keluhan."),
            ("60 x/menit", "Normal", "Laki-laki 55 tahun hipertensi esensial terkontrol."),
            ("72 x/menit", "Normal", "Perempuan 45 tahun, demam reumatik akut ringan."),
            ("68 x/menit", "Normal", "Laki-laki 75 tahun, asimtomatik temuan insidental saat MCU.")
        ]
    }
]

# Generate exactly 60 entries
final_data = []
counter = 1
for template in base_templates:
    for case in template['cases']:
        entry = {
            "id": f"real-{counter}",
            "priority": "prioritas-tinggi" if template['title'] in ["STEMI Anteroseptal", "STEMI Inferior", "VF", "Monomorphic Ventricular Tachycardia (VT)"] else "prioritas-menengah",
            "title": template['title'],
            "imageUrl": template['url'],
            "interp": {
                "irama": template['irama'],
                "rate": case[0],
                "axis": case[1],
                "intervals": template['intervals'],
                "stt": template['stt'],
                "clinical": case[2],
                "management": template['management']
            }
        }
        final_data.append(entry)
        counter += 1

js_output = "const realEcgData = " + json.dumps(final_data, indent=4) + ";"

with open("real-ecg-data.js", "w") as f:
    f.write(js_output)

print("Generated 60 real ECG sets successfully.")
