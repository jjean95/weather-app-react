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
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for city"
              onChange={updateCity}
              className="form-control"
            />
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
  if (loaded) {
    return (
      <div className="App">
        {form}
        <br></br>
        <h3>{city}</h3>
        <div className="row">
          <div className="col-6">
            <img src={weather.icon} alt={weather.description} />
            <p>Description: {weather.description}</p>
          </div>
          <div className="col-6">
            <ul>
              <li>Temperature: {Math.round(weather.temperature)}°C</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
