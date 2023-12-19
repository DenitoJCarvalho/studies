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
    [HttpPost]
    public IActionResult AdicionarFilme([FromBody] CreateFilmeDto filmeDto)
    {
        Filme filme = _mapper.Map<Filme>(filmeDto);

        _context.FIlmes.Add(filme);
        _context.SaveChanges();

        return CreatedAtAction(nameof(RecuperarFilePorId), new { id = filme.Id }, filme);
    }
    #endregion

    #region Recuperar todos
    [HttpGet]
    public IEnumerable<Filme> RecuperarFilmes([FromQuery] int skip = 0, [FromQuery] int take = 10)
    {
        return (IEnumerable<Filme>)_mapper.Map<List<ReadFilmeDto>>(_context.FIlmes.Skip(skip).Take(take));
    }
    #endregion

    #region Recuperar por ID
    [HttpGet("{id}")]
    public IActionResult RecuperarFilePorId(int Id)
    {
        var filme = _context.FIlmes.FirstOrDefault(filme => filme.Id.Equals(Id));

        if (filme is null) return NotFound();

        var filmeDto = _mapper.Map<ReadFilmeDto>(filme);

        return Ok(filmeDto);
    }
    #endregion

    #region Atualizar
    [HttpPut("{id}")]
    public IActionResult Atualizarfilme(int id, [FromBody] UpdateFilmeDto filmeDto) {
        var filme = _context.FIlmes.FirstOrDefault(filme => filme.Id == id);

        if (filme is null) return NotFound();

        _mapper.Map(filmeDto, filme);
        _context.SaveChanges();

        return NoContent();
    }
    #endregion

    #region Atualização parcial
    [HttpPatch("{id}")]
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
    [HttpDelete("{id}")]
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
