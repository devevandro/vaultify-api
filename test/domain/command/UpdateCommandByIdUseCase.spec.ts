import { describe, expect, test } from 'vitest';

import { faker } from '@faker-js/faker';

import {
  RequestDTO,
  UpdateCommandByIdUseCase,
} from '../../../src/domain/useCases/command/UpdateCommandByIdUseCase';
import { UpdateCommandSpy } from '../../provider/spys/command/UpdateCommandSpy';

type SutTypes = {
  useCase: UpdateCommandByIdUseCase;
  updateCommandByIdData: UpdateCommandSpy;
  params: RequestDTO;
};

const makeSut = (): SutTypes => {
  const updateCommandByIdData = new UpdateCommandSpy();
  const useCase = new UpdateCommandByIdUseCase({ updateCommandByIdData });
  const params = {
    id: faker.database.mongodbObjectId(),
    userId: faker.database.mongodbObjectId(),
    tag: faker.lorem.text(),
    command: faker.lorem.text(),
    title: faker.lorem.text(),
  };

  return {
    params,
    useCase,
    updateCommandByIdData,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { updateCommandByIdData, useCase, params } = makeSut();
    await useCase.execute(params);

    expect(updateCommandByIdData.params).toEqual(params);
  });
});
