using System;

namespace Expemplo3
{
  class Program
  {
    static void Main(string[] args)
    {
      Product produto = new Product();

      Console.WriteLine($"Código: {produto.Id = 1}");
      Console.WriteLine($"Produto: {produto.Name = "Zapato"}");
      Console.WriteLine($"Preço: {produto.Price = 52.99}");
    }
  }

  struct Product
  {
    public int Id;
    public string Name;
    public double Price;

    public Product(int id, string name, double price)
    {
      Id = id;
      Name = name;
      Price = price;
    }

    public double PriceInDolar(double dolar) { return Price * dolar; }
  }
}