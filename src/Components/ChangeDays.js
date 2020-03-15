import React from 'react';


function ChangeDays() {
  let days = [1, 7, 14, 21, 30 , 60, 90];

  if(!days) return <p>loading component...</p>
  return (
    <div>
      <select>
        {
          days.map((item, index) => (
            <option key={index}>{item}</option>
          ))
        }
      </select>
    </div>
  )
}

export default ChangeDays;