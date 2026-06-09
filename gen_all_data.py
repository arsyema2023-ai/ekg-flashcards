import json
import random

def get_base_templates():
    return [
        {
            "title": "Normal Sinus Rhythm",
            "irama": "Sinus",
            "intervals": "PR 0.16s, QRS 0.08s, QT normal",
            "stt": "Isoelektrik",
            "management": "Edukasi kesehatan. Pasien stabil.",
            "config": {
                "heartRate": 72,
                "leadOverrides": {}
            }
        },
        {
            "title": "STEMI Anteroseptal",
            "irama": "Sinus",
            "intervals": "PR 0.14s, QRS 0.08s",
            "stt": "ST Elevasi di V1-V4",
            "management": "Oksigen, Aspirin, Clopidogrel, Rujuk PCI segera.",
            "config": {
                "heartRate": 85,
                "leadOverrides": {
                    "V1": {"stElevMv": 0.3, "tAmpMv": 0.5, "qWave": True},
                    "V2": {"stElevMv": 0.4, "tAmpMv": 0.6, "qWave": True},
                    "V3": {"stElevMv": 0.4, "tAmpMv": 0.6, "qWave": True},
                    "V4": {"stElevMv": 0.2, "tAmpMv": 0.4}
                }
            }
        },
        {
            "title": "STEMI Inferior",
            "irama": "Sinus",
            "intervals": "PR 0.16s",
            "stt": "ST Elevasi II, III, aVF, resiprokal di I, aVL",
            "management": "MONACO. Hindari Nitrat jika curiga infark ventrikel kanan.",
            "config": {
                "heartRate": 65,
                "leadOverrides": {
                    "II": {"stElevMv": 0.3, "qWave": True},
                    "III": {"stElevMv": 0.4, "qWave": True},
                    "aVF": {"stElevMv": 0.3, "qWave": True},
                    "I": {"stElevMv": -0.1, "tInverted": True},
                    "aVL": {"stElevMv": -0.2, "tInverted": True}
                }
            }
        },
        {
            "title": "Atrial Fibrillation (RVR)",
            "irama": "Irregularly irregular, tidak ada gelombang P",
            "intervals": "QRS sempit",
            "stt": "Depresi ST sekunder",
            "management": "Rate control. Pertimbangkan kardioversi jika tidak stabil.",
            "config": {
                "heartRate": 140, "pWave": False, "fibrillation": True, "irregular": True,
                "leadOverrides": {
                    "V1": {"fibrillation": True} # Fibrillation waves usually best seen in V1
                }
            }
        },
        {
            "title": "Atrial Flutter",
            "irama": "Saw-tooth di inferior leads",
            "intervals": "QRS sempit",
            "stt": "Sulit dinilai",
            "management": "Mirip AF.",
            "config": {
                "heartRate": 150, "pWave": False, "flutter": True, "irregular": False,
                "leadOverrides": {
                    "II": {"flutter": True}, "III": {"flutter": True}, "aVF": {"flutter": True}
                }
            }
        },
        {
            "title": "Ventricular Tachycardia (VT)",
            "irama": "Reguler, dari ventrikel",
            "intervals": "QRS LEBAR",
            "stt": "Arah berlawanan dengan QRS",
            "management": "Jika nadi (-): RJP & Defibrilasi.",
            "config": {
                "heartRate": 180, "pWave": False, "qrsMs": 140, "lbbb": True,
                "leadOverrides": {}
            }
        },
        {
            "title": "Ventricular Fibrillation (VF)",
            "irama": "Kacau (Chaotic)",
            "intervals": "Tidak dapat dinilai",
            "stt": "Tidak dapat dinilai",
            "management": "Code Blue! RJP segera + Defibrilasi.",
            "config": {
                "heartRate": 250, "pWave": False, "vf": True,
                "leadOverrides": {}
            }
        },
        {
            "title": "Left Bundle Branch Block (LBBB)",
            "irama": "Sinus",
            "intervals": "QRS LEBAR > 120ms",
            "stt": "R lebar/notched di V5, V6, I, aVL",
            "management": "Jika baru pada pasien nyeri dada, anggap STEMI ekivalen.",
            "config": {
                "heartRate": 70, "qrsMs": 130, "lbbb": True,
                "leadOverrides": {}
            }
        },
        {
            "title": "Right Bundle Branch Block (RBBB)",
            "irama": "Sinus",
            "intervals": "QRS LEBAR > 120ms",
            "stt": "Pola rSR' di V1-V2, S lebar di I, V6",
            "management": "Observasi. Jika sesak akut: curiga Emboli Paru.",
            "config": {
                "heartRate": 75, "qrsMs": 120, "rbbb": True,
                "leadOverrides": {}
            }
        },
        {
            "title": "Hiperkalemia",
            "irama": "Lambat",
            "intervals": "PR memanjang, QRS melebar",
            "stt": "Tall Tented T-Waves",
            "management": "Emergensi. Kalsium glukonas IV.",
            "config": {
                "heartRate": 55, "qrsMs": 110, "hyperkalemia": True,
                "leadOverrides": {}
            }
        }
    ]

def generate_set(count, prefix):
    templates = get_base_templates()
    final_data = []
    
    # Cases to inject realism
    cases = [
        ("Pasien Laki-laki 50 tahun", "Normal"),
        ("Pasien Perempuan 65 tahun", "LAD"),
        ("Pasien Laki-laki 70 tahun", "RAD"),
        ("Pasien Perempuan 45 tahun", "Normal"),
        ("Pasien Laki-laki 30 tahun", "Normal")
    ]
    
    idx = 1
    while len(final_data) < count:
        for t in templates:
            if len(final_data) >= count: break
            
            # Clone config
            cfg = json.loads(json.dumps(t['config']))
            
            # Slight variations in heart rate for realism
            cfg['heartRate'] += random.randint(-5, 5)
            
            c = random.choice(cases)
            
            entry = {
                "id": f"{prefix}-{idx}",
                "priority": "prioritas-tinggi" if "STEMI" in t['title'] or "V" in t['title'] else "prioritas-menengah",
                "title": t['title'],
                "generatorConfig": cfg,
                "interp": {
                    "irama": t['irama'],
                    "rate": f"{cfg['heartRate']} x/menit",
                    "axis": c[1],
                    "intervals": t['intervals'],
                    "stt": t['stt'],
                    "clinical": f"{c[0]}, temuan sesuai EKG.",
                    "management": t['management']
                }
            }
            final_data.append(entry)
            idx += 1
            
    return final_data

# Set 1: 25 items
set1 = generate_set(25, "s1")
with open("data.js", "w") as f:
    f.write("const flashcardData = " + json.dumps(set1, indent=4) + ";\n")

# Set 2: 10 items (replaces clinical-data.js)
set2 = generate_set(10, "s2")
with open("clinical-data.js", "w") as f:
    f.write("const clinicalData = " + json.dumps(set2, indent=4) + ";\n")

# Set 3: 25 items
set3 = generate_set(25, "s3")
with open("real-ecg-data.js", "w") as f:
    f.write("const realEcgData = " + json.dumps(set3, indent=4) + ";\n")

print("Generated Set 1 (25), Set 2 (10), Set 3 (25) successfully.")
