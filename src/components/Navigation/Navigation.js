import React from 'react';

const Navigation = props => {
  return (
    <nav
      className="navigation"
      style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p className='f3 link dim black underline pa3 pointer'>Sign-Out</p>
      
    </nav>
  );
};

export default Navigation;
