const { Router } = require('express');
const TurmasController = require('../controllers/TurmasController');

const router = Router();

router
  .get('/', (req, res) => TurmasController.index(req, res))
  .get('/filterdate', (req, res) => TurmasController.indexFilterDate(req, res))
  .get('/:id/alunos', (req, res) => TurmasController.pegarAlunosPorTurma(req, res))
  .get('/:id/totalmatriculas', (req, res) => TurmasController.totalMatriculasPorTurmas(req, res))
  .get('/lotadas', (req, res) => TurmasController.turmasLotadas(req, res))
  .get('/:id', (req, res) => TurmasController.view(req, res))
  .post('/', (req, res) => TurmasController.create(req, res))
  .post('/:id/aluno/:alunoId', (req, res) => TurmasController.incluirAluno(req, res))
  .put('/:id', (req, res) => TurmasController.update(req, res))
  .delete('/:id', (req, res) => TurmasController.delete(req, res))
  .post('/:id/restore', (req, res) => TurmasController.restore(req, res));


module.exports = router;
