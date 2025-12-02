import { components } from '../components/pages.js';
import { queries } from '../queries/queries.js';
import { graphQLRequest } from '../queries/request.js';
import { calcTransaction, prepareSkills, countAudits } from "./helper.js"


export const renders = {}



renders.login = () => {
    const app = document.querySelector(".app")
    app.innerHTML = components.login();
}

renders.profile = async () => {
    const app = document.querySelector(".app");
    if (!app) return;

    try {
        const [userResponse, skillsResponse, auditResponse] = await Promise.all([
            graphQLRequest(queries.USER_PROFILE_QUERY),
            graphQLRequest(queries.SKILLS_QUERY),
            graphQLRequest(queries.AUDIT_QUERY),
        ]);

        const userInfo = userResponse?.data?.user?.[0];
        const transactions = userResponse?.data?.transaction || [];
        const skills = skillsResponse?.data?.transaction || [];
        const auditUsers = auditResponse?.data?.user;

        if (!userInfo || !auditUsers || !transactions || !skills) {
            throw new Error("Failed to load user information.");
        }

        const transactionStats = calcTransaction(transactions);
        const skillsProg = prepareSkills(skills);
        const auditStats = countAudits(auditUsers) || {};

        app.innerHTML = components.profile(userInfo, transactionStats, skillsProg, auditStats);
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