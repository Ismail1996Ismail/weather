import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';


const initialState = {
  weather: {
    list: [{
    }],
    city: {
      country: '',
    },
  },
  city: 'Grozny',
  loading: false,
  degreeSwich: false,
  error: false
}
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'cityName' :
      return {
        ...state,
        city: action.payload,
      }
    case 'loading' : 
      return {
        ...state,
        loading: true,
      }
    case 'fetchGoodLoad' : 
      return {
        ...state,
        weather: action.payload,
        loading: false,
      }
    case 'swich' : 
      return {
        ...state,
        degreeSwich: !state.degreeSwich,
      }
    case 'error' : 
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case 'errorOff' : 
      return {
        ...state,
        error: false,
      }
    // case 'GeoGood' : 
    //   return {
    //     ...state,
    //     logaction.payload.city
    //   }
    default : 
      return state
  }
}
const store = createStore(reducer, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
