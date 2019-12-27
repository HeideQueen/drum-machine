import React from 'react';
import DrumPad from '../drum-pad/drum-pad.component';

import sounds from '../../App.utils';

const DrumDisplay = () => (
  <div id='display'>
    <h1>Drum Machine</h1>
    {sounds.map(({ id, letter, source }) => (
      <DrumPad key={id} id={id} letter={letter} source={source} />
    ))}
  </div>
);

export default DrumDisplay;
