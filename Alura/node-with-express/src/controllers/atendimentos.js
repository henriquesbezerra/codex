/**
 * @description Arquivo responsável por criar
 * e definir as rotas e ações para atendimentos
 */


const AtendimentosModel = require('../models/atendimentos');


module.exports = app => {

  // Rota Get para pegar informações
  app.get('/atendimentos', (req, res) => {
    return res.send('Rota de atendimentos');
  });

  // Rota Post receberemos dados das requisição
  app.post('/atendimentos', (req, res) => {

    const body = req.body;

    AtendimentosModel.add(body, res);

    console.log('=>', req.body);

    //return res.send('Rota de atendimentos');
  });
}
