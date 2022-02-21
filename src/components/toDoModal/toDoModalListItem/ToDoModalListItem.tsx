import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, ButtonGroup, Flex, Input, Text } from '@chakra-ui/react';
import ToDoListItemStatusButton from '../../toDoList/toDoListItem/toDoListItemStatusButton/ToDoListItemStatusButton';
import * as ACTIONS from '../../../store/actions';
import { renderStatusElement } from '../../../utils';
import { IToDoItem, IToDoModalListItemProps } from '../../../types';

const ToDoModalListItem = ({ onReadOnly, onSave, readOnly, toDoItem }: IToDoModalListItemProps): JSX.Element => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>(toDoItem.task);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  const handleSave = () => {
    const updatedToDoItem: IToDoItem = {
      ...toDoItem,
      task: inputValue,
      onSuccess: () => {
        onSave();
        onReadOnly(true);
      }
    };
    delete updatedToDoItem.readOnly;
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
  };

  const handleCancel = () => {
    setInputValue(toDoItem.task);
    onReadOnly(true);
  };

  const handleStatus = () => {
    const updatedToDoItem: IToDoItem = { ...toDoItem, completed: !toDoItem.completed };
    delete updatedToDoItem.readOnly;
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
  };

  const handleInlineEdit = () => {
    onReadOnly(false);
  };

  const handleKeyboardInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSave();
    }
    if (event.key === 'Escape') {
      handleCancel();
    }
  };

  if (readOnly)
    return (
      <>
        <ToDoListItemStatusButton completed={toDoItem.completed} onClick={handleStatus} />
        <Text
          as={renderStatusElement(toDoItem.completed)}
          fontSize='xl'
          fontWeight='700'
          ml={2}
          onClick={handleInlineEdit}>
          {toDoItem.task}
        </Text>
      </>
    );

  return (
    <Flex flexDirection='column' width='100%'>
      <Input autoFocus size='sm' value={inputValue} onChange={handleInput} onKeyDown={handleKeyboardInput} />
      <ButtonGroup my={2} size='sm'>
        <Button colorScheme='teal' onClick={handleSave}>
          Save
        </Button>
        <Button variant='outline' onClick={handleCancel}>
          Cancel
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default ToDoModalListItem;
