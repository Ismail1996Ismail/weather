import watchImg from '../static/img/watch.png';
import '../css/Watch.css';
import { useSelector } from 'react-redux';

function Watch(){
  const weatherSun = useSelector(state => state.weather.city);
  const sunset = new Date(((weatherSun.sunset + weatherSun?.timezone) * 1000) + new Date().getTimezoneOffset() * 60 * 1000);
  const sunrise = new Date(((weatherSun.sunrise + weatherSun?.timezone) * 1000) + new Date().getTimezoneOffset() * 60 * 1000);
  const sunsetTime = `${('0'+sunset.getHours()).substr(-2)}:${('0'+sunset.getMinutes()).substr(-2)}`
  const sunriseTime = `${('0'+sunrise.getHours()).substr(-2)}:${('0'+sunrise.getMinutes()).substr(-2)}`
   return(
    <div className="Watch">
      <div className="sunrise mb">
        <p className='title'>Sunrise</p>
        <div className="watch_block">
          <img src={watchImg} alt="watch" />
           {sunriseTime}
        </div>
      </div>
      <div className="goldenHour">
        <p className='title'>Golden Hour</p>
        <div className="watch_block goldenWatch">
          <img src={watchImg} alt="watch" />
          <p className='time__watch'>12:30</p>
          {/* <p>6:49</p> */}
        </div>
      </div>
      <div className="sunset mb">
        <p className='title'>Sunset</p>
        <div className="watch_block">
          <img src={watchImg} alt="watch" />
          {sunsetTime}
        </div>
      </div>
    </div>
  )
}
export default Watch