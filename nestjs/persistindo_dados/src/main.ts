import { } from 'mysql2';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Connection } from 'mysql2/typings/mysql/lib/Connection';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
