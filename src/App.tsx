import React from 'react';
import './App.scss';
import { Icon, Text } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

function App(): JSX.Element {
  return (
    <div className='App'>
      <main>
        <Icon as={WarningTwoIcon} color='yellow.500' h={20} w={20} />
        <Text fontSize='6xl'>Work in Progress</Text>
      </main>
    </div>
  );
}

export default App;
