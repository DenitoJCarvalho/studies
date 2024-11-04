using MinimalApi.Domain.Entities;
using MinimalApi.Domain.Dto;

namespace MinimalApi.Infrastructure.Interfaces;

public interface IAdministradorService
{
    List<Administrador> Login(LoginDTO loginDTO);

}
