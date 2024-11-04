using MinimalApi.Domain.Entities;
using MinimalApi.Domain.Dto;
using minimal_api.Domains.Entities;

namespace MinimalApi.Infrastructure.Interfaces;

public interface IVeiculoService
{
    List<Veiculo> Veiculos(int pagina);
    List<Veiculo> Veiculos(int pagina, string nome);
    List<Veiculo> Veiculos(int pagina, string nome, string marca);
    List<Veiculo> Veiculos(int pagina, string nome, string marca, int ano = 0);
    List<Veiculo> VeiculosPorNome(string name);
    List<Veiculo> VeiculosPorMarca(string marca);
    List<Veiculo> VeiculosPorAno(int ano);
    Veiculo GetForId(int Id);
    void Add(Veiculo veiculo);
    void Update(Veiculo veiculo);
    void Delete(Veiculo veiculo);

}
