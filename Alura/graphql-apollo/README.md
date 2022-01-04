## graphql-apollo

API graphql com apollo server para uma escola de inglês.

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

**Packages utilizados**
- json-server: ^0.16.1
  > Simula uma API REST em segundo utilizando um arquivo json - https://www.npmjs.com/package/json-server
- nodemon: ^2.0.4
  > nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em node.js reiniciando automaticamente o aplicativo quando mudanças nos arquivos do diretório são detectadas. - https://www.npmjs.com/package/nodemon
- graphql: ^16.2.0
  > Implementação em javascript do GraphQL, uma linguagem de query para APIs criada pelo facebook - https://www.npmjs.com/package/graphql
- apollo-server: ^3.6.1
  > GraphQL Server mantido pela comunidade. Funciona com vários server frameworks para Node.js ou apenas com o express - https://www.npmjs.com/package/apollo-server

**Requisitos**
- NODE 14.10.1
- NPM 6.14.8
- GraphQL JS 15.3.0
- Apollo Server 2.17.0