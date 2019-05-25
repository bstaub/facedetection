import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = props => {
  return (
    <div className="logo ma4 mt0">

      {/* https://www.npmjs.com/package/react-tilt */}
      <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3"><img alt="logo" style={{paddingTop: '5px'}} src={brain} /></div>
      </Tilt>

    </div>
    );
};

export default Logo;
