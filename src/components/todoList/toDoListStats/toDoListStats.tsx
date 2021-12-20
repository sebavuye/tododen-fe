import React from 'react';
import { Badge, Flex } from '@chakra-ui/react';

const ToDoListStats = (): JSX.Element => (
  <Flex>
    <Badge colorScheme='pink' mx={1}>
      To Do: 0
    </Badge>
    <Badge colorScheme='yellow' mx={1}>
      Done: 0
    </Badge>
  </Flex>
);

export default ToDoListStats;
