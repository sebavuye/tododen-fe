import { IToDoActionCallbackProps } from './toDo';

export interface IToDoLabel extends IToDoActionCallbackProps {
  id: string;
  label: string;
  value: string;
}
