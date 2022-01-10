const { GraphQLScalarType } = require('graphql');

/**
 * 
 * Resolvers podem receber 4 parametros
 * 
 * root ou parent : trabalha com o resolver do nível anterior
 * args : argumentos passados do graphql para o resolver
 * context object: informa o contexto para o resolver trabalhar 
 *  como datasource, informacoes de autenticao, etc..
 * info: estrutura em árvore da Query Solicitada
 */

const userResolvers = {
  RolesType:{
    ESTUDANTE: "ESTUDANTE",
    DOCENTE: "DOCENTE",
    COORDENACAO: "COORDENACAO"
  },
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'string de data e hora no formato ISO-8601',
    serialize: (value) => value.toISOString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value)
  }),
  Query:{
    users: (root, args, { dataSources }, info ) =>{
      return dataSources.usersAPI.getUsers();
    },
    user: (root, args, { dataSources }, info ) =>{
      return dataSources.usersAPI.getUserById(args.id);
    },
  },
  Mutation: {
    addUser: (root, args, { dataSources }, info) =>{
      return dataSources.usersAPI.addUser(args);
    },
    updateUser: (root, args, {dataSources}, info)=>{
      return dataSources.usersAPI.updateUser(args);
    },
    deleteUser: (root, args, {dataSources}, info)=>{
      return dataSources.usersAPI.deleteUser(args.id);
    },
  },
  User: {
    matriculas: (root, args, { dataSources }, info) =>{
      return dataSources.matriculasAPI.getMatriculasByUser.load(root.id);
    },
    role: (root, args, { dataSources }, info) =>{
      return dataSources.usersAPI.getRoleById(root.role);
    },
  }
};


module.exports = userResolvers;