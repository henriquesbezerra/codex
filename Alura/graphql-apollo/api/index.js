const { resolve } = require('path');
const { ApolloServer } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const { mergeTypeDefs } = require('@graphql-tools/merge');

const CommonSchemas = require('./CommonSchemas');

const { UserSchema, UserDataSource, UserResolver }= require('./User');
const { TurmaSchema, TurmaResolver, TurmaDataSource }= require('./Turma');
const { MatriculaSchema, MatriculaDataSource, MatriculaResolver } = require('./Matricula');

const db = require('./sqlite3/database');

const typeDefs = mergeTypeDefs([
  CommonSchemas,
  UserSchema,
  TurmaSchema,
  MatriculaSchema
]);

const resolvers = [
  UserResolver,
  TurmaResolver,
  MatriculaResolver
];

const dbConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: resolve('', 'db.sqlite')
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: ()=>{
    return {
      usersAPI: new UserDataSource(),
      turmasAPI: new TurmaDataSource(dbConfig),
      matriculasAPI: new MatriculaDataSource(dbConfig)
    }
  },
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      // options
      endpoint: 'playground'
    })
  ]
});

server.listen().then(({url})=>{
  console.log(`Server on: ${url}`);
});