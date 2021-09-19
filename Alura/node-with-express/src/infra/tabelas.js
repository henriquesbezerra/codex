
/**
 * Classe Tabelas será responsável pela criação
 * das tabelas no banco de dados de forma um pouco mais padronizada
 */

class Tabelas {

  init(conexao) {
    this.conexao = conexao;

    console.log('Tabelas foram chamadas');

    this.criarAtendimentos();

  }

  criarAtendimentos() {
    const sql = 'CREATE TABLE IF NOT EXISTS atendimentos ( id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL,  pet varchar(20), servico varchar(20) NOT NULL,  status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id) ) ';

    this.conexao.query(sql, erro => {
      if (erro) {
        console.log('Tabelas não criadas', erro);
      } else {
        console.log('Tabela de atendimentos criada com sucesso', erro);
      }
    });
  }

}

module.exports = new Tabelas;

