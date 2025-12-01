export const graphs = {}



graphs.skills = (skills) => {
    
    
    let max = -Infinity;
    let y = 0;
    for (const [name, amount] of skills) { if (amount > max) max = amount; }

    let svg = `
        <section class="graph-section svg1-section">
        <div class="section-header"> <h2 class="section-title">⭐ Skills Progress </h2> </div>
        <div class="section-content">
        <svg class="svg" width="100%" height="${skills.size * 60}">
    `;
    
    skills.forEach((amount, name) => {
        const percent = (amount / max) * 100;

        svg += `
            <text x="0" y="${y + 10}" font-size="18" fill="gray">${name}</text>
            <rect x="0" y="${y + 20}" width="100%" height="25" fill="#ddd" />
            <rect x="0" y="${y + 20}" rx ="5" width="${percent}%" height="25" fill="#b5be2eff" />
            <text  x="92%" y="${y + 39}" font-size="18" fill="gray">${percent.toFixed()}%</text>
        `;

        y += 60;
    });

    svg += `
        </svg>
        </div>
        </section>
        `;

    return svg;
};


graphs.audit = (audits) => {
console.log(audits)
    const validated = audits.validated || 0;
    const failed = audits.failed || 0;
    const total = validated + failed;

    let svg = `
        <section class="graph-section svg1-section">
        <div class="section-header"> <h2 class="section-title">📊 Audit Stats </h2> </div>
        <div class="section-content">
        <svg class="svg" width="100%" height="${400}">
        <circle r="200" cx="50%" cy="200" fill="black"/> 
         <circle r="100" cx="50%" cy="200" fill="white"/> 

        </svg>
        </div>
        </section>
    
    `;

    return svg;
}


