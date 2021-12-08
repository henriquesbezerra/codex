const PessoaController = require('../controllers/PessoaController');
const cors = require('cors');
const { json } = require("express");
const pessoasRouter = require('./pessoasRouter');

module.exports = (app) =>{
  /*
    Configuração do formato JSON como padrão de dados que será transacionado
    pela nossa instância do express, seguindo a convençào para API Rest.
  */
  app.use(json());

  /** Middleware para definir o Access-Control-Allow-Origin da aplicação - CORS */
  app.use(cors({
    origin: '*'
  }));

  app.use('/pessoas', pessoasRouter);
}
