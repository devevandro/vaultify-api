import { describe, expect, test, vi } from 'vitest';

import { faker } from '@faker-js/faker';

import { CommandError } from '../../../src/domain/errors/command/CommandError';
import {
  GetCommandByIdUseCase,
  RequestDTO,
} from '../../../src/domain/useCases/command/GetCommandByIdUseCase';
import { GetCommandByIdSpy } from '../../provider/spys/command/GetCommandByIdSpy';

type MakeSut = {
  useCase: GetCommandByIdUseCase;
  getCommandByIdData: GetCommandByIdSpy;
  params: RequestDTO;
};

const makeSut = (): MakeSut => {
  const getCommandByIdData = new GetCommandByIdSpy();
  const useCase = new GetCommandByIdUseCase({
    getCommandByIdData: getCommandByIdData,
  });
  const params = {
    userId: faker.database.mongodbObjectId(),
    commandId: faker.database.mongodbObjectId(),
  };

  return {
    getCommandByIdData,
    useCase,
    params,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { getCommandByIdData, useCase, params } = makeSut();

    await useCase.execute(params);

    expect(getCommandByIdData.params).toEqual(params);
  });

  test('should throw Command by ID Not found', async () => {
    const { useCase, getCommandByIdData, params } = makeSut();

    vi.spyOn(getCommandByIdData, 'getCommandById').mockResolvedValue(null);

    const promise = useCase.execute(params);

    expect(promise).rejects.toThrow(
      new CommandError({ message: 'CommandNotFound' }),
    );
  });

  test('Shoud be able get user by ID', async () => {
    const { useCase, params, getCommandByIdData } = makeSut();

    const response = await useCase.execute(params);

    expect(response).toEqual(getCommandByIdData.result);
  });
});
