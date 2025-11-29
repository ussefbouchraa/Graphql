import { components } from '../components/pages.js';
import { queries } from '../queries/queries.js';
import { graphQLRequest } from '../queries/request.js';
import { calcTransaction, prepareSkills } from "./helper.js"


export const renders = {}



renders.login = () => {
    const app = document.querySelector(".app")
    app.innerHTML = components.login();
}

renders.profile = async () => {
    const app = document.querySelector(".app");
    if (!app) return;

    try {
        const response  = await graphQLRequest(queries.USER_PROFILE_QUERY);
        const response1 = await graphQLRequest(queries.SKILLS_QUERY);

        if (!response || !response1) { throw new Error( "No response from server. Please try again." ) }
                
        if (response.errors || response1.errors) { throw new Error( (response.errors?.[0]?.message) || (response1.errors?.[0]?.message) || "Failed to fetch data user.")}
        if (!response.data?.user?.length || !response1.data?.transaction?.length) { throw new Error( "Failed to fetch data user." ) }

        const user = response.data.user[0];
        const transStats = calcTransaction(response.data.transaction || [])
        const skills = prepareSkills(response1.data.transaction || [])
        app.innerHTML = components.profile(user, transStats.gradeStats, transStats.auditStats, skills);
    } catch (err) {
        renders.popupError(err.message || "An unexpected error occurred. Please try again");
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