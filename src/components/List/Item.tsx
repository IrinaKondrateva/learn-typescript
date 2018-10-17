import * as React from "react";

interface IProps {
  id: string;
  handleClickDel: (id: string) => void;
  value: string;
}

export function Item({ value, handleClickDel, id }: IProps): JSX.Element {
  return (
    <li>
      <span>{value}</span>
      <button onClick={handleClickDel.bind(null, id)}>Удалить</button>
    </li>
  );
}
