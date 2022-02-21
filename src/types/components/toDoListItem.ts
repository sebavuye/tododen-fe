import { IToDoItem, TToDoItemId, TToDoItemTask } from '../toDo';

export interface IToDoListItemProps {
  onCancel: (uid: TToDoItemId) => void;
  onDelete: (uid: TToDoItemId) => void;
  onInlineEdit: (uid: TToDoItemId) => void;
  onSave: (toDoItem: IToDoItem, updatedTaskValue: TToDoItemTask) => void;
  onStatusChange: (toDoItem: IToDoItem) => void;
  toDoItem: IToDoItem;
}
