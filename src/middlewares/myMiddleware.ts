import { AnyAction, Dispatch, MiddlewareAPI } from 'redux';
import { loadMovie, movieFetchAsync } from '../store/movie';
import { IStore } from '../store/types';

export const myMiddleware = ({ dispatch }: MiddlewareAPI<Dispatch, IStore>) => (
  next: Dispatch
) => (action: AnyAction) => {
  if (action.type === movieFetchAsync.started.type) {
    loadMovie(dispatch, action.payload);
  }

  return next(action);
};
