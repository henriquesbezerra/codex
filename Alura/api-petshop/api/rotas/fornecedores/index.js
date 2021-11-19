/*
  Importação e instanciação do component Router do express para criacao
  das rotas dos forncedores.
*/
const router = require("express").Router();

// Importamos nosso módulo que busca as informações no BD
const TabelaFornecedor = require('./TabelaFornecedores');

// Importamos a classe fornecedor
const Fornecedor = require("./Fornecedor");

// Criaao de rota GET
router.get('/', async (request, response) =>{
  try{
    const results = await TabelaFornecedor.listar();
    return response.json(results).status(200);
  }catch (error) {
    return response.json(error).status(500);
  }
});

// Criação rota POST - para fazer cadastro de um novo registro no BD
router.post('/', async (request, response) => {
  try{
    const fornecedor = new Fornecedor(request.body);
    const result = await fornecedor.criar();
    return response.json(result).status(200);
  }catch (error) {
    return response.json(error).status(500);
  }
});

// Criação de rota GET - para buscar um fornecedor pelo ID
router.get('/:id', async (request, response) => {
  try {
    const id = request.params.id;
    const fornecedor = new Fornecedor({ id: Number(id) });
    await fornecedor.buscar();
    return response.status(200).json(fornecedor);
  } catch (error) {
    return response.status(404).send({ error: error.message });
  }
});

// Criação de rota PUT - utilizado para atualizar dados
router.put('/:id', async (request, response) =>{
  try {
    const data = {
      id: request.params.id,
      ...request.body
    };
    const fornecedor = new Fornecedor(data);
    await fornecedor.atualizar();
    return response.status(200).json(fornecedor);
  } catch (error) {
    return response.status(404).send({ error: error.message });
  }
});

// Exportação do router de fornecedores
module.exports = router;
