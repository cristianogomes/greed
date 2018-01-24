const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config');

const app = express();

app.disable('x-powered-by');

app.use(morgan('combined'));
app.use(bodyParse.json());
app.use(cors());

require('./passport');

// app.all('*', isAutenticado);

app.use('/anuncio', require('./routes/anuncio'));
app.use('/registrar', require('./routes/autenticacao'));

sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`Servidor iniciado na porta ${config.port}`);
});
