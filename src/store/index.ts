import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store
} from 'redux';
import { myMiddleware } from '../middlewares/myMiddleware';
// import { movieFetchMiddleware } from '../middlewares/loadMovieMiddleware';
// import thunk from 'redux-thunk';
import { listReducer } from './list';
import { movieReducer } from './movie';
import { IStore } from './types';

const rootReducer = combineReducers({
  movieInfo: movieReducer,
  todoList: listReducer
});

export const store: Store<IStore> = createStore(
  rootReducer,
  compose(
    // applyMiddleware(thunk),
    applyMiddleware(myMiddleware),
    // tslint:disable-next-line:no-string-literal
    window[`__REDUX_DEVTOOLS_EXTENSION__`] &&
      window[`__REDUX_DEVTOOLS_EXTENSION__`]()
  )
);
