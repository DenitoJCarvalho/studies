import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

import { EmailIsUnique } from "../validators/email.validator";

export class CriarUsuarioDTO {

  @IsString()
  id: string;

  @IsString({ message: `Nome precisa ser uma string.` })
  @MinLength(3, { message: `O nome precisa ter pelo menos 3 caracteres.` })
  @IsNotEmpty({ message: `O nome não pode ser vazio.` })
  nome: string;


  @IsString({ message: `Profissão precisa ser uma string.` })
  @MinLength(3, { message: `A profissão precisa ter pelo menos 3 caracteres.` })
  @IsNotEmpty({ message: `O nome não pode ser vazio.` })
  profissao: string;

  @IsNotEmpty({ message: ` Email não pode ser vazio.` })
  @IsEmail(undefined, { message: `Email indefinido.` })
  @EmailIsUnique({ message: `Já existe usuário com esse email.` })
  email: string;

  @IsNotEmpty({ message: `senha não pode ser vazia.` })
  @MinLength(8, { message: `Senha precisa ter no mínimo 5 caracteres.` })
  @MaxLength(30, { message: `Senha pode ter no máximo 30 caracteres.` })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W+)(.{6,30})$/,
    {
      message: `A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula, um dígito, um caractere especial e ter entre 8 e 30 caracteres`
    })
  senha: string;

  createdAt: string;

  updatedAt: string;

  deletedAt: string;
}