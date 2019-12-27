import React, { useState } from 'react';
import DrumPad from '../drum-pad/drum-pad.component';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import sounds from '../../App.utils';

const DrumDisplay = () => {
  const [drumDescription, setDrumDescription] = useState('sound');

  const updateDescription = description => setDrumDescription(description);

  return (
    <Row id='display'>
      <Col>
        <Card className='text-center'>
          <Card.Header as='h1'>Queen's Drum Machine</Card.Header>
          <Card.Body>
            {sounds.map(({ id, letter, source }) => (
              <DrumPad
                key={id}
                id={id}
                letter={letter}
                source={source}
                updateDescription={updateDescription}
              />
            ))}
            <Card.Title style={{ margin: '10px' }}>
              {drumDescription}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default DrumDisplay;
