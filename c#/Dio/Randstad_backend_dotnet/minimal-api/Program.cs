using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using MinimalApi.Domain.Dto;
using MinimalApi.Domain.Services;
using MinimalApi.Infrastructure.Db;
using MinimalApi.Infrastructure.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IAdministradorService, AdministadorService>();

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

app.MapPost("/login", ([FromBody] LoginDTO loginDTO, IAdministradorService administrador) =>
{
  if (administrador.Login(loginDTO) != null)
  {
    return Results.Ok("Login com sucesso.");
  }
  else
  {
    return Results.Unauthorized();
  }
});

app.Run();
