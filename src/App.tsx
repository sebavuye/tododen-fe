import React from 'react';
import { Grid, GridItem, Heading } from '@chakra-ui/react';

function App(): JSX.Element {
  return (
    <main>
      <Grid h='100vh' templateColumns='4'>
        <Grid mx='auto' templateRows='auto 1fr auto' w='90%'>
          <GridItem p={4} textAlign='center'>
            <Heading as='h1' size='2xl'>
              TodoDen
            </Heading>
          </GridItem>

          <GridItem bg='green.500'>
            <Heading as='h1' size='2xl'>
              Content
            </Heading>
          </GridItem>

          <GridItem p={4} textAlign='center'>
            <Heading as='h1' size='2xl'>
              Footer
            </Heading>
          </GridItem>
        </Grid>
      </Grid>
    </main>
  );
}

export default App;
