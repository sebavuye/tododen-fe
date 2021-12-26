import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';
import { Error, Footer, Header, ToDoList } from './components';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getToDoList } from './store/actions';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(state => state);

  return (
    <main>
      <Grid bg='teal.900' h='100vh'>
        <Grid mx='auto' templateRows='auto 1fr auto' w='90%'>
          <GridItem bg='teal.900' p={4} textAlign='center'>
            <Header />
          </GridItem>
          <GridItem>
            <ErrorBoundary
              fallbackRender={({ error }) =>
                Error({
                  error,
                  loading,
                  resetErrorBoundary: () => dispatch(getToDoList())
                })
              }>
              <ToDoList />
            </ErrorBoundary>
          </GridItem>
          <GridItem p={6} textAlign='center'>
            <Footer />
          </GridItem>
        </Grid>
      </Grid>
    </main>
  );
}

export default App;
