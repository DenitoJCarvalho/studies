using Microsoft.EntityFrameworkCore;
using MinimalApi.Domain.Dto;
using MinimalApi.Infrastructure.Db;

var builder = WebApplication.CreateBuilder(args);

//Conexão com banco de dados
builder.Services.AddDbContext<Context>(options =>
{
  options.UseMySql(
    builder.Configuration.GetConnectionString("mysql"),
    ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("mysql"))
  );
});

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapPost("/login", (LoginDTO loginDTO) =>
{
  if (loginDTO.Email == "adm@teste.com" && loginDTO.Password == "123456")
  {
    return Results.Ok("Login com sucesso.");
  }
  else
  {
    return Results.Unauthorized();
  }
});

app.Run();
