import { MultiValue } from 'chakra-react-select';
import { IToDoItem } from '../toDo';
import { IToDoLabel } from '../toDoLabels';

export interface IToDoModalProps {
  isOpen: boolean;
  labels: MultiValue<IToDoLabel> | undefined;
  onClose: () => void;
  onSetLabels: (newValue: MultiValue<IToDoLabel> | undefined) => void;
  toDoItem: IToDoItem;
}
