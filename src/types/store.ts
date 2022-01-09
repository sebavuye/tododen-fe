import { ILoadingState } from './loading';
import { ToDoItem } from '../store/reducers/types';
import { INotificationsState } from './notifications';

export interface IGlobalState {
  loading: ILoadingState;
  notifications: INotificationsState;
  toDoList: ToDoItem[];
}
