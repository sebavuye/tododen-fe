interface IToDoActionCallbackProps {
  onError?: () => void;
  onSuccess?: () => void;
}

export type TToDoItemId = string;
export type TToDoItemTask = string;

export interface IToDoItem extends IToDoActionCallbackProps {
  completed: boolean;
  id: TToDoItemId;
  readOnly?: boolean;
  task: TToDoItemTask;
}

export interface IInitializationState {
  initialization: boolean;
}
