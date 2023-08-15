using System;
using System.Globalization;

namespace Moedas
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.Clear();
      decimal valor = 10.40M;

      //Math
      decimal valor1 = 20.405M;

      Console.WriteLine(valor.ToString("C", CultureInfo.CreateSpecificCulture("pt-BR")));
      Console.WriteLine(valor.ToString("C", CultureInfo.CreateSpecificCulture("es-ES")));
      Console.WriteLine(valor.ToString("C", CultureInfo.CreateSpecificCulture("en-US")));
      Console.WriteLine(valor.ToString("P", CultureInfo.CreateSpecificCulture("en-US")));
      Console.WriteLine(Math.Round(valor));
      Console.WriteLine(Math.Ceiling(valor));
      Console.WriteLine(Math.Floor(valor));
    }
  }

}