const { ApolloServer, gql } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const schema = require('./schema');

// Instanciamos o prisma client
const prisma = new PrismaClient({
  log: ['query']
});

// const typeDefs = gql`
//   scalar DateTime

//  type User {
//   id: Int
//   nome: String
//   email: String 
//   createdAt: DateTime
//   posts: [Post]
//  }

//  type Post{
//    id: Int
//    titulo: String
//    conteudo: String
//  }

//  type Query {
//    users: [User]
//    postsByUser(id: Int): [Post]
//    postsByReviwer(id: Int): [Post]
//  }

//  input UserInput{
//    nome: String
//    email: String
//  }

//  input PostInput{
//    titulo: String
//    conteudo: String
//  }

//  type Mutation{
//    addUserAndPost(user: UserInput, post: PostInput): User
//  }

// `;

// const resolvers = {
//  Query: {
//    users: async () => await prisma.users.findMany({
//      include: {
//        posts: true
//      }
//    }),

//    postsByUser: async (root, args) =>{
//      return await prisma.users.findUnique({
//        where:{
//          id: Number(args.id)
//        }
//      }).posts()
//    },

//    postsByReviwer: async (root, args) =>{
//     return await prisma.review.findUnique({
//       where:{
//         id: Number(args.id)
//       }
//     })
//     .reviewer()
//     .posts()
//   }
//  },
//  Mutation: {
//   addUserAndPost: async (_, args) => {
//     const newUser = await prisma.users.create({
//       data: {
//         ...args.user,
//         posts: {
//           create:{
//             ...args.post
//           }
//         }
//       }
//     });
//     return newUser;
//   }
//  }
// }

const server = new ApolloServer({ 
  // typeDefs, 
  // resolvers, 
  schema,
  context: {
    prisma // colocamos a instancia do prisma client como contexto do apollo
  }
  // dessa maneira teremos acesso a todos os métodos do prisma nos nossos resolvers
});

server.listen({ port: 4000 }, () => console.log(`Servidor pronto em localhost:4000`)) 