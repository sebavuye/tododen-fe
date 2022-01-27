import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Flex, Input, Text } from '@chakra-ui/react';
import { activeToDoItem } from '../../../store/selectors';
import * as ACTIONS from '../../../store/actions';
import ToDoStatusButton from '../../toDoList/toDoListItem/toDoStatusButton/ToDoStatusButton';
import { IToDoFieldProps } from '../../../types';

// TODO: we should sync the fields for modal and normal use cases
const ToDoField = ({ onCancel, onSave }: IToDoFieldProps): JSX.Element => {
  const dispatch = useDispatch();
  const toDoItem = useSelector(activeToDoItem);
  const [inputValue, setInputValue] = React.useState(toDoItem.todo);

  // RESET active to do item, when to do field is destroyed
  React.useEffect(
    () => () => {
      dispatch(ACTIONS.setActiveToDoItem(null));
    },
    [dispatch]
  );

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);
  const handleSave = () => onSave({ ...toDoItem, todo: inputValue, editMode: false });
  const handleCancel = () => {
    setInputValue(toDoItem.todo);
    onCancel({ ...toDoItem, todo: toDoItem.todo, editMode: false });
  };
  const handleStatus = () => {
    dispatch(ACTIONS.updateToDoItem({ ...toDoItem, completed: !toDoItem.completed }));
    dispatch(ACTIONS.setActiveToDoItem({ ...toDoItem, completed: !toDoItem.completed }));
  };
  const handleEdit = () =>
    dispatch(ACTIONS.setActiveToDoItem({ ...toDoItem, editMode: !toDoItem.editMode, todo: inputValue }));

  if (toDoItem.editMode)
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
      <ToDoStatusButton completed={toDoItem.completed} onClick={handleStatus} />
      <Text as='span' fontSize='xl' fontWeight='700' ml={2} onClick={handleEdit}>
        {toDoItem.todo}
      </Text>
    </>
  );
};

export default ToDoField;
