
export const tokens = {}



tokens.setToken = (value) => {
    localStorage.setItem("jwt_token", value);
}

tokens.removeToken = () => {
    localStorage.removeItem("jwt_token");
    console.log("Token removed");
}

tokens.getToken = () => {
    return localStorage.getItem("jwt_token");
}


tokens.checkToken = async (tokenValue) => {
    try {
        const res = await fetch("https://learn.zone01oujda.ma/api/graphql", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + tokenValue,
                "Content-Type": "application/json"
            },
            // A GraphQL endpoint requires a query in the body.
            body: JSON.stringify({ query: "{ __typename }" })
        });

        return res.ok;
    } catch {
        return false;
    }
}

