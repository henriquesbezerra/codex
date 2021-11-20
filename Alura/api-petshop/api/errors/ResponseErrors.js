class ResponseErrors extends Error{

  constructor(status = 400, message = 'Erro desconhecido'){
    super(message);
    this.idError = 0;
    this.status = status;
  }

}

module.exports =  ResponseErrors;
