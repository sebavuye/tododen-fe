import { call, put, SagaReturnType, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { deleteToDoItem, getToDoList, patchToDoItem, postToDoItem } from '../api/services';
import * as ACTIONS from '../store/actions';
import { EToDoListLoadingKeys, IInitializationState, IToDoItem } from '../types';
import { ERROR_NOTIFICATIONS, SUCCESS_NOTIFICATIONS } from '../constants';

function* createToDoItem({ payload }: PayloadAction<IToDoItem>) {
  try {
    yield put(ACTIONS.setLoading({ key: EToDoListLoadingKeys.CREATE_TO_DO_ITEM, loading: true }));

    yield call(postToDoItem, payload);
    yield put(ACTIONS.setLoading({ key: EToDoListLoadingKeys.CREATE_TO_DO_ITEM, loading: false }));

    yield put(ACTIONS.fetchToDoList({ initialization: false }));

    yield put(
      ACTIONS.showSuccess({
        title: SUCCESS_NOTIFICATIONS.defaultSuccessTitle,
        message: SUCCESS_NOTIFICATIONS.createToDoItemSuccessMessage
      })
    );
  } catch (error) {
    yield put(
      ACTIONS.showError({
        title: ERROR_NOTIFICATIONS.createToDoListItemErrorTitle,
        message: ERROR_NOTIFICATIONS.defaultErrorMessage
      })
    );
  }
}

function* removeToDoItem({ payload }: PayloadAction<IToDoItem['id']>) {
  try {
    yield put(ACTIONS.setLoading({ key: EToDoListLoadingKeys.REMOVE_TO_DO_ITEM, loading: true }));

    yield call(deleteToDoItem, payload);
    yield put(ACTIONS.setLoading({ key: EToDoListLoadingKeys.REMOVE_TO_DO_ITEM, loading: false }));

    yield put(ACTIONS.fetchToDoList({ initialization: false }));
    yield put(
      ACTIONS.showSuccess({
        title: SUCCESS_NOTIFICATIONS.defaultSuccessTitle,
        message: SUCCESS_NOTIFICATIONS.removeToDoItemSuccessMessage
      })
    );
  } catch (error) {
    yield put(
      ACTIONS.showError({
        title: ERROR_NOTIFICATIONS.removeToDoListItemErrorTitle,
        message: ERROR_NOTIFICATIONS.defaultErrorMessage
      })
    );
  }
}

function* updateToDoItem({ payload }: PayloadAction<IToDoItem>) {
  try {
    yield put(ACTIONS.setLoading({ key: EToDoListLoadingKeys.UPDATE_TO_DO_ITEM, loading: true }));

    yield call(patchToDoItem, payload);
    yield put(ACTIONS.fetchToDoList({ initialization: false }));

    yield put(ACTIONS.setLoading({ key: EToDoListLoadingKeys.UPDATE_TO_DO_ITEM, loading: false }));
  } catch (error) {
    yield put(
      ACTIONS.showError({
        title: ERROR_NOTIFICATIONS.updateToDoListItemErrorTitle,
        message: ERROR_NOTIFICATIONS.defaultErrorMessage
      })
    );
  }
}

type fetchToDoList = SagaReturnType<typeof getToDoList>;

function* fetchToDoList({ payload }: PayloadAction<IInitializationState>) {
  try {
    yield put(ACTIONS.setLoading({ key: EToDoListLoadingKeys.GET_TODO_LIST, loading: true }));

    const response: fetchToDoList = yield call(getToDoList);
    const toDoList = response.data;

    yield put(ACTIONS.setToDoList(toDoList));
    yield put(ACTIONS.setLoading({ key: EToDoListLoadingKeys.GET_TODO_LIST, loading: false }));

    if (payload.initialization) {
      yield put(
        ACTIONS.showSuccess({
          title: SUCCESS_NOTIFICATIONS.defaultSuccessTitle,
          message: SUCCESS_NOTIFICATIONS.getToDoListSuccessMessage
        })
      );
    }
  } catch (error) {
    yield put(ACTIONS.setLoading({ key: EToDoListLoadingKeys.GET_TODO_LIST, loading: false }));
    // TODO: add error logging service

    yield put(
      ACTIONS.showError({
        title: ERROR_NOTIFICATIONS.getToDoListErrorTitle,
        message: ERROR_NOTIFICATIONS.defaultErrorMessage
      })
    );
  }
}

export function* watchPostToDo() {
  yield takeLatest(ACTIONS.createToDoItem, createToDoItem);
}

export function* watchDeleteToDo() {
  yield takeLatest(ACTIONS.removeToDoItem, removeToDoItem);
}

export function* watchUpdateToDo() {
  yield takeLatest(ACTIONS.updateToDoItem, updateToDoItem);
}

export function* watchGetToDoList() {
  yield takeLatest(ACTIONS.fetchToDoList, fetchToDoList);
}
