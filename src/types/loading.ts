export interface ILoading {
  key: string;
  loading: boolean;
}

export interface ILoadingState {
  components: ILoading[];
}

// LOADING KEYS
// TODO: fix weird eslint error
// eslint-disable-next-line no-shadow
export enum EToDoListLoadingKeys {
  GET_TODO_LIST = 'GET_TO_DO_LIST',
  CREATE_TO_DO_ITEM = 'CREATE_TO_DO_ITEM',
  REMOVE_TO_DO_ITEM = 'REMOVE_TO_DO_ITEM',
  UPDATE_TO_DO_ITEM = 'UPDATE_TO_DO_ITEM'
}

export interface IToDoListLoadingMessages {
  [EToDoListLoadingKeys.GET_TODO_LIST]: string;
  [EToDoListLoadingKeys.REMOVE_TO_DO_ITEM]: string;
  DEFAULT: string;
}
