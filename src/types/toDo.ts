import { MultiValue } from 'chakra-react-select';
import { IToDoLabel } from './toDoLabels';

export interface IToDoActionCallbackProps {
  onError?: () => void;
  onSuccess?: () => void;
}

export type TToDoItemId = string;
export type TToDoItemTask = string;

export interface IToDoItem extends IToDoActionCallbackProps {
  completed: boolean;
  id: TToDoItemId;
  labels?: MultiValue<IToDoLabel>;
  readOnly?: boolean;
  task: TToDoItemTask;
}

export interface IInitializationState {
  initialization: boolean;
}
