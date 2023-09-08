const {
  gql
} = require('apollo-server');

module.exports = gql `
# Query to fetch user information
type Query {
  # Fetch the currently authenticated user
  currentUser: User
}


# Mutation for user Signup and login
type Mutation {
  signup(id: ID!,  username: String!, email: String!, password: String! ): AuthPayload
  login(email: String!, password: String!): AuthPayload
}

# User type representing a user in the system
type User {
  id: ID!
  username: String!
  email: String!
  password: String!
}

# Authentication type
type AuthPayload {
  token: String
  user: User
}
`