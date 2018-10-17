import { actionCreatorFactory } from "typescript-fsa";
import { IListItem } from "./types";

const actionCreator = actionCreatorFactory();
export const addItem = actionCreator<IListItem>("ADD_ITEM");
export const deleteItem = actionCreator<string>("DELETE_ITEM");
