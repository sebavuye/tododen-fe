import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Icon } from '@chakra-ui/react';
import { IoCloseCircleOutline, IoPencilOutline } from 'react-icons/io5';
import classNames from 'classnames';
import { toDoListActionsLoadingSelector } from '../../../../store/selectors';
import { IToDoListItemActionsMenuProps } from '../../../../types';

const ToDoListItemActionsMenu = ({ onDelete, onEdit, readOnly, visible }: IToDoListItemActionsMenuProps) => {
  const isToDoActionLoading = useSelector(toDoListActionsLoadingSelector);

  const loadingClasses = classNames({ 'h-pointer-events-none h-touch-events-none': isToDoActionLoading });

  if (visible && readOnly)
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
          onClick={onEdit}
        />
        <Icon
          as={IoCloseCircleOutline}
          className={loadingClasses}
          color='gray.400'
          cursor='pointer'
          h={6}
          ml={1}
          w={6}
          onClick={onDelete}
        />
      </Flex>
    );

  return null;
};

export default ToDoListItemActionsMenu;
