import { renders } from './renders.js';
import { tokens } from '../auth/token.js';
import { handleLogout } from '../auth/login.js';

// Add a `protected` flag to routes that require authentication
const routes = {
    "/login": { render: renders.login },
    "/profile": { render: renders.profile },
    "/404": { render: () => renders.statusPage("404") },
};

export const navigate = (path) => {
    if (window.location.hash === path) return;
    window.location.hash = path;
};

export const handleLocation = async () => {
    let path = window.location.hash.replace("#", "") || "/";
    
    if ( path === "/") { navigate("/login"); return }
    if (path == "/profile") {
        const token = tokens.getToken();
        const valid = token && await tokens.checkToken(token);
        if (!valid) { handleLogout(); return; }
    }
    const route = routes[path] || routes["/404"];

    //  Render UI
    await route.render();
}


window.addEventListener('hashchange', handleLocation);


// <a href="/" data-link>Home</a>
window.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link]");
    if (!link) return;

    e.preventDefault();
    navigate(link.getAttribute("href"));
});
