import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {

  private users = [];

  constructor() { }

  async save(user) {
    this.users.push(user);
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
}