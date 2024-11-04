using MinimalApi.Infrastructure.Interfaces;
using MinimalApi.Infrastructure.Db;
using MinimalApi.Domain.Dto;
using MinimalApi.Domain.Entities;
using minimal_api.Domains.Entities;
using Microsoft.AspNetCore.Http.HttpResults;

namespace MinimalApi.Domain.Services;

public class VeiculoService : IVeiculoService
{
    private readonly Context _context;

    public VeiculoService(
        Context db
    )
    {
        _context = db;
    }

    public List<Veiculo> Veiculos(int pagina)
    {
        var veiculos = _context.Veiculos.ToList().Take(pagina).Skip((pagina - 1) * 10);

        return veiculos.ToList();
    }

    public List<Veiculo> Veiculos(int pagina, string nome)
    {
        var veiculos = _context.Veiculos.Where(v => v.Nome.Contains(nome)).ToList().Take(pagina).Skip((pagina - 1) * 10);

        return veiculos.ToList();
    }

    public List<Veiculo> Veiculos(int pagina, string nome, string marca)
    {
        var veiculos = _context.Veiculos.Where(v => v.Nome.Contains(nome) && v.Marca.Contains(marca)).ToList().Take(pagina).Skip((pagina - 1) * 10);

        return veiculos.ToList();
    }

    public List<Veiculo> Veiculos(int pagina, string nome, string marca, int ano = 0)
    {
        var veiculos = _context.Veiculos.Where(v => v.Nome.Contains(nome) && v.Marca.Contains(marca) && v.Ano.Equals(ano)).ToList().Take(pagina).Skip((pagina - 1) * 10);

        return veiculos.ToList();
    }

    public Veiculo GetForId(int Id)
    {
        var veiculo = _context.Veiculos.FirstOrDefault(v => v.Id.Equals(Id)) ?? throw new ArgumentException("Veiculo não encontrado.");
        return veiculo;
    }

    public List<Veiculo> VeiculosPorNome(string name)
    {
        var veiculoPorNome = _context.Veiculos.Where(vpm => vpm.Nome.Contains(name)).ToList() ?? throw new Exception("Veiculos não encontrados com esse nome.");

        return veiculoPorNome;
    }

    public List<Veiculo> VeiculosPorMarca(string marca)
    {
        var veiculosPorMarca = _context.Veiculos.Where(vpm => vpm.Marca.Contains(marca)).ToList() ?? throw new Exception("Veiculos não encontrados com essa marca.");

        return veiculosPorMarca;
    }

    public List<Veiculo> VeiculosPorAno(int ano)
    {
        var veiculosPorAno = _context.Veiculos.Where(vpa => vpa.Ano.Equals(ano)).ToList() ?? throw new Exception("Veiculos não encontrados com esse ano.");

        return veiculosPorAno;
    }

    public void Add(Veiculo veiculo)
    {
        _context.Veiculos.Add(veiculo);
        _context.SaveChanges();

    }

    public void Update(Veiculo veiculo)
    {
        _context.Veiculos.Update(veiculo);
        _context.SaveChanges();
    }

    public void Delete(Veiculo veiculo)
    {
        _context.Veiculos.Remove(veiculo);
        _context.SaveChanges();

    }
}
