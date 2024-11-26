import { describe, expect, test } from 'vitest';

import { faker } from '@faker-js/faker';

import {
  DeleteCommandByIdUseCase,
  RequestDTO,
} from '../../../src/domain/useCases/command/DeleteCommandByIdUseCase';
import { DeleteCommandByIdSpy } from '../../provider/spys/command/DeleteCommandByIdSpy';

type SutTypes = {
  useCase: DeleteCommandByIdUseCase;
  deleteCommandByIdData: DeleteCommandByIdSpy;
  params: RequestDTO;
};

const makeSut = (): SutTypes => {
  const deleteCommandByIdData = new DeleteCommandByIdSpy();
  const useCase = new DeleteCommandByIdUseCase({ deleteCommandByIdData });
  const params = {
    userId: faker.database.mongodbObjectId(),
    commandId: faker.database.mongodbObjectId(),
  };

  return {
    params,
    useCase,
    deleteCommandByIdData,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { deleteCommandByIdData, useCase, params } = makeSut();
    await useCase.execute(params);

    expect(deleteCommandByIdData.params).toEqual(params);
  });
});
