const path = require('path');
const { objectType, queryType, makeSchema, mutationType, nonNull, stringArg } = require('@nexus/schema');
const { nexusPrisma } = require('nexus-plugin-prisma');
const { prisma } = require('@prisma/client');



// model Users {
//   id        Int      @id @default(autoincrement())
//   nome      String   @db.VarChar(255)
//   email     String   @db.VarChar(255)
//   createdAt DateTime @default(now()) @db.Timestamp(0)
//   posts     Post[]
//   reviews   Review[]

//   @@map("users")
// }

// Sem usar o prisma
// const UserNexus = objectType({  
//   name: "User",  
//   definition(t){
//     t.int("id")
//     t.string("nome")
//     t.string("email")
//     t.field("createdAt", {
//       type: DateTime
//     })
//   }
// });

// Usando o prisma
const User = objectType({  
  name: "User",  
  definition(t){
    t.model.id();
    t.model.nome();
    t.model.createdAt();
    t.model.posts();
  }
});

const Post = objectType({  
  name: "Post",  
  definition(t){
    t.model.id();
    t.model.titulo();
    t.model.conteudo();
    t.model.publicado();
    t.model.autor();
    t.model.createdAt();
  }
});

const Review = objectType({  
  name: "Review",  
  definition(t){
    t.model.id();
    t.model.post();
    t.model.reviewer();
    t.model.nota();
    t.model.createdAt();
  }
});

const Query = queryType({
  name: "Query",
  definition(t){
    t.crud.users({
      filtering: true,
      ordering: true
    });
    t.crud.user();
    t.crud.reviews();
    t.list.field("postsAprovados", {
      type: "Post",
      resolve: (root, args, { prisma } ) => {
        return prisma.post.findMany({
          where:{
            publicado: true
          },
          orderBy:{
            createdAt: 'desc'
          }
        });
      }
    });

    t.list.field("buscaAutoresPublicados", {
      type: "User",
      args:{
        email: nonNull(stringArg())
      },
      resolve: (root, args, { prisma } ) => {
        return prisma.user.findMany({
          where:{
            email: {
              contains: args.email
            },
            posts: {
              some:{
                publicado: true
              }
            }
          },
          orderBy:{
            createdAt: 'desc'
          }
        });
      }
    });

    // t.list.field("users", {
    //   type: "User",
    //   resolve: (root, args, { prisma }, info) => {
    //     // O Context é uma instancia do prisma cliente
    //     return prisma.user.findMany()
    //   }
    // })
  }
});

const Mutatiton = mutationType({
  name: "Mutation",
  definition(t){
    t.crud.createOnePost();
    t.crud.createOneUser();
    t.crud.createOneReview();
  }
});

const schema = makeSchema({
  types: [ User, Post, Review, Query, Mutatiton ],
  plugins: [ nexusPrisma({ experimentalCRUD: true }) ],
  outputs: {
    schema: path.join(__dirname, 'schema.graphql'),
    typegen: path.join(__dirname, '../prisma/generated', 'nexus.ts')
  }
})

module.exports = schema;