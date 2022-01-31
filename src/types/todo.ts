export interface IToDoItem {
  completed: boolean;
  id: string;
  readOnly: boolean;
  task: string;
}

export interface IInitializationState {
  initialization: boolean;
}
