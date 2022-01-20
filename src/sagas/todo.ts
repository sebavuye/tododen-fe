import { call, put, SagaReturnType, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import * as Sentry from '@sentry/react';
import { deleteToDoItem, getToDoList, patchToDoItem, postToDoItem } from '../api/services';
import * as ACTIONS from '../store/actions';
import { ENotificationIds, EToDoListLoadingKeys, IInitializationState, IToDoItem } from '../types';
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
        message: SUCCESS_NOTIFICATIONS.createToDoItemSuccessMessage,
        id: ENotificationIds.TO_DO_CREATE_ITEM_SUCCESS
      })
    );
  } catch (error) {
    yield put(ACTIONS.setLoading({ key: EToDoListLoadingKeys.CREATE_TO_DO_ITEM, loading: false }));

    Sentry.captureException(error);

    yield put(
      ACTIONS.showError({
        title: ERROR_NOTIFICATIONS.createToDoListItemErrorTitle,
        message: ERROR_NOTIFICATIONS.defaultErrorMessage,
        id: ENotificationIds.TO_DO_CREATE_ITEM_ERROR
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
        message: SUCCESS_NOTIFICATIONS.removeToDoItemSuccessMessage,
        id: ENotificationIds.TO_DO_REMOVE_ITEM_SUCCESS
      })
    );
  } catch (error) {
    yield put(ACTIONS.setLoading({ key: EToDoListLoadingKeys.REMOVE_TO_DO_ITEM, loading: false }));

    Sentry.captureException(error);

    yield put(
      ACTIONS.showError({
        title: ERROR_NOTIFICATIONS.removeToDoListItemErrorTitle,
        message: ERROR_NOTIFICATIONS.defaultErrorMessage,
        id: ENotificationIds.TO_DO_REMOVE_ITEM_ERROR
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
    yield put(ACTIONS.setLoading({ key: EToDoListLoadingKeys.UPDATE_TO_DO_ITEM, loading: false }));

    Sentry.captureException(error);

    yield put(
      ACTIONS.showError({
        title: ERROR_NOTIFICATIONS.updateToDoListItemErrorTitle,
        message: ERROR_NOTIFICATIONS.defaultErrorMessage,
        id: ENotificationIds.TO_DO_UPDATE_ITEM_ERROR
      })
    );
  }
}

type GetToDoList = SagaReturnType<typeof getToDoList>;

function* fetchToDoList({ payload }: PayloadAction<IInitializationState>) {
  try {
    yield put(ACTIONS.setLoading({ key: EToDoListLoadingKeys.GET_TODO_LIST, loading: true }));

    const response: GetToDoList = yield call(getToDoList);
    const toDoList = response.data;

    yield put(ACTIONS.setToDoList(toDoList));
    yield put(ACTIONS.setLoading({ key: EToDoListLoadingKeys.GET_TODO_LIST, loading: false }));

    if (payload.initialization) {
      yield put(
        ACTIONS.showSuccess({
          title: SUCCESS_NOTIFICATIONS.defaultSuccessTitle,
          message: SUCCESS_NOTIFICATIONS.getToDoListSuccessMessage,
          id: ENotificationIds.TO_DO_GET_LIST_SUCCESS
        })
      );
    }
  } catch (error) {
    yield put(ACTIONS.setLoading({ key: EToDoListLoadingKeys.GET_TODO_LIST, loading: false }));

    Sentry.captureException(error);

    yield put(
      ACTIONS.showError({
        title: ERROR_NOTIFICATIONS.getToDoListErrorTitle,
        message: ERROR_NOTIFICATIONS.defaultErrorMessage,
        id: ENotificationIds.TO_DO_GET_LIST_ERROR
      })
    );
  }
}

export function* toDoListSagas() {
  yield takeLatest(ACTIONS.createToDoItem, createToDoItem);
  yield takeLatest(ACTIONS.removeToDoItem, removeToDoItem);
  yield takeLatest(ACTIONS.updateToDoItem, updateToDoItem);
  yield takeLatest(ACTIONS.fetchToDoList, fetchToDoList);
}
