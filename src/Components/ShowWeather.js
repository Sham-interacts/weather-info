import React from "react";

const ShowWeather = ({ data }) => {
  const city = data.name;
  const country = data.sys ? data.sys.country : null;
  const temperature = data.main ? data.main.temp : null;
  const pressure = data.main ? data.main.pressure : null;
  const visibility = data ? data.visibility : null;
  const Humidity = data.main ? data.main.humidity : null;
  const clouds = data.clouds ? data.clouds.all : null;

  // Values in standard units
  const pressureInAtm = (pressure / 1000).toFixed(2);
  const tempInCelcius = (temperature - 273.15).toFixed(2);
  const visibilityInKM = (visibility / 1000).toFixed(2);

  return (
    <div>
      <div className="showWeather">
        <div className="weather_main">
          <h1 className="weather-heading">City: {city}</h1>
          <h3 className="temp">
            <p>Temperature: {tempInCelcius} C</p>
          </h3>
          <hr />
          <div className="weatherData">
            <p>Pressure: {pressureInAtm} atm</p>
            <p>Visibility: {visibilityInKM} Km</p>
          </div>
          <div className="weatherData">
            <p>Humidity: {Humidity}%</p>
            <p>Clouds: {clouds}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowWeather;
