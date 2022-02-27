import { call, put, SagaReturnType, takeLatest } from 'redux-saga/effects';
import * as Sentry from '@sentry/react';
import { getToDoLabels } from '../api/services/toDoLabels';
import * as ACTIONS from '../store/actions';

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

export function* toDoLabelsSagas() {
  yield takeLatest(ACTIONS.fetchToDoLabels, fetchToDoLabels);
}
