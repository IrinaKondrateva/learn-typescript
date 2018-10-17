import { IStore } from "../types";
import { IList } from "./types";

export const getValueList = (state: IStore): IList => ({
  valueList: state.todoList.valueList
});
