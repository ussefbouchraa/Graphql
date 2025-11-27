import { components } from '../components/pages.js';
import { queries } from '../queries/queries.js';
import { graphQLRequest } from '../queries/request.js';
import { calcTransaction } from "./helper.js"


export const renders = {}



renders.login = () => {
    const app = document.querySelector(".app")
    app.innerHTML = components.login();
}

renders.profile = async () => {
    const app = document.querySelector(".app");
    if (!app) return;

    try {
        const response = await graphQLRequest(queries.userProfileQuery);

        if (!response) {
            renders.popupError("No response from server. Please try again.");
            return;
        }

        if (response.errors) {
            renders.popupError(response.errors[0]?.message || "Failed to fetch user profile.");
            return;
        }

        if (!response.data?.user?.length) {
            renders.popupError("Failed to fetch user profile.");
            return;
        }

        const user = response.data.user[0];
        const transStats = calcTransaction(response.data.transaction || [])

        app.innerHTML = components.profile(user, transStats.gradeStats, transStats.auditStats);
    } catch (error) {
        renders.popupError("An unexpected error occurred. Please try again");
    }
}

renders.popupError = (errorMsg) => {
    const errorPopup = document.querySelector('.popup-container');
    const errorMessageElement = document.querySelector('.popup-error-message');

    errorMessageElement.textContent = errorMsg;
    errorPopup.style.display = 'block';
    setTimeout(() => {
        errorPopup.style.display = 'none';
    }, 5000)
}



renders.statusPage = (statusCode) => {

    const statusMsg = {
        "404": {
            title: "Oops!... ",
            message: " 404 - Page Not Found",
            icon: "🔍"
        }
    };
    const app = document.querySelector(".app")
    app.innerHTML = components.statusPage(statusMsg[statusCode]);
}