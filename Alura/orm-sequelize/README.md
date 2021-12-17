## orm-sequilse

*Readme em construção......*

API para um cursinho de inglês fictício que utiliza o ORM Sequelize que abstrai
consultas SQL no banco de dados para métodos Javascript, assim aumentando a produtividade
e facilidade de desenvolvimento.

**Modelo de dados v1:**

![Modelo dados projecto orm-sequeliza](https://github.com/henriquesbezerra/codex/blob/master/Alura/orm-sequelize/assets/DERv1.png?raw=true)

**Roadmap:**

#### Parte 1: ORM com NodeJS: API com Sequelize e MySQL ORM com NodeJS: API com Sequelize e MySQL
- [x] Criar API do zero com Sequelize;
- [x] Como o ORM funciona junto a um banco SQL;
- [x] Organizar projeto no padrão MVC;
- [x] CRUD com Sequilize;
  - [x] Pessoas
  - [x] Turmas

#### Parte 2: ORM com NodeJS: Avançando nas funcionalidades do Sequelize
- [] Ferramentas do Sequelize
- [] Atender necessidades específicas de um projeto
- [] Integridades no banco de dados
- [] Organização do padrão do projeto para escalabilidade do projeto
- [x] Migrations de alteração para incluir coluna deletedAt
- [x] Implementação soft deletes
  - [x] Método restore e nova rota para restaurar registros deletados com soft delete
  - O sequelize possibilita o soft delete através da configuração 'paranoid' que podemos habilitar
    nas Models, assim todo remoção través do método destroy() irá fazer um update numa coluna deletedAt na tabela.
  - Sequelize DOC Reference: https://sequelize.org/master/manual/paranoid.html
- [x] Escopos de models
  - São restrições e/ou definições que são utilizadas em queries, que podem ser reaproveitadas na aplicação
  - [x] escopo padrão
  - [x] sobreescrita de escopo
  - Sequelize DOC Reference: https://sequelize.org/master/manual/scopes.html
- [x] Escopos de associação & Mixins
  - Sequelize DOC Reference: https://sequelize.org/master/manual/association-scopes.html
- [x] Validação de dados pela model
  - Sequelize DOC Reference: https://sequelize.org/master/manual/validations-and-constraints.html
- [x] Busca de turmas abertas por intervalo de data
  - [x] Query Strings
  - [x] Operadores SQL
    - Sequelize DOC Reference: https://sequelize.org/master/manual/model-querying-basics.html#operators
- [x] Filtrar e Enumerar registros com métodos finders, Agrupamento de registros com group, passar sql para dentro do sequelize com Sequelize.literal
- [ ] O cancelamento de cadastro de um estudante deverá cancelar todas as suas matriculas
  - Sequelize DOC Reference: https://sequelize.org/master/manual/transactions

<br/>



**Packages utilizados**

- express: ^4.17.1
  > *O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.* - https://expressjs.com/pt-br/
- body-parser: ^1.19.0
  > *Middleware para NodeJS que transforma o corpo de uma requisição antes de podermos manipular em nosso código* - https://www.npmjs.com/package/body-parser
- mysql2: ^2.3.3
  > *Cliente MySQL para Node.js com foco no desempenho. Suporta declarações preparadas, codificações não-utf8, protocolo de registo binário, compressão, ssl* - https://www.npmjs.com/package/mysql2
- sequelize: ^6.9.0
  > *O Sequelize é um ORM baseado em Promisses para Postgres, MySQL, MariaDB, SQLite e Microsoft SQL Server. Apresenta um sólido suporte para transacções, relacionamentos, Lazy e Eager Loading, replicação de leitura e muito mais.* - https://sequelize.org/
- sequelize-cli: ^6.3.0
  > Ferramenta de linha de comando para utilizar recursos do sequelize, para fazer conexao com o banco, criacao de modelos e etc..
- config: ^3.3.6
  > *O Node-config organiza configurações hierárquicas para a implementações de aplicações. Permite definir um conjunto de parâmetros padrão, e estende-los para diferentes ambientes de implementação (development, qa, staging, production, etc.).* - https://www.npmjs.com/package/config
- path: 0.12.7
  > Módulo que provê funções uteis e praticas para trabalhar com arquivos e diretórios.
- dotenv: ^10.0.0
  > *Dotenv é um módulo con zero dependências que carrega variáveis de ambiente de um arquivo .env para process.env. A configuração de armazenamento no ambiente separada do código é baseada na metodologia da 'The Twelve-Factor App'.* - https://www.npmjs.com/package/dotenv
- nodemon: ^2.0.15
  > nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em node.js reiniciando automaticamente o aplicativo quando mudanças nos arquivos do diretório são detectadas.

<br />

**Maiores detalhes sobre constraints**
<details>
  <p>
    Constraints são regras restringem os dados nas tabelas; elas limitam os tipos de dados que podem ser inseridos em uma tabela/coluna e garante a integridade e confiabilidade dos dados que estão no banco de dados. Eles podem ser aplicados tanto em colunas individuais como de forma geral para toda a tabela.
  </p>

  <p>
    Se difere das validações em javascript, por que na verificação de constraints é executada uma query, e quem devolve o erro para o JavaScript é o SQL.
  </p>

  <p>
    São constraints em SQL:
  </p>

  - NOT NULL - garante que não exista nenhum valor NULL na coluna;
  - UNIQUE - Garante que não existam valores iguais em uma coluna;
  - PRIMARY KEY - Identifica cada linha em uma tabela através de um valor único (junção de NOT NULL e UNIQUE);
  - FOREIGN KEY - Identifica um valor único em outra tabela como chave;
  - CHECK - Garante que todos os valores em uma coluna satisfazem uma condição específica;
  - DEFAULT - Determina um valor padrão caso nenhum valor seja informado;
  - INDEX - Para criar índices e facilitar o acesso a determinados conjuntos de dados.

</details>

<br/>
**Maiores detalhes sobre Mixins**
<details>
  <p>
    Mixins são classes que contêm métodos que podem ser utilizados por outras classes, sem a necessidade de herança direta.
  </p>

  <p>
    No Sequelize, temos uma diferença entre escopos de modelo, que são aplicados em chamadas estáticas ao modelo, e escopos de associação, que são uma regra, ou um conjunto de atributos que são automaticamente aplicados em instâncias do modelo, como em Pessoas.associate = function(models) {...}.
  </p>

  <p>
    Escopos de associação se comportam da mesma forma que os escopos de modelo, no sentido que ambos aplicam palavras-chave como WHERE em chamadas ao banco; mas os mixins são métodos que existem somente nas instâncias dos modelos: Pessoas.getMatriculasConfirmadas, Niveis.getNiveisPorTurma, etc.
  </p>

  <p>
    A lista de métodos criados automaticamente com as instâncias de modelo são:
  </p>

  - addModel()
  - addModels()
  - countModels()
  - createModel()
  - getModels()
  - hasModel()
  - hasModels()
  - removeModel()
  - removeModels()
  - setModels()

  <p>
    Lembrando que “Model” e “Models”, aqui, refere-se ao nome do modelo! Lembre-se também que o Sequelize cria os nomes automaticamente mas não entende muito bem o singular e plural em português, mas você pode definir nomes personalizados para seus mixins, utilizando a propriedade ```as```.
  </p>
</details>


<br/>

### Commands

1. Comando da cli do sequilize que faz configurações inicias dentro do projeto, criando as pastas config, migrations, models e seeders
```
yarn sequelize-cli init
```

2. Cria o model<sup>1</sup> e a migration<sup>2</sup> de uma tabela
```
yarn sequelize-cli model:create --name Pessoas --attributes name:string,email:string,ativo:boolean,role:string
```

3. Criação da tabelas no banco através das migrations
```
yarn sequelize-cli db:migrate
```

4. Desfazer ultima migração feita
```
yarn sequelize-cli db:migrate:undo
```

5. Desfazer uma migração específica
```
yarn sequelize-cli db:migrate:undo --name [data-hora]-create-[nome-da-tabela].js
```

6. Criando arquivo de Seeder
```
yarn sequelize-cli seed:generate --name demo-pessoas
```

7. Executa os seeders para criar os dados demo no banco de dados
```
yarn sequelize-cli db:seed:all
```

8. Desfazendo última seed feita
```
yarn sequelize-cli db:seed:undo
```

9. Desfazer uma seed específica
```
yarn sequelize-cli ddb:seed:undo --seed nome-do-arquivo
```

10. Desfazer todos os seed
```
yarn sequelize-cli db:seed:undo:all
```

11. Criar novas migrations
```
yarn sequelize-cli migration:generate --name alter-matriculas
```

<br/>

> <sup>2</sup> Migrations em ORM, se tratam de arquivos que que são utilizados para mapear alterações incrementais e rastreáveis no banco de dados, que podem ser revertidas quando necessário. Além disso possibilita coordenar alterações feitas por diferentes pessoas nas tabelas do banco.


<br/>

> *Projeto prático feito no curso NodeJS: Crie uma API REST padronizada e escalável da plataforma de ensino Alura.*
