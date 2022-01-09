const { gql } = require('apollo-server');

const matriculaSchema = gql`
scalar DateTime

  type Matricula{
    id: ID!
    estudante: User!
    turma: Turma!
    createdAt: DateTime
    status: String!
  } 

  type Mutation{
    addMatricula(estudante: ID!, turma: ID!): DefaultResponse!
  }
`;

module.exports = matriculaSchema;