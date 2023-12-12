using System.ComponentModel.DataAnnotations;

namespace FilmeAPI.Model;

public class Filme
{
    [Key]
    [Required]
    public int Id { get; set; }

    [Required(ErrorMessage = "O titulo do filme é obrigatório")]
    [StringLength(30)]
    public string Titulo { get; set; }

    [Required(ErrorMessage = "O gênero do filme é obrigatório")]
    public string Genero { get; set; }

    [Required(ErrorMessage = "A duração do filme é obrigatório")]
    [Range(70, 600, ErrorMessage = "A duração deve ter entre 70 a 600 minutos.")]
    public int Duracao { get; set; }

    public string? Diretor { get; set; }
}
