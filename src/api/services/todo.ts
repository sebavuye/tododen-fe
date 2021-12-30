import { AxiosResponse } from 'axios';
import ApiClient from '../client';
import { ToDoInitialState, ToDoItem } from '../../store/reducers/types';

interface PostToDoItem {
  (toDoItem: ToDoItem): Promise<AxiosResponse<ToDoItem>>;
}

export const postToDoItem: PostToDoItem = toDoItem =>
  ApiClient.post<ToDoItem>('/todos', toDoItem);

interface GetToDoList {
  (): Promise<AxiosResponse<ToDoInitialState>>;
}

export const getToDoList: GetToDoList = () => ApiClient.get('/todos');
