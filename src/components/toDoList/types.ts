import { ReactNode } from 'react';

export interface ToDoListItemProps {
  children: ReactNode;
  onDelete: () => void;
}
