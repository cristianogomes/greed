const express = require('express');
const router = express.Router();
const AnuncioController = require('../controllers/AnuncioController');
const isAutenticado = require('../filters/UsuarioAuatenticadoFilter');

router.get('/', isAutenticado, AnuncioController.index);
router.post('/cadastrar', isAutenticado, AnuncioController.post);

router.get('/primeiro', isAutenticado, AnuncioController.primeiro);
router.get('/segundo', isAutenticado, AnuncioController.segundo);

module.exports = router;
