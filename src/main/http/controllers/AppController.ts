import { Controller, Get } from '@nestjs/common';

@Controller('/health-check')
export class AppController {
  @Get('/')
  root() {
    return {
      code: 200,
      message: 'API is running - version 1.0.0',
    };
  }
}
