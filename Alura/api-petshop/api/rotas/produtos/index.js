const router = require('express').Router({ mergeParams: true });
const TabelaProdutos = require('./TabelaProdutos');
const Produto = require('./Produto');

router.get('/', async (request, response)=>{
  try{
    const results = await TabelaProdutos.listar(request.params.idFornecedor);
    return response.json(results).status(200);
  }catch (error) {
    return response.status(500).send(error);
  }
});


router.post('/', async(request, response, next)=>{
  try {
    const idFornecedor = request.params.idFornecedor;
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
    const idFornecedor = request.params.idFornecedor;
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

})

module.exports = router;
