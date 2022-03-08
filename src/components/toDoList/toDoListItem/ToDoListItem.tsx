import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, ButtonGroup, Flex, Input, ListItem, Tag, Text, useDisclosure } from '@chakra-ui/react';
import ToDoListItemStatusButton from './toDoListItemStatusButton/ToDoListItemStatusButton';
import ToDoListItemActionsMenu from './toDoListItemActionsMenu/ToDoListItemActionsMenu';
import ToDoModal from '../../toDoModal/ToDoModal';
import { renderStatusElement } from '../../../utils';
import { IToDoListItemProps } from '../../../types';

const ToDoListItem = ({
  onCancel,
  onDelete,
  onEdit,
  onInlineEdit,
  onKeyboardInput,
  onSave,
  onStatusChange,
  toDoItem
}: IToDoListItemProps): JSX.Element => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [inputValue, setInputValue] = useState<string>('');
  const [actionMenuVisibility, setActionMenuVisibility] = useState<boolean>(false);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  const handleEdit = () => {
    onEdit();
    onOpen();
  };

  useEffect(() => {
    setInputValue(toDoItem.task);
  }, [toDoItem]);

  return (
    <ListItem justifyContent='space-between'>
      {toDoItem.readOnly ? (
        <Flex
          alignItems='flex-start'
          justifyContent='space-between'
          width='100%'
          onMouseEnter={() => setActionMenuVisibility(true)}
          onMouseLeave={() => setActionMenuVisibility(false)}>
          <Flex flex={3}>
            <ToDoListItemStatusButton completed={toDoItem.completed} onClick={() => onStatusChange(toDoItem)} />
            <Flex flexDirection='column'>
              <Text as={renderStatusElement(toDoItem.completed)} ml={2} onClick={handleEdit}>
                {toDoItem.task}
              </Text>
              <Flex flexWrap='wrap' p={1}>
                {toDoItem.labels?.map(label => (
                  <Tag key={label.id} marginRight={2} marginY={1} size='sm'>
                    {/* TODO: change label.label to appropriate name */}
                    {label.label}
                  </Tag>
                ))}
              </Flex>
            </Flex>
          </Flex>
          <Flex flex={1} justifyContent='flex-end'>
            <ToDoListItemActionsMenu
              readOnly={toDoItem.readOnly}
              visible={actionMenuVisibility}
              onDelete={() => onDelete(toDoItem.id)}
              onEdit={() => onInlineEdit(toDoItem.id)}
            />
          </Flex>
        </Flex>
      ) : (
        <Flex flexDirection='column' width='100%'>
          <Input
            autoFocus
            size='sm'
            value={inputValue}
            onBlur={() => setActionMenuVisibility(false)}
            onChange={handleInput}
            onKeyDown={event => {
              onKeyboardInput(event, toDoItem, inputValue);
              setActionMenuVisibility(false);
            }}
          />
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
