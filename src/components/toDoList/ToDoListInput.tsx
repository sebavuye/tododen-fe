import React from 'react';
import { Button, Input, InputGroup } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import * as ACTIONS from '../../store/actions';
import { ERROR_NOTIFICATIONS } from '../../constants';

const ToDoListInput = (): JSX.Element => {
  const [userInput, setUserInput] = React.useState<string>('');
  const dispatch = useDispatch();

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => setUserInput(event.currentTarget.value);

  const handleAddToDo = () => {
    if (!userInput) {
      dispatch(
        ACTIONS.showError({
          title: ERROR_NOTIFICATIONS.defaultErrorTitle,
          message: ERROR_NOTIFICATIONS.toDoListNoIserInput
        })
      );
    } else {
      dispatch(ACTIONS.createToDoItem({ id: nanoid(), editMode: false, todo: userInput, completed: false }));
      setUserInput('');
    }
  };

  return (
    <InputGroup size='lg'>
      <Input
        placeholder='What needs to be done?'
        value={userInput}
        onChange={event => handleUserInput(event)}
        onKeyDown={event => {
          if (event.key === 'Enter') handleAddToDo();
        }}
      />
      <Button colorScheme='teal' ml={2} size='lg' onClick={handleAddToDo}>
        Add
      </Button>
    </InputGroup>
  );
};

export default ToDoListInput;
