import { tokens } from "../auth/token.js"
import { handleLogin, handleLogout } from "../auth/login.js";
import { handleLocation, navigate } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {
    handleLocation();
});



window.addEventListener("storage", async (e) => {
    if (e.key === "jwt_token") {
        if (e.newValue) {
            const valid = await tokens.checkToken(e.newValue);
            (valid) ? navigate("/profile") : navigate("/login");
        }else{ handleLogout();}
    }
});



document.addEventListener('click', (e) => {
    // Handle logout button clicks
    if (e.target.matches('#logout-btn')) {
        handleLogout();
    }
});

document.addEventListener('submit', (e) => {
    // Handle login form submission
    if (e.target.matches('form.form')) {
        handleLogin(e);
    }
});
