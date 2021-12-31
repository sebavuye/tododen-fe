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

interface DeleteToDoItem {
  (toDoItemId: ToDoItem['id']): Promise<AxiosResponse<ToDoItem>>;
}

export const deleteToDoItem: DeleteToDoItem = toDoItemId =>
  ApiClient.delete<ToDoItem>(`todos/${toDoItemId}`);

interface UpdateToDoItem {
  (toDoItem: ToDoItem): Promise<AxiosResponse<ToDoItem>>;
}

export const updateToDoItem: UpdateToDoItem = toDoItem =>
  ApiClient.patch<ToDoItem>(`todos/${toDoItem.id}`, toDoItem);
