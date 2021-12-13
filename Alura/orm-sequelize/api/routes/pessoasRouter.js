const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/', (req, res) => PessoaController.indexActives(req, res));
router.get('/all', (req, res) => PessoaController.indexAll(req, res)); // Rota utilizando scope personalizado
router.get('/:id', (req, res) => PessoaController.view(req, res));
router.post('/', (req, res) => PessoaController.create(req, res));
router.put('/:id', (req, res) => PessoaController.update(req, res));
router.delete('/:id', (req, res) => PessoaController.delete(req, res));
router.post('/:id/restore', (req, res) => PessoaController.restore(req, res));

module.exports = router;
