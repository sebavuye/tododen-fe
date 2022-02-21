import { createSelector } from '@reduxjs/toolkit';
import { IGlobalState, IToDoItem } from '../../types';

export const toDoStateSelector = (state: IGlobalState) => state.toDo;

export const toDoListSelector = createSelector(toDoStateSelector, toDoState => toDoState.list);

export const getToDoItemById = (toDoItemId: IToDoItem['id'] | undefined) =>
  createSelector(toDoListSelector, toDoState => {
    const index = toDoState.findIndex(toDoItem => toDoItem.id === toDoItemId);

    if (index > -1) return toDoState[index];
    return null;
  });
