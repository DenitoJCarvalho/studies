
namespace MinimalApi.Domain.Dto;
public record VeiculoDTO
{
  public int Id { get; set; }

  public string Nome { get; set; }

  public string Marca { get; set; }

  public int Ano { get; set; }
}