/**
 * @description Arquivo responsável por criar
 * e definir as rotas e ações para atendimentos
 */


const AtendimentosModel = require('../models/atendimentos');


module.exports = app => {

  // Rota Get para pegar todos os atendimentos feitos
  app.get('/atendimentos', (req, res) => {
    AtendimentosModel.lista(res);
  });

  // Rota Get para pegar um atendimento pelo Id
  app.get('/atendimentos/:id', (req, res) => {
    const { id } = req.params;
    AtendimentosModel.busca(parseInt(id), res);
  });

  // Rota Post receberemos dados da requisição para criar um novo atendimento
  app.post('/atendimentos', (req, res) => {

    const body = req.body;

    AtendimentosModel.add(body, res);

    //console.log('=>', req.body);

    //return res.send('Rota de atendimentos');
  });

  // Rota Patch para atualizar o atendimento
  app.patch('/atendimentos/:id', (req, res) => {
    const body = req.body;
    const { id } = req.params;
    AtendimentosModel.altera(parseInt(id), body, res);
  });

  // Rota Delete para apagar um atendimento
  app.delete('/atendimentos/:id', (req, res) => {
    const body = req.body;
    const { id } = req.params;
    AtendimentosModel.apaga(parseInt(id), res);
  });

}
