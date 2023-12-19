using FilmeAPI.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//Configura��o para o banco de dados
var connectionString = builder.Configuration.GetConnectionString("FilmeConnection");

//Configura��o para o modelo de banco de dados (MySQL)
builder.Services.AddDbContext<FilmeContext>(options => 
options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString))
);

//Configura��o para o AutoMapper
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddControllers().AddNewtonsoftJson();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
