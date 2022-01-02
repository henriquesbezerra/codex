require('dotenv').config();

const jwt = require('jsonwebtoken');
const { InvalidArgumentError, EntityNotFound } = require('./src/erros');

const app = require('./app');
const port = 3002;
const db = require('./database');

const routes = require('./rotas');
routes(app);

app.use((erro, req, res, next) => {
  let status = 500;
  const body = {
    message: erro.message
  };

  /** Tratar os erros emitidos pelo jwt.veritfy */

  if(erro instanceof InvalidArgumentError){
    status = 400;
  } 
  
  if(erro instanceof jwt.JsonWebTokenError){
    status = 401;
  }

  if(erro instanceof jwt.TokenExpiredError){
    status = 401;
    body.expiradoEm = erro.expiredAt;
  }

  if(erro instanceof EntityNotFound){
    status = 404;
  }

  res.status(status).json(body);
});

app.listen(port, () => console.log(`App listening on port ${port}`));
