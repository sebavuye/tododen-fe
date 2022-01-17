import { ELoadingDelays, EToDoListLoadingKeys, ILoadingDelays, IToDoListLoadingMessages } from '../../types';

export const LOADING_DELAYS: ILoadingDelays = {
  [ELoadingDelays.NONE]: 0,
  [ELoadingDelays.DEFAULT]: 1500
};

export const TO_DO_LOADING_MESSAGES: IToDoListLoadingMessages = {
  [EToDoListLoadingKeys.GET_TODO_LIST]: 'Loading To Do List',
  [EToDoListLoadingKeys.REMOVE_TO_DO_ITEM]: 'Removing To Do Item',
  [EToDoListLoadingKeys.CREATE_TO_DO_ITEM]: 'Creating To Do Item',
  [EToDoListLoadingKeys.UPDATE_TO_DO_ITEM]: 'Updating To Do Item',
  DEFAULT: 'Loading'
};

export const TO_DO_LOADING_KEYS: EToDoListLoadingKeys[] = [
  EToDoListLoadingKeys.GET_TODO_LIST,
  EToDoListLoadingKeys.CREATE_TO_DO_ITEM,
  EToDoListLoadingKeys.REMOVE_TO_DO_ITEM,
  EToDoListLoadingKeys.UPDATE_TO_DO_ITEM
];
