import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, ButtonGroup, Flex, Input, Text, useDisclosure } from '@chakra-ui/react';
import ToDoStatusButton from '../toDoStatusButton/ToDoStatusButton';
import ToDoActionsMenu from '../toDoActionsMenu/ToDoActionsMenu';
import ToDoEditModal from '../../../toDoModal/ToDoEditModal';
import * as ACTIONS from '../../../../store/actions';
import { IToDoItem, IToDoListItemTaskFieldProps } from '../../../../types';

const ToDoListItemTaskField = ({ actionMenuVisibility, toDoItem }: IToDoListItemTaskFieldProps): JSX.Element => {
  const dispatch = useDispatch();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  const handleEdit = () => {
    dispatch(ACTIONS.setActiveToDoItem(toDoItem));
    onOpen();
  };

  const handleInlineEdit = () => {
    const updatedToDoItem: IToDoItem = { ...toDoItem, readOnly: false };
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
  };

  const handleSave = () => {
    const updatedToDoItem: IToDoItem = { ...toDoItem, task: inputValue, readOnly: !toDoItem.readOnly };
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
  };

  const handleCancel = () => {
    const updatedToDoItem: IToDoItem = { ...toDoItem, readOnly: true };
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
  };

  const handleDelete = () => {
    dispatch(ACTIONS.removeToDoItem(toDoItem.id));
  };

  const handleStatus = () => {
    const updatedToDoItem: IToDoItem = { ...toDoItem, completed: !toDoItem.completed };
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
  };

  const handleKeyboardInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSave();
    }
    if (event.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <Flex justifyContent='space-between'>
      {toDoItem.readOnly ? (
        <>
          <Flex width='100%'>
            <ToDoStatusButton completed={toDoItem.completed} onClick={handleStatus} />
            <Text as={toDoItem.completed ? 's' : 'span'} ml={2} onClick={handleEdit}>
              {toDoItem.task}
            </Text>
          </Flex>
          <ToDoActionsMenu
            readOnly={toDoItem.readOnly}
            visible={actionMenuVisibility}
            onDeleteClick={handleDelete}
            onEditClick={handleInlineEdit}
          />
        </>
      ) : (
        <Flex flexDirection='column' width='100%'>
          <Input defaultValue={toDoItem.task} size='sm' onChange={handleInput} onKeyDown={handleKeyboardInput} />
          <ButtonGroup my={2} size='sm'>
            <Button colorScheme='teal' onClick={handleSave}>
              Save
            </Button>
            <Button variant='outline' onClick={handleCancel}>
              Cancel
            </Button>
          </ButtonGroup>
        </Flex>
      )}
      <ToDoEditModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default ToDoListItemTaskField;
