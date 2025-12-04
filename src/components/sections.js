export const sections = {}

sections.userInfo = (user = {}) => {
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'N/A';
    
    return `
        <section class="profile-section user-info-section">
            <div class="section-header">
                <h2 class="section-title">👤 User Info</h2>
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
                    <div class="xp-value">${(totalXP) }</div>
                    <div class="xp-label">Total XP Points</div>
                </div>
            </div>
        </section>
    `
}

sections.levelAmount = (level = 0) => {
    return `
        <section class="profile-section level-section">
            <div class="section-header">
                <h2 class="section-title">📈 Level Amount</h2>
            </div>
            <div class="section-content">
                <div class="level-display">
                    <div class="level-value">${level}</div>
                    <div class="level-label">Level Grade</div>
                </div>
            </div>
        </section>
    `   
}





sections.ratio = (stats = { up: 0, down: 0, ratio: null }) => {
    const ratioDisplay = stats.ratio ? stats.ratio.toFixed(1) : 'N/A';
    
    return `
        <section class="profile-section audits-section">
            <div class="section-header">
                <h2 class="section-title">🛡️ Audits Ratio</h2>
            </div>
            <div class="section-content audit-content">
                <div class="audit-item up">
                    <span class="audit-label">Given</span>
                    <span class="audit-value">${stats.up || 0}</span>
                </div>
                <div class="audit-item down">
                    <span class="audit-label">Received</span>
                    <span class="audit-value">${stats.down || 0}</span>
                </div>
                <div class="audit-item ratio">
                    <span class="audit-label">Ratio</span>
                    <span class="audit-value">${ratioDisplay}</span>
                </div>
            </div>
        </section>
    `
}
