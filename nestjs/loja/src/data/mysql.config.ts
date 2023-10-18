import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { env } from '../environment/env';

@Injectable()
export class MySqlConfig implements TypeOrmOptionsFactory {

  constructor(
    private configService: ConfigService
  ) { }

  createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: env.HOST,
      port: env.MYSQL_PORT,
      username: env.MYSQL_USERNAME,
      password: env.MYSQL_PASSWORD,
      database: env.MYSQL_DB,
      entities: [__dirname + '/**/*.entity{.js, .ts}'],
      synchronize: true,
      charset: 'utf8',
      migrations: [],

    }
  }
}