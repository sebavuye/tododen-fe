import { all } from 'redux-saga/effects';
import { watchDeleteToDo, watchGetToDoList, watchPostToDo, watchUpdateToDo } from './todo';
import { errorNotificationSaga } from './notifications';

export default function* rootSaga() {
  // eslint-disable-next-line redux-saga/no-unhandled-errors
  yield all([watchPostToDo(), watchDeleteToDo(), watchUpdateToDo(), watchGetToDoList(), errorNotificationSaga()]);
}
