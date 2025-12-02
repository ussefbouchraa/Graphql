import { renders } from '../main/renders.js';
import { tokens } from "../auth/token.js";
import { handleLogout } from "../auth/login.js";

const ENDPOINT = "https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql";

export const graphQLRequest = async (query) => {
    const token = tokens.getToken();
    if (!token) {
        handleLogout(); throw new Error("Authentication token missing");
    }

    try {
        const res = await fetch(ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({query}),
        });

        const data = await res.json()

        if (res.status === 401 || res.status === 403) {   handleLogout(); throw new Error("Session expired"); }
        if (!res.ok || data.errors?.length) {  throw new Error(data.errors?.[0]?.message || res.status || "GraphQL request failed");}

        return data;

    } catch (error) {
        renders.popupError(error.message || "An unexpected error occurred. Please try again");
    }
};


