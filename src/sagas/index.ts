import { all } from 'redux-saga/effects';
import { toDoListSagas } from './todo';
import { errorNotificationSaga } from './notifications';

export default function* rootSaga() {
  yield all([errorNotificationSaga(), toDoListSagas()]);
}
