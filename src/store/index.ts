import { combineReducers, createStore, Store } from "redux";
import { listReducer } from "./list";
import { IStore } from "./types";

const rootReducer = combineReducers({
  todoList: listReducer
});

export const store: Store<IStore> = createStore(
  rootReducer,
  // tslint:disable-next-line:no-string-literal
  window[`__REDUX_DEVTOOLS_EXTENSION__`] &&
    window[`__REDUX_DEVTOOLS_EXTENSION__`]()
);
