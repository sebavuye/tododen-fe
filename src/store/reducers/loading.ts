import {
  combineReducers,
  createReducer,
  PayloadAction
} from '@reduxjs/toolkit';
import { ILoading } from '../../types';
import * as ACTIONS from '../actions';

export const components = createReducer<ILoading[]>([], {
  [ACTIONS.setLoading.type]: (state, { payload }: PayloadAction<ILoading>) => {
    const newState = [...state];
    const index = newState.findIndex(loading => loading.key === payload.key);

    if (index === -1) {
      newState.push(payload);
    } else {
      newState[index] = payload;
    }

    return newState;
  }
});

export const loadingReducer = combineReducers({
  components
});
