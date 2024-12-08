import {
  IDeleteFavoriteByIdData,
  Params,
  Result,
} from '../../../../src/domain/data/favorite/IDeleteFavoriteByIdData';

export class DeleteFavoriteByIdSpy implements IDeleteFavoriteByIdData {
  params: Params;

  result: true;

  async deleteFavoriteById(params: Params): Promise<Result> {
    this.params = params;
    return this.result;
  }
}
