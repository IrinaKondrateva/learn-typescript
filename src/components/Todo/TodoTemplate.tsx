import * as React from "react";
import { IListItem } from "../../store/list/types";
import { renderList as List } from "../List/List";

interface IProps {
  handleBtnClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handleClickDel: (id: string) => void;
  value: string;
  valueList: IListItem[];
}

export function TodoTemplate({
  value,
  valueList,
  handleChange,
  handleBtnClick,
  handleClickDel
}: IProps): JSX.Element {
  return (
    <div className="Todo">
      <h3 className="Todo-title">Введите задачу на день</h3>
      <input value={value} onChange={handleChange} />
      <button onClick={handleBtnClick}>Добавить</button>
      <List valueList={valueList} handleClickDel={handleClickDel} />
    </div>
  );
}
