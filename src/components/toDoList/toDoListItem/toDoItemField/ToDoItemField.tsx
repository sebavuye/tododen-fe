import React from 'react';
import { useSelector } from 'react-redux';
import { Input, Text } from '@chakra-ui/react';
import { toDoListActionsLoadingSelector } from '../../../../store/selectors';
import { IToDoItemField } from '../../../../types';

const ToDoItemField = ({
  children,
  completed,
  defaultValue,
  disabled,
  editMode,
  inputRef,
  onBlur,
  onClick,
  onKeyDown
}: IToDoItemField): JSX.Element => {
  const isToDoActionLoading = useSelector(toDoListActionsLoadingSelector);
  const loadingClasses = isToDoActionLoading ? 'h-pointer-events-none h-touch-events-none' : ''.trim();

  if (editMode)
    return (
      <Input
        ref={inputRef}
        className={loadingClasses}
        defaultValue={defaultValue}
        disabled={disabled}
        size='sm'
        type='text'
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
    );

  return (
    <Text as='span' className={loadingClasses} pl={2} onClick={onClick}>
      {completed ? <Text as='s'>{children}</Text> : children}
    </Text>
  );
};

export default ToDoItemField;
