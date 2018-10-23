import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store
} from 'redux';
import { myMiddleware } from '../middlewares/myMiddleware';
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
    applyMiddleware(myMiddleware),
    window[`__REDUX_DEVTOOLS_EXTENSION__`] &&
      window[`__REDUX_DEVTOOLS_EXTENSION__`]()
  )
);
