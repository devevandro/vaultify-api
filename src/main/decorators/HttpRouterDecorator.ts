import * as yup from 'yup';
import { Request } from 'express';
import AppError from '../../core/AppError';
import { ValidationError } from '../../utils/ValidationError';

export class HttpRouterDecorator {
  private data: any;

  private schema: any;

  private useCase: (data: any) => any;

  private event: Request;

  constructor(event: Request, schema: any, useCase: (data: any) => any) {
    this.event = event;

    this.data = {
      ...event.query,
      ...event.params,
    };

    if (event.body) {
      Object.assign(this.data, event.body);
    }

    this.schema = schema;
    this.useCase = useCase;
  }

  private async validateWithYup() {
    try {
      await yup.object(this.schema).validate(this.data);
    } catch (err) {
      const { errors } = err as yup.ValidationError;
      throw new ValidationError(errors[0]);
    }
  }

  public async execute() {
    try {
      await this.validateWithYup();
      const response = await this.useCase(this.data);
      return response;
    } catch (err) {
      const event = {
        headers: this.event.headers,
        method: this.event.method,
        url: this.event.url,
        httpVersion: this.event.httpVersion,
        body: this.event.body,
        cookies: this.event.cookies,
        path: this.event.path,
        protocol: this.event.protocol,
        query: this.event.query,
        hostname: this.event.hostname,
        ip: this.event.ip,
        originalUrl: this.event.originalUrl,
        params: this.event.params,
        time: new Date().toISOString(),
      };
      if (err instanceof AppError && [400, 403, 404].includes(err.statusCode)) {
        console.log(event);
        throw err;
      }
      console.log(event);
      throw err;
    }
  }
}
