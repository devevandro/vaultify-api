import IUseCase from '../../../core/IUseCase';
import {
  IDeleteCommandByIdData,
  Params,
} from '../../data/command/IDeleteCommandByIdData';

export type RequestDTO = {
  userId: string;
  commandId: string;
};

export class DeleteCommandByIdUseCase implements IUseCase<RequestDTO, boolean> {
  constructor(
    private readonly dependencies: {
      deleteCommandByIdData: IDeleteCommandByIdData;
    },
  ) {}

  async execute({ userId, commandId }: Params): Promise<boolean> {
    const { deleteCommandByIdData } = this.dependencies;

    await deleteCommandByIdData.deleteCommandById({
      userId,
      commandId,
    });

    return true;
  }
}
