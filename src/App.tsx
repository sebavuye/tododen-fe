import React from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { Header, ToDoList } from './components';

function App(): JSX.Element {
  return (
    <main>
      <Grid bg='teal.900' h='100vh'>
        <Grid mx='auto' templateRows='auto 1fr auto' w='90%'>
          <GridItem bg='teal.900' p={4} textAlign='center'>
            <Header />
          </GridItem>
          <GridItem>
            <ToDoList />
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
