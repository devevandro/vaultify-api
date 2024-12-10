import { describe, expect, test, vi } from 'vitest';

import { faker } from '@faker-js/faker';

import { ErrorMessage } from '../../../src/domain/errors/ErrorMessage';
import { GetCommandsUseCase } from '../../../src/domain/useCases/command/GetCommandsUseCase';
import { GetCommandsSpy } from '../../provider/spys/command/GetCommandsSpy';

type MakeSut = {
  useCase: GetCommandsUseCase;
  getCommandsData: GetCommandsSpy;
  params: string;
};

const makeSut = (): MakeSut => {
  const getCommandsData = new GetCommandsSpy();
  const useCase = new GetCommandsUseCase({
    getCommandsData,
  });
  const params = faker.database.mongodbObjectId();

  return {
    getCommandsData,
    useCase,
    params,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { getCommandsData, useCase, params } = makeSut();

    await useCase.execute(params);

    expect(getCommandsData.params).toEqual(params);
  });

  test('should throw Commands Not found', async () => {
    const { useCase, getCommandsData, params } = makeSut();

    vi.spyOn(getCommandsData, 'getCommands').mockResolvedValue(null);

    const promise = useCase.execute(params);

    expect(promise).rejects.toThrow(
      new ErrorMessage({ message: 'CommandsNotFound' }),
    );
  });

  test('Shoud be able get All Commands', async () => {
    const { useCase, params, getCommandsData } = makeSut();

    const response = await useCase.execute(params);

    expect(response).toEqual(getCommandsData.result);
  });
});
