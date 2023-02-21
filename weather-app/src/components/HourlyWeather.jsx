import React from 'react'

const HourlyWeather = ({data, weekDays, week}) => {
  return (
      <div>
          <button onClick={()=>console.log(data.hourly)}>data</button> 
          {data?.hourly?.time?.slice(0,23).map((hour)=>{
           return <div key={hour}>
                    <p>time:{new Date(hour * 1000).getUTCHours().toString().padStart(2,'0')}</p>
                    <p>{data?.hourly?.temperature_2m?.[data.hourly.time.findIndex((el)=>el==hour)]}°C</p>
                  </div> 
          })}
          
    </div>
  )
} 

export default HourlyWeather