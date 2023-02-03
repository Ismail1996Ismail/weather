import '../css/WeatherCard.css'
import { useSelector } from 'react-redux';
import cloudMoonR from '../static/img/Cloud-Moon-Rain.png';
import cloudSunR from '../static/img/Cloud-Sun-Rain.png';
import W50 from '../static/img/Wind50.png';
import SunC from '../static/img/Sun-Cloud.png';
import Thunder from '../static/img/Thunder.png';
import Rain from '../static/img/Rain.png';
import Moon from '../static/img/Moon.png';
import Sun from '../static/img/Sun.png';
import Cloud from '../static/img/Cloud.png';
import MoonC from '../static/img/moon-cloud.png';
import SnowClear from '../static/img/SnowClear.png';
function WeatherCard({arr}){
  const degreeSwich = useSelector(state => state.degreeSwich)
  const faringate = (arr?.main.temp * 1.8 + 32);
  const icon = () => {
    switch(arr?.weather[0].icon){
       case '01d':
          return Sun
       case '01n':
          return Moon
       case '02d':
          return SunC
       case '02n':
          return MoonC
       case '03d':
          return Cloud
       case '03n':
          return Cloud
       case '04d':
          return Cloud
       case '04n':
          return Cloud
       case '09d':
          return Rain
       case '09n':
          return Rain
       case '10d':
          return cloudSunR
       case '10n':
          return cloudMoonR
       case '11d':
          return Thunder
       case '11n':
          return Thunder
       case '13d':
          return SnowClear
       case '13n':
          return SnowClear
       case '50d':
          return W50
       case '50n':
          return W50
       default : 
          return SnowClear
    }
 }
  const day = ['Sun', 'Mon', 'Tue ', 'Wed', 'Thu', 'Fri', 'Sat']; 

  return(
    <div className="WeatherCard">
      <h4>{ degreeSwich ? Math.round(arr?.main?.temp) + '°C' : Math.round(faringate) + '°F'}</h4>
      <img src={icon()} alt="" />
      <p>{day[new Date(arr?.dt_txt).getDay()]}</p>
    </div>
  )
}
export default WeatherCard