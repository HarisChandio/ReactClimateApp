import "./currentweather.css";
import React from "react";

const CurrentWeather = ({ data }) => {

  const celsius = Math.round(data.main.temp - 273.15);

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          {data && data.weather && data.weather[0] && (
            <p className="weather-description">{data.weather[0].description}</p>
          )}
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weathor"
          className="weather-icon"
        />
      </div>

      <div className="bottom">
        <p className="temperature">{celsius}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label details">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{Math.round(data.main.temp - 273.15)}°C</span>
          </div>{" "}
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
