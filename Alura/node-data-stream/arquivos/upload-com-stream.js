const fs = require('fs');
const path = require('path');

module.exports = (caminho, fileName, callback) => {

  console.log(caminho);

  const tiposValidos = ['.jpg', '.png', '.jpeg'];
  const tipo = path.extname(caminho);

  const novoCaminho = `./assets/imagens/${fileName}${tipo}`;

  if(tiposValidos.includes(tipo)){
    fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(novoCaminho))
    .on('finish', () => callback(novoCaminho, null));
  }else{
    callback(novoCaminho, {status: 'error', msg: 'Tipo inválido'});
  }

}
