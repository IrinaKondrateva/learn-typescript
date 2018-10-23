import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getMovieInfo, movieFetchAsync } from '../../store/movie';
import { IMovie } from '../../store/movie/types';
import { IStore } from '../../store/types';
import { AboutMovieBehaviour } from './AboutMovieBehaviour';

interface IStateFromProps {
  movieInfo: IMovie;
}

interface IDispatchFromProps {
  movieFetch: (movieName: string) => void;
}

const mapStateToProps = (state: IStore): IStateFromProps => ({
  movieInfo: getMovieInfo(state)
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchFromProps => ({
  movieFetch: (movieName: string) =>
    dispatch(movieFetchAsync.started(movieName))
});

export const AboutMovieConnect = connect<
  IStateFromProps,
  IDispatchFromProps,
  void
>(
  mapStateToProps,
  mapDispatchToProps
)(AboutMovieBehaviour);
