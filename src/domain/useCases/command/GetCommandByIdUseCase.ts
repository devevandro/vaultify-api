import IUseCase from '../../../core/IUseCase';
import {
  IGetCommandByIdData,
  Params,
} from '../../data/command/IGetCommandByIdData';
import { CommandEntity } from '../../entities/command/CommandEntity';
import { ErrorMessage } from '../../errors/ErrorMessage';

export type RequestDTO = {
  userId: string;
  commandId: string;
};
export type ResponseDTO = CommandEntity;

export class GetCommandByIdUseCase
  implements IUseCase<RequestDTO, ResponseDTO>
{
  constructor(
    private readonly dependencies: { getCommandByIdData: IGetCommandByIdData },
  ) {}

  async execute({ userId, commandId }: Params): Promise<ResponseDTO> {
    const { getCommandByIdData } = this.dependencies;
    const commandById = await getCommandByIdData.getCommandById({
      userId,
      commandId,
    });

    if (!commandById) {
      throw new ErrorMessage({ message: 'CommandNotFound' });
    }

    return commandById;
  }
}
