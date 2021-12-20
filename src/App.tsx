/* eslint-disable */
import React from 'react';
import {
  Badge,
  Button,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup
} from '@chakra-ui/react';

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
                  <GridItem>Test</GridItem>
                  <GridItem display='flex'>
                    <InputGroup size='lg'>
                      <Input placeholder='What needs to be done?' />
                      <Button colorScheme='teal' size='lg' ml={2}>
                        Add
                      </Button>
                    </InputGroup>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </GridItem>

          <GridItem p={4} textAlign='center'>
            <Heading as='h1' size='2xl' color='white'>
              Footer
            </Heading>
          </GridItem>
        </Grid>
      </Grid>
    </main>
  );
}

export default App;
