
namespace minimal.api.DTO;
public record LoginDTO
{
  public string Email { get; set; } = default!;
  public string Password { get; set; } = default!;
}