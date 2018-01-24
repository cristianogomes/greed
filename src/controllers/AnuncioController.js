const {Anuncio} = require('../models');

module.exports = {
  async index (req, res) {
    res.send('Index OK' + req.user);
  },

  async post (req, res) {
    const anuncio = await Anuncio.create(req.body);

    res.send(anuncio);
  },

  async primeiro (req, res) {
    res.send('primeiro ' + req.user.email);
  },

  async segundo (req, res) {
    res.send('Segundo');
  }
};
