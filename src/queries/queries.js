   
   export const queries = {} 
   
   
   
   queries.userProfileQuery =`
        query {
            user {
                login
                firstName
                lastName
                email
            }
            transaction(where: {type: {_in: ["xp", "up", "down"]}}) {
                amount
                type
            }
        }
    `;

   