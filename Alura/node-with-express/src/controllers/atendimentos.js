modules.exports = app => {
  app.get('/atendimentos', (req, res) => {
    return res.send('Rota de atendimentos');
  });
}
