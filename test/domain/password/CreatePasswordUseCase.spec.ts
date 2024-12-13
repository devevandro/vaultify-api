import { describe, expect, test } from 'vitest';

import { faker } from '@faker-js/faker';

import {
  CreatePasswordUseCase,
  RequestDTO,
} from '../../../src/domain/useCases/password/CreatePasswordByIdUseCase';
import { CreatePasswordSpy } from '../../provider/spys/password/CreatePasswordSpy';

type SutTypes = {
  useCase: CreatePasswordUseCase;
  createPasswordData: CreatePasswordSpy;
  params: RequestDTO;
};

const makeSut = (): SutTypes => {
  const createPasswordData = new CreatePasswordSpy();
  const useCase = new CreatePasswordUseCase({ createPasswordData });
  const params = {
    userId: faker.database.mongodbObjectId(),
    urlSite: faker.lorem.text(),
    password: faker.lorem.text(),
    login: faker.lorem.text(),
  };

  return {
    params,
    useCase,
    createPasswordData,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { createPasswordData, useCase, params } = makeSut();
    await useCase.execute(params);

    expect(createPasswordData.params).toEqual(params);
  });
});
