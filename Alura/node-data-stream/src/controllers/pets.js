/**
 * @description Arquivo responsável por criar
 * e definir as rotas e ações para pets
 */

const PetModel = require('../models/pets');

module.exports = app => {

  app.post('/pet', (req, res) =>{

    PetModel.add(req.body, res);

  });

}
