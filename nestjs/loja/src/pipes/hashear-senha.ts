import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

import { hash } from 'bcrypt';

import { env } from '../environment/env';

@Injectable()
export class HashearSenha implements PipeTransform {
  async transform(senha: string) {

    const sal = env.SAL_SENHA;

    const senhaHasheada = await hash(senha, sal);

    return senhaHasheada;

  }
}