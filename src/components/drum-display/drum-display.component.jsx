import React, { useState } from 'react';
import DrumPad from '../drum-pad/drum-pad.component';

import sounds from '../../App.utils';

const DrumDisplay = () => {
  const [drumDescription, setDrumDescription] = useState('');

  const updateDescription = description => setDrumDescription(description);

  return (
    <div id='display'>
      <h1>Drum Machine</h1>
      {sounds.map(({ id, letter, source }) => (
        <DrumPad
          key={id}
          id={id}
          letter={letter}
          source={source}
          updateDescription={updateDescription}
        />
      ))}
      <h3>{drumDescription}</h3>
    </div>
  );
};

export default DrumDisplay;
