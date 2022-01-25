import { AxiosResponse } from 'axios';
import client from '../client';
import { IToDoItem } from '../../types';

interface PostToDoItem {
  (toDoItem: IToDoItem): Promise<AxiosResponse<IToDoItem>>;
}

export const postToDoItem: PostToDoItem = toDoItem => client.post<IToDoItem>('/todos', toDoItem);

interface GetToDoList {
  (): Promise<AxiosResponse<IToDoItem[]>>;
}

export const getToDoList: GetToDoList = () => client.get('/todos');

interface DeleteToDoItem {
  (toDoItemId: IToDoItem['id']): Promise<AxiosResponse<IToDoItem>>;
}

export const deleteToDoItem: DeleteToDoItem = toDoItemId => client.delete<IToDoItem>(`todos/${toDoItemId}`);

interface PatchToDoItem {
  (toDoItem: IToDoItem): Promise<AxiosResponse<IToDoItem>>;
}

export const patchToDoItem: PatchToDoItem = toDoItem => client.patch<IToDoItem>(`todos/${toDoItem.id}`, toDoItem);

interface GetToDoItem {
  (toDoItemId: IToDoItem['id']): Promise<AxiosResponse<IToDoItem>>;
}

export const getToDoItem: GetToDoItem = toDoItemId => client.get<IToDoItem>(`todos/${toDoItemId}`);
