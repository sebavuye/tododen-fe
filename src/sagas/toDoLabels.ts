import { call, put, SagaReturnType, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import * as Sentry from '@sentry/react';
import { getToDoLabels, postToDoLabel } from '../api/services/toDoLabels';
import * as ACTIONS from '../store/actions';
import { IToDoLabel } from '../types';

type GetToDoLabels = SagaReturnType<typeof getToDoLabels>;

function* fetchToDoLabels() {
  try {
    const response: GetToDoLabels = yield call(getToDoLabels);
    const toDoLabels = response.data;

    yield put(ACTIONS.setToDoLabels(toDoLabels));
  } catch (error) {
    Sentry.captureException(error);
  }
}

function* createToDoLabel({ payload }: PayloadAction<IToDoLabel>) {
  try {
    yield call(postToDoLabel, payload);

    if (payload.onSuccess) {
      payload.onSuccess();
    }

    yield put(ACTIONS.fetchToDoLabels());
  } catch (error) {
    Sentry.captureException(error);
  }
}

export function* toDoLabelsSagas() {
  yield takeLatest(ACTIONS.fetchToDoLabels, fetchToDoLabels);
  yield takeLatest(ACTIONS.createToDoLabel, createToDoLabel);
}
