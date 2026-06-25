from PIL import Image
import os

brain_dir = "C:\\Users\\LeoGui00\\.gemini\\antigravity-ide\\brain\\a259657d-acba-4346-b6d4-53c0ec5b6920\\"
out_dir = "C:\\Users\\LeoGui00\\.gemini\\antigravity-ide\\scratch\\luminapet\\public\\images\\"

# As duas imagens enviadas as 16:28
img1_path = os.path.join(brain_dir, "media__1782415722465.png") # Supostamente Cata Caca ou Refil
img2_path = os.path.join(brain_dir, "media__1782415584265.png")

def crop_product(in_path, out_path):
    try:
        img = Image.open(in_path)
        w, h = img.size
        # O produto na Patzo fica na metade esquerda da tela.
        # Recortando a caixa: esquerda (0), topo (100), direita (w*0.5), base (h-50)
        box = (int(w*0.05), int(h*0.1), int(w*0.48), int(h*0.9))
        cropped = img.crop(box)
        cropped.save(out_path)
        print(f"Cropped {in_path} -> {out_path}")
    except Exception as e:
        print(f"Error processing {in_path}: {e}")

crop_product(img1_path, os.path.join(out_dir, "refil.png"))
crop_product(img2_path, os.path.join(out_dir, "cata-caca.png"))
