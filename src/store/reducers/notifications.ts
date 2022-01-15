import { combineReducers, createReducer, PayloadAction } from '@reduxjs/toolkit';
import * as ACTIONS from '../actions';
import { INotification } from '../../types';

export const error = createReducer<INotification | null>(null, {
  [ACTIONS.setError.type]: (state, { payload }: PayloadAction) => payload
});

export const success = createReducer<INotification | null>(null, {
  [ACTIONS.showSuccess.type]: (state, { payload }: PayloadAction<INotification>) => payload
});

export const notificationsReducer = combineReducers({
  error,
  success
});
