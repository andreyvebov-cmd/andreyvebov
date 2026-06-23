const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = 'D:/impres';
const outDir = 'D:/impres/app/public/images';

// Files to convert (matching order: work-36 to work-41)
const jpgFiles = [
  'Нарцисы 30х40 2024г. маслохолст на оргалите.jpg',
  'Знакомый Питер 50х40 масло холст 2020г..jpg',
  'Лимоны. цикл вид сверху 40х30 2024 г.масло холст на оргалите.jpg',
  'Утренний кофе 30х40 2023 г. масло холст на оргалите.jpg',
  'Яблоки . цикл вид сверху 40х30 2024г. масло холст на оргалите.jpg',
  'Виноград . цикл вид сверху 40х30 2024г. масло холст на оргалите.jpg',
];

async function main() {
  for (let i = 0; i < jpgFiles.length; i++) {
    const src = path.join(srcDir, jpgFiles[i]);
    const outName = `work-${36 + i}.webp`;
    const outPath = path.join(outDir, outName);

    if (!fs.existsSync(src)) {
      console.error(`NOT FOUND: ${src}`);
      continue;
    }

    const stat = fs.statSync(src);
    await sharp(src)
      .webp({ quality: 85 })
      .toFile(outPath);

    const outStat = fs.statSync(outPath);
    console.log(`${jpgFiles[i].substring(0,30).padEnd(32)} → ${outName}  (${stat.size} → ${outStat.size} bytes)`);
  }
}

main().catch(console.error);
