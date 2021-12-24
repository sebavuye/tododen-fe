import { AxiosResponse } from 'axios';
import ApiClient from '../client';
import { ToDoItem } from '../../store/reducers/types';

interface PostToDoItem {
  (toDoItem: ToDoItem): Promise<AxiosResponse<ToDoItem>>;
}

export const postToDoItem: PostToDoItem = toDoItem =>
  ApiClient.post<ToDoItem>('/todos', toDoItem);
