import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import axios from 'axios';
import { Error, Footer, Header, ToDoList } from './components';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { getToDoList } from './store/actions';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector(state => state);

  React.useEffect(() => {
    dispatch(getToDoList());
  }, [dispatch]);

  return (
    <main>
      <Grid bg='teal.900' h='100vh'>
        <Grid mx='auto' templateRows='auto 1fr auto' w='90%'>
          <GridItem bg='teal.900' p={4} textAlign='center'>
            <Header />
          </GridItem>

          <GridItem>
            {error &&
            axios.isAxiosError(error) &&
            error.response?.data.code === 'GET_LIST' ? (
              <Error
                error={error}
                loading={loading}
                onReset={() => dispatch(getToDoList())}
              />
            ) : (
              <ToDoList />
            )}
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
