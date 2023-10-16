import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { env } from '../environment/env';

@Injectable()
export class MYSqlConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: env.HOST,
      port: env.MYSQL_PORT,
      username: env.MYSQL_USERNAME,
      password: env.MYSQL_PASSWORD,
      database: env.MYSQL_DB,
      entities: [],
      synchronize: true
    }
  }
}