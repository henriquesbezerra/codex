const { GraphQLScalarType } = require('graphql');

const turmaResolvers = {
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'string de data e hora no formato ISO-8601',
    serialize: (value) => value.toISOString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value)
  }),
  Query: {
    turmas: (root, args, { dataSources }, info) =>{
      console.log(`1231312312`,args);
      return dataSources.turmasAPI.getTurmas(args);
    },
    getTurma: (root, args, { dataSources }, info) =>{
      return dataSources.turmasAPI.getTurma(args.id);
    }
  },
  Mutation:{
    addTurma: (root, args, { dataSources }, info) =>{
      return dataSources.turmasAPI.addTurma(args.input);
    },
    updateTurma: (root, args, { dataSources }, info) =>{
      return dataSources.turmasAPI.updateTurma(args.id, args.input);
    },
    deleteTurma: (root, args, { dataSources }, info) =>{
      return dataSources.turmasAPI.deleteTurma(args.id);
    }
  },
  Turma:{
    matriculas: (root, args, { dataSources }, info) =>{
      return dataSources.matriculasAPI.getMatriculasByTurma(root.id);
    },
    docente:  (root, args, { dataSources }, info) =>{
      return dataSources.usersAPI.getUserById(root.docente_id);
    },
  }
};

module.exports = turmaResolvers;