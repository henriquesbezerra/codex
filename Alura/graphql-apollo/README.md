## graphql-apollo

API graphql com apollo server para uma escola de inglês.

### Parte 1: GraphQL: Construindo uma API com Apollo Server
- [x] O que é GraphQL e suas características
- [x] Tipos básicos
- [x] Instrospecção
- [x] Boas Práticas
- [x] CRUD de Usuário com Mutation e Query
- [x] Tipo Scalar Customizado
- [x] Tipo Interface

### Parte 2: GraphQL: Integração de dados e relacionamentos
- [x] Adicionar e integrar schemas
  - [x] schemas de turmas
- [x] Implementação de resolvers
- [x] CRUD GraphQL com Sqlite
- [ ] Diferentes fontes de dados
- [ ] Relacionar entidades pelo schema
- [ ] Otimizações

**O que é GraphQL?**
Graphql é uma especificação para criar e utilizar APIs que possuem sua própria linguagem de query.

O GraphQL busca resolver problemas do padrão REST como o over fetching (super requisição) caso
onde uma requisição retorna mais dados que o necessário e também como o under fetching (sub requisição), caso onde uma requisição
não trás dados suficientes, sendo necessário outras requisições. 

O GraphQL possibilita ao client requisitar os dados que ele realmente quer e mais nada, com isso temos ganhos em velocidade e ecônomia.

**Caracteristicas**
- Possui um ambiente que executa queries com base em dados enviados numa consulta GraphQL;
- Agnóstico com protocolos de comunicação;
- Schemas são baseados em como os dados são usado, não em como estão armazenados (Conceito chave);
- Otimiza relação entre frontend x backend;
  - Melhora a visualização e descoberta de dados possíveis de serem solicitados;
  - Único endpoint;
  - desenvolvimento mais ágil;

**Estrutura x Comportamento**
O GraphQL faz uma separação clara entre `estrutura e comportamento`.

A estrutura do GraphQL está no Schema, no qual especifica-se o que o servidor GrahpQL está estruturado para fazer, com seus tipos e objetos.

Essa estrutura precisa ser implementada de alguma forma para que possa funcionar. No GraphQL, isso se dá através do que chamamos de `funções resolver`, ou só `resolvers`. É nos resolvers que implementamos o `comportamento`. Cada campo em um schema GraphQL é implementado através de um resolver.

