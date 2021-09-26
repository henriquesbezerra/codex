const parseISO = require('date-fns/parseISO');
const con = require('../infra/db-conection');

class Atendimentos {

  /**
   * método para criar um novo
   * atendimento no banco de dados
   */
  add(data, res) {

    const { data_agendamento } = data;

    const data_criacao = new Date();

    const atendimentoAgendamento = {
      ...data,
      data_criacao,
      data_agendamento: parseISO(data_agendamento)
    };

    const sql = 'INSERT INTO atendimentos SET ?';

    con.query(sql, atendimentoAgendamento, (e, results) => {
      if (e) {
        res.status(400).json(e);
      } else {
        res.status(201).json(results);
      }
    });
  }
}

module.exports = new Atendimentos;
