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
    updateUser(id: ID!, input: UserInput): User!
    deleteUser(id: ID!): ID!
  }
`;

module.exports = userSchema;