### GraphQL: Criação de APIs com Prisma e Nexus

API GraphQL para um blog feita com MySQL + Prisma 2 + Nexus

Repositório de configuração inicial fornecido pela equipe Alura: [2036-graphql-prisma2](https://github.com/alura-cursos/2036-graphql-prisma2)


**Roadmap**
- [ ]  

**Anotações**

1 - Iniciando no prisma:
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


**Packages utilizados**

- nodemon: ^2.0.6
  > nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em node.js reiniciando automaticamente o aplicativo quando mudanças nos arquivos do diretório são detectadas. - https://www.npmjs.com/package/nodemon
- graphql: ^15.4.0
  > Implementação em javascript do GraphQL, uma linguagem de query para APIs criada pelo facebook - https://www.npmjs.com/package/graphql
- apollo-server: ^2.19.0
  > GraphQL Server mantido pela comunidade. Funciona com vários server frameworks para Node.js ou apenas com o express - https://www.npmjs.com/package/apollo-server
- mysql2: ^2.2.5
    > *Cliente MySQL para Node.js com foco no desempenho. Suporta declarações preparadas, codificações não-utf8, protocolo de registo binário, compressão, ssl* - https://www.npmjs.com/package/mysql2