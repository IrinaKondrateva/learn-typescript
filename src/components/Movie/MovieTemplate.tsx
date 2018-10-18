import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import bigBang from '../../assets/bigBang.jpeg';
import breakingBad from '../../assets/breakingBad.jpeg';
import scrubs from '../../assets/scrubs.jpeg';
import { AboutMovieTemplate } from '../AboutMovie/AboutMovieTemplate';

interface IProps {
  match: {
    url: string;
    path: string;
  };
}

export function MovieTemplate({ match }: IProps): JSX.Element {
  return (
    <section className="MoviePage">
      <h3>Фильмы</h3>
      <Link to={`${match.url}/scrubs`}>
        <img src={scrubs} alt="scrubs" />
      </Link>
      <Link to={`${match.url}/bigBang`}>
        <img src={bigBang} alt="bigBang" />
      </Link>
      <Link to={`${match.url}/breakingBad`}>
        <img src={breakingBad} alt="breakingBad" />
      </Link>
      <Route path={`${match.path}/:id`} component={AboutMovieTemplate} />
    </section>
  );
}
