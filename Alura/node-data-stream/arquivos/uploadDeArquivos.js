const fs = require('fs');

const filePath = './temp_assets/tigre.jpg';

const assetsPath = '../src/assets/tigre2.jpg';

const fileReaderCallback = (erro, buffer) => {
  console.log(`FilePath: ${filePath}`);
  console.log("Entramos aqui!", erro, buffer);

  fs.writeFile(assetsPath, buffer, (error) => {
    console.log('Imagem Salva!')
  });
};

fs.readFile(filePath, fileReaderCallback);
