import { createAction } from '@reduxjs/toolkit';
import { IInitializationState, IToDoItem } from '../../types';

const prefix = 'TODO';

export const fetchToDoList = createAction<IInitializationState>(`${prefix}/fetchToDoList`);
export const setToDoList = createAction<IToDoItem[]>(`${prefix}/setToDoList`);
export const createToDoItem = createAction<IToDoItem>(`${prefix}/addToDoItem`);
export const removeToDoItem = createAction<IToDoItem['id']>(`${prefix}/removeToDoItem`);
export const updateToDoItem = createAction<IToDoItem>(`${prefix}/updateToDoItem`);
export const fetchToDoItem = createAction<IToDoItem['id']>(`${prefix}/fetchToDoItem`);
