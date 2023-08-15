using System;

namespace MeuApp
{
  class Program
  {
    static void Main(string[] args)
    {
      var texto = "Nesse teste funcionei ...";
      byte tipo = 0;
      float salario = 2.500f;
      double salSemestral = 10.000;
      decimal salAnual = 28.000m;
      char vogal = 'A';

      float valor = 25.8F;
      int outro = 25;

      int numero1 = -120;
      uint numero1SemSinal = (uint)numero1;

      valor = outro;

      string numTxt = "100";
      int numero2 = int.Parse(numTxt);

      int numConvert = Convert.ToInt16("225");

      string nome = RetornaNome("Adrian");

      Console.WriteLine($"{texto}");
      Console.WriteLine($"{tipo} =  negativo");
      Console.WriteLine($"O salário é R${salario} dolares");
      Console.WriteLine($"O salário é R${salSemestral} dolares");
      Console.WriteLine($"O salário é R${salAnual} dolares");
      Console.WriteLine($"{vogal} é uma vogal.");
      Console.WriteLine($"valor = {valor} outro = {outro}");
      Console.WriteLine($"O valor do primeiro numero é {numero1} e agora passou a ser {numero1SemSinal}");
      Console.WriteLine($"O tipo de {numTxt} é {numTxt.GetType()}");
      Console.WriteLine($"O tipo de {numero2} é {numero2.GetType()}");
      Console.WriteLine($"O tipo da variável convertida ficou {numConvert.GetType()}");
      Console.WriteLine($"O nome digitado é {nome}");

      MeuMetodo();

    }

    static void MeuMetodo()
    {
      Console.WriteLine($"Eu sou um método.");
    }

    static string RetornaNome(string name)
    {
      return name;
    }
  }
}

