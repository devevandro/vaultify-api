import { Module } from '@nestjs/common';
import { UserController } from './controllers/UserController';

@Module({
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
