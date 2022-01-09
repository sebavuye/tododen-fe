import { createAction } from '@reduxjs/toolkit';
import { INotification } from '../../types';

const prefix = 'NOTIFICATION';

export const showError = createAction<INotification>(`${prefix}/showError`);
export const setError = createAction<INotification>(`${prefix}/setError`);

export const showSuccess = createAction<INotification>(`${prefix}/showSuccess`);
