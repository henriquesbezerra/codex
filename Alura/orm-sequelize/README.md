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
- [] Implementação soft deletes
  - O sequelize possibilita o soft delete através da configuração 'paranoid' que podemos habilitar
    nas Models, assim todo remoção través do método destroy() irá fazer um update numa coluna deletedAt na tabela.
- [] Busca de turmas abertas por intervalo de data
- [] O cancelamento de cadastro de um estudante deverá cancelar todas as suas matriculas

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
