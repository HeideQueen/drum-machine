import React, { useEffect } from 'react';

const DrumPad = ({ id, letter, source, updateDescription }) => {
  useEffect(() => {
    document.addEventListener('keydown', onKeyPressed);

    return () => document.removeEventListener('keydown', onKeyPressed);
  });

  const onKeyPressed = event => {
    if (event.key.toUpperCase() === letter) audioPlay();
  };

  const audioPlay = () => {
    const clip = document.getElementById(letter);
    clip.currentTime = 0;
    clip.play();
    updateDescription(id);
  };

  return (
    <div className='drum-pad' id={id} onClick={audioPlay}>
      {letter}
      <audio src={source} className='clip' id={letter} />
    </div>
  );
};

export default DrumPad;
