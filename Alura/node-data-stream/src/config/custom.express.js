/**
 * @description Arquivo responsável pelas configurações do express
 */

// Importamos o módulo express
const express = require('express');

// para que nossas rotas possa identificar o formato
// json vindo de uma requisição precisamos desse modulo
const { json } = require('express');

// Importamos o módulo consign
const consign = require('consign');

// Exportamos a inicialização como uma função para utilizarmos em outro lugar
module.exports = () => {

  // Criamos uma 'instância' do express na contante app
  const app = express();

  // Adicionamos o módulo json ao nosso app
  app.use(json());

  // Consign irá injetar a constante app dentro dos controllers
  consign({
    cwd: 'src'
  })
    .include('controllers')
    .into(app);

  return app;
}
