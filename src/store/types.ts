import { IList } from './list/types';
import { IMovie } from './movie/types';

export interface IStore {
  todoList: IList;
  movieInfo: IMovie;
}
