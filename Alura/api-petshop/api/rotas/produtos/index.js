const router = require('express').Router({ mergeParams: true });
const TabelaProdutos = require('./TabelaProdutos');
const Produto = require('./Produto');

router.get('/', async (request, response)=>{
  try{
    const results = await TabelaProdutos.listar(request.params.id);
    return response.json(results).status(200);
  }catch (error) {
    return response.status(500).send(error);
  }
});


router.post('/', async(request, response, next)=>{
  try {
    const idFornecedor = request.params.id;
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
})

module.exports = router;
