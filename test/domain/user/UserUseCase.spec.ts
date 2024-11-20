import { faker } from '@faker-js/faker';
import { RequestDTO, UserUseCase } from '../../../domain/useCases/UserUseCase';
import { UserSpy } from '../../provider/spys/user/UserSpy';
import { describe, expect, test, vi } from 'vitest';
import { UserError } from '../../../domain/errors/UserError';

type MakeSut = {
  useCase: UserUseCase;
  userDataSpy: UserSpy;
  params: RequestDTO;
};

const makeSut = (): MakeSut => {
  const userDataSpy = new UserSpy();
  const useCase = new UserUseCase({ userData: userDataSpy });
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
