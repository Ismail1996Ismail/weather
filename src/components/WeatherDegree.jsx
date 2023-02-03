import img from '../static/img/C.png'
import img2 from '../static/img/F.png'
import '../css/WeatherDegree.css';
import { useSelector } from 'react-redux';

function WeatherDegree({weatherArr}){;

  const degreeSwich = useSelector(state => state.degreeSwich)
  const faringate = (weatherArr[0]?.main?.temp * 1.8 + 32);
  return(
    <div className="WeatherDegree">
      <h2>{degreeSwich ? Math.round(weatherArr[0]?.main?.temp) : Math.round(faringate)}</h2>
      <div className='img'>
        <img src={degreeSwich ? img : img2} alt="C" />
      </div>
    </div>
  )
}
export default WeatherDegree