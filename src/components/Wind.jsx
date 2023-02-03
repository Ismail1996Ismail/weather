import wind from '../static/img/wind.png';
import hum from '../static/img/Hum.png';
// import rain from '../static/img/Rain.png';
import '../css/Wind.css'

function Wind({weatherArr}){
  const data = new Date();

  const arr = weatherArr?.filter(i => {
    return new Date(i?.dt_txt).getDay() === data.getDay() && new Date(i?.dt_txt).getHours() <= data.getHours()
  })
  return(
    <ul className="Wind">
      <li><img src={wind} alt="wind" /><span>Wind</span> {(arr[0]?.wind.speed * 3.6).toFixed(1)} km/h</li>
      <li>|</li>
      <li><img src={hum} alt="hum" />  <span>Hum</span> {arr[0]?.main.humidity}%</li>
      {/* <li>|</li> */}
      {/* <li><img src={rain} alt="rain" /><span>Rain</span>  0.2 %</li> */}
    </ul>
  )
}
export default Wind