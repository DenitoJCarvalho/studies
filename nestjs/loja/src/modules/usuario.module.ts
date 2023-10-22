import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

import { usuarioControlller } from '../controllers/usuario.controller';

import { UserRepository } from '../repositories/usuarios.repository';

import { EmailValidator } from '../validators/email.validator';

import { UserEntity } from '../entity/user.entity';

import { UserService } from '../services/user.services';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity
    ])
  ],
  controllers: [
    usuarioControlller
  ],
  providers: [
    UserRepository,
    EmailValidator,
    UserService
  ]
})
export class UserModule { };