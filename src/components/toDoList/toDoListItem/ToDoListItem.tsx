import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { Button, ButtonGroup, Flex, Input, ListItem, Text, useDisclosure } from '@chakra-ui/react';
import ToDoListItemStatusButton from './toDoListItemStatusButton/ToDoListItemStatusButton';
import ToDoListItemActionsMenu from './toDoListItemActionsMenu/ToDoListItemActionsMenu';
import ToDoModal from '../../toDoModal/ToDoModal';
import { renderStatusElement } from '../../../utils';
import { IToDoListItemProps } from '../../../types';

const ToDoListItem = ({
  onCancel,
  onDelete,
  onInlineEdit,
  onSave,
  onStatusChange,
  toDoItem
}: IToDoListItemProps): JSX.Element => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [inputValue, setInputValue] = useState<string>('');
  const [actionMenuVisibility, setActionMenuVisibility] = useState<boolean>(false);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  const handleEdit = () => {
    onOpen();
  };

  const handleKeyboardInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSave(toDoItem, inputValue);
    }
    if (event.key === 'Escape') {
      onCancel(toDoItem.id);
    }
  };

  useEffect(() => {
    setInputValue(toDoItem.task);
  }, [toDoItem]);

  return (
    <ListItem justifyContent='space-between'>
      {toDoItem.readOnly ? (
        <Flex
          justifyContent='space-between'
          width='100%'
          onMouseEnter={() => setActionMenuVisibility(true)}
          onMouseLeave={() => setActionMenuVisibility(false)}>
          <Flex width='100%'>
            <ToDoListItemStatusButton completed={toDoItem.completed} onClick={() => onStatusChange(toDoItem)} />
            <Text as={renderStatusElement(toDoItem.completed)} ml={2} onClick={handleEdit}>
              {toDoItem.task}
            </Text>
          </Flex>
          <ToDoListItemActionsMenu
            readOnly={toDoItem.readOnly}
            visible={actionMenuVisibility}
            onDelete={() => onDelete(toDoItem.id)}
            onEdit={() => onInlineEdit(toDoItem.id)}
          />
        </Flex>
      ) : (
        <Flex flexDirection='column' width='100%'>
          <Input autoFocus size='sm' value={inputValue} onChange={handleInput} onKeyDown={handleKeyboardInput} />
          <ButtonGroup my={2} size='sm'>
            <Button colorScheme='teal' onClick={() => onSave(toDoItem, inputValue)}>
              Save
            </Button>
            <Button variant='outline' onClick={() => onCancel(toDoItem.id)}>
              Cancel
            </Button>
          </ButtonGroup>
        </Flex>
      )}
      <ToDoModal isOpen={isOpen} toDoItem={toDoItem} onClose={onClose} />
    </ListItem>
  );
};

export default ToDoListItem;
