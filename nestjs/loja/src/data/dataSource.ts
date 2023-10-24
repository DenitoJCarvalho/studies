import { DataSource, DataSourceOptions } from 'typeorm';

import { env } from '../environment/env';


const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: env.HOST,
  port: env.MYSQL_PORT,
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DB,
  entities: [__dirname + '/src/entity/*.entity.ts'],
  migrations: [__dirname + '/src/data/migrations/*.ts']
}

export const dataSource = new DataSource(dataSourceOptions);



