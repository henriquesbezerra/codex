const con = require('../infra/db-conection');
const uploadArquivoStream = require('../../arquivos/upload-com-stream');

class Pet{

  add(data, res){

    const sql = 'INSERT INTO pets SET ?';

    uploadArquivoStream(data.imagem, data.nome, (novoCaminho) =>{

      const novoPet = { nome: data.nome, imagem: novoCaminho };

      con.query(sql, novoPet , (e, results) => {
        if (e) {
          res.status(400).json(e);
        } else {
          res.status(201).json(novoPet);
        }
      });
    });

  }
}

module.exports = new Pet();
