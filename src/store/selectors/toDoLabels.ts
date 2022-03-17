import { IGlobalState } from '../../types';

export const toDoLabelsStateSelector = (state: IGlobalState) => state.toDo.labels;
