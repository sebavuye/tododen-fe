import { all } from 'redux-saga/effects';
import { watchGetToDoList, watchPostToDo } from './todo';

export default function* rootSaga() {
  // eslint-disable-next-line redux-saga/no-unhandled-errors
  yield all([watchPostToDo(), watchGetToDoList()]);
}
