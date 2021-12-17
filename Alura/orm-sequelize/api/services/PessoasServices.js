/**
 *
 * Outros arquivos de services podem ser
 * criados para reunir métodos mais especificios como
 * no caso de Pessoas Services. Ele irá herdar
 * os métodos comuns da classe Services através da
 * herança de classes e irá possuir novos métodos
 *
 */

const database = require('../models');
const Services = require('./Services');

class PessoasServices extends Services{

  constructor(){
    super('Pessoas');
  }

  // métodos específicos do controller de pessoas
  async findAllWithScope(params = { where: {}, scope: 'todos'}){
    return database[this.model].scope(params.scope).findAll({ where: { ...params.where } });
  }

}

module.exports = PessoasServices;
