import * as React from 'react';
import { IMovie } from '../../store/movie/types';
import { AboutMovieTemplate } from './AboutMovieTemplate';

interface IProps {
  match: {
    params: {
      id: string;
    };
  };
  movieFetch: (movieName: string) => void;
  movieInfo: IMovie;
}

export class AboutMovieBehaviour extends React.PureComponent<IProps, {}> {
  public componentDidMount() {
    const {
      match: {
        params: { id }
      },
      movieFetch
    } = this.props;

    movieFetch(id);
  }

  public componentDidUpdate(prevProps: IProps) {
    const {
      match: {
        params: { id }
      },
      movieFetch
    } = this.props;

    if (prevProps.match.params.id !== id) {
      movieFetch(id);
    }
  }

  public render(): JSX.Element {
    const { movieInfo } = this.props;

    return React.createElement(AboutMovieTemplate, {
      movieInfo
    });
  }
}
