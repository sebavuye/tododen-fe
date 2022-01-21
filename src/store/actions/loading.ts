import { createAction } from '@reduxjs/toolkit';
import { ILoading } from '../../types';

const prefix = 'LOADING';

export const setLoading = createAction<ILoading>(`${prefix}/setLoading`);
