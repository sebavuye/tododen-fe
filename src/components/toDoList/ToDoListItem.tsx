import React from 'react';
import { Flex, Icon, ListItem, Text } from '@chakra-ui/react';
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
  onDelete,
  onUpdate
}: ToDoListItemProps): JSX.Element => (
  <ListItem>
    <Flex justifyContent='space-between'>
      <Flex flex={1}>
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

        <Text as='span' pl={2}>
          {completed ? <Text as='s'>{children}</Text> : children}
        </Text>
      </Flex>
      <Flex justifyContent='end'>
        <Icon as={IoPencilOutline} color='gray.400' h={6} mx={1} w={6} />
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
    </Flex>
  </ListItem>
);

export default ToDoListItem;
