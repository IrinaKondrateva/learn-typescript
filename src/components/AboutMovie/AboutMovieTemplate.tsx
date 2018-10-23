import * as React from 'react';
import { IMovie } from '../../store/movie/types';

interface IProps {
  movieInfo: IMovie;
}

export function AboutMovieTemplate(props: IProps): JSX.Element {
  return (
    <section className="AboutMovie">
      <h3>Описание фильма</h3>
      <div dangerouslySetInnerHTML={{ __html: props.movieInfo.summary }} />
    </section>
  );
}
