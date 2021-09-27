const parseISO = require('date-fns/parseISO');
const datefns = require('date-fns');
const con = require('../infra/db-conection');

class Atendimentos {

  /**
   * método para criar um novo
   * atendimento no banco de dados
   */
  add(data, res) {

    const { data_agendamento, cliente } = data;

    const data_criacao = new Date();

    const validaData = datefns.isBefore(data_criacao, parseISO(data_agendamento)) || datefns.isSameDay(data_criacao, parseISO(data_agendamento));
    const validaCliente = cliente.length >= 5;
    const validacoes = [
      {
        campo: 'data_criacao',
        status: validaData,
        erro: 'Data deve ser maior ou igual a data atual'
      },
      {
        campo: 'cliente',
        status: validaCliente,
        erro: 'Nome do cliente deve conter no minímo 5 letras'
      }
    ];

    const errors = validacoes.filter(i => !i.status);


    if (errors.length) {

      res.status(400).json(errors);

    } else {
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

  lista(res) {
    const sql = 'SELECT * FROM atendimentos';

    con.query(sql, (e, results) => {
      if (e) {
        res.status(400).json(e);
      } else {
        res.status(200).json(results);
      }
    });
  }

  busca(id, res) {

    const sql = `SELECT * FROM atendimentos where id = ${id}`;

    con.query(sql, (e, results) => {
      if (e) {
        res.status(400).json(e);
      } else {
        res.status(200).json(results[0]);
      }
    });
  }

  altera(id, data, res) {

    if (data.data_agendamento) {
      data.data_agendamento = parseISO(data.data_agendamento);
    }

    const sql = `
      UPDATE atendimentos SET ? WHERE id = ?
    `;

    con.query(sql, [data, id], (e, results) => {
      if (e) {
        res.status(400).json(e);
      } else {
        res.status(200).json(results[0]);
      }
    });
  }
}

module.exports = new Atendimentos;
