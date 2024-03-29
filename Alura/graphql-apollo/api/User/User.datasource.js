const { RESTDataSource } = require('apollo-datasource-rest');

class UsersAPI extends RESTDataSource {

  constructor(){
    super();
    this.baseURL = 'http://localhost:3003';
    this.customResponse = {
      code: 200,
      message: "Operação efetuada com sucesso!"
    }
  }

  async getUsers({ paginator }){
    const page = paginator?.page || 1;
    const itensPerPage = paginator?.itensPerPage || 0;
    
    const query = itensPerPage ? 
      `/users?_page=${page}&_limit=${itensPerPage}` : 
      `/users?_page=${page}`;
    
    const users =  await this.get(query);    
    const result = users.map(async (user)=>{
      return { ...user }
    });
    return result;
  }

  async getUserById(id){
    const user = await this.get(`/users/${id}`);
    return { ...user };
  }

  async getRoleById(id){
    const role = await this.get(`/roles/${id}`);
    return { ...role };
  }

  async addUser(data){
    const users =  await this.get('/users'); 
    const role = await this.get(`/roles?role=${data.input.role}`)
    data.input.id = users.length + 1,
    await this.post('/users',{...data.input, role: role[0].id });

    return {
      ...this.customResponse,
      user: {
      ...data.input,
      role: role[0]
      }}
    ;
  }

  async updateUser(data){ 
    const role = await this.get(`/roles?role=${data.input.role}`);  
    await this.put(`/users/${data.id}`, {...data.input, role: role[0].id });

    return {
      ...this.customResponse,
      user: {
        id: data.id,
        ...data.input,
        role: role[0]
      }
    } ;
  }

  async deleteUser(id){ 
    await this.delete(`/users/${id}`);
    return id;
  }
}

module.exports = UsersAPI;