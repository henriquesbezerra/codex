### GraphQL: Criação de APIs com Prisma e Nexus

API GraphQL para um blog feita com MySQL + Prisma 2 + Nexus

Repositório de configuração inicial fornecido pela equipe Alura: [2036-graphql-prisma2](https://github.com/alura-cursos/2036-graphql-prisma2)


**Roadmap**
- [x] Configuração inicial do Prisma utilizando instrospecção
- [x] Sintaxe Prisma Data Model
- [x] Criando migrations com o Prisma
- [x] Utilização do Prisma Studio 
- [x] Prisma Client e os métodos ORM com Fluent Interface
- [x] Abordagem Code-First vs SDL-First
- [x] Integrar Prisma, Nexus e ApolloServer
- [x] ExperimentalCRUD
- [x] Filtros e Ordenação

**Anotações**

1 - **Iniciando no prisma:**
  É possível iniciar um projeto no prisma através de duas maneiras, na primeira maneira possível, a API é criada apartir dos dados de um BD já existente, essa maneira é chamada de a instropecção (Esse formato é recomando apenas no momento em que o banco de dados ainda se encontra em estágio inicial, quando não há muitas tabelas/relacionamentos). A segunda forma é usando o pattern de migrations, que o Prisma irá utilizar para criar as tabelas e arquivos iniciais da API.

  Iniciamos a configuração inicial com o comando
  ```bash
    npx prisma init
  ```

  Quando queremos utilizar o introspect para iniciar nossa api usamos o comando abaixo, após configurar o banco
  ```bash
    # Esse comando foi depreciado
    $ npx prisma introspect

    # O comando utilizado é
    $ npx prisma db pull
  ```

2 - **Criando Migrations:**

  - Geramos os arquivos de migrations
  ```bash
    # Comando mostrado no curso, depreciado
    $ npx prisma migrate save --experimental

    # Comando utilizado, o comando apagou o bd para sincronizar as migrations com o schema
    $ npx prisma migrate dev --name create-review --create-only
  ```
 - Rodamos as migrations informando o ambiente que iremos executar
  ```bash
    $ npx prisma migrate dev
  ```

3 - **Prisma Studio:** Ferramenta para visualizar os dados do banco, já vem junto do prisma, basta executarmos
  ```bash
    $ npx prisma studio
  ```

4 - **Alteração no Schema e migrations:** Quando modificamos o schema para refeletir em novos campos nas tabelas precisamos rodar os camandos prisma migrate para sincronizar as alterações
  ```bash
    $ npx prisma migrate dev
  ```

5 - **Métodos ORM:** Métodos que preparam queries sql para alteração de dados no banco. O Prisma gera esses métodos através do Data Model, como create, delete e update. Para trabalhar com esses método usamos a lib @prisma/client, importamos o módulo e instanciamos um novo objeto de Prisma client no entry point da aplicação

6 - **Fluent Interface:** Padrão de desenvolvimento que permite encadeamento/concatenação de métodos para tornar a leitura e o uso da API mais legível e fluído, cada método retorna um objeto necessário para o próximo método concatenado continuar o processo. Existe todo um padrão por trás da interface fluente que podemos conferir direto com seu criador, [Martin Fowler](https://martinfowler.com/bliki/FluentInterface.html)
Mais informações de como utilizar esse padrão no Prisma, [vemos aqui na documentação](https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries#fluent-api)


7 - **Abordagem Code-First:** Quanto utilizamos código para gerar o schema ao invés da SDL (Schema Definition Language), exemplo criando uma query:
```javascript
  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: "Query",
      fields:{
        users:{
          type: queryType,
          resolve: () => {} // Nesse formato o resolver é definido junto ao schema
        }
      }
    })
  })
```

Nesse formato temos um código um pouco mais verboso, porém conseguimos aproveitar melhor as funcionalidades do Prisma Client. Para facilitar e potencializar o uso desse formato usamos a lib Nexus (```@nexus/schema```, ```nexus-plugin-prisma```) que trabalha junto ao Prisma.



**Observações**
1 - Configuração .env para o Prisma: Quando passamos senhas com caractereces especiais para a string ```DATABASE_URL``` precisamos converter esses caracteres para a ```codificação URL```, que é utilizada para transmitir caracteres especiais em URLs/URIs. Por exemplo:
```
  | Caractere | URL-Enconded |
  |  @        |  %40         |
  |  #        |  %23         |
  |  $        |  %24         |
  |  %        |  %25         |
  |  &        |  %26         |
```

Supondo o exemplo de uma senha ```Pass@World```, o resultado convertido seria: ```Pass%40World```.

Para facilitar esse trabalhamos podemos utilizar [esse conversor online](https://www.url-encode-decode.com) e para conhecermos a lista completa dos caracteres podemos acessar [essa página da w3c](https://www.w3schools.com/tags/ref_urlencode.ASP).

2 - Quando instalamos o ```@prisma/client```, é executado automaticamento o comando ```npx prisma generate```. Que já faz a instalação e gera os métodos no mesmo momento. 

Quando fizermos alterações posteriores nos modelos do Prisma Data Model, precisaremos rodas o comando ```npx prisma generate``` para atualizar o Prisma client com os novos métodos que seráo gerado.

Mais detalhes em [generating-prisma-client](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client)



**Packages utilizados**

- nodemon: ^2.0.6
  > nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em node.js reiniciando automaticamente o aplicativo quando mudanças nos arquivos do diretório são detectadas. - https://www.npmjs.com/package/nodemon
- graphql: ^15.4.0
  > Implementação em javascript do GraphQL, uma linguagem de query para APIs criada pelo facebook - https://www.npmjs.com/package/graphql
- apollo-server: ^2.19.0
  > GraphQL Server mantido pela comunidade. Funciona com vários server frameworks para Node.js ou apenas com o express - https://www.npmjs.com/package/apollo-server
- mysql2: ^2.2.5
    > *Cliente MySQL para Node.js com foco no desempenho. Suporta declarações preparadas, codificações não-utf8, protocolo de registo binário, compressão, ssl* - https://www.npmjs.com/package/mysql2
- prisma
- nexus