import { KeyboardEvent } from 'react';
import { MultiValue } from 'chakra-react-select';
import { IToDoItem, TToDoItemId, TToDoItemTask } from '../toDo';
import { IToDoLabel } from '../toDoLabels';

export interface IToDoListItemProps {
  onCancel: (uid: TToDoItemId) => void;
  onDelete: (uid: TToDoItemId) => void;
  onEdit: () => void;
  onInlineEdit: (uid: TToDoItemId) => void;
  onKeyboardInput: (
    event: KeyboardEvent<HTMLInputElement>,
    toDoItem: IToDoItem,
    inputValue: string,
    updatedLabelList?: MultiValue<IToDoLabel>
  ) => void;
  onSave: (toDoItem: IToDoItem, updatedTaskValue: TToDoItemTask, labels?: MultiValue<IToDoLabel>) => void;
  onStatusChange: (toDoItem: IToDoItem) => void;
  toDoItem: IToDoItem;
}
