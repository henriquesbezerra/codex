const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/', (req, res) => PessoaController.index(req, res));
router.get('/:id', (req, res) => PessoaController.view(req, res));
router.post('/', (req, res) => PessoaController.create(req, res));
router.put('/:id', (req, res) => PessoaController.update(req, res));
router.delete('/:id', (req, res) => PessoaController.delete(req, res));

module.exports = router;
