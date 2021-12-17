const { Sequelize } = require('../models');
const database = require('../models');

class PessoaController {

  static async indexActives(req, res){
    try {
      const result = await database.Pessoas.findAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async indexAll(req, res){
    try {
      /**
       * Exemplo de sobescrita de escopo
       * Reference: https://sequelize.org/master/manual/scopes.html
       */
      const result = await database.Pessoas.scope('todos').findAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async view(req, res){
    try {
      const { id } = req.params;
      const result = await database.Pessoas.findOne({
        where:{
          id: id
        }
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  /**
   * Métodos utilizando mixins e escopos de associacao
   */
  static async getRegistrations(req, res){
    try {
      const { id } = req.params;
      const result = await database.Pessoas.findOne({
        where:{
          id: id
        }
      });
      const matriculas = await result?.getMatriculasConfirmadas();
      const raw = { result, matriculas };
      return res.status(200).json(raw);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async create(req, res)
  {
    try {
      const result = await database.Pessoas.create(req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async update(req, res)
  {
    try {
      const { id } = req.params;
      await database.Pessoas.update(req.body, {
        where: {
          id: id
        }
      });
      const result = await database.Pessoas.findOne({
        where:{
          id: id
        }
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async delete(req, res){
    try {
      const { id } = req.params;
      await database.Pessoas.destroy({
        where:{
          id: id
        }
      });
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restore(req, res){
    try {
      const { id } = req.params;
      await database.Pessoas.restore({
        where:{
          id: id
        }
      });
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  /**
   * Na alteração de registros em lote
   * ou que haja cruzamento de tabelas, utilizamos
   * o recursos de transações nessas operações no banco
   * para garantir a integridade dos dados caso ocorre
   * algum problema durante o processamento das rotinas de
   * atualização dos registros nenhum dado será salvo no banco
   * e os registros se manteram no estado que estava anteriormente
   * ao inicio da transação, só havendo sucesso em todas as operações
   * dentro da transação os dados são realmente salvos no banco.
   *
   * O método a seguir utiliza esse curso pois estaremos
   * lidando com diversos registros na tabela de matriculas.
   *
   * https://sequelize.org/master/manual/transactions
   */
  static async desativaEstudante(req, res){
    try {
      const { id } = req.params;

      await database.sequelize.transaction(async (t) =>{
        await database.Pessoas.update(
          { ativo: false },
          { where:{ id: id, role: 'estudante' } },
          { transaction: t }
        );

        await database.Matriculas.update(
          { status: 'cancelado' },
          { where:{ aluno_id: id }},
          { transaction: t }
        );
      });

      return res.status(204).end();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }



}

module.exports = PessoaController;
