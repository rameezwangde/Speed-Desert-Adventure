const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const srcDir = path.join(__dirname, '../src');
const dynamicImages = new Set();

// Add known dynamic images
for (let i = 64; i <= 89; i++) dynamicImages.add(`img-g2-${i}.jpeg`);
for (let i = 45; i <= 65; i++) dynamicImages.add(`img-g2-${i}.jpeg`);
// Note: We also know some pages have loops for 1-8 (or 1, 14, 31, 42, 53, 64, 75, 86)
// Wait, the other pages still have hardcoded arrays. Let's just do a string search.

function getAllFiles(dir, ext = null) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(file, ext));
    } else {
      if (!ext || file.endsWith(ext)) {
        results.push(file);
      }
    }
  });
  return results;
}

const allImages = getAllFiles(publicDir).filter(f => f.match(/\.(png|jpe?g|svg|webp|gif)$/i));
// Get source files but EXCLUDE galleryImages.js
const allSourceFiles = getAllFiles(srcDir).filter(f => f.match(/\.(jsx|js|css)$/i) && !f.endsWith('galleryImages.js'));
allSourceFiles.push(path.join(__dirname, '../index.html'));

let combinedSourceContent = '';
allSourceFiles.forEach(file => {
  combinedSourceContent += fs.readFileSync(file, 'utf8') + '\n';
});

const unusedImages = [];
let totalSize = 0;

allImages.forEach(imagePath => {
  const baseName = path.basename(imagePath);
  if (dynamicImages.has(baseName)) return;

  if (!combinedSourceContent.includes(baseName)) {
    unusedImages.push(imagePath);
    totalSize += fs.statSync(imagePath).size;
  }
});

console.log(JSON.stringify({
  unusedCount: unusedImages.length,
  unusedImages: unusedImages.map(p => path.relative(publicDir, p)),
  freedSpaceMB: (totalSize / 1024 / 1024).toFixed(2)
}, null, 2));
