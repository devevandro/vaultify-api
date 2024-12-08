import IUseCase from '../../../core/IUseCase';
import {
  IDeleteFavoriteByIdData,
  Params,
} from '../../data/favorite/IDeleteFavoriteByIdData';

export type RequestDTO = {
  userId: string;
  favoriteId: string;
};

export class DeleteFavoriteByIdUseCase
  implements IUseCase<RequestDTO, boolean>
{
  constructor(
    private readonly dependencies: {
      deleteFavoriteByIdData: IDeleteFavoriteByIdData;
    },
  ) {}

  async execute({ userId, favoriteId }: Params): Promise<boolean> {
    const { deleteFavoriteByIdData } = this.dependencies;

    await deleteFavoriteByIdData.deleteFavoriteById({
      userId,
      favoriteId,
    });

    return true;
  }
}
