import React from 'react';
import { Button } from '@chakra-ui/react';
import logo from './logo.svg';
import './App.scss';

function App(): JSX.Element {
  return (
    <div className='App'>
      <header className='App-header'>
        <img alt='logo' className='App-logo' src={logo} />
        <p>Test circle-ci</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          rel='noopener noreferrer'
          target='_blank'>
          <Button>Learn React</Button>
        </a>
      </header>
    </div>
  );
}

export default App;
