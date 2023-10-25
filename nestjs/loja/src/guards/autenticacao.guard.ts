import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { Request } from "express";

import { IPayload } from "src/interfaces/IPayload";
import { IRequisicaoComUsuario } from "src/interfaces/IRequisicaoComUsuario";

@Injectable()
export class AutenticacaoGuard implements CanActivate {

  constructor(
    private jwt: JwtService
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {

    const requisicao = context.switchToHttp().getRequest<IRequisicaoComUsuario>();
    const token = this.extrairTokenDoCabecalho(requisicao as unknown as Request);

    if (!token) throw new UnauthorizedException(`Erro de autenticação.`);

    try {
      const payload: IPayload = await this.jwt.verifyAsync(token);

      requisicao.usuario = payload;

    } catch (e) {
      throw new UnauthorizedException('JWT inválido.')
    }

    return true;
  }

  private extrairTokenDoCabecalho(requisicao: Request): string | undefined {

    const [tipo, token] = requisicao.headers.authorization?.split(' ') ?? [];

    return tipo === 'Bearer' ? token : undefined;
  }
}