const { resolve } = require('path');
const { ApolloServer } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const { mergeTypeDefs } = require('@graphql-tools/merge');

const UserDataSource = require('./user/User.datasource');
const UserSchema = require('./user/User.schema');
const UserResolvers = require('./user/User.resolvers');

const TurmaSchema = require('./Turma/Turma.schema');
const TurmaResolvers = require('./Turma/Turma.resolvers');
const TurmaDataSource = require('./Turma/Turma.datasource');

const db = require('./sqlite3/database');

const typeDefs = mergeTypeDefs([
  UserSchema,
  TurmaSchema
]);

const resolvers = [
  UserResolvers,
  TurmaResolvers
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
      turmasAPI: new TurmaDataSource(dbConfig)
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