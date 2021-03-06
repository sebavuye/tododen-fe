export interface ILoading {
  key: string;
  loading: boolean;
}

export interface ILoadingState {
  components: ILoading[];
}

// LOADING KEYS
export enum EToDoListLoadingKeys {
  GET_TODO_LIST = 'GET_TO_DO_LIST',
  CREATE_TO_DO_ITEM = 'CREATE_TO_DO_ITEM',
  REMOVE_TO_DO_ITEM = 'REMOVE_TO_DO_ITEM',
  UPDATE_TO_DO_ITEM = 'UPDATE_TO_DO_ITEM'
}

export enum ELoadingDelays {
  NONE = 'NONE',
  DEFAULT = 'DEFAULT'
}

export interface ILoadingDelays {
  [ELoadingDelays.NONE]: number;
  [ELoadingDelays.DEFAULT]: number;
}

export interface IToDoListLoadingMessages {
  [EToDoListLoadingKeys.GET_TODO_LIST]: string;
  [EToDoListLoadingKeys.REMOVE_TO_DO_ITEM]: string;
  [EToDoListLoadingKeys.CREATE_TO_DO_ITEM]: string;
  [EToDoListLoadingKeys.UPDATE_TO_DO_ITEM]: string;
  DEFAULT: string;
}
