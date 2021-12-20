import React from 'react';
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Input,
  InputGroup,
  List,
  ListItem,
  Text
} from '@chakra-ui/react';
import {
  IoCloseCircleOutline,
  IoEllipseOutline,
  IoPencilOutline
} from 'react-icons/io5';
import ToDoListStats from './toDoListStats/toDoListStats';

const ToDoList = (): JSX.Element => (
  <Grid h='100%' templateRows='auto 1fr'>
    <GridItem
      alignItems='end'
      bg='teal.100'
      display='flex'
      justifyContent='end'
      p={4}>
      <ToDoListStats />
    </GridItem>

    <GridItem bg='teal.50' p={6}>
      <Grid h='100%' mx='auto' templateRows='1fr auto' w='90%'>
        <GridItem>
          <List spacing={4}>
            <ListItem>
              <Flex justifyContent='space-between'>
                <Flex flex={1}>
                  <Icon as={IoEllipseOutline} color='gray.400' h={6} w={6} />
                  <Text as='span' pl={2}>
                    To Do 1
                  </Text>
                </Flex>
                <Flex justifyContent='end'>
                  <Icon
                    as={IoPencilOutline}
                    color='gray.400'
                    h={6}
                    mx={1}
                    w={6}
                  />
                  <Icon
                    as={IoCloseCircleOutline}
                    color='gray.400'
                    h={6}
                    ml={1}
                    w={6}
                  />
                </Flex>
              </Flex>
            </ListItem>
          </List>
        </GridItem>
        <GridItem display='flex'>
          <InputGroup size='lg'>
            <Input placeholder='What needs to be done?' />
            <Button colorScheme='teal' ml={2} size='lg'>
              Add
            </Button>
          </InputGroup>
        </GridItem>
      </Grid>
    </GridItem>
  </Grid>
);

export default ToDoList;
