import {
  call,
  Effect,
  put,
  SagaReturnType,
  takeLatest
} from 'redux-saga/effects';
import { postToDoItem } from '../api/services';
import * as ACTIONS from '../store/actions';

type postToDoResponse = SagaReturnType<typeof postToDoItem>;

// HANDLERS
function* handlePostToDo(action: Effect) {
  try {
    const response: postToDoResponse = yield call(postToDoItem, action.payload);

    yield put({ type: ACTIONS.POST_TODO_ITEM_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ACTIONS.POST_TODO_ITEM_FAILURE, payload: error });
  }
}

// WATCHERS
export function* watchPostToDo() {
  yield takeLatest(ACTIONS.POST_TODO_ITEM_REQUEST, handlePostToDo);
}
