import React from 'react'

const HourlyWeather = ({data}) => {
  return (
    <div>
        <button onClick={()=>console.log(data.hourly)}>data</button> 
    </div>
  )
}

export default HourlyWeather