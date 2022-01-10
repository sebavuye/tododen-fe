import { AxiosResponse } from 'axios';
import ApiClient from '../client';
import { IToDoItem } from '../../types';

interface PostToDoItem {
  (toDoItem: IToDoItem): Promise<AxiosResponse<IToDoItem>>;
}

export const postToDoItem: PostToDoItem = toDoItem => ApiClient.post<IToDoItem>('/todos', toDoItem);

interface GetToDoList {
  (): Promise<AxiosResponse<IToDoItem[]>>;
}

export const getToDoList: GetToDoList = () => ApiClient.get('/todos');

interface DeleteToDoItem {
  (toDoItemId: IToDoItem['id']): Promise<AxiosResponse<IToDoItem>>;
}

export const deleteToDoItem: DeleteToDoItem = toDoItemId => ApiClient.delete<IToDoItem>(`todos/${toDoItemId}`);

interface PatchToDoItem {
  (toDoItem: IToDoItem): Promise<AxiosResponse<IToDoItem>>;
}

export const patchToDoItem: PatchToDoItem = toDoItem => ApiClient.patch<IToDoItem>(`todos/${toDoItem.id}`, toDoItem);
