const usuariosControlador = require('./usuarios-controlador');
const middlewaresAutenticacao = require('./middlewares-autenticacao');
const autorizacao = require('../middlewares/autorizacao');

module.exports = app => {

  app
    .route('/usuario/esqueci-senha')
    .post(usuariosControlador.esquecisenha);

  app
    .route('/usuario/redefinir-senha/:token')
    .get(
      middlewaresAutenticacao.verificaTokenReset, 
      usuariosControlador.redefinirSenha
    );  

  app
    .route('/usuario/atualiza-token')
    .post(middlewaresAutenticacao.refresh, usuariosControlador.login);

  app
    .route('/usuario/login')
    .post( 
      middlewaresAutenticacao.local,
      usuariosControlador.login
    );

  app
    .route('/usuario/logout')
    .post([
      middlewaresAutenticacao.refresh,
      middlewaresAutenticacao.bearer
    ], usuariosControlador.logout);

  app
    .route('/usuario')
    .post(usuariosControlador.adiciona)
    .get([
      middlewaresAutenticacao.bearer,
      autorizacao('usuario', 'ler')
    ],
      usuariosControlador.lista
    );

  app.route('/usuario/verificaemail/:token')
    .get(
      middlewaresAutenticacao.verificacaoEmail, 
      usuariosControlador.verificaEmail
    );

  app.route('/usuario/:id').delete([
    middlewaresAutenticacao.bearer,
    autorizacao('usuario', 'ler')
  ],
    usuariosControlador.lista
  );

};
