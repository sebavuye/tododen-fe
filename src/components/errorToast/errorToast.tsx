import React from 'react';
import { useSelector } from 'react-redux';
import { useToast, UseToastOptions } from '@chakra-ui/react';
import { errorNotificationSelector } from '../../store/selectors';
import { ERROR_NOTIFICATIONS } from '../../constants';

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

  React.useEffect(() => {
    if (!isError) return;

    notificationToast({
      ...toastOptions,
      title: isError.title,
      description: isError.message
    });
  }, [isError, notificationToast]);

  return null;
};

export default ErrorToast;
