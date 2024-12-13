import IUseCase from '../../../core/IUseCase';
import {
  IDeletePasswordByIdData,
  Params,
} from '../../data/password/IDeletePasswordByIdData';

export type RequestDTO = {
  userId: string;
  passwordId: string;
};

export class DeletePasswordByIdUseCase
  implements IUseCase<RequestDTO, boolean>
{
  constructor(
    private readonly dependencies: {
      deletePasswordByIdData: IDeletePasswordByIdData;
    },
  ) {}

  async execute({ userId, passwordId }: Params): Promise<boolean> {
    const { deletePasswordByIdData } = this.dependencies;

    await deletePasswordByIdData.deletePasswordById({
      userId,
      passwordId,
    });

    return true;
  }
}
