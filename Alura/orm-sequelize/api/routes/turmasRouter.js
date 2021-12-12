const { Router } = require('express');
const TurmasController = require('../controllers/TurmasController');

const router = Router();

router
  .get('/', (req, res) => TurmasController.index(req, res))
  .get('/:id/alunos', (req, res) => TurmasController.pegarAlunosPorTurma(req, res))
  .get('/:id', (req, res) => TurmasController.view(req, res))
  .post('/', (req, res) => TurmasController.create(req, res))
  .post('/:id/aluno/:alunoId', (req, res) => TurmasController.incluirAluno(req, res))
  .put('/:id', (req, res) => TurmasController.update(req, res))
  .delete('/:id', (req, res) => TurmasController.delete(req, res));

module.exports = router;
