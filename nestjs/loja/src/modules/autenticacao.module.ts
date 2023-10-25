import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from '../modules/usuario.module';

import { AutenticacaoController } from '../controllers/autenticacao.controller';

import { AutenticacaoService } from '../services/autenticacao.service';

import { env } from 'src/environment/env';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      useFactory: () => {
        return {
          secret: env.SEGREDO_SECRETO,
          signOptions: { expiresIn: '24h' }
        }
      },
      global: true,
    })
  ],
  controllers: [
    AutenticacaoController
  ],
  providers: [
    AutenticacaoService
  ],
})
export class AutenticacaoModule { }
