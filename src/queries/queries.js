
export const queries = {}



queries.userProfileQuery = `
query {
  user {
    login
    firstName
    lastName
    email
  }

  transaction(
    where: {
      _or: [
        {
          type: { _in: ["xp", "level"] },
          object: {
            _or: [
              { type: { _eq: "project" }, name: { _nlike: "quest%" } },
              { type: { _eq: "piscine" } },
              { type: { _eq: "module" } }
            ]
          }
        },
                
        { type: { _eq: "up" } },
        { type: { _eq: "down" } }
      ]
    }
  ) {
    amount
    type
  }
}

    `;