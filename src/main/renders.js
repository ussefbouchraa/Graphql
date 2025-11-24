import { components } from '../components/pages.js';
import { userProfileQuery } from '../queries/queries.js';
import { graphQLRequest } from '../queries/request.js';


export const renders = {}



renders.login = () => {
    const app = document.querySelector(".app")
    app.innerHTML = components.login();
}

renders.profile = async () => {

    // const response = await graphQLRequest(userProfileQuery);
    // if (response && response.data && response.data.user) {
    //     console.log(response.data)
    //     const user = response.data.user[0];
    const app = document.querySelector(".app")
        app.innerHTML = components.profile("");
    // } else {
    //     renders.popupError("Failed to fetch user profile.")
    //     console.error("Failed to fetch user profile:", response);
    // }
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
            title: "Page Not Found",
            message: "The page you're looking for doesn't exist.",
            icon: "🔍"
        },
        "403": {
            title: "Access Denied",
            message: "You don't have permission to access this page.",
            icon: "🚫"
        },
    };
    const app = document.querySelector(".app")
    app.innerHTML = components.statusPage(statusMsg[statusCode]);


    
}