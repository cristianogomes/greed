const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const {sequelize} = require('./models');
const config = require('./config/config');
const isAutenticado = require('./filters/UsuarioAuatenticadoFilter');

const app = express();

app.disable('x-powered-by');

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

app.use(morgan('combined'));
app.use(bodyParse.json());
app.use(cors());

app.all('*', isAutenticado);

app.use('/anuncio', require('./routes/anuncio'));
app.use('/registrar', require('./routes/autenticacao'));

sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`Servidor iniciado na porta ${config.port}`);
});
