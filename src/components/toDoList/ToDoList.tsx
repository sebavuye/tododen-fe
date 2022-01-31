import React from 'react';
import { Flex, Grid, GridItem, List } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import ToDoListStats from './ToDoListStats';
import ToDoListInput from './ToDoListInput';
import Loading from '../loading/Loading';
import { LoadingText } from '../loadingText/LoadingText';
import { toDoListActionsLoadingSelector, toDoStateSelector } from '../../store/selectors';
import { LOADING_DELAYS, TO_DO_LOADING_KEYS } from '../../constants';
import { IToDoItem } from '../../types';
import { ReactComponent as EmptyStateImage } from '../../assets/images/EmptyState.svg';
import { EmptyState } from '../emptyState/EmptyState';
import ToDoListItem from './toDoListItem/ToDoListItem';

// TODO: todoitem.todo should be todoitem.task
const ToDoList = (): JSX.Element => {
  const toDoList = useSelector(toDoStateSelector);
  const isToDoActionLoading = useSelector(toDoListActionsLoadingSelector);

  return (
    <Grid h='100%' templateRows='auto 1fr'>
      <GridItem bg='teal.100' display='flex' p={4}>
        <Flex alignItems='center' width='50%'>
          {isToDoActionLoading && (
            <Loading delay={LOADING_DELAYS.DEFAULT}>
              <LoadingText loadingKeys={TO_DO_LOADING_KEYS} />
            </Loading>
          )}
        </Flex>
        <Flex justifyContent='end' width='50%'>
          <ToDoListStats />
        </Flex>
      </GridItem>
      <GridItem bg='teal.50' p={6}>
        <Grid h='100%' mx='auto' templateRows='1fr auto' w={{ base: '100%', md: '75%', xl: '50%' }}>
          <GridItem>
            {toDoList.length === 0 && !isToDoActionLoading && (
              <EmptyState
                image={<EmptyStateImage height='100%' width='100%' />}
                message='What needs to be done?'
                title='Add a To Do'
              />
            )}
            <List spacing={4}>
              {toDoList.map((toDoListItem: IToDoItem) => (
                <ToDoListItem key={toDoListItem.id}>{toDoListItem}</ToDoListItem>
              ))}
            </List>
          </GridItem>
          <GridItem display='flex'>
            <ToDoListInput disabled={isToDoActionLoading} />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default ToDoList;
