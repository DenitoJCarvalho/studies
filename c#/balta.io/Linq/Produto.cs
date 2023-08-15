using System;
using System.Collections.Generic;

namespace TestandoLinq
{
  public class Produto
  {
    public List<ProdutoModel> Lista { get; set; }
    public class ProdutoModel
    {
      public byte Id { get; set; }
      public string Nome { get; set; }
      public double Valor { get; set; }
      public byte Status { get; set; }
    }
  }
}