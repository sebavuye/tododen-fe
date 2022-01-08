import { ILoadingState } from './loading';
import { ToDoItem } from '../store/reducers/types';

export interface IGlobalState {
  loading: ILoadingState;
  toDoList: ToDoItem[];
}
