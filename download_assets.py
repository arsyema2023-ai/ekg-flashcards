import os
import urllib.request
import time

if not os.path.exists("assets"):
    os.makedirs("assets")

images_to_download = {
    # Clinical Images
    "dvt.jpg": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Deep_vein_thrombosis_of_the_right_leg.jpg",
    "pitting_edema.jpg": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pitting_edema.jpg",
    "jvp.jpg": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Jugular_venous_distension.jpg",
    "osler_nodes.jpg": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Osler%27s_nodes.jpg",
    "janeway.jpg": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Janeway_lesions.png",
    "clubbing.jpg": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Clubbing_of_fingers_in_Eisenmenger%27s_syndrome.jpg",
    "xanthelasma.jpg": "https://upload.wikimedia.org/wikipedia/commons/2/23/Xanthelasma.jpg",
    "corneal_arcus.jpg": "https://upload.wikimedia.org/wikipedia/commons/2/26/Arcus_senilis.jpg",
    "ischemic_ulcer.jpg": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Diabetic_foot_ulcer.jpg",
    "erythema_marginatum.jpg": "https://upload.wikimedia.org/wikipedia/commons/0/05/Erythema_marginatum.jpg",
    
    # ECG Images
    "ecg_normal.png": "https://upload.wikimedia.org/wikipedia/commons/9/9e/12_Lead_ECG_-_Normal_Sinus_Rhythm.png",
    "ecg_stemi_ant.jpg": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Anteroseptal_myocardial_infarction.jpg",
    "ecg_stemi_inf.jpg": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Inferior_Myocardial_Infarction.jpg",
    "ecg_af_rvr.png": "https://upload.wikimedia.org/wikipedia/commons/e/ef/AF_RVR_ECG.png",
    "ecg_flutter.jpg": "https://upload.wikimedia.org/wikipedia/commons/5/52/Atrial_flutter.jpg",
    "ecg_vt.jpg": "https://upload.wikimedia.org/wikipedia/commons/0/07/Monomorphic_VT.jpg",
    "ecg_vf.png": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Ventricular_fibrillation.png",
    "ecg_lbbb.png": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Left_bundle_branch_block.png",
    "ecg_rbbb.png": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Right_bundle_branch_block.png",
    "ecg_svt.png": "https://upload.wikimedia.org/wikipedia/commons/c/c5/SVT_ECG.png",
    "ecg_hyperkalemia.png": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Hyperkalaemia.png",
    "ecg_av_block.jpg": "https://upload.wikimedia.org/wikipedia/commons/3/30/1st_degree_heart_block.jpg"
}

opener = urllib.request.build_opener()
opener.addheaders = [
    ('User-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'),
    ('Accept', 'image/webp,image/apng,image/*,*/*;q=0.8')
]
urllib.request.install_opener(opener)

for filename, url in images_to_download.items():
    filepath = os.path.join("assets", filename)
    print(f"Downloading {filename}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(filepath, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
    time.sleep(2)  # Delay to prevent 429

print("Download complete.")
