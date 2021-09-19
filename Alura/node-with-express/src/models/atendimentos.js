const con = require('../infra/db-conection');

class Atendimentos {

  /**
   * método para criar um novo
   * atendimento no banco de dados
   */
  add(atendimento) {
    const sql = 'INSERT INTO atendimentos SET ?';

    con.query(sql, atendimento, (e, results) => {
      if (e) {
        console.log(e);
      } else {
        console.log(results);
      }
    })
  }
}

module.exports = new Atendimentos;
