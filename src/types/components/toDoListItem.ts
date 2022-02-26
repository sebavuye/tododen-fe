import { KeyboardEvent } from 'react';
import { IToDoItem, TToDoItemId, TToDoItemTask } from '../toDo';

export interface IToDoListItemProps {
  onCancel: (uid: TToDoItemId) => void;
  onDelete: (uid: TToDoItemId) => void;
  onEdit: () => void;
  onInlineEdit: (uid: TToDoItemId) => void;
  onKeyboardInput: (event: KeyboardEvent<HTMLInputElement>, toDoItem: IToDoItem, inputValue: string) => void;
  onSave: (toDoItem: IToDoItem, updatedTaskValue: TToDoItemTask) => void;
  onStatusChange: (toDoItem: IToDoItem) => void;
  toDoItem: IToDoItem;
}
