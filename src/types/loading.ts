export interface ILoading {
  key: string;
  loading: boolean;
}

export interface ILoadingState {
  components: ILoading[];
}

// LOADING KEYS
// eslint-disable-next-line no-shadow
export enum EToDoListLoadingKeys {
  GET_TODO_LIST = 'GET_TO_DO_LIST'
}
