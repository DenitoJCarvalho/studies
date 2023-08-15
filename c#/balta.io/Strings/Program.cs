using System;
using System.Text;

namespace LearnStrings
{
  class Program
  {
    static void Main(string[] args)
    {

      var id = Guid.NewGuid().ToString().Substring(0, 8);
      var price = 10.2;
      var texto = " Testando ";
      var txt = new StringBuilder();

      Console.WriteLine(id);
      Console.WriteLine($"Código: {id} - Chuchu - R${price}0 /kg");
      Console.WriteLine(texto.CompareTo("Testando"));
      Console.WriteLine(texto.Contains("TestA", StringComparison.OrdinalIgnoreCase));
      Console.WriteLine(texto.StartsWith("tes", StringComparison.OrdinalIgnoreCase));
      Console.WriteLine(texto.EndsWith("indo", StringComparison.OrdinalIgnoreCase));
      Console.WriteLine(texto.Equals("Testando", StringComparison.OrdinalIgnoreCase));
      Console.WriteLine(texto.IndexOf("t"));
      Console.WriteLine(texto.Insert(8, " essa aula"));
      Console.WriteLine(texto.Split("-"));
      Console.WriteLine(texto.Trim());
      Console.WriteLine(txt.Append("Este texto é um teste"));
      Console.WriteLine(txt.Append("... É um teste ..."));
    }
  }

}