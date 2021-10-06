/**
 * @description Arquivo responsável por criar a rota raiz da aplicação
 */

module.exports = app => {
  app.get('/', (req, res) => {
    return res.send('Rota inicial da aplicação');
  });
}
