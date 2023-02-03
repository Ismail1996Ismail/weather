import { useSelector } from 'react-redux';
import '../css/WeatherImg.css';
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

function WeatherImg(){
  const weatherArr = useSelector(state => state.weather.list)
  const icon = () => {
    switch(weatherArr[0].weather?.[0].icon){
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


  return(    
    <div className="WeatherImg">
      <img src={icon()} alt="" />
    </div>
  )
}
export default WeatherImg