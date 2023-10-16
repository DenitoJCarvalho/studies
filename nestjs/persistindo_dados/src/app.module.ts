import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MYSqlConfig } from './data/mysql.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: MYSqlConfig,
      inject: [MYSqlConfig]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
