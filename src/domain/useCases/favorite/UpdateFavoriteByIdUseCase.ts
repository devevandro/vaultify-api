import IUseCase from '../../../core/IUseCase';
import {
  IUpdateFavoriteData,
  Params,
} from '../../data/favorite/IUpdateFavoriteData';

export type RequestDTO = {
  id: string;
  userId: string;
  name?: string;
  url?: string;
  description?: string;
};

export class UpdateFavoriteByIdUseCase
  implements IUseCase<RequestDTO, boolean>
{
  constructor(
    private readonly dependencies: {
      updateFavoriteByIdData: IUpdateFavoriteData;
    },
  ) {}

  async execute(params: Params): Promise<boolean> {
    const { updateFavoriteByIdData } = this.dependencies;

    await updateFavoriteByIdData.updateFavorite(params);

    return true;
  }
}
