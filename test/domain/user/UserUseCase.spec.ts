import { faker } from '@faker-js/faker';
import { UserSpy } from '../../provider/spys/user/UserSpy';
import { describe, expect, test, vi } from 'vitest';
import {
  GetUserByIdUseCase,
  RequestDTO,
} from '../../../src/domain/useCases/GetUserByIdUseCase';
import { UserError } from '../../../src/domain/errors/user/UserError';

type MakeSut = {
  useCase: GetUserByIdUseCase;
  userDataSpy: UserSpy;
  params: RequestDTO;
};

const makeSut = (): MakeSut => {
  const userDataSpy = new UserSpy();
  const useCase = new GetUserByIdUseCase({ getUserByIdData: userDataSpy });
  const params = {
    userId: faker.database.mongodbObjectId(),
  };

  return {
    userDataSpy,
    useCase,
    params,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { userDataSpy, useCase, params } = makeSut();

    await useCase.execute(params);

    expect(userDataSpy.params).toEqual(params);
  });

  test('should throw user Not found', async () => {
    const { useCase, userDataSpy, params } = makeSut();

    vi.spyOn(userDataSpy, 'getUserById').mockResolvedValue(null);

    const promise = useCase.execute(params);

    expect(promise).rejects.toThrow(new UserError({ message: 'UserNotFound' }));
  });

  test('Shoud be able get user by ID', async () => {
    const { useCase, params, userDataSpy } = makeSut();

    const response = await useCase.execute(params);

    expect(response).toEqual(userDataSpy.result);
  });
});
