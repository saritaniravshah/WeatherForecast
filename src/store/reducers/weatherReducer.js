import {ADD_WEATHER_DATA, ERROR_DATA} from "../Constants";

const initState = {
  weatherData: {},
  error: {}
};

const WeatherReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.data
      };
    case ERROR_DATA:
      return {
        ...state,
        error: action.data
      };
    default:
      return state;
  }
}

export default WeatherReducer;