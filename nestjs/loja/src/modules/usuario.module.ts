import { Module } from "@nestjs/common";

import { usuarioControlller } from '../controllers/usuario.controller';

import { UserRepository } from '../repositories/usuarios.repository';

import { EmailValidator } from '../validators/email.validator';

@Module({
  controllers: [
    usuarioControlller
  ],
  providers: [
    UserRepository,
    EmailValidator
  ]
})
export class UserModule { };