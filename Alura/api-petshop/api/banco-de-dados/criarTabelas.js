/*
  Arquivo para criacao das tabelas no banco
*/

// Lista das tabelas que usaremos
const modelos = [
  require('../rotas/fornecedores/ModelFornecedores'),
  require('../rotas/produtos/ModelProdutos'),
]

async function criarTabelas(){

  await modelos.forEach(async model => {
    // Criacao da tabela no banco de dados
    await model.sync().then(()=>{
      console.log(`Tabela ${model} criada com sucesso!`);
    })
    .catch((error)=>{
      console.log(`Tabela ${model} criada com sucesso!`);
    });
  });

}


criarTabelas();

