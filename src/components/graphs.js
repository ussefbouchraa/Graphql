export const graphs = {}



graphs.progressChart = (skills) => {
    
    
    let max = -Infinity;
    let y = 0;
    for (const [name, amount] of skills) { if (amount > max) max = amount; }

    let svg = `
        <section class="graph-section skills-chart">
        <div class="section-header"> <h2 class="section-title">🎯 Skills Progress </h2> </div>
        <div class="section-content">
        <svg class="svg" width="100%" height="${skills.size * 60}">
    `;
    
    skills.forEach((amount, name) => {
        const percent = (amount / max) * 100;

        svg += `
            <text x="0" y="${y + 10}" font-size="15" fill="gray">${name}</text>
            <rect x="0" y="${y + 20}" rx ="10" width="100%" height="25" fill="white" />
            <rect x="0" y="${y + 20}" rx ="10" width="${percent}%" height="25" fill="#444B5A" />
            <text  x="86%" y="${y + 39}" font-size="18" fill="gray">${percent.toFixed()}%</text>
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



graphs.donatChart = (audits) => {
    const validated = audits?.validated || 0;
    const failed = audits?.failed || 0;
    const total = validated + failed;
    
    const circumference = 2 * Math.PI * 100;
    const successDash = total ? (validated / total) * circumference : 0;

    return `
    <section class="graph-section donat-chart">
        <div class="section-header">
            <h2 class="section-title">📊 Audit Stats</h2>
        </div>

        <div class="section-content">
            <svg width="100%" height="260">
            <circle cx="50%" cy="130" r="100"  fill="none" stroke="#444B5A" stroke-width="30" stroke-dasharray="${successDash}" />

            <text x="50%" y="40%" text-anchor="middle"  font-size="22" fill="#636060ff"> Total: ${total} </text>
                <rect x="47%" y="55%" r="10" height="10" width="10" fill="#444B5A"/> <text x="52%" y="59%" font-size="15"  fill="#636060ff"> ${validated}  </text>                
                <rect x="47%" y="65%" r="10" height="10" width="10" fill="#ffffff"/> <text x="52%" y="69%" font-size="15"  fill="#636060ff"> ${failed}  </text>                

                </svg>
        </div>
    </section>`;
};

