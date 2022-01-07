import { AxiosError } from 'axios';

export interface IToDoItem {
  completed: boolean;
  editMode: boolean;
  id: string;
  todo: string;
}

export interface IToDoListDTO {
  error: AxiosError | null;
  list: IToDoItem[];
  loading: boolean;
}
