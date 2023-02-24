import React from 'react'
import '../styles/HourlyWeather.css'
import moon from '../icons/moon-solid.svg'
const HourlyWeather = ({ data, date }) => {
    
    let followingHours = date.getHours()+25
    let arr = []
    let hours = () =>{
        for (let i=1;i<25;i++){
            let a=0
            if (date.getHours()+i<25){
                arr.push(date.getHours()+i)
            }  else{
                for (a;a<25;a++){
                    arr.push(a) 
                }
            } 
            
        }
        return arr
    }
    hours()
  return (
      <div className='hourly_container'>
          <button onClick={()=>console.log(arr)}>hour</button>
          {data?.hourly?.time?.slice(date.getHours(),followingHours).map((hour, index)=>{
           return <div key={hour} className='hourly_box'>
                    <p className='hourly_time' >{/*  new Date(hour * 1000).getUTCHours().toString().padStart(2,'0')  */arr[index]}hs</p>
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