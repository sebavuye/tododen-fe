import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToast, UseToastOptions } from '@chakra-ui/react';
import { successNotificationSelector } from '../../store/selectors';
import { SUCCESS_NOTIFICATIONS } from '../../constants';
import { showSuccess } from '../../store/actions';

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
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!isSuccess) return;

    notificationToast({
      ...toastOptions,
      title: isSuccess.title,
      description: isSuccess.message,
      onCloseComplete: () => {
        dispatch(showSuccess(null));
      }
    });
  }, [dispatch, isSuccess, notificationToast]);

  return null;
};

export default SuccessToast;
