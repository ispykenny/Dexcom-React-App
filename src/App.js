import React from 'react';
import Cookies from 'universal-cookie';
import FetchData from './Utils/FetchData';
import moment from 'moment';
const cookies = new Cookies();
let hasMounted = true;




function GenerateUser() {
  if(window.location.search && cookies.get('has_access') !== true) {
    const useData = FetchData('http://localhost:5000/?code='+window.location.search.split('=')[1]);
    if(useData) {
      cookies.set('has_access', true)
      cookies.set('access_token', useData.access_token)
      cookies.set('refresh_token', useData.refresh_token)
      setTimeout(() => window.location.replace('./'))
    }
  }
}

function removeCookies() {
  console.log('hi')
  cookies.remove('access_token')
  cookies.remove('refresh_token')
  cookies.set('has_access', false)
  setTimeout(() => window.location.replace('./'))
}

function Reading() {
  GenerateUser();
  const startDate = moment().subtract(90, 'days').format("Y-MM-DDTkk:mm:ss")
  const nowDate = moment().format("Y-MM-DDTkk:mm:ss");
  

  if(hasMounted && cookies.get('access_token') !== undefined) {
     const readings = FetchData(
      `http://localhost:5000/get-data?access_token=${cookies.get('access_token')}&refresh_token=${cookies.get('refresh_token')}&dateFrom=${startDate}&dateNow=${nowDate}`
      )
      if(readings) {
        console.log(readings)
        hasMounted = false;
      }
  
  
  } else {
    return(
      <div>
        <p>loading...</p>
        <div>
          <a href="https://api.dexcom.com/v2/oauth2/login?client_id=Gm704rNUXZdRLy2SkbMvSA6ansXnIk1H&redirect_uri=http://localhost:3000/&response_type=code&scope=offline_access">Login</a>
        </div>
      </div>
    )   
    
  }

  if(cookies.get('has_access')) {
    return (
      <div>data available

        <button onClick={removeCookies}>Log out</button>
      </div>
    )
  } else {
    return(
      <div>
        <p>loading...</p>
        <div>
          <a href="https://api.dexcom.com/v2/oauth2/login?client_id=Gm704rNUXZdRLy2SkbMvSA6ansXnIk1H&redirect_uri=http://localhost:3000/&response_type=code&scope=offline_access">Login</a>
        </div>
      </div>
    )      

  }    
      
    
  }
  
    

  

  



export default Reading;