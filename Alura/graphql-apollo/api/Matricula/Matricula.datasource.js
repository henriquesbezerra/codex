const { SQLDataSource } = require('datasource-sql'); 
const DataLoader = require('dataloader');

class MatriculasAPI extends SQLDataSource {

  constructor(config){
    super(config);
    this.response = {
      message: "",
      code: 204
    }
  }

  getMatriculasByUser = new DataLoader(
    async ids => {    
    const result = await this.db
      .select('*')
      .from('matriculas')
      .whereIn('estudante_id', ids)
      .select();

    return ids.map(id => result.filter( matricula => matricula.estudante_id === id ) );
  });

  async getMatriculasByTurma(id){
    const result = await this.db
      .select('*')
      .from('matriculas')
      .where({
        turma_id: Number(id)
      });
    return result;
  }

  async addMatricula(data){
    try {
      
      await this.db
      .insert({
        estudante_id: data.estudante,
        turma_id: data.turma,
        status: "confirmado"
      })
      .into('matriculas');

      this.response.code = 204;
      this.response.message = "Matricula Efetuada com sucesso";

    } catch (error) {
      this.response.code = 500;
      this.response.message = error.message;
    }

    return this.response;
  }

  async deleteMatricula(id){
    try {

      await this.db('matriculas').where({ id: Number(id) }).del();
      
      this.response.code = 204;
      this.response.message = "Matricula Deletada com sucesso";

    } catch (error) {
      this.response.code = 500;
      this.response.message = error.message;
    }
    return this.response;
  }

  async cancelaMatricula(id){
    try {

      await this.db
        .update({ status: "cancelado" })
        .where({ id: Number(id) })
        .into('matriculas');
      
      this.response.code = 204;
      this.response.message = "Matricula Cancelada com sucesso";

    } catch (error) {
      this.response.code = 500;
      this.response.message = error.message;
    }
    return this.response;
  }

}

module.exports = MatriculasAPI