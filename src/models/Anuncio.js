module.exports = (sequelize, DataTypes) => {
  const Anuncio = sequelize.define('Anuncio', {
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING
  });

  Anuncio.associate = function (models) {
    Anuncio.belongsTo(models.Usuario);
  };

  return Anuncio;
};
