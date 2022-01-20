import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToast, UseToastOptions } from '@chakra-ui/react';
import { errorNotificationSelector } from '../../store/selectors';
import { ERROR_NOTIFICATIONS } from '../../constants';
import { showError } from '../../store/actions';

const toastOptions: UseToastOptions = {
  title: ERROR_NOTIFICATIONS.defaultErrorTitle,
  description: ERROR_NOTIFICATIONS.defaultErrorMessage,
  status: 'error',
  duration: 5000,
  isClosable: true,
  variant: 'top-accent'
};

const ErrorToast = (): null => {
  const notificationToast = useToast();
  const isError = useSelector(errorNotificationSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!isError) return;

    notificationToast({
      ...toastOptions,
      title: isError.title,
      description: isError.message,
      onCloseComplete: () => {
        dispatch(showError(null));
      }
    });
  }, [dispatch, isError, notificationToast]);

  return null;
};

export default ErrorToast;
