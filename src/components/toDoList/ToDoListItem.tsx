import React from 'react';
import { Flex, Icon, ListItem, Text } from '@chakra-ui/react';
import {
  IoCloseCircleOutline,
  IoEllipseOutline,
  IoPencilOutline
} from 'react-icons/io5';
import { ToDoListItemProps } from './types';

const ToDoListItem = ({
  children,
  onDelete
}: ToDoListItemProps): JSX.Element => (
  <ListItem>
    <Flex justifyContent='space-between'>
      <Flex flex={1}>
        <Icon as={IoEllipseOutline} color='gray.400' h={6} w={6} />
        <Text as='span' pl={2}>
          {children}
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
