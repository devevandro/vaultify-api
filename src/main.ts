import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { ENVIRONMENTS } from './constants/ENVIRONMENTS';
import { connectToDataBase } from './infra/mongo/connections';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await connectToDataBase();
  await app.listen(ENVIRONMENTS.PORT);
  app.setGlobalPrefix('api');

  return app;
}

export const app = bootstrap();
