import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        className="navigation"
        style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signout')}>Ausloggen</p>
        
      </nav>
    );
    } else {
      return (
          <nav className="navigation" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('register')}>
              Registrieren
            </p>
            <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('signin')}>
              Login
            </p>
          </nav>
      );
    }
};

export default Navigation;
