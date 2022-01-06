const { gql } = require('apollo-server');

const userSchema = gql`

  scalar DateTime

  enum RolesType {
    ESTUDANTE
    DOCENTE
    COORDENACAO
  }

  type Role{
    id: ID!
    type: RolesType!
  }

  type User{
    id: ID
    nome: String!
    ativo: Boolean!
    email: String
    role: Role!
    createdAt: DateTime
  }

  input UserInput{
    id: ID
    nome: String!
    ativo: Boolean!
    email: String
    role: RolesType!
    createdAt: DateTime
  }

  type Query{
    users: [User!]!
    user(id: ID!): User!
  }

  type Mutation{
    addUser(input: UserInput): User!
    updateUser(id: ID!, input: UserInput): updateUserResponse!
    deleteUser(id: ID!): deleteUserResponse!
  }

  interface customResponse {
    code: Int!
    message: String!
  }

  type deleteUserResponse implements customResponse{
    code: Int!
    message: String!
  }

  type updateUserResponse implements customResponse{
    code: Int!
    message: String!
    user: User!
  }
`;

module.exports = userSchema;