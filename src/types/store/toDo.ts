import { IToDoItem } from '../toDo';
import { IToDoLabel } from '../toDoLabels';

export interface IToDoState {
  labels: IToDoLabel[];
  list: IToDoItem[];
}
