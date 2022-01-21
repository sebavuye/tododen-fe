import { createSelector } from '@reduxjs/toolkit';
import { IGlobalState } from '../../types';

const notificationsStateSelector = (state: IGlobalState) => state.notifications;

export const errorNotificationSelector = createSelector(
  notificationsStateSelector,
  errorNotificationState => errorNotificationState.error
);

export const successNotificationSelector = createSelector(
  notificationsStateSelector,
  successNotificationState => successNotificationState.success
);
