import React from 'react';
import { Button, Input, InputGroup } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import * as ACTIONS from '../../../store/actions';
import { ERROR_NOTIFICATIONS } from '../../../constants';
import { ENotificationIds, IToDoItem, IToDoListInputProps } from '../../../types';

const ToDoListInput = ({ disabled }: IToDoListInputProps): JSX.Element => {
  const [userInput, setUserInput] = React.useState<string>('');
  const dispatch = useDispatch();

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => setUserInput(event.currentTarget.value);

  const handleAddToDo = () => {
    if (!userInput) {
      dispatch(
        ACTIONS.showError({
          title: ERROR_NOTIFICATIONS.defaultErrorTitle,
          message: ERROR_NOTIFICATIONS.toDoListNoIserInput,
          id: ENotificationIds.TO_DO_NO_USER_INPUT
        })
      );
    } else {
      const toDoItem: IToDoItem = { id: nanoid(), task: userInput, completed: false };
      dispatch(ACTIONS.createToDoItem(toDoItem));
      setUserInput('');
    }
  };

  return (
    <InputGroup size='lg'>
      <Input
        disabled={disabled}
        placeholder='What needs to be done?'
        value={userInput}
        onChange={event => handleUserInput(event)}
        onKeyDown={event => {
          if (event.key === 'Enter') handleAddToDo();
        }}
      />
      <Button colorScheme='teal' disabled={disabled} ml={2} size='lg' onClick={handleAddToDo}>
        Add
      </Button>
    </InputGroup>
  );
};

export default ToDoListInput;