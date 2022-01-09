import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import { INotification } from '../types';
import * as ACTIONS from '../store/actions';

function* showError({ payload }: PayloadAction<INotification>) {
  // eslint-disable-next-line redux-saga/no-unhandled-errors
  yield put(ACTIONS.setError(payload));
}

export function* errorNotificationSaga() {
  yield takeLatest(ACTIONS.showError, showError);
}
