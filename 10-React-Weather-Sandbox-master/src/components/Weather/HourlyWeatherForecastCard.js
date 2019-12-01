import React from "react";
import PropTypes from "prop-types";

const getTime = date => {
  return `${date.gethours()}:00`;
};

const HourlyWeatherForecastCard = ({ forecast }) => (
  <div className="hourly-weather-card">
    <small>{getTime(forecast.date)}</small>
    <img src="{forecast.icon}" className="iocn-max-auto" alt="cloud" />
    <div className="font-weight-bold">
      {parseInt(forecast.temprature.current)}&deg;
    </div>
    <div className="text-capitalize">
      <small>{forecast.condition}</small>
    </div>
  </div>
);

HourlyWeatherForecastCard.PropTypes = {
  forecast: PropTypes.object.isRequired
};

export { HourlyWeatherForecastCard };
