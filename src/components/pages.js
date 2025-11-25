import { sections } from './sections.js';

export const components = {}

components.login = () => {
    return `
        ${components.popupError("")}
        <div id="login-container">
            <nav class="login-header"> <h1>Login</h1></nav>
            <form class="form" action="">
                <section class="section_usr">
                    <label>username:</label>
                    <input type="text" class="username" placeholder="username" required>
                </section>
                <section class="section_pass">
                    <label>password:</label>
                    <input type="password" class="password" placeholder="password" required>
                </section>
                <section class="section_btn">
                    <input type="submit" value="Login" class="btn_login">
                </section>
            </form>
        </div>
    `
}

components.profile = (user, totalXP = 0, auditStats = {}) => {
    return `     
        ${components.popupError("")}
        <div id="profile-container">
            <nav class="profile-header">
                <button id="logout-btn" class="logout-btn">Logout</button>
            </nav>
            <div class="profile-sections">
                ${sections.userInfo(user)}  
                ${sections.xpAmount(totalXP)}
                ${sections.audits(auditStats)}
            </div>
        </div>
    `
}

components.statusPage = (statusMsg) => {
    return `
        ${components.popupError("")}
        <div id="status-container">
        <section id="status-info">
            <nav class="status-header"> <h1>Status Code</h1></nav>
            <h2 class="status-title">${statusMsg?.title || 'Error'}</h2>
            <p class="status-msg">${statusMsg?.message || 'An error occurred'}</p>
            <mark class="status-icon">${statusMsg?.icon || '⚠️'}</mark>
            <a class="status-btn" href="/profile" data-link>Go Back</a>
            </section>
     </div>
    `
}


components.popupError = (errorMsg = "") => {
    return `
        <div class="popup-container" style="display:none">
            <h2>Error</h2>
            <p class="popup-error-message">${errorMsg}</p>
        </div>
    `
}