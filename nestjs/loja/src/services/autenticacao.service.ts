import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { compare } from 'bcrypt';

import { IPayload } from '../interfaces/IPayload';

import { UserService } from '../services/user.services';

@Injectable()
export class AutenticacaoService {

  constructor(
    private usuarioService: UserService,
    private jwt: JwtService
  ) { }

  async login(email: string, senha: string) {
    const usuario = await this.usuarioService.listaUsuarios();

    const usuarioAutenticado = await compare(senha, 'usuario')
      .then(res => { return `Usuário autenticado.` })
      .catch(e => { throw new UnauthorizedException(`E-mail ou senha incorreto.`) });

    const payload: IPayload = {
      sub: `usuario_id`,
      nome: `usuario_nome`
    }

    return {
      token_acesso: await this.jwt.signAsync(payload),
    }
  }
}
