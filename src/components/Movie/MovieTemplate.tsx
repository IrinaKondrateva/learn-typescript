import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import * as uuid from 'uuid';
import bigBangImg from '../../assets/bigBang.jpeg';
import breakingBadImg from '../../assets/breakingBad.jpeg';
import scrubsImg from '../../assets/scrubs.jpeg';
import { AboutMovieConnect } from '../AboutMovie/AboutMovieConnect';

interface IProps {
  match: {
    url: string;
    path: string;
  };
}

export function MovieTemplate({ match }: IProps): JSX.Element {
  const movieArr = [
    { movieName: 'scrubs', movieImg: scrubsImg },
    { movieName: 'bigBang', movieImg: bigBangImg },
    { movieName: 'breakingBad', movieImg: breakingBadImg }
  ];

  return (
    <section className="MoviePage">
      <h3>Фильмы</h3>
      {movieArr.map(({ movieName, movieImg }) => (
        <Link key={uuid.v1()} to={`${match.url}/${movieName}`}>
          <img src={movieImg} alt={movieName} />
        </Link>
      ))}
      <Route path={`${match.path}/:id`} component={AboutMovieConnect} />
    </section>
  );
}
