import { tokens } from "./token.js"
import { renders } from "../renders.js";

const API_URL = "https://learn.zone01oujda.ma/api/auth/signin";


export function handleLogin() {

    const loginForm = document.querySelector('form');
    const usernameInput = document.querySelector('.username');
    const passwordInput = document.querySelector('.password');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = usernameInput.value.trim().toLowerCase();
        const password = passwordInput.value.trim();

        try {
            // Base64 encode the credentials for Basic Authentication
            const credentials = btoa(`${username}:${password}`);

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${credentials}`
                }
            });

            if (response.ok) {
                const jwt = await response.json();
                tokens.setToken(jwt);
                // renders.profile()
                // window.location.href = "/profile";

            } else {
                // If login fails (e.g., status 401 Unauthorized)
                const errorData = await response.json();
                renders.popupError(errorData.error)

            }
        } catch (error) {
            renders.popupError("An unexpected error occurred. Please try again.")
        }
    })
}

export function handleLogout() {
    tokens.removeToken();
    renders.login()
    // window.location.href = "/login";
}
