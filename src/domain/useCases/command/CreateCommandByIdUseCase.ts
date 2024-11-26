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
      createCommandData: ICreateCommandData;
    },
  ) {}

  async execute(params: Params): Promise<boolean> {
    const { createCommandData } = this.dependencies;

    await createCommandData.createCommand(params);

    return true;
  }
}
