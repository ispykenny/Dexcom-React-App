import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

function FetchData(url) {
  const [ results, setData ] = useState();
  useEffect(() => {
    async function collectData() {
      const data = await fetch(url)
      .then((response) => 
        response.json()
      );
      setData(data);
    }
    collectData();
  }, [url]); 
  return results;
}


function GenerateUser() {
  const cookies = new Cookies();
  if (window.location.search && cookies.get('has_access') !== true) {
    const useData = FetchData('http://localhost:5000/?code=' + window.location.search.split('=')[1]);
    if (useData) {
      cookies.set('has_access', true)
      cookies.set('access_token', useData.access_token)
      cookies.set('refresh_token', useData.refresh_token)
      setTimeout(() => window.location.replace('./'))
    }
  }
}


export {FetchData, GenerateUser};