import React from 'react';
import { Grid, GridItem, List, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import ToDoListStats from './ToDoListStats';
import ToDoListItem from './ToDoListItem';
import ToDoListInput from './ToDoListInput';
import * as ACTIONS from '../../store/actions';
import { getLoadingStateByKey, toDoStateSelector } from '../../store/selectors';
import { EToDoListLoadingKeys, IToDoItem } from '../../types';

const ToDoList = (): JSX.Element => {
  const dispatch = useDispatch();

  const toDoList = useSelector(toDoStateSelector);
  const isLoading = useSelector(getLoadingStateByKey(EToDoListLoadingKeys.GET_TODO_LIST));

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
      <GridItem alignItems='end' bg='teal.100' display='flex' justifyContent='end' p={4}>
        <ToDoListStats />
      </GridItem>

      <GridItem bg='teal.50' p={6}>
        <Grid h='100%' mx='auto' templateRows='1fr auto' w='90%'>
          <GridItem>
            <List spacing={4}>
              {isLoading ? (
                <Text>Loading...</Text>
              ) : (
                toDoList.map((toDoListItem: IToDoItem) => (
                  <ToDoListItem
                    key={toDoListItem.id}
                    completed={toDoListItem.completed}
                    editMode={toDoListItem.editMode}
                    onDelete={() => handleDeleteToDoItem(toDoListItem.id)}
                    onEdit={newValue => handleEditToDoItem(toDoListItem, newValue)}
                    onUpdate={() => handleStatusUpdateToDoItem(toDoListItem)}>
                    {toDoListItem.todo}
                  </ToDoListItem>
                ))
              )}
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
