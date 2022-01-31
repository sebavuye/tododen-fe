import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Flex, Input, Text } from '@chakra-ui/react';
import ToDoStatusButton from '../../toDoList/toDoListItem/toDoStatusButton/ToDoStatusButton';
import * as ACTIONS from '../../../store/actions';
import { activeToDoItemSelector } from '../../../store/selectors';
import { IToDoItem, IToDoModalItemTaskFieldProps } from '../../../types';

const ToDoModalItemTaskField = ({ onSave }: IToDoModalItemTaskFieldProps): JSX.Element => {
  const dispatch = useDispatch();
  const activeToDoItem = useSelector(activeToDoItemSelector);
  const [inputValue, setInputValue] = React.useState<string>(activeToDoItem.task);

  // RESET active to do item, when field component is destroyed (modal closed)
  React.useEffect(
    () => () => {
      dispatch(ACTIONS.setActiveToDoItem(null));
    },
    [dispatch]
  );

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  const handleSave = () => {
    const updatedToDoItem: IToDoItem = { ...activeToDoItem, task: inputValue, readOnly: true };
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
    onSave();
  };

  const handleCancel = () => {
    const initialToDoItem: IToDoItem = { ...activeToDoItem, task: activeToDoItem.task, readOnly: true };
    setInputValue(activeToDoItem.task);
    dispatch(ACTIONS.setActiveToDoItem(initialToDoItem));
  };

  const handleStatus = () => {
    const updatedToDoItem: IToDoItem = { ...activeToDoItem, completed: !activeToDoItem.completed };
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
    dispatch(ACTIONS.setActiveToDoItem(updatedToDoItem));
  };

  const handleInlineEdit = () => {
    const updatedToDoItem: IToDoItem = { ...activeToDoItem, readOnly: !activeToDoItem.readOnly, task: inputValue };
    dispatch(ACTIONS.setActiveToDoItem(updatedToDoItem));
  };

  const handleKeyboardInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSave();
    }
    if (event.key === 'Escape') {
      handleCancel();
    }
  };

  if (activeToDoItem.readOnly)
    return (
      <>
        <ToDoStatusButton completed={activeToDoItem.completed} onClick={handleStatus} />
        <Text
          as={activeToDoItem.completed ? 's' : 'span'}
          fontSize='xl'
          fontWeight='700'
          ml={2}
          onClick={handleInlineEdit}>
          {activeToDoItem.task}
        </Text>
      </>
    );

  return (
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
  );
};

export default ToDoModalItemTaskField;
