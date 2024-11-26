import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './main/http/controllers/AppController';
import { CommandController } from './main/http/controllers/CommandController';
import { UserController } from './main/http/controllers/UserController';
import { ApiKeyMiddleware } from './main/http/middleware/ApiKeyMiddleware';
import { RateLimitModule } from './main/rateLimit/RateLimitModule';

@Module({
  imports: [ConfigModule.forRoot(), ScheduleModule.forRoot(), RateLimitModule],
  controllers: [AppController, CommandController, UserController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware).forRoutes('/users');
    consumer.apply(ApiKeyMiddleware).forRoutes('/commands');
  }
}
