// Carrega as variáveis de ambiente
require('dotenv/config');

// Importação do módulo express
const express = require("express");
const ResponseErrors = require('./errors/ResponseErrors');

// Importação do router de forncedores
const router_fornecedores = require('./rotas/fornecedores');

// Importação do router de produtos
// const router_produtos = require('./rotas/produtos');

// Instânciação do módulo express na variável app
const app = express();

/*
  Configuração do formato JSON como padrão de dados que será transacionado
  pela nossa instância do express, seguindo a convençào para API Rest.
*/
app.use(express.json());


/**
 * Middleware para validação do formato requisitado
 * pelas requisições
 */
app.use((request, reponse, next)=>{

  const contentType = request.header('Accept');
  if(request.method === 'GET' && contentType !== 'application/json'){
    throw new ResponseErrors(406, 'Header Accept not valid');
  }

  next();
})

// Inclusão a instancia do servidor o grupo de rotas do fornecedores
app.use('/api/fornecedores', router_fornecedores);

// Inclusão a instancia do servidor o grupo de rotas de produtos
// app.use('/api/produtos', router_produtos);


// Middleware para tratar os erros disparados
app.use((error, request, response, next)=>{
  return response.status(error.status || 400).send({ error: error.message });
})


// Criação do server express
app.listen(3002, () => {
  console.log('\nVariaveis de ambiente carregadas.');
  console.log(`\nServidor executando no endereço: http://localhost:3000\n`);
});
