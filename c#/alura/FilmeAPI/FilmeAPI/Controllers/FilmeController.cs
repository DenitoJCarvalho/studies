using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Infrastructure;

using FilmeAPI.Model;
using FilmeAPI.Data;
using FilmeAPI.Data.DTOs;
using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;

namespace FilmeAPI.Controllers;


[ApiController]
[Route("[controller]")]
public class FilmeController : ControllerBase
{
    private readonly FilmeContext _context;
    private IMapper _mapper;


    public FilmeController(
        FilmeContext context,
        IMapper mapper
    ) {
        _context = context;
        _mapper = mapper;
    }

    #region Adcionar
    /// <summary>
    /// Adiciona um filme a o banco de dados
    /// </summary>
    /// <param name="filmeDto"></param>Objeto com os campos necessários
    /// <returns>IActionResult</returns>
    /// <response code="201">Caso inserção seja feita com sucessos.</response>
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public IActionResult AdicionarFilme([FromBody] CreateFilmeDto filmeDto)
    {
        Filme filme = _mapper.Map<Filme>(filmeDto);

        _context.FIlmes.Add(filme);
        _context.SaveChanges();

        return CreatedAtAction(nameof(RecuperarFilePorId), new { id = filme.Id }, filme);
    }
    #endregion

    #region Recuperar todos
    /// <summary>
    /// Entrega todos os filmes disponíveis
    /// </summary>
    /// <param name="skip"></param>
    /// <param name="take">Retorna os 10 primeiros elementos</param>
    /// <returns>Retorna uma lista de filmes paginada</returns>
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public IEnumerable<Filme> RecuperarFilmes([FromQuery] int skip = 5, [FromQuery] int take = 10)
    {
        return (IEnumerable<Filme>)_mapper.Map<List<ReadFilmeDto>>(_context.FIlmes.Skip(skip).Take(take));
    }
    #endregion

    #region Recuperar por ID
    /// <summary>
    /// Retorna um filme por Id
    /// </summary>
    /// <param name="Id">Recebe o Id do filme para retorno</param>
    /// <returns>Retorna o objeto de acordo com filme.</returns>
    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public IActionResult RecuperarFilePorId(int Id)
    {
        var filme = _context.FIlmes.FirstOrDefault(filme => filme.Id.Equals(Id));

        if (filme is null) return NotFound();

        var filmeDto = _mapper.Map<ReadFilmeDto>(filme);

        return Ok(filmeDto);
    }
    #endregion

    #region Atualizar
    /// <summary>
    /// Atualiza um filme por ID
    /// </summary>
    /// <param name="id">Recebe o Id do filme a ser atualizado</param>
    /// <param name="filmeDto">Pegas os dados que serão atualziados</param>
    /// <returns>Retorna uma mensagem de sucesso caso tudo dê certo</returns>
    [HttpPut("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    public IActionResult Atualizarfilme(int id, [FromBody] UpdateFilmeDto filmeDto) {
        var filme = _context.FIlmes.FirstOrDefault(filme => filme.Id == id);

        if (filme is null) return NotFound();

        _mapper.Map(filmeDto, filme);
        _context.SaveChanges();

        return NoContent();
    }
    #endregion

    #region Atualização parcial
    /// <summary>
    /// Atualiza parcialmente um filme
    /// </summary>
    /// <param name="id">Recebe o Id do filme a ser atualizado</param>
    /// <param name="patch">Atualiza apenas os campos informados</param>
    /// <returns>Retorna uma mensagem de sucesso caso tudo dê certo</returns>
    [HttpPatch("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    public IActionResult AtualizarFilmeParcial(int id, JsonPatchDocument<UpdateFilmeDto> patch)
    {
        var filme = _context.FIlmes.FirstOrDefault(filme => filme.Id == id);

        if (filme is null) return NotFound();

        var filmeParaAtualizar = _mapper.Map<UpdateFilmeDto>(filme);

        patch.ApplyTo(filmeParaAtualizar, ModelState);

        if (!TryValidateModel(filmeParaAtualizar)) return ValidationProblem(ModelState);

        _mapper.Map(filmeParaAtualizar, filme);
        _context.SaveChanges();

        return NoContent();
    }
    #endregion

    #region Deletar
    /// <summary>
    /// Deleta um filme
    /// </summary>
    /// <param name="id"> ID di filme a ser deletado</param>
    /// <returns>Retorna uma mensagem de sucesso caso tudo dê certo</returns>
    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    public IActionResult DeletarFilme(int id)
    {
        var filme = _context.FIlmes.FirstOrDefault(filme => filme.Id == id);

        if (filme is null) return NotFound();

        _context.Remove(filme);
        _context.SaveChanges();

        return NoContent();
    }
    #endregion
}
