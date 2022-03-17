import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { ErrorToast, SuccessToast, ToDoList } from './components';
import * as ACTIONS from './store/actions';

function App(): JSX.Element {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ACTIONS.fetchToDoList({ initialization: true }));
    dispatch(ACTIONS.fetchToDoLabels());
  }, [dispatch]);

  return (
    <>
      <ErrorToast />
      <SuccessToast />
      <main>
        <Grid bg='teal.900' h='100vh'>
          <Grid mx='auto' templateRows='1fr' w='100%'>
            <GridItem>
              <ToDoList />
            </GridItem>
          </Grid>
        </Grid>
      </main>
    </>
  );
}

export default App;
