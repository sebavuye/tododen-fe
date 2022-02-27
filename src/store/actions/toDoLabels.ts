import { createAction } from '@reduxjs/toolkit';
import { IToDoLabel } from '../../types';

const prefix = 'TODO_LABELS';

export const fetchToDoLabels = createAction(`${prefix}/fetchToDoLabels`);
export const setToDoLabels = createAction<IToDoLabel[]>(`${prefix}/setToDoLabels`);
