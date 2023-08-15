using System;
namespace Testes
{
  class Program
  {
    static void Main(string[] args)
    {
      var data = DateTime.Now.ToShortTimeString();

      string saudacao;
      
      Console.WriteLine(data);
      Console.WriteLine(data.GetType());
      // if (data1 >= TimeSpan.Parse("12:01") && data1 <= TimeSpan.Parse("18:00"))
      // {
      //   Console.WriteLine("Boa tarde!");
      // }


    }
  }
}