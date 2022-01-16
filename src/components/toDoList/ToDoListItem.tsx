import React from 'react';
import { Flex, Icon, Input, ListItem, Text } from '@chakra-ui/react';
import { IoCheckmarkCircleSharp, IoCloseCircleOutline, IoEllipseOutline, IoPencilOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { IToDoListItemProps } from '../../types';
import { toDoListActionsLoadingSelector } from '../../store/selectors';

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
          {completed ? (
            <Icon
              as={IoCheckmarkCircleSharp}
              className={loadingClasses}
              color='teal.400'
              cursor='pointer'
              h={6}
              w={6}
              onClick={onUpdate}
            />
          ) : (
            <Icon
              as={IoEllipseOutline}
              className={loadingClasses}
              color='gray.400'
              cursor='pointer'
              h={6}
              w={6}
              onClick={onUpdate}
            />
          )}
          {editMode ? (
            <Input
              ref={inputRef}
              className={loadingClasses}
              defaultValue={children as string}
              disabled={isToDoActionLoading}
              size='sm'
              type='text'
              onBlur={event => {
                onEdit(event.target.value);
              }}
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => handleInputKeyPress(event)}
            />
          ) : (
            <Text
              as='span'
              className={loadingClasses}
              pl={2}
              onClick={() => {
                onEdit(children as string);
              }}>
              {completed ? <Text as='s'>{children}</Text> : children}
            </Text>
          )}
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
