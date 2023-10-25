import { Repository } from 'typeorm';

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { listUserDTO } from '../dto/listUser.dto';

import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) { }

  async listaUsuarios() {
    const listaDeUsuarios = await this.userRepository.find();
    const usuariosMapeados = await listaDeUsuarios.map(user => {
      new listUserDTO(user.id, user.nome);
    });

    if (listaDeUsuarios === null) throw new NotFoundException('Lista de usuário não encontrada.');

    return usuariosMapeados;
  }

  async criarUsuario(usuarioEntity: UserEntity) {

    if (usuarioEntity === null) throw new BadRequestException('Erro ao cadastrar usuáriio');

    await this.userRepository.save(usuarioEntity);
  }
}