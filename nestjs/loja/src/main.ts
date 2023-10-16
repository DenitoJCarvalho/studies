import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

import { AppModule } from './app.module';

import { normalizePort } from '../server/server';
import { dotenv } from '../environment/dotenv';

let port: number = normalizePort(dotenv.PORT_SERVER || '3000') as number;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`)
  });
}
bootstrap();
