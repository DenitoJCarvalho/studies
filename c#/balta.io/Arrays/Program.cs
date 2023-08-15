namespace Arrays
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.Clear();
      Console.WriteLine("Tipos de Array no dotnet");

      var primeiroArray = new int[5] { 10, 20, 9, 0, 2 };


      try
      {
        foreach (var item in primeiroArray)
        {
          Console.WriteLine($"{item * 2 % 5}");
        }
      }
      catch (Exception ex)
      {
        Console.WriteLine(ex.Message);
      }

      Console.WriteLine(
        @$"
        {primeiroArray[0]} {primeiroArray[1]} {primeiroArray[2]} {primeiroArray[3]} {primeiroArray[4]}
        quantidade de arrays: {primeiroArray.Length}
        "
      );
    }
  }
}