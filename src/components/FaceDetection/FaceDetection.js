import React from 'react';
import './FaceDetection.css';

const FaceDetection = ({ imageUrl, box }) => {
  if(imageUrl){
    
    return (
    <div className="center ma">
      <div className="absolute mt2">
          <img id="inputimage" src={imageUrl} alt="bild.." width="500px" height='auto' />
          <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
      </div>
    </div>
    );

  } else {
    return null;
  }
};

export default FaceDetection;
