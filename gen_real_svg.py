import json

base_templates = [
    {
        "title": "Normal Sinus Rhythm",
        "irama": "Sinus",
        "intervals": "PR 0.16s, QRS 0.08s, QT normal",
        "stt": "Isoelektrik",
        "management": "Edukasi kesehatan. Pasien stabil.",
        "config": {"heartRate": 72},
        "cases": [
            ("72 x/menit", "Normal", "Laki-laki 40 tahun untuk medical check-up rutin."),
            ("80 x/menit", "Normal", "Perempuan 25 tahun, cemas ringan.")
        ]
    },
    {
        "title": "STEMI Anteroseptal",
        "irama": "Sinus",
        "intervals": "PR 0.14s, QRS 0.08s",
        "stt": "ST Elevasi",
        "management": "Oksigen, Aspirin, Clopidogrel, Rujuk PCI segera.",
        "config": {"heartRate": 85, "stElevMv": 0.4, "tAmpMv": 0.5, "qWave": True},
        "cases": [
            ("85 x/menit", "Normal", "Laki-laki 60 tahun dengan nyeri dada menjalar."),
            ("92 x/menit", "Normal", "Laki-laki 55 tahun perokok berat, nyeri dada mendadak."),
            ("76 x/menit", "Normal", "Perempuan 65 tahun mengeluh dada ampek.")
        ]
    },
    {
        "title": "STEMI Inferior",
        "irama": "Sinus",
        "intervals": "PR 0.16s",
        "stt": "ST Elevasi II, III, aVF (Simulasi)",
        "management": "MONACO. Hindari Nitrat jika curiga infark ventrikel kanan.",
        "config": {"heartRate": 65, "stElevMv": 0.3, "qWave": True},
        "cases": [
            ("65 x/menit", "Normal", "Laki-laki 50 tahun, nyeri ulu hati tembus ke punggung."),
            ("58 x/menit", "Normal", "Laki-laki 65 tahun, nyeri ulu hati + bradikardia ringan."),
            ("70 x/menit", "Normal", "Perempuan 60 tahun, keringat dingin, hipotensi.")
        ]
    },
    {
        "title": "Atrial Fibrillation (RVR)",
        "irama": "Irregularly irregular, tidak ada gelombang P",
        "intervals": "QRS sempit",
        "stt": "Depresi ST sekunder",
        "management": "Rate control. Pertimbangkan kardioversi jika tidak stabil.",
        "config": {"heartRate": 140, "pWave": False, "fibrillation": True, "irregular": True},
        "cases": [
            ("140 x/menit", "Normal", "Laki-laki 65 tahun mengeluh berdebar hebat."),
            ("155 x/menit", "Normal", "Perempuan 70 tahun dengan riwayat hipertiroid.")
        ]
    },
    {
        "title": "Atrial Flutter",
        "irama": "Saw-tooth di inferior leads",
        "intervals": "QRS sempit",
        "stt": "Sulit dinilai",
        "management": "Mirip AF.",
        "config": {"heartRate": 150, "pWave": False, "flutter": True, "irregular": False},
        "cases": [
            ("150 x/menit", "Normal", "Laki-laki 60 tahun dengan COPD, berdebar teratur."),
            ("75 x/menit", "Normal", "Laki-laki 55 tahun sedang dalam pengobatan digoxin.")
        ]
    },
    {
        "title": "Ventricular Tachycardia (VT)",
        "irama": "Reguler, dari ventrikel",
        "intervals": "QRS LEBAR",
        "stt": "Arah berlawanan dengan QRS",
        "management": "Jika nadi (-): RJP & Defibrilasi.",
        "config": {"heartRate": 180, "pWave": False, "qrsMs": 140, "lbbb": True},
        "cases": [
            ("180 x/menit", "Extreme RAD", "Laki-laki 65 tahun riwayat iskemik, sinkop."),
            ("165 x/menit", "Extreme RAD", "Laki-laki 70 tahun, penurunan kesadaran.")
        ]
    },
    {
        "title": "Ventricular Fibrillation (VF)",
        "irama": "Kacau (Chaotic)",
        "intervals": "Tidak dapat dinilai",
        "stt": "Tidak dapat dinilai",
        "management": "Code Blue! RJP segera + Defibrilasi.",
        "config": {"heartRate": 250, "pWave": False, "vf": True},
        "cases": [
            ("N/A", "N/A", "Laki-laki 55 tahun collapse mendadak di IGD."),
            ("N/A", "N/A", "Perempuan 60 tahun henti jantung.")
        ]
    },
    {
        "title": "Left Bundle Branch Block (LBBB)",
        "irama": "Sinus",
        "intervals": "QRS LEBAR",
        "stt": "R lebar/notched",
        "management": "Jika baru pada pasien nyeri dada, anggap STEMI ekivalen.",
        "config": {"heartRate": 70, "qrsMs": 130, "lbbb": True},
        "cases": [
            ("70 x/menit", "LAD", "Laki-laki 65 tahun, keluhan sesak napas kronis."),
            ("85 x/menit", "LAD", "Perempuan 70 tahun datang dengan nyeri dada akut.")
        ]
    },
    {
        "title": "Right Bundle Branch Block (RBBB)",
        "irama": "Sinus",
        "intervals": "QRS LEBAR",
        "stt": "Pola rSR'",
        "management": "Observasi. Jika sesak akut: curiga Emboli Paru.",
        "config": {"heartRate": 75, "qrsMs": 120, "rbbb": True},
        "cases": [
            ("75 x/menit", "RAD", "Laki-laki 40 tahun MCU rutin."),
            ("95 x/menit", "RAD", "Perempuan 60 tahun eksaserbasi PPOK.")
        ]
    },
    {
        "title": "Supraventricular Tachycardia (SVT)",
        "irama": "Reguler cepat, P tertutup QRS",
        "intervals": "QRS sempit",
        "stt": "Depresi ST akibat rate cepat",
        "management": "Manuver vagal, Adenosin IV cepat.",
        "config": {"heartRate": 190, "pWave": False},
        "cases": [
            ("190 x/menit", "Normal", "Perempuan 25 tahun, dada berdebar mendadak."),
            ("210 x/menit", "Normal", "Laki-laki 30 tahun keringat dingin.")
        ]
    },
    {
        "title": "Hiperkalemia",
        "irama": "Lambat",
        "intervals": "PR memanjang, QRS melebar",
        "stt": "Tall Tented T-Waves",
        "management": "Emergensi. Kalsium glukonas IV.",
        "config": {"heartRate": 55, "qrsMs": 110, "hyperkalemia": True},
        "cases": [
            ("55 x/menit", "Normal", "Laki-laki 50 tahun CKD telat hemodialisis."),
            ("45 x/menit", "Normal", "Laki-laki 60 tahun anuria.")
        ]
    },
    {
        "title": "AV Block Derajat 1",
        "irama": "Sinus",
        "intervals": "PR Interval > 0.20s",
        "stt": "Normal",
        "management": "Observasi, tidak butuh tata laksana.",
        "config": {"heartRate": 65, "prMs": 280},
        "cases": [
            ("65 x/menit", "Normal", "Laki-laki 25 tahun, atlet terlatih."),
            ("70 x/menit", "Normal", "Perempuan 60 tahun pengguna amiodarone.")
        ]
    }
]

# Generate exactly 25 entries
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
                "generatorConfig": template['config'],
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

print("Generated 25 SVG-based real ECG sets successfully.")
