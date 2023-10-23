
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { env } from '../environment/env';

@Injectable()
export class MySQLConfigService implements TypeOrmOptionsFactory {

  constructor() { }

  createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: env.HOST,
      port: Number(env.MYSQL_PORT),
      username: env.MYSQL_USERNAME,
      password: env.MYSQL_PASSWORD,
      database: env.MYSQL_DB,
      entities: [__dirname + '/../**/*.entity.{js, ts}']
    }
  }
}