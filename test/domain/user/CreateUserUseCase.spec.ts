import { describe, expect, test, vi } from 'vitest';

import { faker } from '@faker-js/faker';

import { CreateUserError } from '../../../src/domain/errors/user/CreateUserError';
import {
  CreateUserUseCase,
  RequestDTO,
} from '../../../src/domain/useCases/user/CreateUserUseCase';
import { CreateUserSpy } from '../../provider/spys/user/CreateUserSpy';

type SutTypes = {
  useCase: CreateUserUseCase;
  createUserSpy: CreateUserSpy;
  params: RequestDTO;
};

const makeSut = (): SutTypes => {
  const createUserSpy = new CreateUserSpy();
  const useCase = new CreateUserUseCase({ createUserData: createUserSpy });
  const params = {
    userId: faker.database.mongodbObjectId(),
    fullName: faker.lorem.text(),
    email: faker.internet.email(),
    salt: faker.lorem.text(),
  };

  return {
    params,
    useCase,
    createUserSpy,
  };
};

describe('Unit Tests', () => {
  test('Shoud be called with correct values', async () => {
    const { createUserSpy, useCase, params } = makeSut();
    await useCase.execute(params);
    expect(createUserSpy.params).toEqual(params);
  });

  test('Shoud be able to create a user', async () => {
    const { useCase, params, createUserSpy } = makeSut();
    const response = await useCase.execute(params);
    expect(response).toEqual(createUserSpy.result);
  });

  test('Shoul be able call CreateUser if Error', async () => {
    const { createUserSpy, useCase, params } = makeSut();

    vi.spyOn(createUserSpy, 'createUser').mockResolvedValue(null);

    const promise = useCase.execute(params);

    expect(promise).rejects.toThrow(
      new CreateUserError({ message: 'ErrorToCreateUser' }),
    );
  });
});
