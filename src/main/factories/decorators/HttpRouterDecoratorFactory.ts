import { HttpRouterDecorator } from '../../decorators/HttpRouterDecorator';

export class HttpRouterDecoratorFactory extends HttpRouterDecorator {
  constructor(data: any, schema: any, useCase: (data: any) => any) {
    super(data, schema, useCase);
  }
}
