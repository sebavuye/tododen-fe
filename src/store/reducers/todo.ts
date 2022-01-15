import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import * as ACTIONS from '../actions';
import { IToDoItem } from '../../types';

export const toDoListReducer = createReducer<IToDoItem[]>([], {
  [ACTIONS.setToDoList.type]: (state, { payload }: PayloadAction<IToDoItem[]>) => payload
});
