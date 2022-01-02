class ConversorPost{

  constructor(contentType, content){
    this.contentType = contentType;
    this.content = content;
    this.fields = ['titulo', 'conteudo'];
  }

  converter(dados){
    dados = this.filtrar(dados);


    if(this.contentType === 'json'){
      return this.json(dados);
    }
  }

  json(dados){
    return JSON.stringify(dados);
  }

  filtrar(dados){
    if(Array.isArray(dados)){
      dados = dados.map(post => this.filtrarObjeto(post));
    }else{
      dados = this.filtrarObjeto(dados);
    }
  }

  filtrarObjeto(obj){
    const result = {};

    this.fields.forEach((field)=>{
      if(Reflect.has(obj, field)){
        result[field] = obj[field];
      }
    });

    return result;
  }

}

module.exports = ConversorPost;