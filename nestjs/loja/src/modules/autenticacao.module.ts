import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from '../modules/usuario.module';

import { AutenticacaoController } from '../controllers/autenticacao.controller';

import { AutenticacaoService } from '../services/autenticacao.service';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: 'SEGREDO_SECRETO',
      signOptions: { expiresIn: '24h' }
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
