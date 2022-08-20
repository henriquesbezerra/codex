namespace SOLID.ISP.Violacao
{
    public interface ICadastro
    {
      void ValidarDados();
      void SalvarBanco();
      void EnviarEmail();
    }


    public class CadastroCliente : ICadastro
    {
      public void ValidarDados()
      {
        // Validar CPF, Email
      }

      public void SalvarBanco()
      {
        // Insert na tabela Cliente
      }

      public void EnviarEmail()
      {
        // Enviar e-mail para o cliente
      }
    }

    public class CadastroProduto : ICadastro
    {
      public void ValidarDados()
      {
        // Validar valor
      }

      public void SalvarBanco()
      {
        // Insert tabela Produto
      } 

      /*
        O Produto não possui e-mail, então
        não faz sentido implementar um método que não será
        utilizado, pois ele não serve para nada.
      */
      public void EnviarEmail()
      {
        throw new NotImplementedException("Esse metodo n�o serve pra nada");
      }
    }
}