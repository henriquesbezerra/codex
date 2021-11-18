/*
  Importação e instanciação do component Router do express para criacao
  das rotas dos forncedores.
*/
const router = require("express").Router();

// Importamos nosso módulo que busca as informações no BD
const TabelaFornecedor = require('./TabelaFornecedores');

// Criaao de rota GET
router.use('/', async (request, response) =>{
  const results = await TabelaFornecedor.listar();
  return response.json(results).status(200);
});

// Exportação do router de fornecedores
module.exports = router;
