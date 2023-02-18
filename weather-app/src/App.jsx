import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import CurrentWeather from './components/CurrentWeather'

function App() {
  const [current, setCurrent] = useState([])
  const [loading, setLoading] = useState(false)
  const url= 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=America%2FSao_Paulo'
  const getWeather = (lat, lon, timezone) => {
    setLoading(false)
   return axios.get(url, {params: {
      latitude: lat,
      longitude: lon,
      timezone: timezone,
    }}) 
    
   }

//let currentTimezone =Intl.DateTimeFormat().resolvedOptions().timeZone
 useEffect(()=>{
  navigator.geolocation.getCurrentPosition((position)=>{
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    getWeather(lat,lon, timeZone ).then(res=>{
      setCurrent(res.data)
    })
   })  


   
 },[])  
 
 navigator.geolocation.getCurrentPosition((position)=>{
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  getWeather(lat,lon, timeZone ).then(res=>{
    setCurrent(res.data)
  })
 })
  return (
    <div className="App">
      <CurrentWeather data={current}/>
      <button onClick={()=>console.log(current)}>clic</button>
    </div>
  )
}

export default App
