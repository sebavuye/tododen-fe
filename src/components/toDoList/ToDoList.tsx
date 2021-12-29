import React from 'react';
import { Grid, GridItem, List } from '@chakra-ui/react';
import ToDoListStats from './ToDoListStats';
import ToDoListItem from './ToDoListItem';
import ToDoListInput from './ToDoListInput';
import { useAppSelector } from '../../store/hooks';

const ToDoList = (): JSX.Element => {
  const { list: toDoList } = useAppSelector(state => state);

  return (
    <Grid h='100%' templateRows='auto 1fr'>
      <GridItem
        alignItems='end'
        bg='teal.100'
        display='flex'
        justifyContent='end'
        p={4}>
        <ToDoListStats />
      </GridItem>

      <GridItem bg='teal.50' p={6}>
        <Grid h='100%' mx='auto' templateRows='1fr auto' w='90%'>
          <GridItem>
            <List spacing={4}>
              {toDoList.map(toDoListItem => (
                <ToDoListItem key={toDoListItem.id}>
                  {toDoListItem.todo}
                </ToDoListItem>
              ))}
            </List>
          </GridItem>
          <GridItem display='flex'>
            <ToDoListInput />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default ToDoList;
