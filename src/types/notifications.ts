export interface INotification {
  message: string;
  title: string;
}

export interface INotificationsState {
  error: INotification;
  success: INotification;
}
