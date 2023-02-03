import WeatherDegree from "./WeatherDegree";
import Wind from "./Wind";
import '../css/WeatherCenterBlock.css';
import { useSelector } from "react-redux";
function WeatherCenterBlock(){
  const data = new Date();
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
  const weatherArr = useSelector(state => state.weather?.list)
  return(
    <div className="WeatherCenterBlock">
      <WeatherDegree weatherArr = {weatherArr}/>
      <p className="data">
        {data.getDate()} {month[data.getMonth()]} {data.getFullYear()}
      </p>
      <p className="time">
        {day[data.getDay()] +  "  |  " + data.getHours() + ":" + (`${data.getMinutes()}`.length === 2 ? data.getMinutes() : `0${data.getMinutes()}`) + " am"}
      </p>
      <Wind weatherArr = {weatherArr}/>
    </div>
  )
};
export default WeatherCenterBlock;