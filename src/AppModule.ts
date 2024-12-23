import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './main/http/controllers/AppController';
import { CommandController } from './main/http/controllers/CommandController';
import { FavoriteController } from './main/http/controllers/FavoriteController';
import { PasswordController } from './main/http/controllers/PasswordController';
import { RedirectController } from './main/http/controllers/RedirectController';
import { SecretController } from './main/http/controllers/SecretController';
import { UserController } from './main/http/controllers/UserController';
import { ApiKeyMiddleware } from './main/http/middleware/ApiKeyMiddleware';
import { RateLimitModule } from './main/rateLimit/RateLimitModule';

@Module({
  imports: [ConfigModule.forRoot(), ScheduleModule.forRoot(), RateLimitModule],
  controllers: [
    RedirectController,
    AppController,
    FavoriteController,
    CommandController,
    PasswordController,
    UserController,
    SecretController,
  ],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiKeyMiddleware)
      .forRoutes('/users', '/favorite', '/commands', '/secrets');
  }
}
