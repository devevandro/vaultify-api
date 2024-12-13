import IUseCase from '../../../core/IUseCase';
import {
  IUpdatePasswordData,
  Params,
} from '../../data/password/IUpdatePasswordData';

export type RequestDTO = {
  id: string;
  userId: string;
  urlSite?: string;
  password?: string;
  login?: string;
  description?: string;
};

export class UpdatePasswordByIdUseCase
  implements IUseCase<RequestDTO, boolean>
{
  constructor(
    private readonly dependencies: {
      updatePasswordByIdData: IUpdatePasswordData;
    },
  ) {}

  async execute(params: Params): Promise<boolean> {
    const { updatePasswordByIdData } = this.dependencies;

    await updatePasswordByIdData.updatePassword(params);

    return true;
  }
}
