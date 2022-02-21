import { IToDoItem } from '../toDo';

export interface IToDoModalProps {
  isOpen: boolean;
  onClose: () => void;
  toDoItem: IToDoItem;
}
