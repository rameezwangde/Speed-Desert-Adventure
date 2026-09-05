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
    
    // Completely wipe out any trailing MAXes for 'seater' and 'seaters' regardless of case
    content = content.replace(/(4\s*[Ss]eaters?)(?:\s*MAXs?)+/g, '$1');
    content = content.replace(/(2\s*&\s*4\s*[Ss]eaters?)(?:\s*MAXs?)+/g, '$1');
    content = content.replace(/(2-4\s*[Ss]eaters?)(?:\s*MAXs?)+/g, '$1');
    content = content.replace(/(1,\s*2\s*&\s*4\s*[Ss]eaters?)(?:\s*MAXs?)+/g, '$1');
    
    // Now specifically add MAX to the titles where 4 Seater is mentioned.
    // It's safer to just do explicit title string matches.
    content = content.replace(/4 Seater Early Bird/gi, '4 Seater MAX Early Bird');
    content = content.replace(/2 & 4 Seater Dune Buggy Can-Am/gi, '2 & 4 Seater MAX Dune Buggy Can-Am');
    content = content.replace(/4 Seater Dune Buggy Polaris/gi, '4 Seater MAX Dune Buggy Polaris');
    content = content.replace(/2-4 Seater Dune Buggy Polaris/gi, '2-4 Seater MAX Dune Buggy Polaris');
    content = content.replace(/2 & 4 Seater Dune Buggy Can-Am Maverick/gi, '2 & 4 Seater MAX Dune Buggy Can-Am Maverick');
    
    // Also, some section headings have `1, 2-4 Seater` or similar. Let's leave them if they don't exactly match titles.
    // Wait, the user said "ad max in the title of the card"
    // So things like: title: '4 Seater Early Bird...'
    // And title: '2 & 4 Seater Dune Buggy...'
    // The explicit replacements above cover the known packages.
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
    }
});
console.log('Cleanup and title modify complete!');
