using Microsoft.EntityFrameworkCore;

using FilmeAPI.Model;

namespace FilmeAPI.Data;

public class FilmeContext : DbContext
{
    public FilmeContext(
        DbContextOptions<FilmeContext>options    
    ) : base(options) { }

    public DbSet<Filme> FIlmes { get; set; }
}
