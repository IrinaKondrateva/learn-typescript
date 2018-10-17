import AutobindDecorator from "autobind-decorator";
import * as React from "react";
import * as uuid from "uuid";
import { IListItem } from "../../store/list/types";
import { AppTemplate } from "./AppTemplate";

interface IProps {
  addItem: (item: IListItem) => void;
  deleteItem: (valuId: string) => void;
  valueList: IListItem[];
}

interface IState {
  value: string;
}

export class AppBehaviour extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleClickDel = this.handleClickDel.bind(this);
  }

  public render(): JSX.Element {
    const { value } = this.state;
    const { valueList } = this.props;

    return React.createElement(AppTemplate, {
      handleBtnClick: this.handleBtnClick,
      handleChange: this.handleChange,
      handleClickDel: this.handleClickDel,
      value,
      valueList
    });
  }

  private handleClickDel(clickedItemId: string): void {
    this.props.deleteItem(clickedItemId);
  }

  @AutobindDecorator
  private handleChange(event: React.FormEvent<HTMLInputElement>): void {
    const newValue = event.currentTarget.value;

    this.setState({ value: newValue });
  }

  @AutobindDecorator
  private handleBtnClick(event: React.MouseEvent<HTMLElement>): void {
    if (this.state.value === "") {
      return;
    }
    this.props.addItem({ id: `${uuid.v1()}`, value: this.state.value });
    this.setState({ value: "" });
  }
}
