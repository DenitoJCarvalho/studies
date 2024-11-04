using MinimalApi.Infrastructure.Interfaces;
using MinimalApi.Infrastructure.Db;
using MinimalApi.Domain.Dto;
using MinimalApi.Domain.Entities;

namespace MinimalApi.Domain.Services;

public class AdministadorService : IAdministradorService
{
    private readonly Context _context;

    public AdministadorService(
        Context db
    )
    {
        _context = db;
    }

    public List<Administrador> Login(LoginDTO loginDTO)
    {
        var login = _context.Administradres
            .Where(a => a.Email.Equals(loginDTO.Email) && a.Senha.Equals(loginDTO.Password))
            .ToList();

        return login;
    }
}
