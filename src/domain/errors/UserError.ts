import AppError from '../../core/AppError';

type ErrorResponse = {
  message: string;
  code?: number;
};

export class UserError extends AppError {
  constructor(errorResponse: ErrorResponse) {
    const { message, code } = errorResponse;
    super(message, code);
    this.name = 'UserError';
  }
}
