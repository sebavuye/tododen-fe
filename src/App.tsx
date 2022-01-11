import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { ErrorToast, Footer, Header, SuccessToast, ToDoList } from './components';
import * as ACTIONS from './store/actions';

function App(): JSX.Element {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ACTIONS.fetchToDoList({ initialization: true }));
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
