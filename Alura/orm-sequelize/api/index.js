// Carrega as variáveis de ambiente
require('dotenv/config');

// Importação do módulo express
const express = require("express");

const routes = require('./routes');

const port = 3002;

// Instânciação do módulo express na variável app
const app = express();

routes(app);

// Criação do server express
app.listen(port, () => {
  console.log('\nVariaveis de ambiente carregadas.');
  console.log(`\nServidor executando no endereço: http://localhost:${port}\n`);
});
