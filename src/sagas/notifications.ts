import { PayloadAction } from '@reduxjs/toolkit';
import { put, select, takeLatest } from 'redux-saga/effects';
import * as Sentry from '@sentry/react';
import { IGlobalState, INotification } from '../types';
import * as ACTIONS from '../store/actions';
import { errorNotificationSelector, successNotificationSelector } from '../store/selectors';

function* showError({ payload }: PayloadAction<INotification>) {
  try {
    const errorState: IGlobalState['notifications']['error'] = yield select(errorNotificationSelector);

    if (errorState?.id !== payload?.id) {
      yield put(ACTIONS.setError(payload));
    }
  } catch (error) {
    Sentry.captureException(error);
  }
}

function* showSuccess({ payload }: PayloadAction<INotification>) {
  try {
    const succesState: IGlobalState['notifications']['error'] = yield select(successNotificationSelector);

    if (succesState?.id !== payload?.id) {
      yield put(ACTIONS.setSuccess(payload));
    }
  } catch (error) {
    Sentry.captureException(error);
  }
}

export function* errorNotificationSaga() {
  yield takeLatest(ACTIONS.showError, showError);
  yield takeLatest(ACTIONS.showSuccess, showSuccess);
}
