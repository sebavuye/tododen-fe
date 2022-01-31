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
  const [inputValue, setInputValue] = React.useState<string>(activeToDoItem.todo);

  // RESET active to do item, when field component is destroyed (modal closed)
  React.useEffect(
    () => () => {
      dispatch(ACTIONS.setActiveToDoItem(null));
    },
    [dispatch]
  );

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  const handleSave = () => {
    const updatedToDoItem: IToDoItem = { ...activeToDoItem, todo: inputValue, readOnly: false };
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
    onSave();
  };

  const handleCancel = () => {
    const initialToDoItem: IToDoItem = { ...activeToDoItem, todo: activeToDoItem.todo, readOnly: false };
    setInputValue(activeToDoItem.todo);
    dispatch(ACTIONS.setActiveToDoItem(initialToDoItem));
  };

  const handleStatus = () => {
    const updatedToDoItem: IToDoItem = { ...activeToDoItem, completed: !activeToDoItem.completed };
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
    dispatch(ACTIONS.setActiveToDoItem(updatedToDoItem));
  };

  const handleInlineEdit = () => {
    const updatedToDoItem: IToDoItem = { ...activeToDoItem, readOnly: !activeToDoItem.readOnly, todo: inputValue };
    dispatch(ACTIONS.setActiveToDoItem(updatedToDoItem));
  };

  if (activeToDoItem.readOnly)
    return (
      <Flex flexDirection='column' width='100%'>
        <Input size='sm' value={inputValue} onChange={handleInput} />
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

  return (
    <>
      <ToDoStatusButton completed={activeToDoItem.completed} onClick={handleStatus} />
      <Text
        as={activeToDoItem.completed ? 's' : 'span'}
        fontSize='xl'
        fontWeight='700'
        ml={2}
        onClick={handleInlineEdit}>
        {activeToDoItem.todo}
      </Text>
    </>
  );
};

export default ToDoModalItemTaskField;
