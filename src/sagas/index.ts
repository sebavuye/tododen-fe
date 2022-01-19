import { all } from 'redux-saga/effects';
import { toDoListSagas } from './todo';
import { errorNotificationSaga } from './notifications';

export default function* rootSaga() {
  // eslint-disable-next-line redux-saga/no-unhandled-errors
  yield all([errorNotificationSaga(), toDoListSagas()]);
}
