import React from 'react';
import { Flex, Grid, GridItem, List, useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import ToDoListStats from './ToDoListStats';
import ToDoListItem from './toDoListItem/ToDoListItem';
import ToDoListInput from './ToDoListInput';
import Loading from '../loading/Loading';
import { LoadingText } from '../loadingText/LoadingText';
import * as ACTIONS from '../../store/actions';
import { getToDoItemById, toDoListActionsLoadingSelector, toDoStateSelector } from '../../store/selectors';
import { LOADING_DELAYS, TO_DO_LOADING_KEYS } from '../../constants';
import { IToDoItem } from '../../types';
import { ReactComponent as EmptyStateImage } from '../../assets/images/EmptyState.svg';
import { EmptyState } from '../emptyState/EmptyState';
import ToDoModal from '../toDoModal/ToDoModal';

const ToDoList = (): JSX.Element => {
  const [selectedToDoItem, setSelectedToDoItem] = React.useState<IToDoItem | null>(null);
  const dispatch = useDispatch();
  const toDoList = useSelector(toDoStateSelector);
  const activeToDoListItem = useSelector(getToDoItemById(selectedToDoItem?.id));
  const isToDoActionLoading = useSelector(toDoListActionsLoadingSelector);
  const { isOpen, onClose, onOpen } = useDisclosure();

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

  const handleClickToDoItem = (toDoListItem: IToDoItem) => {
    setSelectedToDoItem(toDoListItem);
    onOpen();
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
                <ToDoListItem
                  key={toDoListItem.id}
                  completed={toDoListItem.completed}
                  editMode={toDoListItem.editMode}
                  onClick={() => handleClickToDoItem(toDoListItem)}
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

      {activeToDoListItem && (
        <ToDoModal
          isOpen={isOpen}
          toDoItem={activeToDoListItem}
          onClose={onClose}
          onStatusClick={handleStatusUpdateToDoItem}
        />
      )}
    </Grid>
  );
};

export default ToDoList;
