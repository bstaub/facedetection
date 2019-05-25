import React from 'react';
import './FaceDetection.css';

const FaceDetection = ({ imageUrl }) => {
  return (
  <div className="center ma">
    <div className="absolute mt2">
      <img src={imageUrl} alt="bild.." width="500px" height='auto' />
    </div>
  </div>
  );
};

export default FaceDetection;
