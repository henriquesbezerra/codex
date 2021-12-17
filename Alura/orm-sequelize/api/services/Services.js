/**
 * Serviços.
 * Camada entre controllers e models que reutiliza métodos
 * comuns como os de conexão com o banco de dados, afim de
 * reduzir repetição de código e as reponsabilidades delegadas
 * em um controller
 */

const database = require('../models');

class Services {

  constructor(model){
    this.model = model;
  }

  async findAll(){
    return database[this.model].findAll();
  }

  async findOne(id){
    return database[this.model].findOne({ where: { id: id }});
  }

  async create(data){
    return database[this.model].create(data);
  }
}

module.exports = Services;
