import { IsEmail, IsNotEmpty } from "class-validator";

export class AutenticaDto {
  @IsEmail(undefined, { message: `O e-mail informado não é válido` })
  email: string;

  @IsNotEmpty({ message: `A senha não pode ser vazia.` })
  senha: string;
}
