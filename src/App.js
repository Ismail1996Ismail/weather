import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import {loadFetch} from './actions';

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {

  // const weather = useSelector(state => state.weather)
  const city = useSelector(state => state.city)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFetch(city))
  }, [dispatch, city])
  const loading = useSelector(state => state.loading)
  return (
    <div className="App">
      {
        loading 
        ? 
      <div class="spinner">
          <svg viewBox="25 25 50 50" class="circular">
              <circle stroke-miterlimit="10" stroke-width="3" fill="none" r="20" cy="50" cx="50" class="path"></circle>
          </svg>
      </div>
        :
        <>
          <Main/>
          <Sidebar/>
        </>
      }
      
    </div>
  );
}

export default App;
