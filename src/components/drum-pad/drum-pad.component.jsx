import React from 'react';

const DrumPad = ({ id, letter, source }) => {
  const audioPlay = () => {
    const clip = document.getElementById(letter);
    clip.play();
  };

  console.log(source);

  return (
    <div className='drum-pad' id={id} onClick={audioPlay}>
      {letter}
      <audio src={source} className='clip' id={letter}></audio>
    </div>
  );
};

export default DrumPad;
