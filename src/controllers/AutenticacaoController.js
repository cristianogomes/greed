const {Usuario} = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser (user) {
  const UMA_SEMANA = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: UMA_SEMANA
  });
}

module.exports = {
  async registrar (req, res) {
    try {
      const user = await Usuario.create(req.body);
      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      });
    } catch (err) {
      console.log(err);
      res.status(400).send({
        error: 'Email já utilizado.'
      });
    }
  },

  async login (req, res) {
    try {
      const {email, senha} = req.body;
      const user = await Usuario.findOne({
        where: {
          email: email
        }
      });

      if (!user) {
        return res.status(403).send({
          error: 'Error no login'
        });
      }

      const isPasswordValid = await user.comparaSenha(senha);
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Erro ao logar'
        });
      }

      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'Erro no login. Tente novamente'
      });
    }
  }
};
