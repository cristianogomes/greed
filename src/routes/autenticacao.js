const express = require('express');
const router = express.Router();

const AutenticacaoController = require('../controllers/AutenticacaoController');

router.post('/', AutenticacaoController.registrar);
router.post('/login', AutenticacaoController.login);

module.exports = router;
