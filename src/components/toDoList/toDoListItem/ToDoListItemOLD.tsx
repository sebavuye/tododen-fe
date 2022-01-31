import React from 'react';
import { Flex, ListItem } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { IToDoListItemPropsOld } from '../../../types';
import { toDoListActionsLoadingSelector } from '../../../store/selectors';
import ToDoStatusButton from './toDoStatusButton/ToDoStatusButton';
import ToDoItemField from './toDoItemField/ToDoItemField';
import ToDoActionsMenu from './toDoActionsMenu/ToDoActionsMenu';

const ToDoListItemOLD = ({
  children,
  completed,
  onClick,
  onDelete,
  onEdit,
  onUpdate,
  readOnly
}: IToDoListItemPropsOld): JSX.Element => {
  const [showOptions, setShowOptions] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const isToDoActionLoading = useSelector(toDoListActionsLoadingSelector);

  React.useEffect(() => {
    if (!readOnly) return;
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [readOnly]);

  const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputRef.current) {
      inputRef.current.blur();
    }
    if (event.key === 'Escape') {
      onEdit(children as string);
    }
  };

  return (
    <ListItem cursor='pointer' onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
      <Flex justifyContent='space-between'>
        <Flex alignItems='center' flex={1}>
          <ToDoStatusButton completed={completed} onClick={onUpdate} />
          <ToDoItemField
            completed={completed}
            defaultValue={children as string}
            disabled={isToDoActionLoading}
            readOnly={readOnly}
            inputRef={inputRef}
            onBlur={event => onEdit(event.target.value)}
            onClick={onClick}
            onKeyDown={event => handleInputKeyPress(event)}>
            {children}
          </ToDoItemField>
        </Flex>
        <ToDoActionsMenu
          readOnly={readOnly}
          visible={showOptions}
          onDeleteClick={onDelete}
          onEditClick={() => onEdit(children as string)}
        />
      </Flex>
    </ListItem>
  );
};

export default ToDoListItemOLD;
