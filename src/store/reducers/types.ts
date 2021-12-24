export interface ToDoItem {
  completed: boolean;
  id: string;
  todo: string;
}

export interface ToDoInitialState {
  error: Error | null;
  list: ToDoItem[];
  loading: boolean;
}
