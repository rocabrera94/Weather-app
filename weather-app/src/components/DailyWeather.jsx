
import React from 'react'
import moon from '../icons/moon-solid.svg'
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
        {week.map((day)=>{
          return <div key={week[day]}>
                    <img src={moon} alt='moon' className='daily_icon'/>
                    <p className='day'>{day}</p>
                    <div className='daily_temps'>
                      <p>{data?.daily?.temperature_2m_max[week.findIndex((el)=>el==day)]}</p>
                      <p>{data?.daily?.temperature_2m_min[week.findIndex((el)=>el==day)]}</p>
                    </div>
                    


                </div>
        })}
      </div>
    </div>
  )
}

export default DailyWeather