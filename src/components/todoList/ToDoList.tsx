import React from 'react';
import {
  Button,
  Grid,
  GridItem,
  Input,
  InputGroup,
  List
} from '@chakra-ui/react';
import ToDoListStats from './toDoListStats/toDoListStats';
import ToDoListItem from './toDoListItem/toDoListItem';

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
          <InputGroup size='lg'>
            <Input placeholder='What needs to be done?' />
            <Button colorScheme='teal' ml={2} size='lg'>
              Add
            </Button>
          </InputGroup>
        </GridItem>
      </Grid>
    </GridItem>
  </Grid>
);

export default ToDoList;
