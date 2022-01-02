const controle = require('../controleDeAcesso');

const metodos = {
  ler:{
    todos: 'readAny',
    apenasSeu: 'readOwn'
  },

  criar: {
    todos: 'createAny',
    apenasSeu: 'createOwn'
  },

  remover: {
    todos: 'deleteAny',
    apenasSeu: 'deleteOwn'
  }
};

module.exports = (entidade, acao) => (req, res, next) =>{

  const permissoesDoCargo = controle.can(req.user.cargo);
  const acoes = metodos[acao];
  const permissoesTodos = permissoesDoCargo[acoes.todos](entidade);
  const permissoesApenasSeu = permissoesDoCargo[acoes.apenasSeu](entidade);

  

  if(permissoesTodos.granted === false && permissoesApenasSeu.granted === false){    
    res.status(401).end('sem acesso');
    return;    
  }

  req.acesso = {
    todos: {
      permitido: permissoesTodos.granted,
      atributos: permissoesTodos.attributes
    },
    apenasSeu: {
      permitido: permissoesApenasSeu.granted,
      atributos: permissoesApenasSeu.attributes
    }
  };

  next();
}
