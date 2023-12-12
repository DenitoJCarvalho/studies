using AutoMapper;
using FilmeAPI.Data.DTOs;
using FilmeAPI.Model;

namespace FilmeAPI.Profiles;

public class FilmeProfile : Profile
{
    public FilmeProfile() 
    {
        CreateMap<CreateFilmeDto, Filme>();
    }
}
