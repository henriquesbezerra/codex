/**
 *
 * Outros arquivos de services podem ser
 * criados para reunir métodos mais especificios como
 * no caso de Pessoas Services. Ele irá herdar
 * os métodos comuns da classe Services através da
 * herança de classes e irá possuir novos métodos
 *
 */

const Services = require('./Services');

class TurmasServices extends Services{

  constructor(){
    super('Turmas');
  }

  // métodos específicos do controller de pessoas


}

module.exports = TurmasServices;
