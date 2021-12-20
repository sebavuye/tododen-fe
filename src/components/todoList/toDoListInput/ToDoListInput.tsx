import React from 'react';
import { Button, Input, InputGroup } from '@chakra-ui/react';

const ToDoListInput = (): JSX.Element => (
  <InputGroup size='lg'>
    <Input placeholder='What needs to be done?' />
    <Button colorScheme='teal' ml={2} size='lg'>
      Add
    </Button>
  </InputGroup>
);

export default ToDoListInput;
