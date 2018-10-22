import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { movieFetchAsync } from './actions';
import { IMovie } from './types';

export const initialState: IMovie = {
  summary: ''
};

export const movieReducer = reducerWithInitialState(initialState)
  .case(movieFetchAsync.done, handleSuccess)
  .case(movieFetchAsync.failed, handleError);

function handleSuccess(
  state: IMovie,
  payload: { result: string; params: string }
): IMovie {
  return {
    summary: payload.result
  };
}

function handleError(
  state: IMovie,
  payload: { error: string; params: string }
): IMovie {
  return {
    summary: payload.error
  };
}

// export const movieReducer = reducerWithInitialState(initialState)
//   // .case(requestDataStartAction, handleStart)
//   .case(requestDataSuccessAction, handleSuccess)
//   .case(requestDataErrorAction, handleError);

// function handleSuccess(state: IMovie, summary: string): IMovie {
//   return {
//     summary
//   };
// }

// function handleError(state: IMovie, errorMes: string): IMovie {
//   return {
//     summary: errorMes
//   };
// }
