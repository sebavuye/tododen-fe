import React from 'react';
import { Badge, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { toDoListSelector } from '../../../store/selectors';
import { IToDoItem } from '../../../types';

const ToDoListStats = (): JSX.Element => {
  const toDoList = useSelector(toDoListSelector);

  const uncompletedToDos = toDoList.filter((todo: IToDoItem) => !todo.completed).length;
  const completedToDos = toDoList.length - uncompletedToDos;

  return (
    <Flex>
      <Badge colorScheme='pink' mx={1}>{`To Do: ${uncompletedToDos}`}</Badge>
      <Badge colorScheme='yellow' mx={1}>{`Done: ${completedToDos}`}</Badge>
    </Flex>
  );
};

export default ToDoListStats;
