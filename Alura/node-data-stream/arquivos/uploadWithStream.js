const fs = require('fs');

const originPath = './temp_assets/tigre.jpg';

const destinyPath = '../src/assets/tigre-stream.jpg';

fs.createReadStream(originPath)
  .pipe(fs.createWriteStream(destinyPath))
  .on('finish', () => console.log('Imagem Escrita com Sucesso!'));
