    export const userProfileQuery = `
        query {
            user {
                id
                login
                firstName
                lastName
                email
            }
        }
    `;