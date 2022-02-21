import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, Grid, GridItem, List } from '@chakra-ui/react';
import * as ACTIONS from '../../store/actions';
import { toDoListActionsLoadingSelector, toDoListSelector } from '../../store/selectors';
import ToDoListStats from './toDoListStats/ToDoListStats';
import ToDoListItem from './toDoListItem/ToDoListItem';
import ToDoListInput from './toDoListInput/ToDoListInput';
import Loading from '../loading/Loading';
import LoadingText from '../loadingText/LoadingText';
import EmptyState from '../emptyState/EmptyState';
import { ReactComponent as EmptyStateImage } from '../../assets/images/EmptyState.svg';
import { IToDoItem, TToDoItemId, TToDoItemTask } from '../../types/toDo';
import { LOADING_DELAYS, TO_DO_LOADING_KEYS } from '../../constants';

const ToDoList = (): JSX.Element => {
  const dispatch = useDispatch();
  const globalToDoList = useSelector(toDoListSelector);
  const isToDoActionLoading = useSelector(toDoListActionsLoadingSelector);
  const [localToDoList, setLocalToDoList] = useState<IToDoItem[]>([]);

  const handleCancel = (uid: TToDoItemId) => {
    const initialTaskValue = localToDoList.find(toDoItem => toDoItem.id === uid)?.task;

    if (initialTaskValue) {
      const localToDoListEditMode: IToDoItem[] = localToDoList.map(toDoItem =>
        toDoItem.id === uid ? { ...toDoItem, readOnly: true, task: initialTaskValue } : { ...toDoItem, readOnly: true }
      );
      setLocalToDoList(localToDoListEditMode);
    }
  };

  const handleDelete = (uid: TToDoItemId) => {
    dispatch(ACTIONS.removeToDoItem(uid));
  };

  const handleInlineEdit = (uid: TToDoItemId) => {
    const localToDoListEditMode: IToDoItem[] = localToDoList.map(toDoItem =>
      toDoItem.id === uid ? { ...toDoItem, readOnly: false } : { ...toDoItem, readOnly: true }
    );
    setLocalToDoList(localToDoListEditMode);
  };

  const handleSave = (toDoItem: IToDoItem, updatedTaskValue: TToDoItemTask) => {
    const updatedToDoItem: IToDoItem = { ...toDoItem, task: updatedTaskValue };
    delete updatedToDoItem.readOnly;
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
  };

  const handleStatus = (toDoItem: IToDoItem) => {
    const updatedToDoItem: IToDoItem = { ...toDoItem, completed: !toDoItem.completed };
    delete updatedToDoItem.readOnly;
    dispatch(ACTIONS.updateToDoItem(updatedToDoItem));
  };

  useEffect(() => {
    const localToDoListClone: IToDoItem[] = globalToDoList.map(toDoItem => ({ ...toDoItem, readOnly: true }));
    setLocalToDoList(localToDoListClone);
  }, [globalToDoList]);

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
            {localToDoList.length === 0 && !isToDoActionLoading && (
              <EmptyState
                image={<EmptyStateImage height='100%' width='100%' />}
                message='What needs to be done?'
                title='Add a To Do'
              />
            )}
            <List spacing={4}>
              {localToDoList.map((toDoListItem: IToDoItem) => (
                <ToDoListItem
                  key={toDoListItem.id}
                  toDoItem={toDoListItem}
                  onCancel={handleCancel}
                  onDelete={handleDelete}
                  onInlineEdit={handleInlineEdit}
                  onSave={handleSave}
                  onStatusChange={handleStatus}
                />
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
