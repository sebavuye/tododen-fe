import { IGlobalState } from '../../types';

export const toDoStateSelector = (state: IGlobalState) => state.toDoList;
