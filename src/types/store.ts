import { ILoadingState } from './loading';
import { INotificationsState } from './notifications';
import { IToDoState } from './store/toDo';

export interface IGlobalState {
  loading: ILoadingState;
  notifications: INotificationsState;
  toDo: IToDoState;
}
