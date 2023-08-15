namespace Exemplo4
{
  class Program
  {
    static void Main(string[] args)
    {
      Product produto = new Product();

      Console.WriteLine($"Codigo: {produto.Id = 01}\nProduto: {produto.Name = "Camiseta"}\nPreço: US${produto.Price = 25.99}\nTipo: {EProductType.Product}");
    }
  }

  struct Product
  {
    // Propriedades
    public int Id { get; set; }
    public string Name { get; set; }
    public double Price { get; set; }
    public EProductType Type { get; set; }

    // Método constructor
    public Product(int id, string name, double price, EProductType type)
    {
      Id = id;
      Name = name;
      Price = price;
      Type = type;
    }

    public double PriceInDolar(double dolar) { return Price * dolar; }
  }

  enum EProductType
  {
    Product = 1,
    Service = 2,
  }
}