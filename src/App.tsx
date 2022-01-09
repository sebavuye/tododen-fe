import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { ErrorToast, Footer, Header, SuccessToast, ToDoList } from './components';
import { useAppDispatch } from './store/hooks';
import * as ACTIONS from './store/actions';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(ACTIONS.fetchToDoList());
  }, [dispatch]);

  return (
    <>
      <ErrorToast />
      <SuccessToast />
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
              <Footer />
            </GridItem>
          </Grid>
        </Grid>
      </main>
    </>
  );
}

export default App;
