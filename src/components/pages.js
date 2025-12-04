import { graphs } from './graphs.js';
import { sections } from './sections.js';

export const components = {}

components.login = () => {
    return `
        <div id="login-container">
            <nav class="login-header">
                <div class="logo"> <img src="../../static/logo.png"></img></div>
                <h1>||</h1>
                </nav>
            <form class="form" >
                <header class="form-head"> Login</header> <br>
                <section class="log-section">
                    <label>username:</label>
                    <input type="text" class="username" placeholder="username" required>
                </section>
                <section class="log-section">
                    <label>password:</label>
                    <input type="password" class="password" placeholder="password" required>
                </section>
                <section class="log-section">
                <input type="submit" value="Login" class="btn_login">
                </section>
                </form>
        </div>
    `
}

components.profile = (userInfo, transStats = {}, skillsProg = [], auditStat = {}) => {
    const ratioStats = transStats.ratioStats || {}
    const gradeStats = transStats.gradeStats || {}
    return `     
        <div id="profile-container">
            <nav class="profile-header">
                <div class="logo"> <img src="../../static/logo.png"></img></div>
                <button id="logout-btn" class="logout-btn">Logout</button>
            </nav>
            <div class="profile-sections">
                ${sections.userInfo(userInfo)}  
            <div class="section-container" >
                ${sections.xpAmount(gradeStats.Xp)}
                ${sections.levelAmount(gradeStats.level)}
            </div>
                ${sections.ratio(ratioStats)}
                ${graphs.progressChart(skillsProg)}
                ${graphs.donatChart(auditStat)}

            </div>
        </div>
    `
}

components.statusPage = (statusMsg) => {
    return `
        <div id="status-container">
           <nav class="login-header">
                <div class="logo"> <img src="../../static/logo.png"></img></div> <h1>||</h1>
            </nav>
        <form id="status-form">
            <header class="status-header"> Status Code </header> <br> <hr>
            <section class="status-info">
                <h2 class="status-title">${statusMsg?.title || 'Error'}</h2>
                <p class="status-msg">${statusMsg?.message || 'An error occurred'} 
                <mark class="status-icon">${statusMsg?.icon || '⚠️'}</mark>
                </p>
                </section>
                <a class="status-btn" href="/profile" data-link>Go Back</a>
            
        </form>
     </div>

 


    `
}
