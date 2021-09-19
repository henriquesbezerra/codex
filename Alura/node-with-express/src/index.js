
const customExpress = require('./config/custom.express');

/**
 * Importamos o arquivo de configuração da conexão com o BD
 */
const con = require('./infra/db-conection');

/**
 * Importamos a classe responsável pela criação das tabelas
 */
const Tabelas = require('./infra/tabelas');

/** Iniciamos a conexão com o BD */
con.connect((err) => {
  if (err) {
    console.log('Erro ao se conectar com o BD: ', err);
  } else {
    console.log('Conexão com o BD estabelecida');

    /** Faremos nessa etapa a criação das tabelas do BD */
    Tabelas.init(con);

    /**
     * A Partir da conexão com o BD estabelecida
     * iniciamos o server express
     */

    const app = customExpress();

    // Executamos o servidor através da função listen indicando a porta 333 do localhost
    app.listen('3333', () => {
      console.log('Servidor Rodando na porta 3333');
    });

  }
})

// Criação da rota raiz utilizando o método GET
// retornando um json de olá mundo
// app.get('/', (req, res) => {
//   return res.json({ message: 'Olá Mundo' });
// });

