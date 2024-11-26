import IUseCase from '../../../core/IUseCase';
import {
  IUpdateCommandData,
  Params,
} from '../../data/command/IUpdateCommandData';

export type RequestDTO = {
  id: string;
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

    await updateCommandByIdData.updateCommand(params);

    return true;
  }
}
