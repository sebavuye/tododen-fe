import { all } from 'redux-saga/effects';
import { watchDeleteToDo, watchGetToDoList, watchGetToDoList2, watchPostToDo, watchUpdateToDo } from './todo';
import { errorNotificationSaga } from './notifications';

export default function* rootSaga() {
  // eslint-disable-next-line redux-saga/no-unhandled-errors
  yield all([
    watchPostToDo(),
    watchGetToDoList(),
    watchDeleteToDo(),
    watchUpdateToDo(),
    watchGetToDoList2(),
    errorNotificationSaga()
  ]);
}
