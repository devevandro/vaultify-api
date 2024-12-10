import { IFavoriteSchema } from '../../models/favorite/FavoriteModel';
import { FavoriteEntity } from '../../../../../domain/entities/favorite/FavoriteEntity';

export class FavoriteMapper {
  static toEntity(favorite: IFavoriteSchema): FavoriteEntity {
    return {
      id: favorite.id,
      userId: favorite.id,
      url: favorite.url,
      name: favorite.name,
      description: favorite?.descritpion,
      createdAt: favorite.createdAt,
      updateAt: favorite.updatedAt,
    };
  }
}
