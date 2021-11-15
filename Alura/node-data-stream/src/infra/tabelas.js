
/**
 * Classe Tabelas será responsável pela criação
 * das tabelas no banco de dados de forma um pouco mais padronizada
 */

class Tabelas {

  init(conexao) {
    this.conexao = conexao;

    console.log('Tabelas foram chamadas');

    this.criarAtendimentos();
    this.criarPets();

  }

  criarAtendimentos() {
    const sql = 'CREATE TABLE IF NOT EXISTS atendimentos ( id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL,  pet varchar(20), servico varchar(20) NOT NULL,  status varchar(20) NOT NULL, observacoes text, data_agendamento datetime NOT NULL, data_criacao datetime NOT NULL, PRIMARY KEY(id) ) ';

    this.conexao.query(sql, erro => {
      if (erro) {
        console.log('Tabelas não criadas', erro);
      } else {
        console.log('Tabela de atendimentos criada com sucesso', erro);
      }
    });
  }

  criarPets() {
    const sql = 'CREATE TABLE IF NOT EXISTS pets (id int NOT NULL AUTO_INCREMENT, nome VARCHAR(50), imagem VARCHAR(200), PRIMARY KEY (id))';

    this.conexao.query(sql, erro => {
      if (erro) {
        console.log('Tabelas não criadas', erro);
      } else {
        console.log('Tabela de pets criada com sucesso', erro);
      }
    });
  }

}

module.exports = new Tabelas;

