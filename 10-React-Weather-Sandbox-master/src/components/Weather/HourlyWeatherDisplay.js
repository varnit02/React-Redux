import React, { Component } from "react";
import propTypes from "prop-types";
import OwlCarousel from "react-owl-carousel2";

import { HourlyWeatherForecastCard } from "./HourlyWeatherForecastCard";

const options = {
  items: 3,
  nav: false,
  rewind: true,
  autoplay: false
};

class HourlyWeatherDisplay extends Component {
  render() {
    return (
      <div className="hourly-weatherdisplay">
        <div className="text-center h5 pt-2">
          <div className="caorusel">
            <OwlCarousel ref={el => (this.carousel = el)} options={options}>
              {!!this.props.hourlyForecasts &&
                this.porps.hourlyForecasts.map((fc, i) => (
                  <HourlyWeatherForecastCard key={i} forecadt={fc} />
                ))}
            </OwlCarousel>
            <div className="carousel-nav" style={{ left: 0 }}>
              <i
                className="fa fa-chevron-left fa-lg pl-2"
                onClick={() => this.carousel.prev()}
              />
            </div>
            <div className="carousel-nav" style={{ right: 0 }}>
              <i
                className="fa fa-chevron-right fa-lg pl-2"
                onClick={() => this.carousel.next()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HourlyWeatherDisplay.propTypes = {
  hourlyForecasts: propTypes.array.isRequired
};

export { HourlyWeatherDisplay };
