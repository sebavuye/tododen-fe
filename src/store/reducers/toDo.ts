import { combineReducers, createReducer, PayloadAction } from '@reduxjs/toolkit';
import * as ACTIONS from '../actions';
import { IToDoItem } from '../../types';

const list = createReducer<IToDoItem[]>([], {
  [ACTIONS.setToDoList.type]: (state, { payload }: PayloadAction<IToDoItem[]>) => payload
});

export const toDoListReducer = combineReducers({
  list
});
