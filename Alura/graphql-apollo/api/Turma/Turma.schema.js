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
    createdAt: DateTime!
    matriculas: [Matricula]
  }

  input TurmaInput{
    descricao: String
    horario: String
    vagas: Int
    inicio: DateTime
    docente_id: Int
  }

  type Query{
    turmas(paginator: Paginator): [Turma]
    getTurma(id: ID!): Turma
  }

  type Mutation{
    addTurma(input: TurmaInput): Turma!
    updateTurma(id: ID!, input: TurmaInput): Turma!
    deleteTurma(id: ID!): DefaultResponse!    
  }
`;

module.exports = turmaSchema;