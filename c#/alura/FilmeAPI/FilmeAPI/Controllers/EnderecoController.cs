using AutoMapper;
using FilmeAPI.Data;
using FilmeAPI.Data.DTOs;
using FilmeAPI.Model;
using Microsoft.AspNetCore.Mvc;

namespace FilmeAPI.Controllers;

public class EnderecoController : ControllerBase
{
    private IMapper _mapper;
    private FilmeContext _context;

    public EnderecoController(
        FilmeContext context,
        IMapper mapper
    ) {
        _context = context;
        _mapper = mapper;
    }

    #region Adicionar
    [HttpPost]
    public IActionResult AdicionarEnedereco([FromBody] CreateEnderecoDto enderecoDto) {

        Endereco endereco = _mapper.Map<Endereco>(enderecoDto);

        _context.Enderecos.Add(endereco);
        _context.SaveChanges();

        return CreatedAtAction(nameof(RecuperaEnderecoPorId), new { id = endereco.Id}, endereco);
    }
    #endregion

    #region Recuperar todos endereços
    [HttpGet]
    public IEnumerable<ReadEnderecoDto>RecuperarEnderecos()
    {
        return _mapper.Map<List<ReadEnderecoDto>>(_context.Enderecos);
    }
    #endregion

    #region Recupera por Id
    [HttpGet("{Id}")]
    public IActionResult RecuperaEnderecoPorId(int Id)
    {
        Endereco endereco = _context.Enderecos.FirstOrDefault(end => end.Id == Id);

        if (endereco != null)
        {
            ReadEnderecoDto enderecoDto = _mapper.Map<ReadEnderecoDto>(endereco);

            return Ok(enderecoDto);
        }
        return NotFound();
    }
    #endregion

    #region Atualizar
    [HttpPut("{Id}")]
    public IActionResult AtualizaEndereco(int Id, [FromBody] UpdateEnderecoDto enderecoDto)
    {
        Endereco endereco = _context.Enderecos.FirstOrDefault(end => end.Id == Id);

        if (endereco == null)
        {
            return NotFound();
        }

        _mapper.Map(enderecoDto, endereco);
        _context.SaveChanges();

        return NoContent();
    }
    #endregion

    #region Deletar
    public IActionResult DeletarEndereco(int Id)
    {
        Endereco endereco = _context.Enderecos.FirstOrDefault(end => end.Id == Id);

        if(endereco is null) return NotFound();

        _context.Remove(endereco);
        _context.SaveChanges();

        return NoContent();
    }
    #endregion
}
