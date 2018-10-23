import { Dispatch } from 'redux';
import { actionCreatorFactory } from 'typescript-fsa';

const movieUrls = {
  bigBang: ' http://api.tvmaze.com/shows/66',
  breakingBad: ' http://api.tvmaze.com/shows/169',
  scrubs: ' http://api.tvmaze.com/shows/532'
};

const actionCreator = actionCreatorFactory();
export const movieFetchAsync = actionCreator.async<string, string, string>(
  'MOVIE_FETCH'
);

export const loadMovie = async (dispatch: Dispatch, movieName: string) => {
  const movieUrl = movieUrls[movieName];

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
