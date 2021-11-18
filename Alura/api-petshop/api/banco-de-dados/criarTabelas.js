/*
  Arquivo para criacao das tabelas no banco
*/

// Importamos nossa configura de criacao da tabela de fornecedores
const Fornecedores = require('../rotas/fornecedores/ModelFornecedores');

// Criacao da tabela no banco de dados
Fornecedores
  .sync()
  .then(()=>{
    console.log('Tabela Fornecedores criada com sucesso!')
  })
  .catch((error)=>{
    console.error('Erro na criação da tabela Fornecedores!', error)
  });
