const { gql } = require('apollo-server');

const turmaSchema = gql`
scalar DateTime

  type Turma{
    id: ID!
    descricao: String!
    horario: String
    vagas: Int
    inicio: DateTime
    docente: User!
  }

  input TurmaInput{
    descricao: String
    horario: String
    vagas: Int
    inicio: DateTime
    docente_id: Int
  }

  type Query{
    turmas: [Turma]
    turma(id: ID!): Turma
  }

  type Mutation{
    addTurma(input: TurmaInput): Turma!
    updateTurma(id: ID!, input: TurmaInput): Turma!
    deleteTurma(id: ID!): deleteResponse!    
  }
`;

module.exports = turmaSchema;