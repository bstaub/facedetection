import React from 'react';
import './Rank.css';

const Rank = ({userObj}) => {
  return (
  <div>
    <div className='white f3'>
      {`${userObj.user}, deine aktueller Rang ist ...`}
    </div>
    <div className='white f1'>
      {userObj.entries}
    </div>
    
  </div>
  );
};

export default Rank;
