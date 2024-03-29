/**
 * Preparação do middleware com a estratégia de login
 */

const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;

const tokens = require('./tokens');

const Usuario = require('./usuarios-modelo');
const { InvalidArgumentError } = require('../erros');


/**
 * O objetivo da função de verificação é validar as credenciais do usário
 * e se forem válidas, devolve o usuário para a funcção callback do passport autenticate
 */
const funcaoVerificacao = async (email, senha, done) => {
  try {
    
    const usuario = await Usuario.buscaPorEmail(email);
    
    // Verifica se o usário existe
    if(!usuario){
      throw new InvalidArgumentError('Não existe usuário com esse email');
    } 

    // Verifica a senha hash
    const senhaValida = await bcrypt.compare(senha, usuario.senhaHash);
    if(!senhaValida){
      throw new InvalidArgumentError('Email ou senha inválidos');
    }

    done(null, usuario);

  } catch (error) {
    done(error);
  }
}

/**
 * Validacao de email e senha para o login
 */
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'senha',
  session: false
}, funcaoVerificacao))

/**
 * Validação do JWT
 */
passport.use(new BearerStrategy( async (token, done)=>{
  try {
    const id = await tokens.access.verifica(token);     
    const usuario = await Usuario.buscaPorId(id);
   // console.log(`Estratégia Autenticacao: ${id}`, usuario);
    done(null, usuario, {
      token: token
    });

  } catch (error) {
    done(error);
  }
}));