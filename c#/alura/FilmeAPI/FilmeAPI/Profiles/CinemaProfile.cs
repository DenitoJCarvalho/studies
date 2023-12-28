using AutoMapper;
using FilmeAPI.Data.DTOs;
using FilmeAPI.Model;

namespace FilmeAPI.Profiles
{
    public class CinemaProfile : Profile
    {
        public CinemaProfile()
        {
            CreateMap<CreateCinemaDto, Cinema>();
            CreateMap<Cinema, ReadCinemaDto>()
                .ForMember(
                    dto => dto.ReadEnderecoDto, 
                    opt => opt.MapFrom(cinema => cinema.Endereco));
            CreateMap<UpdateCinemaDto, Cinema>();

        }
    }
}
