import React, {useState, useRef, useEffect} from 'react';
import City from "./City";
import WeatherInfo from "./WeatherInfo";
import {getWeatherData} from "../actions";
import {connect} from "react-redux";
import './styles.css';

function WeatherForecast(props) {
  const {weatherData, getWeatherInfo, error} = props;

  const [city, setCity] = useState('');
  const [weatherType, setWeatherType] = useState('');
  const [weather, setWeather] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(weatherData && weatherData?.weather) {
      setWeatherType(weatherData?.weather[0]?.main);
      setWeather(Math.round(weatherData?.main?.temp).toString());
      setLoading(false);
    }
  }, [weatherData]);

  useEffect(() => {
    if(error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }, [error])

  const searchTimer = useRef(0);

  const onCityChange = async (val) => {
    setCity(val);
    setWeatherType('');
    setWeather('');

    clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(async () => {
      await getWeatherInfo(val);
      setLoading(true);
    }, 500);
  }

  return (
    <div className='main-wrapper'>
      <City
        cityName={city}
        onCityChange={(val) => onCityChange(val)}
      />

      <WeatherInfo
        isLoading={loading}
        city={city}
        weatherType={`${weatherType}`}
        weather={weather}
        errorMessage={errorMessage}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  const {weather} = state;
  return {
    weatherData: weather.weatherData,
    error: weather.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherInfo: (city) => dispatch(getWeatherData(city))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecast);

