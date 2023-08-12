import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/currentweather/currentweather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./searchapi";
import Forecast from "./components/forecast/forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handeOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // Set default latitude and longitude for search
    const defaultLocation = { value: "24.8607 67.0011", label: "Karachi" };
    handeOnSearchChange(defaultLocation);
  }, []);

  return (
    <div className="container">
      <Search onSearchChange={handeOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
