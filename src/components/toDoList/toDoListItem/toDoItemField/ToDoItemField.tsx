import React from 'react';
import { useSelector } from 'react-redux';
import { Input, Text } from '@chakra-ui/react';
import classNames from 'classnames';
import { toDoListActionsLoadingSelector } from '../../../../store/selectors';
import { IToDoItemField } from '../../../../types';

const ToDoItemField = ({
  children,
  completed,
  defaultValue,
  disabled,
  inputRef,
  onBlur,
  onClick,
  onKeyDown,
  readOnly
}: IToDoItemField): JSX.Element => {
  const isToDoActionLoading = useSelector(toDoListActionsLoadingSelector);
  const loadingClasses = classNames({ 'h-pointer-events-none h-touch-events-none': isToDoActionLoading });

  if (readOnly)
    return (
      <Text as='span' className={loadingClasses} pl={2} onClick={onClick}>
        {completed ? <Text as='s'>{children}</Text> : children}
      </Text>
    );

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
};

export default ToDoItemField;
