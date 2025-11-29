export const graphs = {}



graphs.skills = (skills) => {
    const max = Math.max(...skills.map(s => s.amount))

    let svg = `
    <section class="graph-section svg1-section">
    <div class="section-header"> </div>
    <div class="section-content">
    <svg width="400" height="200">`

    let x = 20

    skills.forEach(s => {
        const barHeight = (s.amount / max) * 150

        svg += `
        <rect x="${x}" y="${180 - barHeight}" width="40" height="${barHeight}" fill="blue"></rect>
        <text x="${x}" y="190" font-size="10">${s.type}</text>
        <text x="${x}" y="${170 - barHeight}" font-size="10">${s.amount}</text>
    `
        x += 60
    })

    svg += `</svg>
            </div>
            </section>`
            
    return svg

    // return `
    // <section class="graph-section svg1-section">
    // <div class="section-header"> </div>
    // <div class="section-content">
    // <svg width="300" height="200" viewBox="0 0 300 200"
    // <rect x="20" y="30" width="40" height="100" fill="blue" />
    // <text x="20" y="150">Go</text>
    // <text x="20" y="20">1200</text>
    // </svg>
    // </div>
    // </section>
    // `



}

graphs.svg2 = () => {

    return `

        <section class="graph-section svg2-section">

            <div class="section-header"> </div>

            <div class="section-content"></div>

        </section>

    `

}


