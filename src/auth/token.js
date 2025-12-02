
export const tokens = {}



tokens.setToken = (value) => {
    localStorage.setItem("jwt_token", value);
}

tokens.removeToken = () => {
    localStorage.removeItem("jwt_token");
}

tokens.getToken = () => {
    return localStorage.getItem("jwt_token");
}


tokens.checkToken = async (tokenValue) => {
    try {
        const res = await fetch("https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + tokenValue,
            },
            body: JSON.stringify({ query: `{user{id}}` })
        });

        return res.ok && !(await res.json()).errors;
    } catch {
        return false;
    }
}
