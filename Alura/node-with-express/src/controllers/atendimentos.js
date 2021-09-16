/**
 * @description Arquivo responsável por criar
 * e definir as rotas e ações para atendimentos
 */

module.exports = app => {
  app.get('/atendimentos', (req, res) => {
    return res.send('Rota de atendimentos');
  });
}
