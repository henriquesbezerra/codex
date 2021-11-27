const router = require('express').Router({ mergeParams: true });
const TabelaProdutos = require('./TabelaProdutos');
const Produto = require('./Produto');

router.get('/', async (request, response)=>{
  try{
    const results = await TabelaProdutos.listar(request.fornecedor.id);
    return response.json(results).status(200);
  }catch (error) {
    return response.status(500).send(error);
  }
});


router.post('/', async(request, response, next)=>{
  try {
    const idFornecedor = request.fornecedor.id;
    const data = request.body;
    const produto = new Produto({
      fornecedor_id: idFornecedor,
      ...data
    });
    const result = await produto.criar();
    return response.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete('/:idProduto',async (request, response, next)=>{

  try {
    const idFornecedor = request.fornecedor.id;
    const idProduto = request.params.idProduto;
    const produto = new Produto({
      id: idProduto,
      fornecedor_id: idFornecedor
    });
    await produto.apagar();
    return response.status(204).end();
  } catch (error) {
    next(error);
  }

});

router.get('/:idProduto',async (request, response, next)=>{
  try {
    const produto = new Produto({
      id: request.params.idProduto,
      fornecedor_id: request.fornecedor.id
    });
    await produto.buscar();
    return response.status(200).json(produto);
  } catch (error) {
    next(error);
  }
});

router.put('/:idProduto', async (request, response, next)=>{
  try {
    const produto = new Produto({
      id: request.params.idProduto,
      fornecedor_id: request.fornecedor.id,
      ...request.body
    });
    await produto.atualizar();
    return response.status(200).json(produto);
  } catch (error) {
    next(error);
  }
});

router.patch('/:idProduto/atualizar-estoque', async (request, response, next) => {
  try {
    const produto = new Produto({
      id: request.params.idProduto,
      fornecedor_id: request.fornecedor.id
    });
    const resultado = await produto.atualizarEstoque({ ...request.body });

    return response.status(200).json(resultado);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
