import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

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
  @MinLength(5, { message: `Senha precisa ter no mínimo 5 caracteres.` })
  senha: string;

  createdAt: string;

  updatedAt: string;

  deletedAt: string;
}