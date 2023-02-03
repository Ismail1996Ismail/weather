export const loadFetch = (city) => {
  
  return async (dispatch) => {
    dispatch({type: "loading"});
    const API_KEY = "34860d94e03df37316ae446a22877792";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
    if(response.ok){
      const resJson = await response.json();
      dispatch({type: 'fetchGoodLoad', payload: resJson})
    } else {
      dispatch({type: 'error', payload: true})
    }

  }
}

export const swich = () => {
  return (dispatch) => {
    dispatch({type: 'swich'})
  }
}
export const cityName = (text) => {
  return (dispatch) => {
    dispatch({
      type: 'cityName',
      payload: text,
    })
  }
}
export const errorOff = () => {
  return (dispatch) => {
    dispatch({type: 'errorOff'})
  }
}
