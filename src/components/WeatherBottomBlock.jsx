import WeatherCards from "./WeatherCard";
import '../css/WeatherBottomBlock.css'
import { useSelector } from "react-redux";

function WeatherBottomBlock(){
  const weatherArr = useSelector(state => state.weather?.list)
  const data = new Date();
  const newWeatherArr = weatherArr.filter(i => {
    return new Date(i?.dt_txt).getDay() !== data.getDay() && new Date(i?.dt_txt).getHours() === 12

  });
  return(
    <div className="WeatherBottomBlock">
      {newWeatherArr.map((i, idx) => {
        return(
              <WeatherCards key={idx + 2} arr = {i}/>
        )
      })}
    </div>
  )
}
export default WeatherBottomBlock;