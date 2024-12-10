import { describe, expect, test } from 'vitest';

import { faker } from '@faker-js/faker';

import {
  CreateCommandUseCase,
  RequestDTO,
} from '../../../src/domain/useCases/command/CreateCommandByIdUseCase';
import { CreateCommandSpy } from '../../provider/spys/command/CreateCommandSpy';

type SutTypes = {
  useCase: CreateCommandUseCase;
  createCommandData: CreateCommandSpy;
  params: RequestDTO;
};

const makeSut = (): SutTypes => {
  const createCommandData = new CreateCommandSpy();
  const useCase = new CreateCommandUseCase({ createCommandData });
  const params = {
    userId: faker.database.mongodbObjectId(),
    tag: faker.lorem.text(),
    command: faker.lorem.text(),
    title: faker.lorem.text(),
  };

  return {
    params,
    useCase,
    createCommandData,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { createCommandData, useCase, params } = makeSut();
    await useCase.execute(params);

    expect(createCommandData.params).toEqual(params);
  });
});
