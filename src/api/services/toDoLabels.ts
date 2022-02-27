import { AxiosResponse } from 'axios';
import client from '../client';
import { IToDoLabel } from '../../types';

interface GetToDoLabels {
  (): Promise<AxiosResponse<IToDoLabel[]>>;
}

export const getToDoLabels: GetToDoLabels = () => client.get('/labels');
