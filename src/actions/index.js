import {ADD_WEATHER_DATA, ERROR_DATA} from "../store/Constants";

const REACT_APP_WEATHER_API_KEY = 'e403a5a5f562cc6e20d38fb329ee4738';

export const getWeatherData = (city) => {
  return (dispatch) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`
    ).then(response => response.json()
    ).then(response => {
      if(response?.cod !== 200) {
        dispatch({ type: ERROR_DATA, data: response });
      } else {
        dispatch({ type: ADD_WEATHER_DATA, data: response });
      }
    }).catch(error => {
      dispatch({ type: ERROR_DATA, data: {message: error} });
    });
  }

};