import React from 'react';
import {CircularProgress} from '@material-ui/core';
import PropTypes from 'prop-types';
import './styles.css'

function WeatherInfo(props) {
  const {city, weather, weatherType, isLoading, errorMessage} = props;

  debugger;
  return (
    <React.Fragment>
      {isLoading ? (
        <div style={{marginTop: '10px'}}>
          <CircularProgress color="#000000" />
        </div>
      ) : (
        city !== '' && weather !== '' && weatherType !== '' ? (
          <div className='weather-wrapper'>
            <span className='city-label'>The Weather in {city}:</span>

            <div className='weather'>
              <span className='weather-celsius'>{weather}&deg;C</span>
              <span className='weather-celsius'>{weatherType}</span>
            </div>
          </div>
        ) : (
          <div className='weather-wrapper' style={{fontSize: '22px', fontWeight: '500', justifyContent: 'center', alignItems: 'center', textTransform: 'uppercase'}}>
            {city === '' ? 'No City Selected' : errorMessage !== '' ? errorMessage : 'Something Went Wrong.'}
          </div>
        )
      )}

    </React.Fragment>
  )
}

export default WeatherInfo;

WeatherInfo.propTypes = {
  city: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  weatherType: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string
};

WeatherInfo.defaultProps = {
  city: '',
  weather: '',
  weatherType: '',
  errorMessage: ''
};

