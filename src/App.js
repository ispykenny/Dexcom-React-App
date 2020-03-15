import React from 'react';
import Cookies from 'universal-cookie';
import FetchData from './Utils/FetchData';
import moment from 'moment';
const cookies = new Cookies();
let hasMounted = true;




function GenerateUser() {
  let code = '';
  if(window.location.search && cookies.get('has_access') !== true) {
    code = window.location.search.split('=')[1];
    const useData = FetchData('http://localhost:5000/?code='+code);
    if(useData) {
      cookies.set('has_access', true)
      cookies.set('access_token', useData.access_token)
      cookies.set('refresh_token', useData.refresh_token)
      setTimeout(() => window.location.replace('./'))
    }
  }
}



function Reading() {
  GenerateUser();
  console.log('here',cookies.getAll())
  const startDate = moment().subtract(90, 'days').format("Y-MM-DDTkk:mm:ss")
  const nowDate = moment().format("Y-MM-DDTkk:mm:ss")


      return(
        <div>
          <p>loading...</p>
          <div>
            <a href="https://api.dexcom.com/v2/oauth2/login?client_id=Gm704rNUXZdRLy2SkbMvSA6ansXnIk1H&redirect_uri=http://localhost:3000/&response_type=code&scope=offline_access">Login</a>
          </div>
        </div>
      )      

        
    
  }
  
    

  

  



export default Reading;