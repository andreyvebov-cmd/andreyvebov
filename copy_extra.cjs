const fs = require('fs');
const path = require('path');

const srcDir = 'D:/impres';
const outDir = 'D:/impres/app/public/images';

const files = [
  // Paintings (work-42, work-43)
  { src: 'Домик в деревне 50х40 2021г. Холст. Масло.webp', out: 'work-42.webp' },
  { src: 'Испанский этюд 40х30 2020г.холст на оргалите маслом.webp', out: 'work-43.webp' },
  // Graphics (work-44 to work-49)
  { src: 'Гипсовая форма 2018гю Учебный рисунок карандаш бумага.webp', out: 'work-44.webp' },
  { src: 'Голова гипсовая 2018 г. Учебная работа карандаш бумага.webp', out: 'work-45.webp' },
  { src: 'Нос  2018 г. Учебный рисунок карандаш бумага.webp', out: 'work-46.webp' },
  { src: 'Торс 2018г. Учебный рисунок карандаш бумага.webp', out: 'work-47.webp' },
  { src: 'глаза 2018 г. Учебный рисунок карандаш бумага.webp', out: 'work-48.webp' },
  { src: 'голова ребенка 2016г Карандаш бумага.webp', out: 'work-49.webp' },
];

for (const f of files) {
  const src = path.join(srcDir, f.src);
  const dst = path.join(outDir, f.out);
  if (!fs.existsSync(src)) {
    console.error(`NOT FOUND: ${f.src}`);
    continue;
  }
  const stat = fs.statSync(src);
  fs.copyFileSync(src, dst);
  const outStat = fs.statSync(dst);
  console.log(`${f.out}  (${(stat.size/1024).toFixed(0)} KB)`);
}
