import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { getMovieInfo, loadMovie } from '../../store/movie';
import { IMovie } from '../../store/movie/types';
import { IStore } from '../../store/types';
import { AboutMovieBehaviour } from './AboutMovieBehaviour';

interface IStateFromProps {
  movieInfo: IMovie;
}

interface IDispatchFromProps {
  movieFetch: (movieName: string) => Promise<void>;
}

const mapStateToProps = (state: IStore): IStateFromProps => ({
  movieInfo: getMovieInfo(state)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<IStore, null, AnyAction>
): IDispatchFromProps => ({
  movieFetch: (movieName: string) => dispatch(loadMovie(movieName))
});

export const AboutMovieConnect = connect<
  IStateFromProps,
  IDispatchFromProps,
  void
>(
  mapStateToProps,
  mapDispatchToProps
)(AboutMovieBehaviour);

// https://gist.github.com/milankorsos/ffb9d32755db0304545f92b11f0e4beb
// https://github.com/reduxjs/redux-thunk/issues/213#issuecomment-422142052
