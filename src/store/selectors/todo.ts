import { createSelector } from '@reduxjs/toolkit';
import { IGlobalState, IToDoItem } from '../../types';

export const toDoStateSelector = (state: IGlobalState) => state.toDoList;

export const getToDoItemById = (toDoItemId: IToDoItem['id'] | undefined) =>
  createSelector(toDoStateSelector, toDoListState => {
    const index = toDoListState.findIndex(toDoItem => toDoItem.id === toDoItemId);

    if (index > -1) return toDoListState[index];
    return null;
  });

export const activeToDoItem = (state: IGlobalState) => state.activeToDoItem;
