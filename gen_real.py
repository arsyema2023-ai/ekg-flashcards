import json
import random

base_templates = [
    {
        "url": "./assets/ecg_normal.png",
        "title": "Normal Sinus Rhythm",
        "irama": "Sinus",
        "intervals": "PR 0.16s, QRS 0.08s",
        "stt": "Isoelektrik",
        "management": "Edukasi kesehatan. Pasien stabil.",
        "cases": [
            ("72 x/menit", "Normal", "Laki-laki 40 tahun untuk medical check-up rutin."),
            ("80 x/menit", "Normal", "Perempuan 25 tahun, cemas ringan.")
        ]
    },
    {
        "url": "./assets/ecg_stemi_ant.jpg",
        "title": "STEMI Anteroseptal",
        "irama": "Sinus",
        "intervals": "PR 0.14s, QRS 0.08s",
        "stt": "ST Elevasi V1-V4",
        "management": "Code STEMI. Oksigen, Aspirin, Clopidogrel, Rujuk PCI segera.",
        "cases": [
            ("85 x/menit", "Normal", "Laki-laki 60 tahun dengan nyeri dada menjalar."),
            ("92 x/menit", "Normal", "Laki-laki 55 tahun perokok berat, nyeri mendadak."),
            ("76 x/menit", "Normal", "Perempuan 65 tahun mengeluh dada ampek dan mual.")
        ]
    },
    {
        "url": "./assets/ecg_stemi_inf.jpg",
        "title": "STEMI Inferior",
        "irama": "Sinus",
        "intervals": "PR 0.16s",
        "stt": "ST Elevasi II, III, aVF",
        "management": "MONACO. Hindari Nitrat jika infark ventrikel kanan.",
        "cases": [
            ("65 x/menit", "Normal", "Laki-laki 50 tahun, nyeri ulu hati tembus punggung."),
            ("58 x/menit", "Normal", "Laki-laki 65 tahun, nyeri dada dan bradikardia."),
            ("70 x/menit", "Normal", "Perempuan 60 tahun, hipotensi.")
        ]
    },
    {
        "url": "./assets/ecg_af_rvr.png",
        "title": "Atrial Fibrillation (RVR)",
        "irama": "Irregularly irregular",
        "intervals": "QRS sempit",
        "stt": "Depresi ST sekunder",
        "management": "Rate control (Beta-blocker/CCB). Pertimbangkan kardioversi.",
        "cases": [
            ("140 x/menit", "Normal", "Laki-laki 65 tahun berdebar hebat."),
            ("155 x/menit", "Normal", "Perempuan 70 tahun riwayat hipertiroid.")
        ]
    },
    {
        "url": "./assets/ecg_flutter.jpg",
        "title": "Atrial Flutter",
        "irama": "Saw-tooth waves di inferior",
        "intervals": "QRS sempit",
        "stt": "Sulit dinilai",
        "management": "Mirip AF (Rate control, antikoagulan, kardioversi).",
        "cases": [
            ("150 x/menit", "Normal", "Laki-laki 60 tahun COPD, berdebar teratur."),
            ("75 x/menit", "Normal", "Laki-laki 55 tahun dalam pengobatan digoxin.")
        ]
    },
    {
        "url": "./assets/ecg_vt.jpg",
        "title": "Ventricular Tachycardia (VT)",
        "irama": "Reguler dari ventrikel",
        "intervals": "QRS LEBAR",
        "stt": "Diskordan",
        "management": "Nadi(-): RJP+Defib. Nadi(+) Tak stabil: Kardioversi.",
        "cases": [
            ("180 x/menit", "Extreme RAD", "Laki-laki 65 tahun riwayat iskemik, sinkop."),
            ("165 x/menit", "Extreme RAD", "Laki-laki 70 tahun, penurunan kesadaran.")
        ]
    },
    {
        "url": "./assets/ecg_vf.png",
        "title": "Ventricular Fibrillation (VF)",
        "irama": "Kacau (Chaotic)",
        "intervals": "N/A",
        "stt": "N/A",
        "management": "Code Blue! RJP segera + Defibrilasi.",
        "cases": [
            ("N/A", "N/A", "Laki-laki 55 tahun collapse mendadak di IGD."),
            ("N/A", "N/A", "Perempuan 60 tahun henti jantung di poli.")
        ]
    },
    {
        "url": "./assets/ecg_lbbb.png",
        "title": "Left Bundle Branch Block (LBBB)",
        "irama": "Sinus",
        "intervals": "QRS LEBAR",
        "stt": "R lebar di V5-V6",
        "management": "Jika baru + nyeri dada, anggap STEMI ekivalen.",
        "cases": [
            ("70 x/menit", "LAD", "Laki-laki 65 tahun sesak napas kronis."),
            ("85 x/menit", "LAD", "Perempuan 70 tahun nyeri dada akut.")
        ]
    },
    {
        "url": "./assets/ecg_rbbb.png",
        "title": "Right Bundle Branch Block (RBBB)",
        "irama": "Sinus",
        "intervals": "QRS LEBAR",
        "stt": "rSR' di V1-V2",
        "management": "Jika sesak akut: curiga Emboli Paru.",
        "cases": [
            ("75 x/menit", "RAD", "Laki-laki 40 tahun asimtomatik."),
            ("95 x/menit", "RAD", "Perempuan 60 tahun PPOK berat.")
        ]
    },
    {
        "url": "./assets/ecg_svt.png",
        "title": "Supraventricular Tachycardia (SVT)",
        "irama": "Reguler cepat, P tertutup",
        "intervals": "QRS sempit",
        "stt": "Depresi ST (rate-related)",
        "management": "Manuver vagal, Adenosin IV cepat.",
        "cases": [
            ("190 x/menit", "Normal", "Perempuan 25 tahun, dada berdebar mendadak."),
            ("210 x/menit", "Normal", "Laki-laki 30 tahun keringat dingin.")
        ]
    },
    {
        "url": "./assets/ecg_hyperkalemia.png",
        "title": "Hiperkalemia",
        "irama": "Lambat",
        "intervals": "QRS melebar",
        "stt": "Tall Tented T-Waves",
        "management": "Emergensi. Kalsium glukonas IV, insulin/glukosa.",
        "cases": [
            ("55 x/menit", "Normal", "Laki-laki 50 tahun CKD telat hemodialisis."),
            ("45 x/menit", "Normal", "Laki-laki 60 tahun anuria.")
        ]
    },
    {
        "url": "./assets/ecg_av_block.jpg",
        "title": "AV Block Derajat 1",
        "irama": "Sinus",
        "intervals": "PR > 0.20s",
        "stt": "Normal",
        "management": "Observasi, tidak butuh tatalaksana.",
        "cases": [
            ("65 x/menit", "Normal", "Laki-laki 25 tahun atlet."),
            ("60 x/menit", "Normal", "Laki-laki 55 tahun hipertensi.")
        ]
    }
]

# We need exactly 25
final_data = []
counter = 1
while len(final_data) < 25:
    for template in base_templates:
        for case in template['cases']:
            if len(final_data) >= 25: break
            entry = {
                "id": f"real-{counter}",
                "priority": "prioritas-tinggi" if "STEMI" in template['title'] or "V" in template['title'] else "prioritas-menengah",
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
print("real-ecg-data.js generated with 25 local items")
