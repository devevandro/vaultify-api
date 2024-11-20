import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ScheduleModule } from '@nestjs/schedule';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { AppController } from './AppController';
import { UserModule } from './main/http/User/UserModule';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api/(.*)'],
    }),
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
