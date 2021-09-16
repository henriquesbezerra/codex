/**
 * @description Arquivo responsável pelas configurações do express
 */

// Importamos o módulo express
const express = require('express');

// Importamos o módulo consign
const consign = require('consign');


// Exportamos a inicialização como uma função para utilizarmos em outro lugar
module.exports = () => {

  // Criamos uma 'instância' do express na contante app
  const app = express();

  // Consign irá injetar a constante app dentro dos controllers
  consign({
    cwd: 'src'
  })
    .include('controllers')
    .into(app);

  return app;
}
