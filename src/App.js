import React from 'react';
import Cookies from 'universal-cookie';
import FetchData from './Utils/FetchData';
const cookies = new Cookies();


function GenerateUser() {
  let code = '';
  if(window.location.search) {
    code = window.location.search.split('=')[1];
    if(cookies.get('access_token')) return;
    const useData = FetchData('http://localhost:5000/?code='+code);
    if(useData) {
      cookies.set('access_token')
      cookies.set('refresh_token')
    }
  }
  
  
}



function Reading() {
  const readings = FetchData(
    `http://localhost:5000/get-data?access_token=${cookies.get('access_token')}&refresh_token=${cookies.get('refresh_token')}`
    )
  return(
    <div>
      <div>
        <a href="https://api.dexcom.com/v2/oauth2/login?client_id=Gm704rNUXZdRLy2SkbMvSA6ansXnIk1H&redirect_uri=http://localhost:3000/&response_type=code&scope=offline_access">Login</a>
      </div>
    </div>
  )
}


export default Reading;