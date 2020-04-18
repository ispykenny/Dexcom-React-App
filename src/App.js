import React from 'react';
import Cookies from 'universal-cookie';
import {FetchData, GenerateUser} from './Utils/SetUser';
import moment from 'moment';
import Login from './Components/Login';
import Logout from './Components/Logout';
import ChangeDays from './Components/ChangeDays';
let hasMounted = true;


function getLowestReading({dexcom}) {
  const {egvs : allReadings} = dexcom
  let readingsOnly = [];
  for(let i = 0; i < allReadings.length; i++) {
    readingsOnly.push(allReadings[i].value)
  }
  const getlowNumber = Math.min.apply(Math, readingsOnly);
  console.log('lowest reading', getlowNumber)
}


function Reading() {
  GenerateUser();
  const cookies = new Cookies();
  const startDate = moment().subtract(30, 'days').format("Y-MM-DDTkk:mm:ss")
  const nowDate = moment().format("Y-MM-DDTkk:mm:ss");

  if (hasMounted && cookies.get('access_token') !== undefined) {
    const readings = FetchData(`http://localhost:5000/get-data?access_token=${cookies.get('access_token')}&refresh_token=${cookies.get('refresh_token')}&dateFrom=${startDate}&dateNow=${nowDate}`)
    
    if (readings) {
      getLowestReading(readings)
      hasMounted = false;
    }
  } else {
    return (
      <Login/>
    )
  }

  if (cookies.get('has_access')) {
    return (
      <div>
        <ChangeDays/>
        <Logout/>
      </div>

    )
  } else {
    return <Login/>
  }

}

export default Reading;