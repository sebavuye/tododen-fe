import { IToDoItem } from '../toDo';

export interface IToDoModalListItemProps {
  onReadOnly: (readOnly: boolean) => void;
  onSave: () => void;
  readOnly: boolean;
  toDoItem: IToDoItem;
}
