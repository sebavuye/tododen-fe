import React from 'react';
import { useSelector } from 'react-redux';
import { Icon } from '@chakra-ui/react';
import classNames from 'classnames';
import { IoCheckmarkCircleSharp, IoEllipseOutline } from 'react-icons/io5';
import { toDoListActionsLoadingSelector } from '../../../../store/selectors';
import { IToDoListItemStatusButtonProps } from '../../../../types';

const ToDoListItemStatusButton = ({ completed, onClick }: IToDoListItemStatusButtonProps): JSX.Element => {
  const isToDoActionLoading = useSelector(toDoListActionsLoadingSelector);
  const loadingClasses = classNames({ 'h-pointer-events-none h-touch-events-none': isToDoActionLoading });

  return (
    <Icon
      as={completed ? IoCheckmarkCircleSharp : IoEllipseOutline}
      className={loadingClasses}
      color={completed ? 'teal.400' : 'gray.400'}
      cursor='pointer'
      h={6}
      w={6}
      onClick={onClick}
    />
  );
};

export default ToDoListItemStatusButton;