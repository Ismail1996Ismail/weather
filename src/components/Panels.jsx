import '../css/Panels.css';
import panel1 from '../static/img/progress1.png';
import panel2 from '../static/img/progress2.png';
function Panels(){
  return(
    <div className="Panels">
      <div className="panel">
        <h4>Air Quality</h4>
          <img src={panel1} alt="11" />
      </div>
      <div className="panel">
        <h4>UV Index</h4>
          <img src={panel2} alt="11" />
      </div>
    </div>
  )
}
export default Panels;