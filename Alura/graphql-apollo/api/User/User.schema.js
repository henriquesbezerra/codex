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
    matriculas: [Matricula]
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
    users(paginator: Paginator): [User!]!
    user(id: ID!): User!
  }

  type Mutation{
    addUser(input: UserInput): User!
    updateUser(id: ID!, input: UserInput): UpdateUserResponse!
    deleteUser(id: ID!): DefaultResponse!
  }

  
`;

module.exports = userSchema;