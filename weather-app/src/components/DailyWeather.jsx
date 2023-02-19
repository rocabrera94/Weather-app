
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
    
    //let app_temp_max = data?.daily.apparent_temperature_max
    //let app_temp_min = data?.daily.apparent_temperature_min
    //let precip = data?.daily.precipitation_sum
    //let temp_2m_max = data?.daily.temperature_2m_max
    //let temp_2m_min = data?.daily.temperature_2m_min
    
  return (
    <div>
      <div>
        <button onClick={()=>console.log(app_temp_max[0], app_temp_min[0], precip[0], temp_2m_max[0], temp_2m_min[0])}>daily</button>
        {data?.daily?.apparent_temperature_max.map((max)=>{
          return <div key={week[max]}>
                    {max}
                </div>
        })}
      </div>
    </div>
  )
}

export default DailyWeather