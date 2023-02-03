import WeatherTopBlock from "./WeatherTopBlock";
import WeatherCenterBlock from "./WeatherCenterBlock";
import WeatherBottomBlock from "./WeatherBottomBlock";

import '../css/Main.css';


function Main(){

  return(
    <div className="Main">
      <WeatherTopBlock/>
      <WeatherCenterBlock/>
      <WeatherBottomBlock/>
    </div>
  )
}
export default Main