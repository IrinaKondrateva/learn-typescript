import * as React from 'react';

interface IProps {
  id: string;
  handleClickDel: (id: string) => void;
  value: string;
}

export function Item({ value, handleClickDel, id }: IProps): JSX.Element {
  function removeElement() {
    handleClickDel(id);
  }

  return (
    <li>
      <span>{value}</span>
      <button onClick={removeElement}>Удалить</button>
    </li>
  );
}
