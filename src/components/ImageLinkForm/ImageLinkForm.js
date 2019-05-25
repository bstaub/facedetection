import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange }) => {
  return (
  <div>
    <p className="imageform f3">
        {'Dies wird Bilder erkennen'}
    </p> 
    <div className='center'>
      <div className="center form pa4 br3 shadow-5">
        <input type="text" className="f4 pa2 w-70 center" onChange={onInputChange} />
        <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">OK</button>
      </div>
    </div>
  </div>
  );
};

export default ImageLinkForm;
