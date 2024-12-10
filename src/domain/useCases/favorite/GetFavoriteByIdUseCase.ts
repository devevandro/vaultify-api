import IUseCase from '../../../core/IUseCase';
import {
  IGetFavoriteByIdData,
  Params,
} from '../../data/favorite/IGetFavoriteByIdData';
import { FavoriteEntity } from '../../entities/favorite/FavoriteEntity';
import { ErrorMessage } from '../../errors/ErrorMessage';

export type RequestDTO = {
  userId: string;
  favoriteId: string;
};
export type ResponseDTO = FavoriteEntity;

export class GetFavoriteByIdUseCase
  implements IUseCase<RequestDTO, ResponseDTO>
{
  constructor(
    private readonly dependencies: {
      getFavoriteByIdData: IGetFavoriteByIdData;
    },
  ) {}

  async execute({ userId, favoriteId }: Params): Promise<ResponseDTO> {
    const { getFavoriteByIdData } = this.dependencies;
    const FavoriteById = await getFavoriteByIdData.getFavoriteById({
      userId,
      favoriteId,
    });

    if (!FavoriteById) {
      throw new ErrorMessage({ message: 'FavoriteNotFound' });
    }

    return FavoriteById;
  }
}