É aqui que entram ferramentas como [Apollo Server](https://www.apollographql.com/docs/apollo-server/). Elas servem para nos ajudar a implementar a especificação GraphQL em nossa aplicação.

**Tipos básicos do GraphQL**

O GraphQL tem sua própria linguagem, chamada de SDL, ou Schema Definition Languagem, linguagem de definição de schema. Isso por que é
possível implementar o GraphQL em conjunto com qualquer outra linguagem, então a SDL serve para fazer essa integração de forma `agnóstica`.

Para entender como essa linguagem funciona, sempre temos que ter em mente que o GraphQL trabalha com tipos, e saber quais são esses.

- **Scalar Types**: São tipos que refletem alguns dos tipos de dados que já conhecidos. Para o GraphQL, são os tipos que se resolvem em dados concreto (ao contrário de objetos, por exemplo, que são conjuntos de dados). São eles:
  - **Int** - Inteiro 32 bits;
  - **Float** - Ponto Flutuante;
  - **String** - Sequência de caracteres UTF-8;
  - **Boolean** - True ou False;
  - **ID** - Identificador único, usado normalmente para localizar dados. É possível criar tipos scalar customizados, estudaremos mais adiante neste curso.
- **Object Type**: Conjunto de dados com propriedades específicas:
  - Exemplo:  
  ```GraphQL
    type Livro{
      id: ID!
      titulo: String!
      autoria: String!
      paginas: Int!
      colecoes: [Colecao!]!
    }
  ```
  - As propriedades, também chamadas de campos, retornam outros dos tipos disponíveis no GraphQL. Podendo ser strings, inteiros, e até mesmo arrays compostos de outros objetos como no caso: ```colecoes: [Colecao!]!```.
  **Campos marcados com exclamação ```!``` são campos que não podem ser nulos.** Ou seja, qualquer query que envolva estes campos sempre devem ter algum valor do tipo esperado. No caso de ```colecoes: [Colecao!]!``` a exclamação após o fechamento do array indica que o campo ```colecoes```sempre vai receber um array, enquanto a exclamação em ```Colecao!``` significa que qualquer elemento do array sempre será um objeto ```Colecao```.
- **Query Type**: São os tipos que definem os pontos de entrada da API, os `Entry Points`. Eles indicam quais dados o cliente pode receber e de que forma. São como queries do tipo GET em REST, a diferença está na possibilidade do client montar as queries e receber apenas os dados que precisa.
  - Exemplo:
  ```GraphQL
    type Query{
      livros: [Livros!]!
      livro(id: ID): Livro!
    }    
  ```
  - No exemplo, é definido a query ```livros```, que retorna um array composto por objetos ```Livro```, e a query ```livro```, que recebe um parâmetro do tipo ```ÌD```  e retorna um único objeto ```Livro```.
  - Query é o ponto de entrada da API GraphQL, toda aplicação terá pelo menos uma Query no Schema.
- **Mutation Type** - Mutations são os tipos utilizados para adicionar, alterar e deletar dados, de forma similiar às operações de POST, PUT e DELETE nos CRUDs desenvolvidos em REST. Os tipos Query são obrigatórios em qualquer API GraphQL, porém Mutation são opcionais.
  - Exemplo:
  ```GraphQL
    type Mutation{
      adicionaLivro(titulo: String!, autoria: String!, paginas: Int, colecoes: Colecao!): Livro!
    }
  ```
  - No exemplo, temos uma Mutation chamada ```adicionaLivro``` que recebe por parâmetro os dados necessários.

- **Enumm**: é uma enumeração, um tipo de dado abstrato, cujos valores são atribuídos a exatamente um elemento de um conjunto finito de identificadores escolhidos pelo programador.
- **Input**: Tipo de dados para pré determinar os possíveis campos de entrada de dados numa Query ou Mutation.
- **Interface**: É um tipo abstrato, não utilizado diretamente no schema, mas usamos como base para criar outros tipos.
- **Union**: Tipo que faz união entre dois objetos.

## Introspecção ou Instrospection
Ferramenta do GraphQL que permite visualizar os tipos e queries disponíveis em uma API. É uma forma de fazer consultas que retornam informações sobre a própria API.

Por exemplo a consulta:
```
  __schema{
    types{
      name
    }
  }
```
Dá acesso a todos os types definidos na API, ou todos os tipos que estão disponíveis, como:
  - Scalars;
  - Object Types;
  - Tipos iniciados com ```__```, que são parte do sistema de introspecção.
Outro teste demonstrativo é verificar o ponto de entrada da API:
```
  __schema{
    queryType{
      name
    }
  }
```
Há ainda outros subcampos que podemos utilizar para extrair mais informções sobre os tipos disponíveis na API:
```
  __schema{
    types{
      name
      kind
      fields{
        name
      }
    }
  }
```
Podemos também procurar por um tipo específico, por exemplo "User", e obter informações mais detalhes sobre
o tipo. Veja a query abaixo:
```
  __type(name: "User"){
    kind
    name
  }
```

### Boa prática de segurança
É uma boa pratica que o playground e a instrospecção náo fiquem disponíveis na API em produção. Para
controlarmos essas disponibilidades podemos definir explicitamente na instância do ```ApolloServer```:
```javascript
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    instrospection: true, // or false
    playground: true // or false
  });
```

### Bases de dados
O GraphQL pode ser utilizado com qualquer base de dados e até mesmo várias ao mesmo tempo. Existe diversas `libs` para fazer a comunicação da API a determinadas bases de dados, além de módulos para uso com REST. Há também `libs` para utilizar outras fontes de dados que trabalham em conjunto as ferramentas do Apollo, por exemplo:
  - [SQL DataSource](https://github.com/cvburgess/SQLDataSource):para bancos SQL;
  - [Mongo DataSource](https://github.com/GraphQLGuide/apollo-datasource-mongodb/):para MongoDB;
  - [GraphQL DataSource](https://github.com/poetic/apollo-datasource-graphql):para utilizar outra API GraphQL como fonte de dados;

Um ótima opção para utilizar o GraphQL com SQL é a [Prisma](https://www.prisma.io/), um ORM para Postgress, MySQL, SQLite que se integra ao GraphQL.

Como referência para conhecer mais possibilidades podemos visitar esse [POST](https://www.apollographql.com/blog/backend/data-sources/a-deep-dive-on-apollo-data-sources/) no blog da própria Apollo.

**Packages utilizados**
- json-server: ^0.16.1
  > Simula uma API REST em segundo utilizando um arquivo json - https://www.npmjs.com/package/json-server
- nodemon: ^2.0.4
  > nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em node.js reiniciando automaticamente o aplicativo quando mudanças nos arquivos do diretório são detectadas. - https://www.npmjs.com/package/nodemon
- graphql: ^16.2.0
  > Implementação em javascript do GraphQL, uma linguagem de query para APIs criada pelo facebook - https://www.npmjs.com/package/graphql
- apollo-server: ^3.6.1
  > GraphQL Server mantido pela comunidade. Funciona com vários server frameworks para Node.js ou apenas com o express - https://www.npmjs.com/package/apollo-server
- sqlite3: ^4.1.1
  > *Banco de dados relacional que dispensa uso de servidor, armazenando os dados em documentos dentro de sua própria estrutura. - https://www.npmjs.com/package/sqlite3
- datasource-sql: ^1.6.0
  > *Implementação da biblioteca knex.js para uso fácil com datasource no apollo-server* - https://www.npmjs.com/package/datasource-sql

**Requisitos**
- NODE 14.10.1
- NPM 6.14.8
- GraphQL JS 15.3.0
- Apollo Server 2.17.0