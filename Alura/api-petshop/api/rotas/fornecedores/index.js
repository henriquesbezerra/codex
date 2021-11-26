/*
  Importação e instanciação do component Router do express para criacao
  das rotas dos forncedores.
*/
const router = require("express").Router();

// Importamos nosso módulo que busca as informações no BD
const TabelaFornecedor = require('./TabelaFornecedores');

// Importamos a classe fornecedor
const Fornecedor = require("./Fornecedor");

// Import do roteador de produtos para as rotas de produtos associadas ao fornecedor
const router_produtos = require('../produtos');

// Criaao de rota GET
router.get('/', async (request, response) =>{
  try{
    const results = await TabelaFornecedor.listar();
    return response.json(results).status(200);
  }catch (error) {
    return response.status(500).send(error);
  }
});

// Criação rota POST - para fazer cadastro de um novo registro no BD
router.post('/', async (request, response, next) => {
  try{
    const fornecedor = new Fornecedor(request.body);
    const result = await fornecedor.criar();
    return response.status(201).json(result);
  }catch (error) {
    next(error);
  }
});

// Criação de rota GET - para buscar um fornecedor pelo ID
router.get('/:id', async (request, response, next) => {
  try {
    const id = request.params.id;
    const fornecedor = new Fornecedor({ id: Number(id) });
    await fornecedor.buscar();
    return response.status(200).json(fornecedor);
  } catch (error) {
    next(error);
  }
});

// Criação de rota PUT - utilizado para atualizar dados
router.put('/:id', async (request, response, next) =>{
  try {
    const data = {
      id: request.params.id,
      ...request.body
    };
    const fornecedor = new Fornecedor(data);
    await fornecedor.atualizar();
    return response.status(200).json(fornecedor);
  } catch (error) {
    next(error);
  }
});

// Criação rota DELETE - método para remoção de dados
router.delete('/:id', async (request, response, next)=>{
  try {
    const fornecedor = new Fornecedor({ id: request.params.id});
    await fornecedor.apagar();
    return response.status(204).end();
  } catch (error) {
    next(error);
  }
});

// Associamos o conjunto de rotas de produtos a rotoas de fornecedores
router.use('/:id/produtos', router_produtos); // Pegamos todos os produtos de um determinando fornecedor

// Exportação do router de fornecedores
module.exports = router;
