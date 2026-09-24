const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

const allImages = getAllFiles(publicDir).filter(f => f.match(/\.(jpg|jpeg|png|svg|webp|gif)$/i));

const allCodeFiles = getAllFiles(srcDir).filter(f => f.match(/\.(jsx|js|css)$/i));

// Also check index.html
allCodeFiles.push(path.join(__dirname, 'index.html'));

let unusedImages = [];

allImages.forEach(img => {
  const basename = path.basename(img);
  let isUsed = false;

  for (const codeFile of allCodeFiles) {
    const content = fs.readFileSync(codeFile, 'utf-8');
    if (content.includes(basename)) {
      isUsed = true;
      break;
    }
  }

  if (!isUsed) {
    unusedImages.push(img);
    fs.unlinkSync(img);
    console.log(`Deleted: ${basename}`);
  }
});

console.log(`\nTotal deleted: ${unusedImages.length}`);
