const database = require("../models");

module.exports = {
  index: async (req, res) => {
    try {
      const result = await database.Turmas.findAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  view: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await database.Turmas.findOne({
        where: {
          id: id,
        },
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      await database.Turmas.update(req.body, {
        where: {
          id: id,
        },
      });
      const result = await database.Turmas.findOne({
        where: {
          id: id,
        },
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  create: async (req, res) => {
    try {
      const result = await database.Turmas.create(req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await database.Turmas.destroy({
        where: {
          id: id,
        },
      });
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
