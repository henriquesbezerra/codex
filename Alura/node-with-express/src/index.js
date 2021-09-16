
const customExpress = require('./config/custom.express');

const app = customExpress();

// Executamos o servidor através da função listen indicando a porta 333 do localhost
app.listen('3333', () => {
  console.log('Servidor Rodando na porta 3333');
});


// Criação da rota raiz utilizando o método GET
// retornando um json de olá mundo
// app.get('/', (req, res) => {
//   return res.json({ message: 'Olá Mundo' });
// });

