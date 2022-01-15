import { ReactNode } from 'react';

export interface IToDoListItemProps {
  children: ReactNode;
  completed: boolean;
  editMode: boolean;
  onDelete: () => void;
  onEdit: (value: string) => void;
  onUpdate: () => void;
}
