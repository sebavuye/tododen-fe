import { AxiosError } from 'axios';

export interface ToDoItem {
  completed: boolean;
  editMode: boolean;
  id: string;
  todo: string;
}

export interface ToDoInitialState {
  error: AxiosError | null;
  list: ToDoItem[];
  loading: boolean;
}
