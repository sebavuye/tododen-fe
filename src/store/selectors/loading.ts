import { createSelector } from '@reduxjs/toolkit';
import { IGlobalState, ILoading } from '../../types';

export const loadingStateSelector = (state: IGlobalState) => state.loading;

export const getLoadingStateByKey = (key: ILoading['key']) =>
  createSelector(loadingStateSelector, loadingState => {
    const index = loadingState.components.findIndex(
      component => component.key === key
    );

    if (index > -1) {
      return loadingState.components[index].loading;
    }

    return undefined;
  });
