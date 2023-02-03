import WeatherImg from "./WeatherImg";
import Error from "./Error";

import { useDispatch, useSelector } from "react-redux";

import '../css/WeatherTopBlock.css';

import { swich } from '../actions';

function WeatherTopBlock(){

  const degreeSwich = useSelector(state => state.degreeSwich);
  const dispatch = useDispatch()
  function handleClick(){
    dispatch(swich())
  }
  return(
    <div className="WeatherTopBlock">
      <WeatherImg/>
      <div onClick = {handleClick} className="WeatherSwich">
        <div>F</div>
        <div className={degreeSwich ? 'off' : 'block'}></div>
        <div>C</div>
      </div>
      <Error/>
    </div>
  )
}
export default WeatherTopBlock