import { createAction } from '@reduxjs/toolkit';
import { IToDoItem } from '../../types';

const prefix = 'TODO';

export const fetchToDoList = createAction(`${prefix}/fetchToDoList`);
export const setToDoList = createAction<IToDoItem[]>(`${prefix}/setToDoList`);
export const createToDoItem = createAction<IToDoItem>(`${prefix}/addToDoItem`);
export const removeToDoItem = createAction<IToDoItem['id']>(`${prefix}/removeToDoItem`);
export const updateToDoItem = createAction<IToDoItem>(`${prefix}/updateToDoItem`);
