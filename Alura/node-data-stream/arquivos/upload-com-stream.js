const fs = require('fs');

module.exports = (path, fileName, callback) => {
  const novoCaminho = `./assets/imagens/${fileName}.jpg`;

  console.log(path,novoCaminho);

  fs.createReadStream(path)
  .pipe(fs.createWriteStream(novoCaminho))
  .on('finish', () => callback(novoCaminho));

}
