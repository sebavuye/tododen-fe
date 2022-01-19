export interface IToDoItem {
  completed: boolean;
  editMode: boolean;
  id: string;
  todo: string;
}

export interface IInitializationState {
  initialization: boolean;
}
