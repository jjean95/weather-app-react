import "./App.css";
import axios from "axios";
import React, { useState } from "react";

export default function App() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function handleWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=57b2c40fdae71a6ba41d72685e3226e2&units=metric`;
    axios.get(url).then(handleWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for city"
          onChange={updateCity}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
  if (loaded) {
    return (
      <div className="App">
        {form}
        <h3>{city}</h3>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
          <li>Description: {weather.description}</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
