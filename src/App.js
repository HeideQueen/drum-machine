import React from 'react';
import DrumDisplay from './components/drum-display/drum-display.component';

import Container from 'react-bootstrap/Container';

import './App.scss';

const App = () => {
  return (
    <Container id='drum-machine'>
      <DrumDisplay />
    </Container>
  );
};

export default App;
