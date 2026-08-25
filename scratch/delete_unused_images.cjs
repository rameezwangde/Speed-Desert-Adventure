const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const srcDir = path.join(__dirname, '../src');
const dynamicImages = new Set();

// Add known dynamic images
for (let i = 64; i <= 89; i++) dynamicImages.add(`img-g2-${i}.jpeg`);
for (let i = 45; i <= 65; i++) dynamicImages.add(`img-g2-${i}.jpeg`);

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
// Get source files EXCLUDING galleryImages.js
const allSourceFiles = getAllFiles(srcDir).filter(f => f.match(/\.(jsx|js|css)$/i) && !f.endsWith('galleryImages.js'));
allSourceFiles.push(path.join(__dirname, '../index.html'));

let combinedSourceContent = '';
allSourceFiles.forEach(file => {
  combinedSourceContent += fs.readFileSync(file, 'utf8') + '\n';
});

const unusedImages = [];

allImages.forEach(imagePath => {
  const baseName = path.basename(imagePath);
  if (dynamicImages.has(baseName)) return;

  if (!combinedSourceContent.includes(baseName)) {
    unusedImages.push(imagePath);
    // Delete the image
    fs.unlinkSync(imagePath);
  }
});

// Now update galleryImages.js
const galleryImagesPath = path.join(srcDir, 'galleryImages.js');
let galleryContent = fs.readFileSync(galleryImagesPath, 'utf8');

// The file exports an array of strings. We can simply regenerate the file based on the remaining images in public/gallery.
const remainingGalleryImages = fs.readdirSync(path.join(publicDir, 'gallery'))
  .filter(f => f.match(/\.(png|jpe?g|svg|webp|gif)$/i))
  .map(f => `  '/gallery/${f}',`);

const newGalleryContent = `export const galleryImages = [\n${remainingGalleryImages.join('\n')}\n];\n`;
fs.writeFileSync(galleryImagesPath, newGalleryContent);

console.log(`Deleted ${unusedImages.length} unused images and updated galleryImages.js.`);
