
import { tokens } from "../auth/token.js";
import { handleLogout } from "../auth/login.js";


export  const graphQLRequest = async (query) => {
    const token = tokens.getToken();
    if (!token) {
        handleLogout()
        console.error("No token found for GraphQL request");
        return
    }
    
    const res = await fetch("https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({query})
    });

    return res.json();
}


