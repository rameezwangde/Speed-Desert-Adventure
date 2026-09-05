const fs = require('fs');

const files = [
    'c:/Users/RAMEEZ/OneDrive/Desktop/Speed Desert/src/pages/Packages.jsx',
    'c:/Users/RAMEEZ/OneDrive/Desktop/Speed Desert/src/components/TourHighlights.jsx',
    'c:/Users/RAMEEZ/OneDrive/Desktop/Speed Desert/src/components/HourlyPackages.jsx'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Revert my previous 'MAX' injections in titles
        content = content.replace(/Polaris RZR MAX 1000 CC/g, 'Polaris RZR 1000 CC');
        content = content.replace(/RZR MAX PRO R/g, 'RZR PRO R');
        content = content.replace(/2 & 4 Seater MAX/g, '2 & 4 Seater');
        content = content.replace(/2-4 Seater MAX/g, '2-4 Seater');
        content = content.replace(/4 Seater MAX Early Bird/g, '4 Seater Early Bird');
        content = content.replace(/can-am X3 MAX/gi, 'can-am X3');
        
        // Ensure no double (MAX for 4 Seater)
        content = content.replace(/\s*\(MAX for 4 Seater\)/g, '');
        
        const titlesToUpdate = [
            'Can-Am Maverick XR MAX (245 HP Stage 4)',
            'Polaris RZR 1000 CC (145 HP)',
            'Stage 4 Stunner: RZR PRO R Ultimate EPS',
            '2 & 4 Seater Dune Buggy Can-Am Maverick R X RS 26',
            '4 Seater Early Bird Dune Buggy Tour (Couples)',
            'Red Dunes Afternoon Buggy Tour (Family)',
            'Night Riders: Dune Buggy Dubai Adventure',
            'Self-Drive Buggy Tours',
            'Group Buggy Tours',
            'Family & Kids Buggy Rides',
            'Night Buggy Tours',
            'Custom Buggy Packages',
            'Red Dunes Buggy Ride',
            'Private Buggy Tours',
            'DESERT COMBO: sharing safari + can-am X3'
        ];
        
        titlesToUpdate.forEach(t => {
            // Escape special characters for RegExp
            const escapedT = t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex1 = new RegExp(`title:\\s*'\\s*` + escapedT + `\\s*'`, 'g');
            content = content.replace(regex1, `title: '${t} (MAX for 4 Seater)'`);
            
            const regex2 = new RegExp(`title:\\s*"\\s*` + escapedT + `\\s*"`, 'g');
            content = content.replace(regex2, `title: "${t} (MAX for 4 Seater)"`);
        });

        fs.writeFileSync(file, content, 'utf8');
    }
});
console.log('Update complete');
