using System.ComponentModel.DataAnnotations;

namespace FilmeAPI.Data.DTOs
{
    public class CreateCinemaDto
    {
        public string Nome { get; set; }

        public int EnderecoId { get; set; }
    }
}
