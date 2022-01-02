import React from 'react';
import { Flex, Icon, Input, ListItem, Text } from '@chakra-ui/react';
import {
  IoCheckmarkCircleSharp,
  IoCloseCircleOutline,
  IoEllipseOutline,
  IoPencilOutline
} from 'react-icons/io5';
import { ToDoListItemProps } from './types';

const ToDoListItem = ({
  children,
  completed,
  editMode,
  onDelete,
  onEdit,
  onUpdate
}: ToDoListItemProps): JSX.Element => {
  const [showOptions, setShowOptions] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (!editMode) return;
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode]);

  return (
    <ListItem
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}>
      <Flex justifyContent='space-between'>
        <Flex alignItems='center' flex={1}>
          {completed ? (
            <Icon
              as={IoCheckmarkCircleSharp}
              color='teal.400'
              cursor='pointer'
              h={6}
              w={6}
              onClick={onUpdate}
            />
          ) : (
            <Icon
              as={IoEllipseOutline}
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
              defaultValue={children as string}
              size='sm'
              type='text'
              onBlur={event => {
                onEdit(event.target.value);
              }}
            />
          ) : (
            <Text
              as='span'
              pl={2}
              onClick={() => {
                onEdit(children as string);
              }}>
              {completed ? <Text as='s'>{children}</Text> : children}
            </Text>
          )}
        </Flex>
        {showOptions && (
          <Flex alignItems='center' justifyContent='end'>
            <Icon
              as={IoPencilOutline}
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
