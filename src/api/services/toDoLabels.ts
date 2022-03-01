import { AxiosResponse } from 'axios';
import client from '../client';
import { IToDoLabel } from '../../types';

interface IGetToDoLabels {
  (): Promise<AxiosResponse<IToDoLabel[]>>;
}

export const getToDoLabels: IGetToDoLabels = () => client.get('/labels');

interface IPostToDoLabel {
  (toDoLabel: IToDoLabel): Promise<AxiosResponse<IToDoLabel>>;
}

export const postToDoLabel: IPostToDoLabel = toDoLabel => client.post<IToDoLabel>('/labels', toDoLabel);
