import IUseCase from '../../../core/IUseCase';
import { Params } from '../../data/command/IDeleteCommandByIdData';
import { IUpdateCommandData } from '../../data/command/IUpdateCommandData';

export type RequestDTO = {
  userId: string;
  tag?: string;
  command?: string;
  title?: string;
  description?: string;
};

export class UpdateCommandByIdUseCase implements IUseCase<RequestDTO, boolean> {
  constructor(
    private readonly dependencies: {
      updateCommandByIdData: IUpdateCommandData;
    },
  ) {}

  async execute(params: Params): Promise<boolean> {
    const { updateCommandByIdData } = this.dependencies;

    await updateCommandByIdData.createCommand(params);

    return true;
  }
}
