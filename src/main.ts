import * as dotenv from 'dotenv';

import { NestFactory } from '@nestjs/core';

import { AppModule } from './AppModule';
import { ENVIRONMENTS } from './constants/ENVIRONMENTS';
import { connectToDataBase } from './infra/repositories/mongoose/connections';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api', { exclude: [''] });
  app.enableCors();

  await connectToDataBase();
  await app.listen(ENVIRONMENTS.PORT);
}

bootstrap();
