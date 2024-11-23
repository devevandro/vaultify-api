import {
  ForbiddenException,
  Header,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class ApiKeyMiddleware implements NestMiddleware {
  @Header('x-api-key', '')
  use(req: Request, _: Response, next: NextFunction) {
    if (!req.headers['x-api-key']) {
      throw new UnauthorizedException();
    }
    const key = req.headers['x-api-key'];
    const apiKey = process.env.API_KEY;

    if (apiKey !== key) {
      throw new ForbiddenException();
    }
    next();
  }
}
