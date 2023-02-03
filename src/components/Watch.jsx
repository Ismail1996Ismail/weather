import watchImg from '../static/img/watch.png';
import '../css/Watch.css';
function Watch(){
  return(
    <div className="Watch">
      <div className="sunrise mb">
        <p className='title'>Sunrise</p>
        <div className="watch_block">
          <img src={watchImg} alt="watch" />
          <p className='time__watch'>11:24</p>
          <p>11:45</p>
        </div>
      </div>
      <div className="goldenHour">
        <p className='title'>Golden Hour</p>
        <div className="watch_block goldenWatch">
          <img src={watchImg} alt="watch" />
          <p className='time__watch'>6:00</p>
          <p>6:49</p>
        </div>
      </div>
      <div className="sunset mb">
        <p className='title'>Sunset</p>
        <div className="watch_block">
          <img src={watchImg} alt="watch" />
          <p className='time__watch'>7:21</p>
          <p>7:24</p>
        </div>
      </div>
    </div>
  )
}
export default Watch