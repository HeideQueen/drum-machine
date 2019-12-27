import React from 'react';

const DrumPad = ({ id, letter, source }) => {
  const audioPlay = () => {
    const clip = document.getElementById(letter);
    clip.currentTime = 0;
    clip.play();
  };

  const onKeyPressed = event => {
    console.log(event.key);
  };

  return (
    <div
      className="drum-pad"
      id={id}
      onClick={audioPlay}
      onKeyDown={event => onKeyPressed(event)}
    >
      {letter}
      <audio src={source} className="clip" id={letter} />
    </div>
  );
};

export default DrumPad;
