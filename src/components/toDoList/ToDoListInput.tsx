import React from 'react';
import { Button, Input, InputGroup, ToastId, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addToDo } from '../../store/actions';

const ToDoListInput = (): JSX.Element => {
  const [userInput, setUserInput] = React.useState<string>('');
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(state => state.ToDoReducer);

  const notificationToast = useToast();
  const notificationToastRef = React.useRef<ToastId | undefined>();

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserInput(event.currentTarget.value);

  const handleAddToDo = () => {
    if (!userInput) {
      if (
        notificationToastRef.current &&
        notificationToast.isActive(notificationToastRef.current)
      )
        return;

      notificationToastRef.current = notificationToast({
        title: 'Oops!',
        description: 'You need to input some text',
        status: 'error',
        duration: 5000,
        isClosable: true,
        variant: 'top-accent'
      });
    } else {
      if (notificationToastRef.current) {
        notificationToast.update(notificationToastRef.current, {
          title: 'Success!',
          status: 'success',
          description: 'Adding your todo!',
          duration: 5000,
          isClosable: true,
          variant: 'top-accent'
        });
      }

      dispatch(
        addToDo({
          id: nanoid(),
          editMode: false,
          todo: userInput,
          completed: false
        })
      );

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
      <Button
        colorScheme='teal'
        isLoading={loading}
        ml={2}
        size='lg'
        onClick={handleAddToDo}>
        Add
      </Button>
    </InputGroup>
  );
};

export default ToDoListInput;
