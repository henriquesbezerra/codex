using System;

namespace SOLID.LSP.Violacao
{
  /*
    Temos um classe Retangulo, para representar 
    o paralelogramo retângulo.
    Essa classe possui um método para calcular a Area 
    desse polígono.
  */ 
  public class Retangulo
  {
    public virtual double Altura { get; set; }
    public virtual double Largura { get; set; }
    public double Area { get { return Altura * Largura; } }
  }

  /*
    Em alguma qualquer circunstância, foi necessário criar um novo 
    paralelogramo para representar um quadrado
    e que também precisaremos calcular a área.

    Sabendo que a classe Retângulo possui o método Area() que
    cacula a área do paralelogramo, resolvemos herda-lá para reaproveitar
    seu comportamento de cáculo de área.
  */ 
  public class Quadrado : Retangulo
  {

    /*
      Porém sabendo que diferente de um retângulo, um quadrado possui
      lados iguais, fizemos uma sobscrita nas propriedades Altura e Largura
      forçando-as serem iguais. Então independente de atribuirmos
      valores distintos para Altura e Largura quando instanciarmos um objeto
      da classe Quadrado, suas Propriedades sempre serão iguais.

      Nesse ponto causamos a violação do princípio por estar forçando
      a igualdade das propriedades Altura e Largura, pois a subclasse Quadrado
      que deveria se comportar como sua classe pai no cálculo da área,
      ira limitar o comportamento da classe pai que possibilita
      que haja diferentes Alturas e Larguras.

      Então nesse caso não será possível fazer a substituição da classe Quadrado
      pela classe Retangulo, pois o comportamento original não será preservado.

      Portanto a classe Quadrado nunca deveria ter sido herdada de Triangulo.
    */
    public override double Altura
    {
      set { base.Altura = base.Largura = value; }
    }

    public override double Largura
    {
      set { base.Altura = base.Largura = value; }
    }
  }

  public class CalculoArea
  {
    /*
      Tendo nossas classes preparadas, construímos o método
      ObterAreaRetangulo(), que aceita um objeto da classe
      Retangulo e nos mostra o resultado do calculo da área.

      Sabendo que a classe Quadrado é subclasse de Retangulo,
      então o método ObterAreaRetangulo() também aceitara um objeto
      da classe Quadrado.     
    */
    private static void ObterAreaRetangulo(Retangulo ret)
    {
      Console.Clear();
      Console.WriteLine("Calculo da área do Retangulo");
      Console.WriteLine();
      Console.WriteLine(ret.Altura + " * " + ret.Largura);
      Console.WriteLine();
      Console.WriteLine(ret.Area);
      Console.ReadKey();
    }

    public static void Calcular()
    {
      /*
        Aproveitando o método ObterAreaRetangulo()
        criamos um objeto da classe Quadrado e o passaremos 
        para o método ObterAreaRetangulo() a fim de obtermos a 
        Area do Quadrado. Porém devemos lembrar que a premissa de
        um quadrado é possuir Altura igual à Largura
      */
      var quad = new Quadrado()
      {
        Altura = 10,
        Largura = 5
      };

      /*
        Então a obtenção da area pelo método
        ObterAreaRetangulo() sempre será limitado
        pela premissa do quadrado.
      */
      ObterAreaRetangulo(quad);
    }
  }
}