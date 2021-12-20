import React from 'react';
import {
  Badge,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
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

function App(): JSX.Element {
  return (
    <main>
      <Grid bg='teal.900' h='100vh'>
        <Grid mx='auto' templateRows='auto 1fr auto' w='90%'>
          <GridItem bg='teal.900' p={4} textAlign='center'>
            <Heading as='h1' color='white' size='2xl'>
              TodoDen
            </Heading>
          </GridItem>

          <GridItem>
            <Grid h='100%' templateRows='auto 1fr'>
              <GridItem
                alignItems='end'
                bg='teal.100'
                display='flex'
                justifyContent='end'
                p={4}>
                <Badge colorScheme='pink' mx={1}>
                  To Do: 0
                </Badge>
                <Badge colorScheme='yellow' mx={1}>
                  Done: 0
                </Badge>
              </GridItem>

              <GridItem bg='teal.50' p={6}>
                <Grid h='100%' mx='auto' templateRows='1fr auto' w='90%'>
                  <GridItem>
                    <List spacing={4}>
                      <ListItem>
                        <Flex justifyContent='space-between'>
                          <Flex flex={1}>
                            <Icon
                              as={IoEllipseOutline}
                              color='gray.400'
                              h={6}
                              w={6}
                            />
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
          </GridItem>

          <GridItem p={6} textAlign='center'>
            <Text color='white' size='2xl'>
              &copy; Sebastian Vuye 2022
            </Text>
          </GridItem>
        </Grid>
      </Grid>
    </main>
  );
}

export default App;
