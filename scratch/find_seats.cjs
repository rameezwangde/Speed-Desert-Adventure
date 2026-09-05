const fs = require('fs');

const files = [
    'c:/Users/RAMEEZ/OneDrive/Desktop/Speed Desert/src/pages/Packages.jsx',
    'c:/Users/RAMEEZ/OneDrive/Desktop/Speed Desert/src/components/TourHighlights.jsx',
    'c:/Users/RAMEEZ/OneDrive/Desktop/Speed Desert/src/components/HourlyPackages.jsx'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        let blocks = content.match(/\{[^}]+seats:[^}]+\}/g);
        if (blocks) {
            console.log('--- ' + file);
            blocks.forEach(block => {
                if (block.toLowerCase().includes('4 seater')) {
                    const titleMatch = block.match(/title:\s*['"]([^'"]+)['"]/);
                    if (titleMatch) {
                        console.log(titleMatch[1]);
                    }
                }
            });
        }
    }
});
