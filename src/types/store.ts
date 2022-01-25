import { ILoadingState } from './loading';
import { INotificationsState } from './notifications';
import { IToDoItem } from './todo';

export interface IGlobalState {
  activeToDoItem: IToDoItem;
  loading: ILoadingState;
  notifications: INotificationsState;
  toDoList: IToDoItem[];
}
