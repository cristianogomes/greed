const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

function hashSenha (usuario, options) {
  const SALT_FACTOR = 8;

  if (!usuario.changed('senha')) {
    return;
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashSync(usuario.senha, salt, null))
    .then(hash => {
      usuario.setDataValue('senha', hash);
    });
}

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    senha: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashSenha,
      beforeUpdate: hashSenha
    }
  });

  Usuario.prototype.comparaSenha = function (senha) {
    return bcrypt.compareSync(senha, this.senha);
  };

  return Usuario;
};
