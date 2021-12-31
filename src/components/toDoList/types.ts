import { ReactNode } from 'react';

export interface ToDoListItemProps {
  children: ReactNode;
  completed: boolean;
  onDelete: () => void;
  onUpdate: () => void;
}
