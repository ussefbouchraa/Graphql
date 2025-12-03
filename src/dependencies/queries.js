
export const queries = {}


queries.SCHEMA_QUERY = {
  query: `{
        __schema {
            queryType { fields { name} }
        }
    }`
};

queries.USER_PROFILE_QUERY = `
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
          type: { _in: ["project", "piscine", "module"] },name: { _nlike: "quest%" }
        }
      },
      { type: { _in: ["up", "down"] } }
    ]
  }
) {
  amount
  type
}

}
    `;

queries.SKILLS_QUERY = `
    query{
        transaction( where: { type: {_ilike: "%skill%"}}
            order_by: {amount: desc}
        ){
            type
            amount
        }
    }`;


queries.AUDIT_QUERY = `
    query{
        user {
            audits_aggregate(where: {closureType: {_eq: succeeded}}) {
                aggregate { count }
            }
            failed_audits: audits_aggregate(where: {closureType: {_eq: failed}}) {
                aggregate { count }
            }
        }
    }`

