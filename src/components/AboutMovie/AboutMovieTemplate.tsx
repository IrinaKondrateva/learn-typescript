import * as React from 'react';

interface IProps {
  match: {
    params: {
      id: string;
    };
  };
}

export function AboutMovieTemplate({ match }: IProps): JSX.Element {
  return (
    <section className="AboutMovie">
      <h3>Описание фильма</h3>
      <div>{match.params.id}</div>
    </section>
  );
}
