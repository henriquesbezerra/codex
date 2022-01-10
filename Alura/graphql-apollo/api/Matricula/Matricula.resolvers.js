const { GraphQLScalarType } = require('graphql');

module.exports = {
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'string de data e hora no formato ISO-8601',
    serialize: (value) => value.toISOString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value)
  }),
  // Query: {
  //   turmas: (root, args, { dataSources }, info) =>{
  //     return dataSources.turmasAPI.getTurmas();
  //   },
  //   turma: (root, args, { dataSources }, info) =>{
  //     return dataSources.turmasAPI.getTurma(args.id);
  //   }
  // },
  Mutation:{
    addMatricula: (root, args, { dataSources }, info) =>{
      return dataSources.matriculasAPI.addMatricula(args);
    },
    deleteMatricula: (root, args, { dataSources }, info) =>{
      return dataSources.matriculasAPI.deleteMatricula(args.id);
    },
    cancelaMatricula: (root, args, { dataSources }, info) =>{
      return dataSources.matriculasAPI.cancelaMatricula(args.id);
    }
  },
  Matricula: {
    estudante: (root, args, { dataSources }, info) =>{
      return dataSources.usersAPI.getUserById(root.estudante_id);
    },
    turma: (root, args, { dataSources }, info) =>{  
      return dataSources.turmasAPI.turmasLoader.load(root.turma_id);
    },
  }
};
