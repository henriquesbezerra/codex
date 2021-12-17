const database = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {

  index: async (req, res) => {
    try {
      const result = await database.Turmas.findAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  /**
   * Exemplo utilizando query string para
   * filtrar turmas por data em conjutando ao operador
   * do sequelize
   */
  indexFilterDate: async (req, res) => {
    try {
      const { data_inicial, data_final } = req.query;
      const where = {};
      console.log(data_inicial, data_final);

      (data_inicial || data_final ? where.data_inicio = {} : null);
      (data_inicial ? where.data_inicio[Op.gte] = data_inicial : null);
      (data_final ? where.data_inicio[Op.lte] = data_final : null);

      console.log(where);

      const result = await database.Turmas.findAll({ where });
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

  restore: async (req, res)=>{
    try {
      const { id } = req.params;
      await database.Turmas.restore({
        where:{
          id: id
        }
      });
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  pegarAlunosPorTurma: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await database.Turmas.findOne({
        where: {
          id: id,
        },
        include: [
          {
            model: database.Matriculas,
            required: true,
            include: [
              {
                model: database.Pessoas,
                required: true,
              },
            ],
          },
        ],
      });

      if (result?.Matriculas.length) {
        const filtered = result.Matriculas.map((matricula) => ({
          id: matricula.Pessoa.id,
          nome: matricula.Pessoa.name,
          email: matricula.Pessoa.email,
          status_matricula: matricula.status,
          status_aluno: matricula.Pessoa.ativo,
        }));
        return res.status(200).json(filtered);
      } else {
        return res.status(404).send("Nenhuma matricula feita nessa turma");
      }

    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  /**
   * Busca com agregação
   */
  totalMatriculasPorTurmas: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await database.Matriculas.findAndCountAll({
        where: {
          turma_id: id,
          status: 'ativo'
        },
        limit: 20,
        order: [
          ['aluno_id', 'DESC']
        ]
      });
      return res.status(200).json(result.count);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  /**
   * Busca turmas lotadas
   * utilizando agrupamento
   */
   turmasLotadas: async (req, res) => {
    try {
      const max_matriculas_turma = 2;
      const result = await database.Matriculas.findAndCountAll({
        where: {
          status: 'ativo'
        },
        attributes: ['turma_id'],
        group: ['turma_id'],
        having: Sequelize.literal(`count(turma_id) >= ${max_matriculas_turma}`)
      });
      return res.status(200).json(result.count);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },



  incluirAluno: async (req, res) => {
    try {
      const { id, alunoId } = req.params;

      const turma = await database.Turmas.findOne({
        where: {
          id: id,
        },
      });

      if(!turma){
        return res.status(404).send("Turma não existe!");
      }

      const aluno = await database.Pessoas.findOne({
        where: {
          id: alunoId,
          role: "estudante"
        },
      });

      if(!aluno){
        return res.status(404).send("Aluno não encontrado(a)");
      }

      const result = await database.Matriculas.create({
        turma_id: turma.id,
        aluno_id: aluno.id,
        status: "ativo"
      });

      if(!result){
        return res.status(404).send("Desculpe não foi possível matricular o aluno nesta turma.");
      }

      return res.status(200).send(`${aluno.name} matriculado na turma ${turma.descricao}`);

    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
};
