export const sections = {}

sections.userInfo = (user = {}) => {
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'N/A';
    
    return `
        <section class="profile-section user-info-section">
            <div class="section-header">
                <h2 class="section-title">👤 User Identification</h2>
            </div>
            <div class="section-content">
                <div class="info-item">
                    <span class="info-label">Full Name:</span>
                    <span class="info-value">${fullName}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Login:</span>
                    <span class="info-value">${user.login || 'N/A'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Email:</span>
                    <span class="info-value">${user.email || 'N/A'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">User ID:</span>
                    <span class="info-value">${user.id || 'N/A'}</span>
                </div>
            </div>
        </section>
    `
}

sections.xpAmount = (totalXP = 0) => {
    return `
        <section class="profile-section xp-section">
            <div class="section-header">
                <h2 class="section-title">⭐ XP Amount</h2>
            </div>
            <div class="section-content">
                <div class="xp-display">
                    <div class="xp-value">${Number(totalXP).toLocaleString()}</div>
                    <div class="xp-label">Total Experience Points</div>
                </div>
            </div>
        </section>
    `
}

sections.skills = (skills = []) => {
    const skillsHTML = skills.length > 0 
        ? skills.map(skill => `
            <div class="skill-item">
                <span class="skill-name">${skill.name || 'Unknown'}</span>
                <span class="skill-type">${skill.type || 'unknown'}</span>
                <span class="skill-count">${skill.count || 0} completed</span>
            </div>
        `).join('')
        : '<p class="no-skills">No skills data available</p>';

    return `
        <section class="profile-section skills-section">
            <div class="section-header">
                <h2 class="section-title">🎯 Skills</h2>
            </div>
            <div class="section-content">
                <div class="skills-list">
                    ${skillsHTML}
                </div>
            </div>
        </section>
    `
}
