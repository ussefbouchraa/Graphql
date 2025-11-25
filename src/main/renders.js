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
        
        // Calculate total XP
        const transactions = response.data.transaction || [];
        const totalXP = transactions.reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
        
        // Extract skills from progress (projects/exercises with grade > 0)
        const progress = response.data.progress || [];
        const skillsMap = new Map();
        
        progress.forEach(p => {
            if (p?.object && Number(p.grade) > 0) {
                const skillName = p.object.name || 'Unknown';
                const skillType = p.object.type || 'unknown';
                
                if (!skillsMap.has(skillName)) {
                    skillsMap.set(skillName, {
                        name: skillName,
                        type: skillType,
                        count: 0
                    });
                }
                skillsMap.get(skillName).count++;
            }
        });
        
        const skills = Array.from(skillsMap.values()).sort((a, b) => b.count - a.count);
        
        app.innerHTML = components.profile(user, totalXP, skills);
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