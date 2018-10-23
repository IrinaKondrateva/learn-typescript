import { Dispatch } from 'redux';
import { actionCreatorFactory } from 'typescript-fsa';

const movieUrls = {
  bigBang: ' http://api.tvmaze.com/shows/66',
  breakingBad: ' http://api.tvmaze.com/shows/169',
  scrubs: ' http://api.tvmaze.com/shows/532'
};

// first way with actionCreator.async

const actionCreator = actionCreatorFactory();
export const movieFetchAsync = actionCreator.async<string, string, string>(
  'MOVIE_FETCH'
);

export const loadMovie = async (dispatch: Dispatch, movieName: string) => {
  const movieUrl = movieUrls[movieName];

  // dispatch(movieFetchAsync.started(movieName)); // при использовании thunk

  try {
    const movieSummary: string = await fetch(movieUrl)
      .then(response => response.json())
      .then(movie => movie.summary);

    dispatch(movieFetchAsync.done({ result: movieSummary, params: movieName }));
  } catch (error) {
    dispatch(
      movieFetchAsync.failed({ error: error.message, params: movieName })
    );
  }
};

// second way with actionCreator.async

// const actionCreator = actionCreatorFactory();
// export const requestDataStartAction = actionCreator<string>(
//   'REQUEST_DATA_START_ACTION'
// );
// export const requestDataErrorAction = actionCreator<string>(
//   'REQUEST_DATA_ERROR_ACTION'
// );
// export const requestDataSuccessAction = actionCreator<string>(
//   'REQUEST_DATA_SUCCESS_ACTION'
// );

// export function movieFetch(movieName: string) {
//   const movieUrl = movieUrls[movieName];

//   return async (dispatch: ThunkDispatch<IStore, null, AnyAction>) => {
//     dispatch(requestDataStartAction(movieName));

//     try {
//       const result = await fetch(movieUrl)
//         .then(response => response.json())
//         .then(movie => movie.summary);

//       dispatch(requestDataSuccessAction(result));
//     } catch (error) {
//       dispatch(requestDataErrorAction(error.message));
//     }
//   };
// }
