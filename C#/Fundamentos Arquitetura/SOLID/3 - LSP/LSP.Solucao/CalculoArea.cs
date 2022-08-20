using System;

namespace SOLID.LSP.Solucao
{
  /*
    Termos um classe abstrata Paralelograma
  */
  public abstract class Paralelogramo
  {
    protected Paralelogramo(int altura, int largura)
    {
      Altura = altura;
      Largura = largura;
    }

    public double Altura { get; private set; }
    public double Largura { get; private set ; }
    public double Area { get { return Altura * Largura; } } 
  }

  /*
    Termos um classe especialita para Quadrado
    que herda Paralelogramo
  */
  public class Quadrado : Paralelogramo
  {
    public Quadrado(int altura, int largura)
      : base(altura, largura)
    {
      if(largura != altura)
        throw new ArgumentException("Os dois lados do quadrado precisam ser iguais");
    }
  }

  /*
    E uma outra classe especialita para Retangulo
    que também herda Paralelogramo
  */
  public class Retangulo : Paralelogramo
  {
    public Retangulo(int altura, int largura)
      :base(altura,largura)
    {

    }
  }

  public class CalculoArea
  {
    /*
      Um método que aceita um paralelogramo,
      com isso ele aceita tanto Retangulos e Quadrados
      quanto Paralelogramos
    */
    private static void ObterAreaParalelogramo(Paralelogramo ret)
    {
      Console.Clear();
      Console.WriteLine("Calculo da área do Retangulo");
      Console.WriteLine();
      Console.WriteLine(ret.Altura + " * " + ret.Largura);
      Console.WriteLine();
      Console.WriteLine(ret.Area);
      Console.ReadKey();
    }

    /*
      Agora temos nossa abstraçào corretamente
      implementada, ambas classes Filhas de Paralelogramo
      podemos ser substituídas pela prória Paralelogramo
    */
    public static void Calcular()
    {
      var quad = new Quadrado(5,5);
      var ret = new Retangulo(10, 5);

      ObterAreaParalelogramo(quad);
      ObterAreaParalelogramo(ret);
    }
  }
}