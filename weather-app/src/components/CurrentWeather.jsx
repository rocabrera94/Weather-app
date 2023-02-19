import React from 'react';
import moon from '../icons/moon-solid.svg'
import '../styles/CurrentWeather.css'
const CurrentWeather = ({data}) => {
  
  let date = new Date();
  let day = date.toLocaleString('en-us', {weekday: 'long'});
  
  
  return (
    <div className='container'>
        
        <div className='temps'>
          <div className='main'>
            <img src={moon} alt='moon' className='icon'/>
            <div className='main_data'>
              <p className='day'>{day}</p>  
              <p className='current_temp'>{data.current_weather?.temperature}°C</p>
            </div>
            
          </div>
          <div className='minmax_temps'>
            <div className='minmax'> 
              <p>Max:{data.daily?.temperature_2m_max[0]}°C</p>
              <p>Min:{data.daily?.temperature_2m_min[0]}°C</p>
            </div>
            <div className='app'>
              <p>FL max:{data.daily?.apparent_temperature_max[0]}°C</p>
              <p>FL min:{data.daily?.apparent_temperature_min[0]}°C</p>
            </div>      
          </div>

        </div>
            <div className='precpt_and_wind'>
                <p>Wind: {data.current_weather?.windspeed}km/h</p>
                <p>precipt: {data.daily?.precipitation_sum[0]}</p>
            </div>

        
        


    </div>
  )
}

export default CurrentWeather