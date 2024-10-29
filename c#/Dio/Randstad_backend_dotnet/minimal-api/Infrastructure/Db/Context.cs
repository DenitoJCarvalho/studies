using Microsoft.EntityFrameworkCore;

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