import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { MySqlConfig } from './data/mysql.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: MySqlConfig,
      inject: [MySqlConfig]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
