import React from 'react'
import '../styles/HourlyWeather.css'
import moon from '../icons/moon-solid.svg'
const HourlyWeather = ({ data }) => {
  return (
      <div className='hourly_container'>
          
          {data?.hourly?.time?.slice(0,23).map((hour)=>{
           return <div key={hour} className='hourly_box'>
                    <p className='hourly_time' >{new Date(hour * 1000).getUTCHours().toString().padStart(2,'0')}hs</p>
                    <div className='img_and_temp'>
                        <img src={moon} alt='icon' className='hourly_icon'/>
                        <p className='hourly_temp'>{data?.hourly?.temperature_2m?.[data.hourly.time.findIndex((el)=>el==hour)]}°C</p>
                    </div>
                  </div> 
          })}
           
    </div>
  )
} 

export default HourlyWeather