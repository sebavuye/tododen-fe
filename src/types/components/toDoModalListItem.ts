import { IToDoItem } from '../toDo';
import { TLabels } from './labelList';

export interface IToDoModalListItemProps {
  labels: TLabels;
  onReadOnly: (readOnly: boolean) => void;
  onSave: () => void;
  readOnly: boolean;
  toDoItem: IToDoItem;
}
