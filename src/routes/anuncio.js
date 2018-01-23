const express = require('express');
const router = express.Router();

const AnuncioController = require('../controllers/AnuncioController');

router.get('/', AnuncioController.index);
router.post('/cadastrar', AnuncioController.post);

router.get('/primeiro', AnuncioController.primeiro);
router.get('/segundo', AnuncioController.segundo);

module.exports = router;
