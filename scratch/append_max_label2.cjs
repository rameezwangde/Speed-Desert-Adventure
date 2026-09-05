const fs = require('fs');

const files = [
    'c:/Users/RAMEEZ/OneDrive/Desktop/Speed Desert/src/pages/Packages.jsx',
    'c:/Users/RAMEEZ/OneDrive/Desktop/Speed Desert/src/components/TourHighlights.jsx',
    'c:/Users/RAMEEZ/OneDrive/Desktop/Speed Desert/src/components/HourlyPackages.jsx'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove existing (MAX for 4 Seater) to avoid duplicates
        content = content.replace(/\s*\(MAX for 4 Seater\)/g, '');
        
        // Let's use a replacer function on the blocks
        // We match an object literal that might contain title and seats
        // This is a naive but effective regex for these files
        content = content.replace(/\{([^{}]+)\}/g, (match, inner) => {
            if (inner.toLowerCase().includes('4 seater')) {
                // It has 4 seater. Let's add (MAX for 4 Seater) to its title
                return '{' + inner.replace(/(title:\s*['"])([^'"]+)(['"])/, (m, p1, p2, p3) => {
                    return p1 + p2.trim() + ' (MAX for 4 Seater)' + p3;
                }) + '}';
            }
            return match;
        });

        fs.writeFileSync(file, content, 'utf8');
    }
});
console.log('Update complete');
