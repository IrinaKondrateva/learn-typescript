import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { movieFetchAsync } from './actions';
import { IMovie } from './types';

export const initialState: IMovie = {
  isLoaded: false,
  summary: ''
};

export const movieReducer = reducerWithInitialState(initialState)
  .case(movieFetchAsync.started, handleStarted)
  .case(movieFetchAsync.done, handleSuccess)
  .case(movieFetchAsync.failed, handleError);

function handleStarted(state: IMovie, payload: string): IMovie {
  return {
    ...state,
    isLoaded: false
  };
}

function handleSuccess(
  state: IMovie,
  payload: { result: string; params: string }
): IMovie {
  return {
    ...state,
    isLoaded: true,
    summary: payload.result
  };
}

function handleError(
  state: IMovie,
  payload: { error: string; params: string }
): IMovie {
  return {
    ...state,
    isLoaded: false,
    summary: payload.error
  };
}
