import React from 'react';
import { Badge, Flex } from '@chakra-ui/react';
import { useAppSelector } from '../../store/hooks';

const ToDoListStats = (): JSX.Element => {
  const { list: toDoList } = useAppSelector(state => state);

  const uncompletedToDos = toDoList.filter(todo => !todo.completed).length;
  const completedToDos = toDoList.length - uncompletedToDos;

  return (
    <Flex>
      <Badge colorScheme='pink' mx={1}>{`To Do: ${uncompletedToDos}`}</Badge>
      <Badge colorScheme='yellow' mx={1}>{`Done: ${completedToDos}`}</Badge>
    </Flex>
  );
};

export default ToDoListStats;
