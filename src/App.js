import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import {loadFetch} from './actions';

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {

  const city = useSelector(state => state.city)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFetch(city))
  }, [dispatch, city])
  const loading = useSelector(state => state.loading)
  return (
    <div>      
      {
      loading 
      ? 
    <div className="spinner">
        <svg viewBox="25 25 50 50" className="circular">
            <circle strokeMiterlimit="10" strokeWidth="3" fill="none" r="20" cy="50" cx="50" className="path"></circle>
        </svg>
    </div>
      :
      <div className="App">
        <Main/>
        <Sidebar/>
      </div>
    }</div>

      

  );
}

export default App;
