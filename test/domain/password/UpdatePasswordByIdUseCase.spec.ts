import { describe, expect, test } from 'vitest';

import { faker } from '@faker-js/faker';

import {
  RequestDTO,
  UpdatePasswordByIdUseCase,
} from '../../../src/domain/useCases/password/UpdatePasswordByIdUseCase';
import { UpdatePasswordSpy } from '../../provider/spys/password/UpdatePasswordSpy';

type SutTypes = {
  useCase: UpdatePasswordByIdUseCase;
  updatePasswordByIdData: UpdatePasswordSpy;
  params: RequestDTO;
};

const makeSut = (): SutTypes => {
  const updatePasswordByIdData = new UpdatePasswordSpy();
  const useCase = new UpdatePasswordByIdUseCase({ updatePasswordByIdData });
  const params = {
    id: faker.database.mongodbObjectId(),
    userId: faker.database.mongodbObjectId(),
    urlSite: faker.lorem.text(),
    password: faker.lorem.text(),
    login: faker.lorem.text(),
  };

  return {
    params,
    useCase,
    updatePasswordByIdData,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { updatePasswordByIdData, useCase, params } = makeSut();
    await useCase.execute(params);

    expect(updatePasswordByIdData.params).toEqual(params);
  });
});
