import { IToDoItem } from '../todo';

export interface IToDoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStatusClick: (toDoItem: IToDoItem) => void;
  toDoItem: IToDoItem;
}
