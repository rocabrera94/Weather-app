import React from 'react';
import moon from '../icons/moon-solid.svg'
const CurrentWeather = ({data}) => {
  return (
    <div>
        
        <div className='temps'>
            <img src={moon} alt='moon' /> 
            <p className='current_temp'>temp :°{data.current_weather?.temperature}C</p>
            <div className='minmax_temps'>
                <p>max:{data.daily?.temperature_2m_max[0]}</p>
                <p>min:{data.daily?.temperature_2m_min[0]}</p>
                <p>ST max:{data.daily?.apparent_temperature_max[0]}</p>
                <p>ST min:{data.daily?.apparent_temperature_min[0]}</p>
            </div>

            <div className='precpt_and_wind'>
                <p>Viento: {data.current_weather?.windspeed}km/h</p>
                <p>precipitación:{data.daily?.precipitation_sum[0]}</p>
            </div>

        </div>
        


    </div>
  )
}

export default CurrentWeather