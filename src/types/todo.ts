export interface IToDoItem {
  completed: boolean;
  id: string;
  readOnly: boolean;
  todo: string;
}

export interface IInitializationState {
  initialization: boolean;
}
