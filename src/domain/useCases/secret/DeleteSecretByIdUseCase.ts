import IUseCase from '../../../core/IUseCase';
import {
  IDeleteSecretByIdData,
  Params,
} from '../../data/secret/IDeleteSecretByIdData';

export type RequestDTO = {
  userId: string;
  secretId: string;
};

export class DeleteSecretByIdUseCase implements IUseCase<RequestDTO, boolean> {
  constructor(
    private readonly dependencies: {
      deleteSecretByIdData: IDeleteSecretByIdData;
    },
  ) {}

  async execute({ userId, secretId }: Params): Promise<boolean> {
    const { deleteSecretByIdData } = this.dependencies;

    await deleteSecretByIdData.deleteSecretById({
      userId,
      secretId,
    });

    return true;
  }
}
