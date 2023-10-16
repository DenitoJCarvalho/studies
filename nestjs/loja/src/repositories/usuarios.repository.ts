import { Delete, Injectable, Param } from "@nestjs/common";

import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserRepository {

  private users: UserEntity[] = [];

  constructor() { }

  private buscarId(id: string) {
    const possibleUser = this.users.find(
      userSave => userSave.id === id
    );

    if (!possibleUser) throw new Error('Usuário não existe.');

    return possibleUser;

  }

  async save(user: UserEntity) {
    this.users.push(user)
  }

  async listar() {
    return this.users;
  }

  async ExistWithEmail(email: string) {
    const possibleUser = this.users.find(user => {
      user.email === email
    });

    return possibleUser !== undefined;
  }

  async update(id: string, dataForUpdate: Partial<UserEntity>) {
    const user = this.buscarId(id);

    Object.entries(dataForUpdate).forEach(([key, value]) => {
      if (key === id) return;

      user[key] = value;
    });

    return user;
  }

  async remove(id: string) {
    const user = this.buscarId(id);

    this.users = this.users.filter(
      u => u.id !== id
    );

    return {
      usuario: user,
      message: `Usuário deletado com sucesso.`
    }

  }
}