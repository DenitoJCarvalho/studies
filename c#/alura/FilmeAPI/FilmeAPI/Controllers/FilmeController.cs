using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Infrastructure;

using FilmeAPI.Model;
using FilmeAPI.Data;
using FilmeAPI.Data.DTOs;
using AutoMapper;

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

    [HttpPost]
    public IActionResult AdicionarFilme([FromBody] CreateFilmeDto filmeDto)
    {
        Filme filme = _mapper.Map<Filme>(filmeDto);

        _context.FIlmes.Add(filme);
        _context.SaveChanges();
        return CreatedAtAction(nameof(RecuperarFilePorId), new { id = filme.Id }, filme);
    }

    [HttpGet]
    public IEnumerable<Filme> RecuperarFilmes([FromQuery]int skip = 0, [FromQuery]int take = 10)
    {
        return _context.FIlmes.Skip(skip).Take(take);
    }

    [HttpGet("{id}")]
    public IActionResult RecuperarFilePorId(int Id)
    {
        var filme = _context.FIlmes.FirstOrDefault(filme => filme.Id.Equals(Id));
    
        if (filme is null) return NotFound();

        return Ok(filme);
    }
}
