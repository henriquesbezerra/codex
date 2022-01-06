const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const UsersAPI = require('./user/datasource/user');
const userSchema = require('./user/schema/user');
const userResolvers = require('./user/resolvers/users.resolvers');

const typeDefs = [
  userSchema,
];

const resolvers = [
  userResolvers
];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: ()=>{
    return {
      usersAPI: new UsersAPI()
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