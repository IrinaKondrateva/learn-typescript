import * as React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { HomePageTemplate } from '../HomePage/HomePageTemplate';
import { MovieTemplate } from '../Movie/MovieTemplate';
import { TodoConnect } from '../Todo/TodoConnect';

export function AppRouterTemplate(props: {}): JSX.Element {
  return (
    <div className="AppRouter">
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/todolist">Задачи на день</Link>
          </li>
          <li>
            <Link to="/movie">Фильмы</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact={true} component={HomePageTemplate} />
        <Route path="/todolist" component={TodoConnect} />
        <Route path="/movie" component={MovieTemplate} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
