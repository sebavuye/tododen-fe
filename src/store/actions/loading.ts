import { createAction } from '@reduxjs/toolkit';
import { ILoading } from '../../types';

const prefix = 'LOADING';

const setLoading = createAction<ILoading>(`${prefix}/setLoading`);

export { setLoading };
