Projeto do curso: Rest com NodeJS: API com Express e MySQL.

Projeto prático de uma API simples em nodejs utilizando express, nodemon e mysql para persistência dos dados. A API possibilita o registro de atendimentos para diversos tipos de segmentos de negócios que necessitem de um
agendamento para atendimento de clientes.

Estrutura do projeto

- infra - arquivos relacionados a configurações de dependências base da api;
- controllers - arquivos responsavéis em receber as requisições e redirecionar os dados
para os models;
- models - responsaveis por salvar os dados no BD e fazer validações de regras de negócio;

Features
-


Bibliotecas utilizadas

- Express - É um framework web minimalista para criação de servidores HTTP;
- Nodemon - Ferramenta para desenvolvimento de aplicações baseadas em node que reinicia automáticamente a aplicação sempre uma mudança em arquivos ou diretórios forem detectadas;
- Consign - Pode ser utilizado para autoload de models, routes, schemas, configs, controlers, object maps, etc.
- mysql - driver nodejs para o mysql escrito em javascript.
