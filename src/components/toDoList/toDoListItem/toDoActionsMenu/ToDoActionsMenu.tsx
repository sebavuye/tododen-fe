import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Icon } from '@chakra-ui/react';
import { IoCloseCircleOutline, IoPencilOutline } from 'react-icons/io5';
import { toDoListActionsLoadingSelector } from '../../../../store/selectors';
import { IToDoActionsMenu } from '../../../../types';

// TODO: rename to OnEdit and On Delete
const ToDoActionsMenu = ({ onDeleteClick, onEditClick, readOnly, visible }: IToDoActionsMenu) => {
  const isToDoActionLoading = useSelector(toDoListActionsLoadingSelector);

  // TODO: classNames library
  const loadingClasses = isToDoActionLoading ? 'h-pointer-events-none h-touch-events-none' : ''.trim();

  if (visible && !readOnly)
    return (
      <Flex alignItems='center' justifyContent='end'>
        <Icon
          as={IoPencilOutline}
          className={loadingClasses}
          color='gray.400'
          cursor='pointer'
          h={6}
          mx={1}
          w={6}
          onClick={onEditClick}
        />
        <Icon
          as={IoCloseCircleOutline}
          className={loadingClasses}
          color='gray.400'
          cursor='pointer'
          h={6}
          ml={1}
          w={6}
          onClick={onDeleteClick}
        />
      </Flex>
    );

  return null;
};

export default ToDoActionsMenu;
