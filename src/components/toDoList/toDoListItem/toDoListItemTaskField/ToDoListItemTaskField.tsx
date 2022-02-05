import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, ButtonGroup, Flex, Input, Text, useDisclosure } from '@chakra-ui/react';
import ToDoStatusButton from '../toDoStatusButton/ToDoStatusButton';
import ToDoActionsMenu from '../toDoActionsMenu/ToDoActionsMenu';
import ToDoEditModal from '../../../toDoModal/ToDoEditModal';
import * as ACTIONS from '../../../../store/actions';
import { IActiveToDoItem, IToDoItem, IToDoListItemTaskFieldProps } from '../../../../types';
import { renderStatusElement } from '../../../../utils';

const ToDoListItemTaskField = ({ actionMenuVisibility, toDoItem }: IToDoListItemTaskFieldProps): JSX.Element => {
  const dispatch = useDispatch();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [inputValue, setInputValue] = React.useState<string>('');
  const [readOnly, setReadOnly] = React.useState<boolean>(true);

  React.useEffect(() => {
    setInputValue(toDoItem.task);
  }, [toDoItem]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  const handleEdit = () => {
    const activeToDoItem: IActiveToDoItem = { ...toDoItem, readOnly: true };
    dispatch(ACTIONS.setActiveToDoItem(activeToDoItem));
    onOpen();
  };

  const handleInlineEdit = () => {
    setReadOnly(false);
  };

  const handleCancel = () => {
    setInputValue(toDoItem.task);
    setReadOnly(true);
  };

  const handleStatus = () => {
    const updatedToDoItem: IToDoItem = { ...toDoItem, completed: !toDoItem.completed };
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
  };

  const handleDelete = () => {
    dispatch(ACTIONS.removeToDoItem(toDoItem.id));
  };

  const handleSave = () => {
    const updatedToDoItem: IToDoItem = {
      ...toDoItem,
      task: inputValue,
      onError: () => {
        setInputValue(toDoItem.task);
        setReadOnly(true);
      },
      onSuccess: () => setReadOnly(true)
    };
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
      {readOnly ? (
        <>
          <Flex width='100%'>
            <ToDoStatusButton completed={toDoItem.completed} onClick={handleStatus} />
            <Text as={renderStatusElement(toDoItem.completed)} ml={2} onClick={handleEdit}>
              {inputValue}
            </Text>
          </Flex>
          <ToDoActionsMenu
            readOnly={readOnly}
            visible={actionMenuVisibility}
            onDeleteClick={handleDelete}
            onEditClick={handleInlineEdit}
          />
        </>
      ) : (
        <Flex flexDirection='column' width='100%'>
          <Input size='sm' value={inputValue} onChange={handleInput} onKeyDown={handleKeyboardInput} />
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
