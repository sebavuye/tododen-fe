import { IToDoItem } from '../todo';

export interface IToDoFieldProps {
  onCancel: (updatedToDoItem: IToDoItem) => void;
  onSave: (updatedToDoItem: IToDoItem) => void;
}
