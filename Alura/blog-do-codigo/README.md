# Blog do código

API de um blog simples para uso no curso `Node.js e JWT: autenticação com tokens`,
esse repositório utiliza como base o projeto criado pelo time da Alura para o curso 
e pode ser encontrado no repositório: https://github.com/alura-cursos/blog-do-codigo

### Parte 1: Node.js e JWT: Autenticação com tokens
- [x] Funções de hashing (ou funções de espalhamento)
  - [x] o problema em senhas hash com md5 e sha-256
    - [x] Ataque Rainbow Table
  - [x] Criação de senhas hash com bcrypt
    - [x] Ataque DoS
- [x] Login por sessões
- [x] Autenticação sem sessões com tokens
- [x] JSON Web Token
- [x] Informações sensiveis em variáveis de ambiente
- [x] Tratando erros de autenticacao
- [x] Logout em autenticação com tokens
- [x] Expirando tokens
- [x] Uso de Redis para blacklist de tokens de logout com validade vigente

### Parte 2: Refresh Tokens e confirmação de cadastro
- [x] Estratégia de logout em api com tokens - [saiba mais](https://github.com/henriquesbezerra/codex/blob/master/Alura/blog-do-codigo/about-token-usage.md)
- [x] Envio de emails para desenvolvimento e para produção
- [x] Verificação de emails no cadastro
- [x] Atualização de tokens de autenticação expirados (refresh token)


### Parte 3: Controle de acesso e autorização com RBAC
- [x] Controle de acesso baseado em cargos
- [x] Política de controle de acesso
- [x] Template Methods
- [x] Serialização
- [x] Refatoração e boas práticas  

***Mais sobre Funções hashing***
<details>
  <p>
    Existe diversas opções de funções de hashing, vamos ver por exemplo o MD5 e SHA-256, porém essas duas funções possuem um problema por serem muito rápidas, um atacante(hacker) tem a possibilidade de gerar ~50milhões de hashes/s com essas funções de hash, então ele pode fazer uma tabela com senhas e o valor hash da senha, ele irá pegar uma lista de senhas mais comuns liberadas todo ano pela internet e para cada uma dessas senhas ele faz uma permutação nos caracteres, e com isso consegue expandir a lista com outras possíveis senhas e gerar uma tabela com maiores possibilidades de desvendar a senha de usuários de uma base de dados, daí pegando uma base de dados de usuários furtada que tem as senhas hash salvas, ele poderá através de comparação de hashs, descobrir qual a senha gerou a senha hash. Além desse método o atacante pode utilizar uma estrutura de dados avançada chamada 'rainbow table', onde é possível guardas as mesmas informações da senha e da senha hash gerada ocupando menos espaço, esse é um tipo de ataque muito comum que podem fazer nossas senhas serem expostas e é conhecido como 'Rainbow Table Attack'. 
  </p>
  <p>
    Para previnir esse tipo de ataque fazemos uma modicação na função hash para receber 'string pseudo-aleatória de uso único' ou SALT, assim essa função de hash modificada vai receber a senha e o SALT e vai combinar os dois na geração da senha hash. Com isso o atacante teria que fazer para cada possível SALT uma tabela, o que torna inviável o rainbow table attack, porém isso ainda não torna impossível a descoberta da senha caso o atacante tenha acesso ao banco de dados, ainda é possível, apesar de muito lento, utilizar o método anterior para gerar possíveis senhas para aplicar o hash.
  </p>
  <p>
    A Solução desse problema é utilizar uma outra função de hash, mais específica para esse caso que irá que além de receber a senha, irá receber um valor de custo que determina o quão lento a função irá demorar para executar, assim é possível controlar a velocidade de execução do algoritmo com base no poder computacional da época, pois quanto mais o custo, mais essa função irá demorar para executar e conforme o tempo passa e o poder de processamento evolui, será necessário apenas aumentar o valor do custo que a aplicação se manterá segura. No projeto vamos utilizar uma função de hash (BCRYPT.HASH) em que o SALT é gerado automáticamente, nos livrando dessa preocupação.
  </p>
</details>


<br />

**Packages utilizados**

- express: ^4.17.1
  > *O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.* - https://expressjs.com/pt-br/
- body-parser: ^1.19.0
  > *Middleware para NodeJS que transforma o corpo de uma requisição antes de podermos manipular em nosso código* - https://www.npmjs.com/package/body-parser
- sqlite3: ^4.1.1
  > *Banco de dados relacional que dispensa uso de servidor, armazenando os dados em documentos dentro de sua própria estrutura. - https://www.npmjs.com/package/sqlite3
- nodemon: ^2.0.15
  > nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em node.js reiniciando automaticamente o aplicativo quando mudanças nos arquivos do diretório são detectadas.
- bcrypt: ^3.0.8"
  > bcrypt é uma função de hashing de senhas. - https://www.npmjs.com/package/bcrypt
- passport: ^0.5.2
  > Middleware de autenticação compativel com o Express, que tem o propósito de prover autenticação para requisições - https://www.npmjs.com/package/passport
- passport-local: ^1.0.0
  > Estratégia de autenticação para o Passport que utiliza um usuário e senha - https://www.npmjs.com/package/passport-local
- passport-http-bearer: ^1.0.1
  > Estratégoa de autenticação HTTP para o bearer token. Possibilita autenticação em requisições HTTP utilizando Bearer Tokens em aplicações Node.js, como especificado pelo RFC 6750. - https://www.npmjs.com/package/passport-http-bearer
- jsonwebtoken: ^8.5.1
  > Implementação de [Json Web Token](https://datatracker.ietf.org/doc/html/rfc7519)- https://www.npmjs.com/package/jsonwebtoken
- dotenv: ^10.0.0
  > *Dotenv é um módulo con zero dependências que carrega variáveis de ambiente de um arquivo .env para process.env. A configuração de armazenamento no ambiente separada do código é baseada na metodologia da 'The Twelve-Factor App'.* - https://www.npmjs.com/package/dotenv
- redis: 3.0.2
  > *Cliente Redis de alta performance para node.js.* - https://www.npmjs.com/package/redis
- nodemailer: 6.4.8
  > *Lib para envio de emails.* Send e-mails from Node.js – easy as cake! 🍰✉️ - https://www.npmjs.com/package/nodemailer
- accesscontrol: ^2.2.1
  > *Controle de acesso* baseado em cargos para Node.js - https://www.npmjs.com/package/accesscontrol
  
  
***Necessita Node.js v12.22.4***