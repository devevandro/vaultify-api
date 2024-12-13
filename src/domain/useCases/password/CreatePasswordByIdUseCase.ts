import IUseCase from '../../../core/IUseCase';
import {
  ICreatePasswordData,
  Params,
} from '../../data/password/ICreatePasswordData';

export type RequestDTO = {
  userId: string;
  urlSite: string;
  login: string;
  password: string;
  description?: string;
};

export class CreatePasswordUseCase implements IUseCase<RequestDTO, boolean> {
  constructor(
    private readonly dependencies: {
      createPasswordData: ICreatePasswordData;
    },
  ) {}

  async execute(params: Params): Promise<boolean> {
    const { createPasswordData } = this.dependencies;

    await createPasswordData.createPassword(params);

    return true;
  }
}
