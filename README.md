<h1>Weather App</h1>

![Screen Shot 2023-08-12 at 23 36 49](https://github.com/HarisChandio/ReactClimateApp/assets/86180280/a649ca0e-6ba4-410e-a7a8-45e0784895c5)

![image](https://github.com/HarisChandio/ReactClimateApp/assets/86180280/40b5980d-9951-4ad9-92d1-0ee372766770)




<h2>A simple weather app built using React that displays current weather and a 7-day forecast for a selected city.</h2>

<h3>#Features</h3>
Displays current weather information including temperature, description, and more.
Shows a 7-day forecast with details such as weather description, temperature range, pressure, humidity, wind speed, and more.
Provides an interactive search input to find weather for different cities.
Utilizes OpenWeatherMap API for weather data.

<h3>
Getting Started</h3>
To run the Weather App locally:

Clone this repository to your local machine using:
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install
npm start

<h3>Components</h3>
App.js: The main application component that fetches weather data and displays the search bar, current weather, and forecast.

CurrentWeather.js: Displays current weather details including temperature, description, and additional parameters.

Forecast.js: Displays a 7-day weather forecast with various parameters for each day.

Search.js: Provides an asynchronous search input to find cities and retrieve their weather data.

searchapi.js: Contains API URLs and keys for the OpenWeatherMap API.

<h3>Dependencies</h3>
React: A JavaScript library for building user interfaces.

react-select-async-paginate: A custom async select input for React.

react-accessible-accordion: A library for creating accessible accordion components.
