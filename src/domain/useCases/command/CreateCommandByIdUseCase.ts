import IUseCase from '../../../core/IUseCase';
import {
  ICreateCommandData,
  Params,
} from '../../data/command/ICreateCommandData';

export type RequestDTO = {
  userId: string;
  tag: string;
  command: string;
  title: string;
  description?: string;
};

export class CreateCommandUseCase implements IUseCase<RequestDTO, boolean> {
  constructor(
    private readonly dependencies: {
      createCommandByIdData: ICreateCommandData;
    },
  ) {}

  async execute(params: Params): Promise<boolean> {
    const { createCommandByIdData } = this.dependencies;

    await createCommandByIdData.createCommand(params);

    return true;
  }
}
