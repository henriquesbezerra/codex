const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/', (req, res) => PessoaController.index(req, res));
router.post('/', (req, res) => PessoaController.create(req, res));
router.put('/:id', (req, res) => PessoaController.update(req, res));

module.exports = router;
