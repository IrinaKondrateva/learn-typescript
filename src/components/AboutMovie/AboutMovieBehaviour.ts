import * as React from 'react';
// import { RouteComponentProps } from 'react-router-dom';
import { IMovie } from '../../store/movie/types';
import { AboutMovieTemplate } from './AboutMovieTemplate';

interface IProps {
  match: {
    params: {
      id: string;
    };
  };
  movieFetch: (movieName: string) => Promise<void>;
  movieInfo: IMovie;
}

export class AboutMovieBehaviour extends React.PureComponent<IProps, {}> {
  public componentDidUpdate(prevProps: IProps) {
    const {
      match: {
        params: { id }
      },
      movieFetch
    } = this.props;

    if (prevProps.match.params.id !== id) {
      // tslint:disable-next-line:no-console
      console.log('componentDidUpdate');
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
