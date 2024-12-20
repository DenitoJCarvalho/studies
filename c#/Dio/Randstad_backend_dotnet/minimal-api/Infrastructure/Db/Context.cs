using Microsoft.EntityFrameworkCore;
using minimal_api.Domains.Entities;
using MinimalApi.Domain.Entities;

namespace MinimalApi.Infrastructure.Db;
public class Context : DbContext
{

    private readonly IConfiguration _configuracaoAppSettings;
    public Context(
        IConfiguration configuracaoAppSettings
    )
    {
        _configuracaoAppSettings = configuracaoAppSettings;
    }

    public DbSet<Administrador> Administradres { get; set; } = default!;
    public DbSet<Veiculo> Veiculos { get; set; } = default!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Administrador>().HasData(
            new Administrador
            {
                Id = 1,
                Email = "administrador@teste.com",
                Senha = "12345678",
                Perfil = "Adm"
            }
        );
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var stringConnection = _configuracaoAppSettings.GetConnectionString("mysql");

        if (!optionsBuilder.IsConfigured)
        {

            if (!string.IsNullOrEmpty(stringConnection))
            {
                optionsBuilder.UseMySql(
                    stringConnection,
                    ServerVersion.AutoDetect(stringConnection)
                );

            }

        }


    }
}