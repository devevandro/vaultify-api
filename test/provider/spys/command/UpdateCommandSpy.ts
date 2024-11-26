import {
  IUpdateCommandData,
  Params,
} from '../../../../src/domain/data/command/IUpdateCommandData';

export class UpdateCommandSpy implements IUpdateCommandData {
  params: Params;

  async updateCommand(params: Params): Promise<boolean> {
    this.params = params;
    return true;
  }
}
