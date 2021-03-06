import React from 'react';
import { Flex, ListItem } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { IToDoListItemProps } from '../../../types';
import { toDoListActionsLoadingSelector } from '../../../store/selectors';
import ToDoStatusButton from './toDoStatusButton/ToDoStatusButton';
import ToDoItemField from './toDoItemField/ToDoItemField';
import ToDoOptionsMenu from './toDoOptionsMenu/ToDoOptionsMenu';

const ToDoListItem = ({
  children,
  completed,
  editMode,
  onDelete,
  onEdit,
  onUpdate
}: IToDoListItemProps): JSX.Element => {
  const [showOptions, setShowOptions] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const isToDoActionLoading = useSelector(toDoListActionsLoadingSelector);

  React.useEffect(() => {
    if (!editMode) return;
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode]);

  const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputRef.current) {
      inputRef.current.blur();
    }
    if (event.key === 'Escape') {
      onEdit(children as string);
    }
  };

  return (
    <ListItem onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
      <Flex justifyContent='space-between'>
        <Flex alignItems='center' flex={1}>
          <ToDoStatusButton completed={completed} onClick={onUpdate} />
          <ToDoItemField
            completed={completed}
            defaultValue={children as string}
            disabled={isToDoActionLoading}
            editMode={editMode}
            inputRef={inputRef}
            onBlur={event => onEdit(event.target.value)}
            onClick={() => onEdit(children as string)}
            onKeyDown={event => handleInputKeyPress(event)}>
            {children}
          </ToDoItemField>
        </Flex>
        <ToDoOptionsMenu
          editMode={editMode}
          visible={showOptions}
          onDeleteClick={onDelete}
          onEditClick={() => onEdit(children as string)}
        />
      </Flex>
    </ListItem>
  );
};

export default ToDoListItem;
