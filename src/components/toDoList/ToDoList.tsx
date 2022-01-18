import React from 'react';
import { Fade, Flex, Grid, GridItem, List, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import ToDoListStats from './ToDoListStats';
import ToDoListItem from './toDoListItem/ToDoListItem';
import ToDoListInput from './ToDoListInput';
import Loading from '../loading/Loading';
import { LoadingText } from '../loadingText/LoadingText';
import * as ACTIONS from '../../store/actions';
import { toDoListActionsLoadingSelector, toDoStateSelector } from '../../store/selectors';
import { LOADING_DELAYS, TO_DO_LOADING_KEYS } from '../../constants';
import { IToDoItem } from '../../types';
import { ReactComponent as EmptyStateImage } from '../../assets/images/EmptyState.svg';

const ToDoList = (): JSX.Element => {
  const dispatch = useDispatch();
  const toDoList = useSelector(toDoStateSelector);
  const isToDoActionLoading = useSelector(toDoListActionsLoadingSelector);

  const handleDeleteToDoItem = (toDoItemId: IToDoItem['id']) => {
    dispatch(ACTIONS.removeToDoItem(toDoItemId));
  };

  const handleStatusUpdateToDoItem = (toDoListItem: IToDoItem) => {
    const updatedToDoItem: IToDoItem = {
      ...toDoListItem,
      completed: !toDoListItem.completed
    };
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
  };

  const handleEditToDoItem = (toDoListItem: IToDoItem, newValue: string) => {
    const updatedToDoItem = {
      ...toDoListItem,
      todo: newValue,
      editMode: !toDoListItem.editMode
    };
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
  };

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
        <Grid h='100%' mx='auto' templateRows='1fr auto' w='90%'>
          <GridItem>
            {toDoList.length === 0 && !isToDoActionLoading && (
              <Flex alignItems='center' flexDir='column' h='100%' justifyContent='center'>
                <Fade in transition={{ enter: { duration: 2 } }}>
                  <Flex alignItems='center' flexDir='column' h='100%' justifyContent='center'>
                    <Flex justifyContent='center' w='100%'>
                      <EmptyStateImage height='100%' width='100%' />
                    </Flex>
                    <Flex alignItems='center' flexDir='column' mt={6}>
                      <Text fontSize='2xl' fontWeight={700}>
                        Add a To Do
                      </Text>
                      <Text color='gray.400'>What needs to be done?</Text>
                    </Flex>
                  </Flex>
                </Fade>
              </Flex>
            )}
            <List spacing={4}>
              {toDoList.map((toDoListItem: IToDoItem) => (
                <ToDoListItem
                  key={toDoListItem.id}
                  completed={toDoListItem.completed}
                  editMode={toDoListItem.editMode}
                  onDelete={() => handleDeleteToDoItem(toDoListItem.id)}
                  onEdit={newValue => handleEditToDoItem(toDoListItem, newValue)}
                  onUpdate={() => handleStatusUpdateToDoItem(toDoListItem)}>
                  {toDoListItem.todo}
                </ToDoListItem>
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
