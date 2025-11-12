import Jimp from 'jimp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir).filter(file =>
  file.endsWith('.jpg') || file.endsWith('.jpeg')
);

console.log(`Found ${files.length} images to compress...\n`);

for (const file of files) {
  const inputPath = path.join(publicDir, file);
  const outputPath = path.join(publicDir, file);

  const stats = fs.statSync(inputPath);
  const sizeBefore = (stats.size / 1024 / 1024).toFixed(2);

  const image = await Jimp.read(inputPath);
  await image.quality(80).writeAsync(outputPath);

  const statsAfter = fs.statSync(outputPath);
  const sizeAfter = (statsAfter.size / 1024 / 1024).toFixed(2);
  const savings = ((1 - statsAfter.size / stats.size) * 100).toFixed(1);

  console.log(`✓ ${file}`);
  console.log(`  ${sizeBefore}MB → ${sizeAfter}MB (${savings}% reduction)\n`);
}

console.log('All images compressed successfully!');
