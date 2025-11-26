import { components } from '../components/pages.js';
import { queries } from '../queries/queries.js';
import { graphQLRequest } from '../queries/request.js';


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
        
        // Calculate totals from transactions
        const transactions = response.data.transaction || [];
        const totals = transactions.reduce((acc, t) => {
            const amount = Number(t.amount) || 0;
            if (t.type === "xp") acc.xp += amount;
            if (t.type === "up") acc.auditUp += amount;
            if (t.type === "down") acc.auditDown += amount;
            return acc;
        }, { xp: 0, auditUp: 0, auditDown: 0 });
        const auditRatio = totals.auditDown > 0 ? (totals.auditUp / totals.auditDown) : null;

        const auditStats = {
            up: (totals.auditUp / 1000000).toFixed(2),
            down: (totals.auditDown/ 1000000).toFixed(2),
            ratio: auditRatio
        };
        console.log(auditStats);
        
        app.innerHTML = components.profile(user, totals.xp, auditStats);
    } catch (error) {
        console.error("Profile render error:", error);
        renders.popupError("An unexpected error occurred. Please try again.");
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