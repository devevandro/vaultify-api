import { Controller, Get } from '@nestjs/common';

@Controller('/health-check')
export class AppController {
  @Get('/')
  root() {
    return {
      response: {
        health: 'Running',
        version: '1.0.0',
        environment: process.env.NODE_ENV === 'prod' ? 'prod' : 'stage',
        status: 200,
      },
    };
  }
}
