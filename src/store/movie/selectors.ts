import { IStore } from '../types';
import { IMovie } from './types';

export const getMovieInfo = (state: IStore): IMovie => state.movieInfo;
