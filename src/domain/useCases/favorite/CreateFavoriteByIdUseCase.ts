import IUseCase from '../../../core/IUseCase';
import {
  ICreateFavoriteData,
  Params,
} from '../../data/favorite/ICreateFavoriteData';

export type RequestDTO = {
  userId: string;
  url: string;
  name?: string;
  description?: string;
};

export class CreateFavoriteUseCase implements IUseCase<RequestDTO, boolean> {
  constructor(
    private readonly dependencies: {
      createFavoriteData: ICreateFavoriteData;
    },
  ) {}

  async execute(params: Params): Promise<boolean> {
    const { createFavoriteData } = this.dependencies;

    await createFavoriteData.createFavorite(params);

    return true;
  }
}
