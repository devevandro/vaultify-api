import { Controller, Get, Redirect, Logger } from '@nestjs/common';

@Controller()
export class RedirectController {
  @Get('/')
  @Redirect('/api/health-check', 302)
  redirectToHealthCheck() {
    const logger = new Logger(RedirectController.name);
    logger.log('Redirect...');
  }
}
