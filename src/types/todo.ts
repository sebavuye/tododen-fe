interface IToDoActionCallbackProps {
  onError?: () => void;
  onSuccess?: () => void;
}

export interface IToDoItem extends IToDoActionCallbackProps {
  completed: boolean;
  id: string;
  task: string;
}

export interface IActiveToDoItem extends Omit<IToDoItem, 'onError' | 'onSuccess'> {
  readOnly: boolean;
}

export interface IInitializationState {
  initialization: boolean;
}
