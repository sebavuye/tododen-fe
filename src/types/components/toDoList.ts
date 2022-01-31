import { ReactNode } from 'react';

export interface IToDoListItemPropsOld {
  children: ReactNode;
  completed: boolean;
  onClick: () => void;
  onDelete: () => void;
  onEdit: (value: string) => void;
  onUpdate: () => void;
  readOnly: boolean;
}

export interface IToDoListInput {
  disabled?: boolean;
}
