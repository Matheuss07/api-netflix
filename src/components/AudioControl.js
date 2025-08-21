import React from 'react';
import '../styles/AudioControl.css';
import { MdVolumeUp } from "react-icons/md";

const AudioControl = () => {
  return (
    <div className='container'>
    <div className="audio-control">
      <button className="audio-button">
        <MdVolumeUp />
      </button>
      <div className="audio-separator"></div>
      <div className="audio-label">A12</div>
    </div>
    </div>
  );
};

export default AudioControl