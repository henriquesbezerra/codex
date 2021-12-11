const database = require('../models');

class PessoaController {

  static async index(req, res){
    try {
      const result = await database.Pessoas.findAll();
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


}

module.exports = PessoaController;
