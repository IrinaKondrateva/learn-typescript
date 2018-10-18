import { IStore } from "../types";
import { IListItem } from "./types";

export const getValueList = (state: IStore): IListItem[] => state.todoList.valueList;
