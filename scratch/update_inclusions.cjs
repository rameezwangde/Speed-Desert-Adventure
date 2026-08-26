const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'src/pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
let updatedCount = 0;
files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('Ladies Washroom')) {
    content = content.replace(/'Male \/ Female Mosques',[\r\n\s]*/g, '');
    content = content.replace(/'Men Washroom',[\r\n\s]*/g, '');
    content = content.replace(/'Ladies Washroom'(,?)/g, "'Prayer room- male / female',\n  'Washroom- male / female'$1");
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + f);
    updatedCount++;
  }
});
console.log('Total updated: ' + updatedCount);
