import { createAction } from '@reduxjs/toolkit';
import { INotification } from '../../types';

const prefix = 'NOTIFICATION';

export const showError = createAction<INotification | null>(`${prefix}/showError`);
export const setError = createAction<INotification | null>(`${prefix}/setError`);

export const showSuccess = createAction<INotification | null>(`${prefix}/showSuccess`);
export const setSuccess = createAction<INotification | null>(`${prefix}/setSuccess`);
