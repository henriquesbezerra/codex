const usuariosDao = require('./usuarios-dao');
const { InvalidArgumentError } = require('../erros');
const validacoes = require('../validacoes-comuns');
const bcrypt = require('bcrypt');

class Usuario {
  constructor(usuario) {
    this.id = usuario.id;
    this.nome = usuario.nome;
    this.email = usuario.email;
    this.senhaHash = usuario.senhaHash;
    this.emailVerificado = usuario.emailVerificado;
    this.cargo = usuario.cargo;

    this.valida();
  }

  async verificaEmail(){
    this.emailVerificado =  true;
    await usuariosDao.modificaEmailVerificado(this.id, this.emailVerificado);
  }

  async adiciona() {
    if (await Usuario.buscaPorEmail(this.email)) {
      throw new InvalidArgumentError('O usuário já existe!');
    }

    await usuariosDao.adiciona2(this);
    const { id } = await usuariosDao.buscaPorEmail(this.email);
    this.id = id;
  }

  async adicionaSenha(senha){
    validacoes.campoStringNaoNulo(senha, 'senha');
    validacoes.campoTamanhoMinimo(senha, 'senha', 8);
    validacoes.campoTamanhoMaximo(senha, 'senha', 64);
    this.senhaHash = await Usuario.gerarSenhaHash(senha);
  }

  valida() {
    validacoes.campoStringNaoNulo(this.nome, 'nome');
    validacoes.campoStringNaoNulo(this.email, 'email');
    validacoes.campoStringNaoNulo(this.cargo, 'cargo');
    if(!['admin','editor','assinante'].includes(this.cargo)){
      throw new InvalidArgumentError('O Campo cargo está inválido!');
    }
  }

  
  async deleta() {
    return usuariosDao.deleta(this);
  }
  
  static async buscaPorId(id) {
    //console.log(`Usuarios Modelo: ${id}`);
    const usuario = await usuariosDao.buscaPorId(id);
    //console.log(`Usuario encontrado:`, usuario);
    if (!usuario) {
      return null;
    }
    
    return new Usuario(usuario);
  }
  
  static async buscaPorEmail(email) {
    const usuario = await usuariosDao.buscaPorEmail(email);
    if (!usuario) {
      return null;
    }
    
    return new Usuario(usuario);
  }

  static lista() {
    return usuariosDao.lista();
  }

  static gerarSenhaHash(senha){
    // Cada incrimento no custo dobra o quanto tempo a função irá demorar para executar
    const custoHash = 12;
    return bcrypt.hash(senha, custoHash);
  }
}

module.exports = Usuario;
