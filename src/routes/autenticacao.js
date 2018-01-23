const express = require('express');
const router = express.Router();

const AutenticacaoController = require('../controllers/AutenticacaoController');

router.post('/', AutenticacaoController.registrar);

module.exports = router;
