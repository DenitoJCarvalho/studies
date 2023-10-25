import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { UserModule } from './modules/usuario.module';

import { MySQLConfigService } from './data/mysql.config';

import { AutenticacaoService } from './services/autenticacao.service';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: MySQLConfigService,
      inject: [MySQLConfigService]
    })
  ],
  providers: [
    { provide: AutenticacaoService, useClass: AutenticacaoService },
    { provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor },
  ],

})
export class AppModule { }
