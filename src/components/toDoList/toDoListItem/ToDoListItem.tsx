import React from 'react';
import { ListItem } from '@chakra-ui/react';
import ToDoListItemTaskField from './toDoListItemTaskField/ToDoListItemTaskField';
import { IToDoListItemProps } from '../../../types';

const ToDoListItem = ({ children: toDoItem }: IToDoListItemProps): JSX.Element => {
  const [actionMenuVisibility, setActionMenuVisibility] = React.useState<boolean>(false);

  return (
    <ListItem
      cursor='pointer'
      onMouseEnter={() => setActionMenuVisibility(true)}
      onMouseLeave={() => setActionMenuVisibility(false)}>
      <ToDoListItemTaskField actionMenuVisibility={actionMenuVisibility} toDoItem={toDoItem} />
    </ListItem>
  );
};

export default ToDoListItem;
