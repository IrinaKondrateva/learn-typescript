import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addItem, deleteItem, getValueList } from '../../store/list';
import { IListItem } from '../../store/list/types';
import { IStore } from '../../store/types';
import { TodoBehaviour } from './TodoBehaviour';

interface IStateFromProps {
  valueList: IListItem[];
}

interface IDispatchFromProps {
  addItem: (listItem: IListItem) => void;
  deleteItem: (id: string) => void;
}

const mapStateToProps = (state: IStore): IStateFromProps => ({
  // valueList: state.todoList.valueList без селекторов
  valueList: getValueList(state)
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchFromProps => ({
  addItem: (payload: IListItem) => dispatch(addItem(payload)),
  deleteItem: (id: string) => dispatch(deleteItem(id))
});

export const TodoConnect = connect<IStateFromProps, IDispatchFromProps, void>(
  mapStateToProps,
  mapDispatchToProps
)(TodoBehaviour);
