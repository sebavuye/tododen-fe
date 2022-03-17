import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import * as ACTIONS from '../actions';
import { IToDoLabel } from '../../types';

export const labels = createReducer<IToDoLabel[]>([], {
  [ACTIONS.setToDoLabels.type]: (state, { payload }: PayloadAction<IToDoLabel[]>) => payload
});
