import React from 'react';
import PropTypes from "prop-types";
import './styles.css';

function City(props) {
  const { cityName, onCityChange } = props;

  return (
    <div className='city-wrapper'>
      <span className='name-label'>
        Enter the City Name
      </span>

      <input type='text'
        value={cityName}
        onChange={(e) => onCityChange(e.target.value)}
        className='text-input'
      />
    </div>
  )
}

export default City;

City.propTypes = {
  cityName: PropTypes.string.isRequired,
  onCityChange: PropTypes.func
};

City.defaultProps = {
  cityName: '',
  onCityChange: () => {}
};



