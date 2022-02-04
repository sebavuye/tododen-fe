interface IToDoActionCallbackProps {
  onError?: () => void;
  onSuccess?: () => void;
}

export interface IToDoItem extends IToDoActionCallbackProps {
  completed: boolean;
  id: string;
  readOnly: boolean;
  task: string;
}

export interface IInitializationState {
  initialization: boolean;
}
