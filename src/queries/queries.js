   
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

        //    query {
        //     user {
        //         id
        //         login
        //         firstName
        //         lastName
        //         email
        //     }
        //     transaction(where: {
        //       type: {_eq:"xp"},
        //       _or:[
        //       	{object: {type : {_eq:"project"}, name:{_nlike:"quest%"}}},
        //         {object:{type:{_eq:"piscine"}}},
        //         {object:{type:{_eq:"module"}}}
        //     	]
        //     }){
        //         amount
        //         type
        //     }
        // }