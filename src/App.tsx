import React from 'react';
import { Button } from '@chakra-ui/react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img alt='logo' className='App-logo' src={logo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
