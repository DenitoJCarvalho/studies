using System;

namespace Exemplos
{
  class Program
  {

    static void Main(string[] args)
    {
      int x = 25;
      int y = x;
      x = 32;

      Console.WriteLine($"Valor de X = {x}, valor de y = {y}");
    }
  }
}