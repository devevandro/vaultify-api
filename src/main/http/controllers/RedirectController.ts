/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get, Redirect } from '@nestjs/common';

@Controller('/')
export class RedirectController {
  @Get('/')
  @Redirect('/api/health-check', 302)
  redirectToHealthCheck() {}
}
