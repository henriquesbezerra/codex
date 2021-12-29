const nodemailer = require('nodemailer');

const configuracaoEmailTeste = (contaTeste) => ({
  host: 'smtp.ethereal.email',
  auth: contaTest
});

async function criaConfiguracaoEmail(){
  if(process.env.NODE_ENV === 'prod'){
    return {
      host: process.env.EMAIL_HOST,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      secure: true // habilita tls
    };
  } else{
    // Conta de teste disponibilizada pelo próprio nodemailer
    const contaTest = await nodemailer.createTestAccount();
    return configuracaoEmailTeste(contaTest);
  }
}

class Email {
  async enviaEmail(){
    const configEmail = await criaConfiguracaoEmail();  
    /**
     * Transportador, objeto responsável pelo envio do email
     */
    const transportador = nodemailer.createTransport(configEmail);
  
    const info = await transportador.sendMail(this);
    
    if(process.env.NODE_ENV !== 'prod'){
      console.log('URL: ', nodemailer.getTestMessageUrl(info));
    }
    
  }
}

class EmailVerificacao extends Email{
  
  constructor(usuario, endereco){
    super();
    this.from = '"Blog do Código" <noreply@blogodocodico.com.br>';
    this.to = usuario.email;
    this.subject = 'Verificação de e-mail';
    this.text = `Olá! Verifique seu e-mail aqui: ${endereco}`;
    this.html = `<h1>Olá!</h1> Verifique seu e-mail aqui: 
      <a href="${endereco}" target="_blank">Aqui</a>`;
  }
  
}

module.exports = {
  EmailVerificacao
};
