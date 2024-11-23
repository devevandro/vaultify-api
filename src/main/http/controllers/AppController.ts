import { Controller, Get } from '@nestjs/common';

@Controller('/health')
export class AppController {
  @Get('/')
  root() {
    return {
      code: 200,
      mwssage: 'API is running - version 1.0.0',
    };
  }
}
