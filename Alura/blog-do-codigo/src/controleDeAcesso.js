const AccessControl =  require('accesscontrol');
const control = new AccessControl();

control
  .grant('assinante')
    .readAny('post', ['id', 'titulo', 'conteudo', 'autor']);

control
  .grant('editor')
  .extend('assinante')
    .createOwn('post')
    .deleteOwn('post');

control
  .grant('admin')
  .readAny('post')
  .createAny('post')
  .deleteAny('post')
  .readAny('usuario')
  .createAny('usuario')
  .deleteAny('usuario');

module.exports = control;