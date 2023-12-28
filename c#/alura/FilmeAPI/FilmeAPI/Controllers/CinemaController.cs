using AutoMapper;
using FilmeAPI.Data;
using FilmeAPI.Data.DTOs;
using FilmeAPI.Model;
using Microsoft.AspNetCore.Mvc;

namespace FilmeAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CinemaController : ControllerBase
    {
        private FilmeContext _context;
        private IMapper _mapper;

        public CinemaController(
            FilmeContext context,
            IMapper mapper
        ) { 
            _context = context;
            _mapper = mapper;
        }

        #region Adicionar
        /// <summary>
        /// Adiciona um novo cinema
        /// </summary>
        /// <param name="cinemaDto">Nome do cinema é obrigatório</param>
        /// <response code="201">Caso inserção seja feita com sucesso.</response>
        /// <returns>Retorna uma mensagem de 201 se tudo der certo</returns>
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public IActionResult AdicionarCinema([FromBody] CreateCinemaDto cinemaDto) 
        {
            Cinema cinema = _mapper.Map<Cinema>(cinemaDto);

            _context.Cinemas.Add(cinema);
            _context.SaveChanges();

            return CreatedAtAction(nameof(RecuperarCinemasPorId), new { Id = cinema.Id });
        }
        #endregion

        #region Recuperar cinemas
        /// <summary>
        /// Seleciona todos os cinemas
        /// </summary>
        /// <response code="200"></response>
        /// <returns>Uma lista de cinemas</returns>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IEnumerable<ReadCinemaDto> RecuperarCinemas()
        {
            return _mapper.Map<List<ReadCinemaDto>>(_context.Cinemas.ToList());
        }
        #endregion

        #region Recuperar cinema por id
        /// <summary>
        /// Recupara um cinema por id
        /// </summary>
        /// <param name="Id"></param>
        /// <response code="200"></response>
        /// <returns>Objeto referente ao id</returns>
        [HttpGet("{Id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult RecuperarCinemasPorId(int Id)
        {
            Cinema cinema = _context.Cinemas.FirstOrDefault(cinema => cinema.Id == Id);

            if(cinema is null)
            {
                return NotFound();
            }

            ReadCinemaDto cinemaDto = _mapper.Map<ReadCinemaDto>(cinema);
            return Ok(cinemaDto);

        }
        #endregion

        #region Atualizar cinema
        /// <summary>
        /// Atualiza um cinema por id
        /// </summary>
        /// <param name="Id"></param>
        /// <param name="cinemaDto"></param>
        /// <response code="204">Caso atualização seja feita com sucessos.</response>
        /// <returns>Mensagem de sucesso.</returns>
        [HttpPut]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public IActionResult AtualizarCinema(int Id, [FromBody] UpdateCinemaDto cinemaDto) 
        {
            Cinema cinema = _context.Cinemas.FirstOrDefault(cinema => cinema.Id == Id);

            if (cinema is null)
            {
                return NotFound();
            }

            cinemaDto = _mapper.Map<UpdateCinemaDto>(cinema);

            _context.SaveChanges();

            return NoContent();
        }
        #endregion

        #region Deletar
        /// <summary>
        /// Deleta um cinema por Id
        /// </summary>
        /// <param name="Id"></param>
        /// <response code="204"></response>
        /// <returns></returns>
        [HttpDelete("{Id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public IActionResult DeletarCinema(int Id)
        {
            Cinema cinema = _context.Cinemas.FirstOrDefault(cinema => cinema.Id == Id);

            if(cinema is null)
            {
                return NotFound();
            }

            _context.Remove(cinema);
            _context.SaveChanges();

            return NoContent();
        }
        #endregion
    }
}
