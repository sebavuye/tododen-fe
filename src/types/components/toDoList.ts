import { ReactNode } from 'react';

export interface IToDoListItemProps {
  children: ReactNode;
  completed: boolean;
  editMode: boolean;
  onClick: () => void;
  onDelete: () => void;
  onEdit: (value: string) => void;
  onUpdate: () => void;
}

export interface IToDoListInput {
  disabled?: boolean;
}
