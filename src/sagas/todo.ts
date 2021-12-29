import {
  call,
  Effect,
  put,
  SagaReturnType,
  takeLatest
} from 'redux-saga/effects';
import axios from 'axios';
import { getToDoList, postToDoItem } from '../api/services';
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

type getToDoListResponse = SagaReturnType<typeof getToDoList>;

function* handleGetToDoList() {
  try {
    const response: getToDoListResponse = yield call(getToDoList);

    yield put({ type: ACTIONS.GET_TODO_LIST_SUCCESS, payload: response.data });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put({ type: ACTIONS.GET_TODO_LIST_FAILURE, payload: error });
    }
  }
}

// WATCHERS
export function* watchPostToDo() {
  yield takeLatest(ACTIONS.POST_TODO_ITEM_REQUEST, handlePostToDo);
}

export function* watchGetToDoList() {
  yield takeLatest(ACTIONS.GET_TODO_LIST_REQUEST, handleGetToDoList);
}
