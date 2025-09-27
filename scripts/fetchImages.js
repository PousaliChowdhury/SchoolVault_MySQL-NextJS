import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const IMAGE_DIR = path.join(process.cwd(), 'public/schoolImages');

async function downloadImage(url, filename) {
  const res = await fetch(url);
  const buffer = await res.buffer();
  fs.writeFileSync(path.join(IMAGE_DIR, filename), buffer);
}

(async () => {
  if (!fs.existsSync(IMAGE_DIR)) fs.mkdirSync(IMAGE_DIR, { recursive: true });

  for (let i = 1; i <= 5; i++) {
    await downloadImage(`https://picsum.photos/400/300?random=${i}`, `school${i}.jpg`);
    console.log(`Downloaded school${i}.jpg`);
  }
})();
