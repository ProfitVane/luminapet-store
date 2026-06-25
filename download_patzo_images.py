import asyncio
from playwright.async_api import async_playwright
import requests

async def download_image(url, output_path):
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        print(f"Navigating to {url}")
        await page.goto(url, wait_until='networkidle')
        
        # Wait for the product image to load. It's usually the largest image in the main content.
        # Let's find an img tag whose src is not the patzo logo.
        await page.wait_for_selector('img')
        
        # Get all image sources
        img_srcs = await page.evaluate('''() => {
            return Array.from(document.querySelectorAll('img')).map(img => img.src);
        }''')
        
        # Filter out obvious logos/icons
        product_img_src = None
        for src in img_srcs:
            if src and 'http' in src and 'logo' not in src.lower() and 'avatar' not in src.lower() and 'icon' not in src.lower():
                # On patzo, product images usually come from orgbling.s3 or similar, or have a specific path.
                # Let's just pick the first large image that looks like a product.
                product_img_src = src
                break
                
        if product_img_src:
            print(f"Found image URL: {product_img_src}")
            # Download it
            response = requests.get(product_img_src)
            if response.status_code == 200:
                with open(output_path, 'wb') as f:
                    f.write(response.content)
                print(f"Successfully downloaded to {output_path}")
            else:
                print(f"Failed to download image from {product_img_src}")
        else:
            print("Could not find a valid product image on the page.")
            
        await browser.close()

async def main():
    await download_image('https://www.patzodrop.com.br/loja/produto/PZ9193RS', 'C:\\\\Users\\\\LeoGui00\\\\.gemini\\\\antigravity-ide\\\\scratch\\\\luminapet\\\\public\\\\images\\\\cata-caca.png')
    await download_image('https://patzodrop.com.br/loja/produto/PZCCN004', 'C:\\\\Users\\\\LeoGui00\\\\.gemini\\\\antigravity-ide\\\\scratch\\\\luminapet\\\\public\\\\images\\\\refil.png')

if __name__ == "__main__":
    asyncio.run(main())
