import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './main/http/controllers/AppController';
import { UserController } from './main/http/controllers/UserController';

@Module({
  imports: [ConfigModule.forRoot(), ScheduleModule.forRoot()],
  controllers: [AppController, UserController],
  providers: [],
})
export class AppModule {}
