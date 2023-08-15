using System;

namespace Calculadora
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Digite um valor: ");
      float valor1 = float.Parse(Console.ReadLine());

      Console.WriteLine("Digite outro valor: ");
      float valor2 = float.Parse(Console.ReadLine());

      if (Menu() == 1)
      {
        Console.WriteLine($"{Somar(valor1, valor2)}");
      }

      if (Menu() == 2)
      {
        Console.WriteLine($"{Subtrair(valor1, valor2)}");
      }

      if (Menu() == 3)
      {
        Console.WriteLine($"{Multiplicar(valor1, valor2)}");
      }

      if (Menu() == 4)
      {
        Console.WriteLine($"{Dividir(valor1, valor2)}");
      }

      if (Menu() == 5)
      {
        System.Environment.Exit(0);
      }


      /*  Console.WriteLine($"Primeiro valor: ");
       float firstValue = float.Parse(Console.ReadLine());

       Console.WriteLine($"Segundo valor: ");
       float secondValue = float.Parse(Console.ReadLine());

       var soma = Somar(firstValue, secondValue);
       var subtracao = Subtrair(firstValue, secondValue);
       var multiplicacao = Multiplicar(firstValue, secondValue);
       var divisao = Dividir(firstValue, secondValue);

       Console.WriteLine($"Soma = {soma}\n Subtração = {subtracao}\n  Multiplicação = {multiplicacao}\n    Divisão {divisao}"); */
    }

    static float Somar(float number1, float number2)
    {
      return number1 + number2;
    }

    static float Subtrair(float number1, float number2)
    {
      return number1 - number2;
    }

    static float Multiplicar(float number1, float number2)
    {
      return number1 * number2;
    }

    static float Dividir(float number1, float number2)
    {
      return number1 / number2;
    }

    static short Menu()
    {
      Console.Clear();

      Console.WriteLine($"O que deseja fazer?");
      Console.WriteLine($"1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão");
      Console.WriteLine("----------------------------");
      Console.WriteLine($"Selecione uma operaçao");
      short res = short.Parse(Console.ReadLine());

      return res;
    }
  }
}