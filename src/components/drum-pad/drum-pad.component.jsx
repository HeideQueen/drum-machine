import React, { useEffect } from 'react';

import Button from 'react-bootstrap/Button';

import './drum-pad.styles.scss';

const DrumPad = ({ id, letter, source, updateDescription }) => {
  useEffect(() => {
    document.addEventListener('keydown', onKeyPressed);
    const buttons = [...document.querySelectorAll('.drum-pad')];
    buttons.forEach(button =>
      button.addEventListener('transitionend', removeTransition)
    );

    return () => {
      document.removeEventListener('keydown', onKeyPressed);
      buttons.forEach(button =>
        button.removeEventListener('transitionend', removeTransition)
      );
    };
  });

  const onKeyPressed = event => {
    if (event.key.toUpperCase() === letter) audioPlay();
  };

  const removeTransition = event => {
    event.target.classList.remove('playing');
  };

  const audioPlay = () => {
    const clip = document.getElementById(letter);
    const button = document.getElementById(id);

    clip.currentTime = 0;
    clip.play();

    updateDescription(id);
    button.classList.add('playing');
  };

  return (
    <Button
      variant='dark'
      size='lg'
      className='drum-pad'
      id={id}
      onClick={audioPlay}
      style={{ margin: '10px' }}
    >
      {letter}
      <audio src={source} className='clip' id={letter} />
    </Button>
  );
};

export default DrumPad;
