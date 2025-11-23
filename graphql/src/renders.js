import { components } from './components/pages.js';
import { userProfileQuery } from './queries/queries.js';
import { graphQLRequest } from './queries/request.js';
import { handleLogout } from './auth/login.js';


export const renders = {}



renders.login = () => {
    const app = document.querySelector(".app")
    app.innerHTML = components.login();

}

renders.profile = async () => {

    const app = document.querySelector(".app")
    const response = await graphQLRequest(userProfileQuery);
    if (response && response.data && response.data.user) {
        console.log(response.data)
        const user = response.data.user[0];
        app.innerHTML = components.profile(user);
        document.getElementById('logout-btn').addEventListener('click', handleLogout);
    } else {
        renders.popupError("Failed to fetch user profile.")
        console.error("Failed to fetch user profile:", response);
    }
}

renders.popupError = (errorMsg) => {
    const errorPopup = document.querySelector('.popup-container');
    const errorMessageElement = document.querySelector('.popup-error-message');

    errorMessageElement.textContent = errorMsg || "Invalid username or password.";
    errorPopup.style.display = 'block';
    setTimeout(() => {
        errorPopup.style.display = 'none';
    }, 5000)
}
