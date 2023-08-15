using Herancas;
using System;

namespace Herancas
{
  class Program
  {
    static void Main(string[] args)
    {
      var funcionario = new Funcionario
      {
        Nome = "Adrian",
        Idade = 2,
        DataDeNascimento = "27/02/2020",
        DataDeEmissao = "01/03/2020",
        EstadoDeEmissao = "SP",
        Cargo = "Criança Maluquinha",
        Contratacao = "27/03/2021"
      };

      var desenvolvedor = new Desenvolvedor
      {
        Nome = "Dennis",
        Idade = 34,
        DataDeNascimento = "24/03/1988",
        DataDeEmissao = "20/10/2018",
        EstadoDeEmissao = "SP"
      };

      Console.WriteLine(@$"
        Nome: {funcionario.Nome}
        Idade: {funcionario.Idade}
        Data de Nascimento: {DateTime.Parse(funcionario.DataDeNascimento).ToShortDateString()}
        Data de Emissão do Documento: {DateTime.Parse(funcionario.DataDeEmissao).ToShortDateString()}
        Estado em que foi emitido: {funcionario.EstadoDeEmissao}
        Exercerá a função de  {funcionario.Cargo}
        Contratado em {funcionario.Contratacao}
      ");
    }
  }
}