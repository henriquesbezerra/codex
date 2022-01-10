const { SQLDataSource } = require('datasource-sql'); 
const DataLoader = require('dataloader');

class TurmasAPI extends SQLDataSource {

  constructor(config){
    super(config);
    this.response = {
      message: "",
      code: 204
    }
  }

  async getTurmas(){
    return await this.db
      .select('*')
      .from('turmas');
  }

  async getTurma(id){
    const result = await this.db
      .select('*')
      .from('turmas')
      .where({
        id: Number(id)
      });
    return result[0];
  }

  turmasLoader = new DataLoader(async (ids) => {    
    const result = await this.db
      .select('*')
      .from('turmas')
      .whereIn('id', ids)
      .select();
      
    return ids.map(id => result.find( turma => turma.id === id ) );
  });  

  async addTurma(data){
    const novaTurmaId = await this.db
      .insert(data)
      .into('turmas');
    
    const turmaInserida = await this.getTurma(novaTurmaId[0]);

    return { ...turmaInserida };
  }

  async updateTurma(id, data){
    await this.db
      .update(data)
      .where({ id: Number(id) })
      .into('turmas');
    
    const result = await this.getTurma(id);

    return { ...result };
  }

  async deleteTurma(id){
    await this.db('turmas').where({ id: Number(id) }).del();

    this.response.message = "Registro Deletado";

    return this.response;
  }
}

module.exports = TurmasAPI