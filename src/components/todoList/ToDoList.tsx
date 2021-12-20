import React from 'react';
import { Grid, GridItem, List } from '@chakra-ui/react';
import ToDoListStats from './toDoListStats/toDoListStats';
import ToDoListItem from './toDoListItem/toDoListItem';
import ToDoListInput from './toDoListInput/ToDoListInput';

const ToDoList = (): JSX.Element => (
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
            <ToDoListItem />
          </List>
        </GridItem>
        <GridItem display='flex'>
          <ToDoListInput />
        </GridItem>
      </Grid>
    </GridItem>
  </Grid>
);

export default ToDoList;
