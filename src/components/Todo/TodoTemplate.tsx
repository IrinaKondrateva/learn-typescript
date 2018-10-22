import * as React from 'react';
import { IListItem } from '../../store/list/types';
import { renderList as List } from '../List/List';

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

// sort interfaces

function sortInterface<IntAll extends { id: number }>(arg: IntAll[]): IntAll[] {
  return arg.sort((a, b): number => a.id - b.id);
}

// tslint:disable-next-line:no-console
console.log(
  sortInterface([
    { id: 7, name: 'cat' },
    { id: 4, text: 'dog', age: 12 },
    { id: 12, text: 'sdasd' }
  ])
);
