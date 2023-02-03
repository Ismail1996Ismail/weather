import geo from '../static/img/geo.png';
import searchBtn from "../static/img/Search.png";
import '../css/Search.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { cityName } from '../actions'

function Search(){
  const city = useSelector(state => state.weather.city?.name)
  const weatherSity = useSelector(state => state.weather.city?.country)
  const dispatch = useDispatch();
  const [text, setText] = useState('')
  function handleChange(e){
    setText(e.target.value)
  }
  function handleClick(e){
    e.preventDefault()
    dispatch(cityName(text))  
  }
  return(
    <div className="Search">
      <div className="location">
        <img src={geo} alt="geoloc" />
        <span>{city}, {new Intl.DisplayNames(['en'], {type: 'region'}).of(weatherSity)}</span>
      </div>
      <form onSubmit={handleClick} className='searchBox'>
        <input className="search-txt" type="text" onChange={handleChange}/>
        <button className='searchBtn'>
          <img src={searchBtn} alt="search" />
        </button>
      </form>
       </div>
  )
}
export default Search 