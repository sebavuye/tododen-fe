import { ILoadingState } from './loading';
import { INotificationsState } from './notifications';
import { IActiveToDoItem, IToDoItem } from './todo';

export interface IGlobalState {
  activeToDoItem: IActiveToDoItem;
  loading: ILoadingState;
  notifications: INotificationsState;
  toDoList: IToDoItem[];
}
