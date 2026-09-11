from PIL import Image

def make_collage(img1_path, img2_path, out_path):
    img1 = Image.open(img1_path)
    img2 = Image.open(img2_path)
    
    # Calculate target height (use the smaller height to avoid upscale blur, or average)
    target_height = min(img1.height, img2.height)
    
    # Resize images proportionally to target_height
    img1_aspect = img1.width / img1.height
    img2_aspect = img2.width / img2.height
    
    new_w1 = int(target_height * img1_aspect)
    new_w2 = int(target_height * img2_aspect)
    
    img1_resized = img1.resize((new_w1, target_height), Image.Resampling.LANCZOS)
    img2_resized = img2.resize((new_w2, target_height), Image.Resampling.LANCZOS)
    
    # Create new image
    collage_width = new_w1 + new_w2
    collage = Image.new('RGB', (collage_width, target_height))
    
    collage.paste(img1_resized, (0, 0))
    collage.paste(img2_resized, (new_w1, 0))
    
    collage.save(out_path, quality=90)
    print(f"Collage saved to {out_path}")

if __name__ == '__main__':
    make_collage('public/polaris-rzr-custom.png', 'public/WhatsApp Image 2026-09-10 at 11.40.30 AM.jpeg', 'public/polaris-collage.jpg')
