export const components = {}

components.login = () => {

    return `
            <div class="popup-container" style="display:none" >
                <h2>Error</h2> <p class="popup-error-message"></p>
            </div>
        <form class="form" action="">
            <section class="section_usr"><label>username:</label><input type="text" class="username"
                    placeholder="username" required> </section>
            <section class="section_pass"><label>password:</label> <input type="password" class="password"
                    placeholder="password" required> </section>
            <section class="section_btn"> <input type="submit" value="Login" class="btn_login"></section>
        </form>
    `
}

components.profile = (user) => {
        if (!user) {
        return `
        <h1>Loading...</h1>
            <div id="profile-container">
                <p>Loading...</p>
                <button id="logout-btn">Logout</button>
            </div>
        `;
    }
    return `     
    <div class="popup-container" style="display:none ">
        <h2>Error</h2> <p class="popup-error-message"></p>
    </div>
   <div id="profile-container">
            <h1>Welcome, ${user.firstName} ${user.lastName}</h1>
            <p>Login: ${user.login}</p>
            <p>Email: ${user.email}</p>
            <button id="logout-btn">Logout</button>
        </div>
}`
}


components.statusPage = (statusMsg) => {

    return `
        <nav class="navbar"> </nav>
        <div class="popup-container" style="display:none ">
            <h2>Error</h2> <p class="popup-error-message"></p>
        </div>
                
        <section id="status-info">
            <h2 class="status-title">${statusMsg.title}</h2>
            <p class="status-msg">${statusMsg.message}</p>
            <mark class="status-icon">${statusMsg.icon}</mark>
        </section>
                
        </div>`

}