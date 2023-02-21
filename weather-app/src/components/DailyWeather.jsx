
import React from 'react'
import HourlyWeather from './HourlyWeather'
import moon from '../icons/moon-solid.svg'
import '../styles/DailyWeather.css'

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
    
    
    
  return (
    <div>
      <button onClick={()=>console.log(app_temp_max[0], app_temp_min[0], precip[0], temp_2m_max[0], temp_2m_min[0])}>daily</button>

      <div className='main_container'>
        {week.map((day)=>{
          return <div key={day} className='daily_container'>
                    <img src={moon} alt='moon' className='daily_icon'/>
                    <p className='daily_day'>{day}</p>
                    <div className='daily_temps'>
                      <p>{data?.daily?.temperature_2m_max[week.findIndex((el)=>el==day)]}°C</p>
                      <p>{data?.daily?.temperature_2m_min[week.findIndex((el)=>el==day)]}°C</p>
                    </div>
                </div>
        })}
      </div>
      <HourlyWeather data={data} weekdays={weekDays} date={date} week={week} />
    </div>
  )
}

export default DailyWeather