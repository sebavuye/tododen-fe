import React from 'react';
import { Flex, Icon, ListItem } from '@chakra-ui/react';
import { IoCloseCircleOutline, IoPencilOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { IToDoListItemProps } from '../../../types';
import { toDoListActionsLoadingSelector } from '../../../store/selectors';
import StatusButton from './statusButton/StatusButton';
import ToDoItemField from './toDoItemField/ToDoItemField';

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

  const loadingClasses = isToDoActionLoading ? 'h-pointer-events-none h-touch-events-none' : ''.trim();

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
          <StatusButton completed={completed} onClick={onUpdate} />
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
        {showOptions && !editMode && (
          <Flex alignItems='center' justifyContent='end'>
            <Icon
              as={IoPencilOutline}
              className={loadingClasses}
              color='gray.400'
              cursor='pointer'
              h={6}
              mx={1}
              w={6}
              onClick={() => {
                onEdit(children as string);
              }}
            />
            <Icon
              as={IoCloseCircleOutline}
              className={loadingClasses}
              color='gray.400'
              cursor='pointer'
              h={6}
              ml={1}
              w={6}
              onClick={onDelete}
            />
          </Flex>
        )}
      </Flex>
    </ListItem>
  );
};

export default ToDoListItem;
