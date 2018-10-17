import * as React from "react";
import { IListItem } from "../../store/list/types";
import { Item } from "../List/Item";

interface IProps {
  handleClickDel: (id: string) => void;
  valueList: IListItem[];
}

export function renderList({ valueList, handleClickDel }: IProps): JSX.Element {
  return (
    <ul>
      {valueList.map(({ id, value }) => (
        <Item key={id} id={id} value={value} handleClickDel={handleClickDel} />
      ))}
    </ul>
  );
}
