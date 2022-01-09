import React from 'react';
import { useSelector } from 'react-redux';
import { useToast, UseToastOptions } from '@chakra-ui/react';
import { successNotificationSelector } from '../../store/selectors';
import { SUCCESS_NOTIFICATIONS } from '../../constants/notifications';

const toastOptions: UseToastOptions = {
  title: SUCCESS_NOTIFICATIONS.defaultSuccessTitle,
  description: SUCCESS_NOTIFICATIONS.defaultSuccessMessage,
  status: 'success',
  duration: 5000,
  isClosable: true,
  variant: 'top-accent'
};

const SuccessToast = (): null => {
  const notificationToast = useToast();
  const isSuccess = useSelector(successNotificationSelector);

  React.useEffect(() => {
    if (!isSuccess) return;

    notificationToast({
      ...toastOptions,
      title: isSuccess.title,
      description: isSuccess.message
    });
  }, [isSuccess, notificationToast]);

  return null;
};

export default SuccessToast;
