
import React from 'react'

const DailyWeather = ({data}) => {
    //let day = today.toLocaleString('en-us', {weekday: 'long'});
    Date.prototype.addDays = function(days) {
        let date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }
    let week = []
    let date = new Date();
    const weekDays = ()=>{
        for (let i=1;i<8;i++){
            
            week.push(date.addDays(i).toLocaleString('en-us',{weekday: 'long'}))
            
        }
        return week
    } 
    weekDays()
    
    let daily = data.daily
    let app_temp_max = daily.apparent_temperature_max
    let app_temp_min = daily.apparent_temperature_min
    let precip = daily.precipitation_sum
    let temp_2m_max = daily.temperature_2m_max
    let temp_2m_min = daily.temperature_2m_min

  return (
    <div>
       <div>DailyWeather</div> 
    </div>
  )
}

export default DailyWeather