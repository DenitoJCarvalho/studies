import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
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

    return usuariosMapeados;
  }
}