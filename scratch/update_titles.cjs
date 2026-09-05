const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.jsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('c:/Users/RAMEEZ/OneDrive/Desktop/Speed Desert/src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Revert everything back to normal for seats
    content = content.replace(/4 Seaters MAX/g, '4 Seaters');
    content = content.replace(/4 Seater MAX/g, '4 Seater');
    content = content.replace(/4 seater MAX/g, '4 seater');
    content = content.replace(/4 Seater\(MAX\)/g, '4 Seater');
    
    // Titles replace logic
    content = content.replace(/4 Seater Early Bird/gi, '4 Seater MAX Early Bird');
    content = content.replace(/2 & 4 Seater Dune Buggy Can-Am/gi, '2 & 4 Seater MAX Dune Buggy Can-Am');
    content = content.replace(/4 Seater Dune Buggy Polaris/gi, '4 Seater MAX Dune Buggy Polaris');
    content = content.replace(/2-4 Seater Dune Buggy Polaris/gi, '2-4 Seater MAX Dune Buggy Polaris');
    
    // Check for SectionHeading titles that have 1, 2-4 Seater etc.
    content = content.replace(/1, 2-4 Seater/gi, '1, 2-4 Seater MAX');
    content = content.replace(/1, 2 & 4 SEATER/gi, '1, 2 & 4 SEATER MAX');
    content = content.replace(/2 & 4 SEATER/gi, '2 & 4 SEATER MAX');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
    }
});
console.log('Done modifying titles!');
