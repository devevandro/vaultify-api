import { HttpException } from '@nestjs/common';

abstract class AppError extends HttpException {
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message, statusCode);
    this.statusCode = statusCode;
  }
}

export default AppError;
