const { SQLDataSource } = require('datasource-sql'); 

class MatriculasAPI extends SQLDataSource {

  constructor(config){
    super(config);
    this.response = {
      message: "",
      code: 204
    }
  }

  async getMatriculasByUser(id){
    const result = await this.db
      .select('*')
      .from('matriculas')
      .where({
        estudante_id: Number(id)
      });
    return result;
  }

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

}

module.exports = MatriculasAPI