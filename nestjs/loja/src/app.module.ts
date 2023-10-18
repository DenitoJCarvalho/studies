import { Module } from '@nestjs/common';

import { UserModule } from './modules/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'

import { MySqlConfig } from './data/mysql.config';


@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: MySqlConfig,
      inject: [MySqlConfig]
    })
  ],
})
export class AppModule { }
