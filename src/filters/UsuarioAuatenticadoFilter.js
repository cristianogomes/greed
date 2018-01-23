module.exports = function (req, res, next) {
  if (req.path === '/') {
    console.log('Não verifica.');
    next();
  } else {
    console.log('autenticado');
    next();
  }
};
