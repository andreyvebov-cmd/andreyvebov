const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const src = path.join('D:/impres/app/public/images/logo.webp');
const outDir = 'D:/impres/app/public';

async function makeFavicon() {
  // Read the logo
  const img = sharp(src);
  const meta = await img.metadata();
  console.log('Logo:', meta.width, 'x', meta.height);

  // Create 32x32 PNG for favicon
  await sharp(src)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(outDir, 'favicon-32.png'));

  // Create 180x180 for apple-touch-icon
  await sharp(src)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(outDir, 'apple-touch-icon.png'));

  // Create 192x192 for Android
  await sharp(src)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(outDir, 'icon-192.png'));

  // Create 512x512 for Android
  await sharp(src)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(outDir, 'icon-512.png'));

  // Create .ico - we'll just provide PNG and let the browser handle it
  console.log('Favicon created');
}

makeFavicon().catch(console.error);
