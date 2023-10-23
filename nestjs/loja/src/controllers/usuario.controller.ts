import { Body, Controller, Post, Get, Put, Delete, Param, } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { UserRepository } from '../repositories/usuarios.repository';

import { CriarUsuarioDTO } from '../dto/criarUsuario.dto';
import { listUserDTO } from '../dto/listUser.dto';
import { AtualziarUsuario } from '../dto/atualizarUsuario.dto';

import { UserEntity } from '../entity/user.entity';

import { UserService } from '../services/user.services';


@Controller('/usuarios')
export class usuarioControlller {

  private user = new UserRepository();

  constructor(
    private usuarioRepositorio: UserRepository,
    private usuarioService: UserService
  ) { }

  @Post()
  async create(@Body() dataUser: CriarUsuarioDTO) {

    const userEntity = new UserEntity();

    userEntity.email = dataUser.email;
    userEntity.senha = dataUser.senha;
    userEntity.nome = dataUser.nome;
    userEntity.profissao = dataUser.profissao;
    userEntity.id = uuid();

    this.usuarioService.criarUsuario(userEntity);
    return {
      message: `Usuário ID:${userEntity.id} criado com sucesso.`
    }
  }

  @Get()
  async list() {
    const usersSaves = await this.usuarioService.listaUsuarios();

    return usersSaves;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() dataForUpdate: AtualziarUsuario) {
    const userUpdate = await this.user.update(id, dataForUpdate);

    return {
      usuario: userUpdate,
      message: `Usuário ID:${id} atualizado com sucesso.`
    }
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const userRemove = await this.remove(id);

    return {
      usuario: userRemove,
      message: `Usuário removido com sucesso.`
    }
  }
}