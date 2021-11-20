// Carrega as variáveis de ambiente
require('dotenv/config');

// Importação do módulo express
const express = require("express");

// Importação do router de forncedores
const router_fornecedores = require('./rotas/fornecedores');

// Instânciação do módulo express na variável app
const app = express();

/*
  Configuração do formato JSON como padrão de dados que será transacionado
  pela nossa instância do express, seguindo a convençào para API Rest.
*/
app.use(express.json());


// Inclusão a instancia do servidor o grupo de rotas do fornecedores
app.use('/api/fornecedores', router_fornecedores);


// Middleware para tratar os erros disparados
app.use((error, request, response, next)=>{
  return response.status(error.status || 400).send({ error: error.message });
})


// Criação do server express
app.listen(3000, () => {
  console.log('\nVariaveis de ambiente carregadas.');
  console.log(`\nServidor executando no endereço: http://localhost:3000\n`);
});
