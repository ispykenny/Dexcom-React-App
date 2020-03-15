import React from 'react';
import RemoveCookies from '../Utils/RemoveCookies';

function Logout() {
  return(
    <div>data available
      <button onClick={RemoveCookies}>Log out</button>
    </div>
  )
}

export default Logout;