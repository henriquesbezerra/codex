// Carrega as variáveis de ambiente
require('dotenv/config');

// Importação do módulo express
const express = require("express");

const cors = require('cors');

const port = 3002;

// Instânciação do módulo express na variável app
const app = express();

/*
  Configuração do formato JSON como padrão de dados que será transacionado
  pela nossa instância do express, seguindo a convençào para API Rest.
*/
app.use(express.json());

/** Middleware para definir o Access-Control-Allow-Origin da aplicação - CORS */
app.use(cors({
  origin: '*'
}));

// Criação do server express
app.listen(port, () => {
  console.log('\nVariaveis de ambiente carregadas.');
  console.log(`\nServidor executando no endereço: http://localhost:${port}\n`);
});
