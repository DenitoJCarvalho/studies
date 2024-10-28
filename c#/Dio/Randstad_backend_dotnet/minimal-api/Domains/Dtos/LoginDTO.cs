
namespace MinimalApi.Domain.Dto;
public record LoginDTO
{
  public string Email { get; set; } = default!;
  public string Password { get; set; } = default!;
}