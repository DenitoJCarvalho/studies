import { Body, Controller, Post, Get, } from '@nestjs/common';

import { UserRepository } from '../repositories/usuarios.repository';

import { CriarUsuarioDTO } from '../dto/criarUsuario.dto';

@Controller('/usuarios')
export class usuarioControlller {

  private user = new UserRepository();

  @Post()
  async create(@Body() dataUser: CriarUsuarioDTO) {
    this.user.save(dataUser);
    return dataUser;
  }

  @Get()
  async list() {
    return this.user.listar();
  }
}