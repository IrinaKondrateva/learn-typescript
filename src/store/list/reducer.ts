import { reducerWithInitialState } from "typescript-fsa-reducers";
import { addItem, deleteItem } from "./actions";
import { IList, IListItem } from "./types";

export const initialState: IList = {
  valueList: []
};

export const listReducer = reducerWithInitialState(initialState)
  .case(addItem, handleAddItem)
  .case(deleteItem, handleDeleteItem);

function handleAddItem(state: IList, payload: IListItem): IList {
  const { id, value } = payload;

  return {
    ...state,
    valueList: [{ id, value }, ...state.valueList]
  };
}

function handleDeleteItem(state: IList, clickedItem: string): IList {
  return {
    ...state,
    valueList: state.valueList.filter(({ id }) => id !== clickedItem)
  };
}
