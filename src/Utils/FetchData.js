import { useState, useEffect } from 'react';

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

export default FetchData;