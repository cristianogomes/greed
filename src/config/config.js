module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'greed',
    user: process.env.DB_USER || 'greed',
    password: process.env.DB_PASS || 'greed',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './greed.sqlite',
      operatorsAliases: false
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
};
