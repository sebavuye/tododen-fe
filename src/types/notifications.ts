export interface INotification {
  id: string;
  message: string;
  title: string;
}

export interface INotificationsState {
  error: INotification;
  success: INotification;
}

export enum ENotificationIds {
  TO_DO_NO_USER_INPUT = 'TO_DO_NO_USER_INPUT',
  TO_DO_GET_LIST_ERROR = 'TO_DO_GET_LIST_ERROR',
  TO_DO_CREATE_ITEM_ERROR = 'TO_DO_CREATE_ITEM_ERROR',
  TO_DO_REMOVE_ITEM_ERROR = 'TO_DO_REMOVE_ITEM_ERROR',
  TO_DO_UPDATE_ITEM_ERROR = 'TO_DO_UPDATE_ITEM_ERROR',
  TO_DO_GET_LIST_SUCCESS = 'TO_DO_GET_LIST_SUCCESS',
  TO_DO_CREATE_ITEM_SUCCESS = 'TO_DO_CREATE_ITEM_SUCCESS',
  TO_DO_REMOVE_ITEM_SUCCESS = 'TO_DO_REMOVE_ITEM_SUCCESS'
}
