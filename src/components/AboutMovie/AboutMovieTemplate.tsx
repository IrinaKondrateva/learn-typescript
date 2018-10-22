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

// export function AboutMovieTemplate({
//   match
// }: RouteComponentProps<{ id: string }>): JSX.Element {
//   return (
//     <section className="AboutMovie">
//       <h3>Описание фильма</h3>
//       <div>{match.params.id}</div>
//     </section>
//   );
// }

// sort interfaces

// interface IT1 {
//   id: number;
//   name: string;
// }

// interface IT2 {
//   id: number;
//   text: string;
//   age: number;
// }

// interface ITAll extends IT2, IT1 {}

// function sortInterface(arg: [ITAll]): [ITAll] {
//   return arg.sort((a: IT1, b: IT2) => a.id - b.id);
// }

// // tslint:disable-next-line:no-console
// console.log(
//   sortInterface([
//     { id: 7, name: 'cat' },
//     { id: 4, text: 'dog', age: 12 },
//     { id: 12, age: 2 }
//   ])
// );
