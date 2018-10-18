import * as React from 'react';
import todoPic from '../../assets/todo.png';

export function HomePageTemplate(props: {}): JSX.Element {
  return (
    <section className="HomePage">
      <h3>Главная страница</h3>
      <img src={todoPic} alt="to do list picture" />
    </section>
  );
}
