import { tokens } from "./token.js"
import { renders } from "../main/renders.js";
import { navigate } from "../main/router.js";

const API_URL = "https://learn.zone01oujda.ma/api/auth/signin";


export async function handleLogin(event) {
    event.preventDefault();
    
    const usernameInput = document.querySelector('.username');
    const passwordInput = document.querySelector('.password');

    if (!usernameInput || !passwordInput) return;

    const username = usernameInput.value.trim().toLowerCase();
    const password = passwordInput.value.trim();

    try {
        // Base64 encode the credentials for  Authentication
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
            navigate("/profile");
        } else {
            const errorData = await response.json();
            renders.popupError(errorData.error)
        }
    } catch (error) {
        renders.popupError("An unexpected error occurred. Please try again.")
    }
}

export function handleLogout() {
    tokens.removeToken();
    navigate("/login");
}
