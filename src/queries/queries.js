   
   export const queries = {} 
   
   
   
   queries.userProfileQuery =`
        query {
            user {
                id
                login
                firstName
                lastName
                email
            }
            transaction(where: {type: {_eq: "xp"}}) {
                amount
            }
            progress {
                object {
                    name
                    type
                }
                grade
            }
        }
    `;

