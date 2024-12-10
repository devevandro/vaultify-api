import {
  IUpdateFavoriteData,
  Params,
} from '../../../../src/domain/data/favorite/IUpdateFavoriteData';

export class UpdateFavoriteSpy implements IUpdateFavoriteData {
  params: Params;

  async updateFavorite(params: Params): Promise<boolean> {
    this.params = params;
    return true;
  }
}
