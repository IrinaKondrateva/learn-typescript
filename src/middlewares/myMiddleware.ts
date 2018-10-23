import { AnyAction, Dispatch, MiddlewareAPI } from 'redux';
import { loadMovie, movieFetchAsync } from '../store/movie';
import { IStore } from '../store/types';

export const myMiddleware = ({ dispatch }: MiddlewareAPI<Dispatch, IStore>) => (
  next: Dispatch
) => (action: AnyAction) => {
  switch (action.type) {
    case movieFetchAsync.started.type:
      return loadMovie(dispatch, action.payload), next(action);
    default:
      return next(action);
  }
};
