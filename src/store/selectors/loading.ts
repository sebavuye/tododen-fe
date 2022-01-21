import { createSelector } from '@reduxjs/toolkit';
import { EToDoListLoadingKeys, IGlobalState, ILoading } from '../../types';

export const loadingStateSelector = (state: IGlobalState) => state.loading;

export const getLoadingStateByKey = (key: ILoading['key']) =>
  createSelector(loadingStateSelector, loadingState => {
    const index = loadingState.components.findIndex(component => component.key === key);

    if (index > -1) {
      return loadingState.components[index].loading;
    }

    return false;
  });

export const toDoListActionsLoadingSelector = createSelector(
  getLoadingStateByKey(EToDoListLoadingKeys.GET_TODO_LIST),
  getLoadingStateByKey(EToDoListLoadingKeys.CREATE_TO_DO_ITEM),
  getLoadingStateByKey(EToDoListLoadingKeys.REMOVE_TO_DO_ITEM),
  getLoadingStateByKey(EToDoListLoadingKeys.UPDATE_TO_DO_ITEM),
  (getToDoListLoadingState, postToDoItemLoadingState, deleteToDoItemLoadingState, patchToDoItemLoadingState) =>
    getToDoListLoadingState || postToDoItemLoadingState || deleteToDoItemLoadingState || patchToDoItemLoadingState
);
