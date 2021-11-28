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
});

/** Método route diferencia os métodos http de uma rota para executar
 * funcoes diferentes
 */
router.route('/:idProduto')
  .get(async (request, response, next)=>{
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
  })
  .head(async (request, response, next)=>{

    /** Método Head, possibilita fazermos uma requisição que retorna apenas
     * os dados de cabeçalho com informações mais reduzidas sobre determinado documento
     * isso é bom para economizar processamento e tráfego de dados
     */

    try {
      const produto = new Produto({
        id: request.params.idProduto,
        fornecedor_id: request.fornecedor.id
      });

      await produto.buscar();

      // Adicionar ao Header da resposta o id do produto como e Etag
      response.set('Etag', produto.id);

      // Adiciona ao Header a data da última atualização do documento
      response.set('Last-Modified', (new Date(produto.updatedAt)).getTime());

      return response.status(200).end();

    } catch (error) {
      next(error);
    }
  });

module.exports = router;
