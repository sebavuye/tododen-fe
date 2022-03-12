import { MultiValue } from 'chakra-react-select';
import { IToDoItem } from '../toDo';
import { IToDoLabel } from '../toDoLabels';

export interface IToDoModalListItemProps {
  labels: MultiValue<IToDoLabel> | undefined;
  onReadOnly: (readOnly: boolean) => void;
  onSave: () => void;
  readOnly: boolean;
  toDoItem: IToDoItem;
}
