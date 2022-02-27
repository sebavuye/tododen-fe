import { all } from 'redux-saga/effects';
import { toDoListSagas } from './toDo';
import { toDoLabelsSagas } from './toDoLabels';
import { errorNotificationSaga } from './notifications';

export default function* rootSaga() {
  yield all([errorNotificationSaga(), toDoListSagas(), toDoLabelsSagas()]);
}
