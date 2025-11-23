import { renders } from "./renders.js"
import {tokens} from "./auth/token.js"
import { handleLogin, handleLogout } from "./auth/login.js";

document.addEventListener("DOMContentLoaded", () => {
    // window.location.href="/login"
    renders.login()
    handleLogin()

})


window.addEventListener("storage", async (e) => {
    if (e.key === "jwt_token") {

        if (e.newValue) {
            const valid = await tokens.checkToken(e.newValue);
            (valid) ? renders.profile() : handleLogout()
        } else { handleLogout() }
    }
});


