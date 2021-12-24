import React from 'react';
import { Button, Input, InputGroup } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useAppDispatch } from '../../store/hooks';
import { addToDo } from '../../store/actions';

const ToDoListInput = (): JSX.Element => {
  const [userInput, setUserInput] = React.useState<string>('');
  const dispatch = useAppDispatch();

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserInput(event.currentTarget.value);

  const handleAddToDo = () => {
    dispatch(
      addToDo({
        id: nanoid(),
        todo: userInput,
        completed: false
      })
    );

    setUserInput('');
  };

  return (
    <InputGroup size='lg'>
      <Input
        placeholder='What needs to be done?'
        value={userInput}
        onChange={event => handleUserInput(event)}
      />
      <Button colorScheme='teal' ml={2} size='lg' onClick={handleAddToDo}>
        Add
      </Button>
    </InputGroup>
  );
};

export default ToDoListInput;
