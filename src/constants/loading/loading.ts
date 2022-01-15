import { EToDoListLoadingKeys, IToDoListLoadingMessages } from '../../types';

export const TO_DO_LOADING_MESSAGES: IToDoListLoadingMessages = {
  [EToDoListLoadingKeys.GET_TODO_LIST]: 'Loading To Do List',
  [EToDoListLoadingKeys.REMOVE_TO_DO_ITEM]: 'Removing To Do Item',
  DEFAULT: 'Loading'
};
