import React from 'react';
import { Flex, Grid, GridItem, List } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import ToDoListStats from './ToDoListStats';
import ToDoListItem from './ToDoListItem';
import ToDoListInput from './ToDoListInput';
import Loading from '../loading/Loading';
import { LoadingText } from '../loadingText/LoadingText';
import * as ACTIONS from '../../store/actions';
import { getLoadingStateByKey, toDoStateSelector } from '../../store/selectors';
import { EToDoListLoadingKeys, IToDoItem } from '../../types';

const ToDoList = (): JSX.Element => {
  const dispatch = useDispatch();

  const toDoList = useSelector(toDoStateSelector);
  const isGetToDoListLoading = useSelector(getLoadingStateByKey(EToDoListLoadingKeys.GET_TODO_LIST));
  const isRemoveToDoItemLoading = useSelector(getLoadingStateByKey(EToDoListLoadingKeys.REMOVE_TO_DO_ITEM));

  const isLoading = isGetToDoListLoading || isRemoveToDoItemLoading;

  const handleDeleteToDoItem = (toDoItemId: IToDoItem['id']) => dispatch(ACTIONS.removeToDoItem(toDoItemId));

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
          {isLoading && (
            <Loading>
              <LoadingText loadingKeys={[EToDoListLoadingKeys.GET_TODO_LIST, EToDoListLoadingKeys.REMOVE_TO_DO_ITEM]} />
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
            <ToDoListInput />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default ToDoList;
