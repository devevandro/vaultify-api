export type Params = {
  userId: string;
  favoriteId: string;
};
export type Result = boolean;

export interface IDeleteFavoriteByIdData {
  deleteFavoriteById(params: Params): Promise<boolean>;
}
