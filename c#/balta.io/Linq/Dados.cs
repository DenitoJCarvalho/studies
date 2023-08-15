using System;
using System.Collections.Generic;

namespace TestandoLinq
{
  public class Dados
  {
    var listaDeProdutos = new List<ProdutoModel>()
    {
      new Produto { id = 1, Nome = "Geladeira", Valor = 1000.00, status = 1 },
      new Produto { id = 2, Nome = "Carne", Valor = 100.00, status = 2 },
      new Produto { id = 3, Nome = "Camiseta", Valor = 10.00, status = 3 },
      new Produto { id = 4, Nome = "Video Game", Valor = 2000.00, status = 1 },
      new Produto { id = 5, Nome = "Feijão", Valor = 10.00, status = 2 },
      new Produto { id = 6, Nome = "Bermudas", Valor = 100.00, status = 3 },
    };
  }
}