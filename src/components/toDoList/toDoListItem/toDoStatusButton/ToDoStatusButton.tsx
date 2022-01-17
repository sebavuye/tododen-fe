import React from 'react';
import { useSelector } from 'react-redux';
import { Icon } from '@chakra-ui/react';
import { IoCheckmarkCircleSharp, IoEllipseOutline } from 'react-icons/io5';
import { toDoListActionsLoadingSelector } from '../../../../store/selectors';
import { IToDoStatusButton } from '../../../../types';

const ToDoStatusButton = ({ completed, onClick }: IToDoStatusButton): JSX.Element => {
  const isToDoActionLoading = useSelector(toDoListActionsLoadingSelector);
  const loadingClasses = isToDoActionLoading ? 'h-pointer-events-none h-touch-events-none' : ''.trim();

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

export default ToDoStatusButton;
