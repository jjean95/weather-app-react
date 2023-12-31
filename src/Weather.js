import React, { useState } from "react";
import axios from "axios";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import "./App.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleWeather(response) {
    setweatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apikey = "1a2b7258ebd456c01aef9175dfe8b709";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(url).then(handleWeather);
  }

  if (weatherData.ready) {
    return (
      <div className="Weathers m-4 p-3 mb-3 bg-white border border-5 border-dark rounded">
        <form onSubmit={handleSubmit}>
          <div className="row mt-1">
            <div className="col-6">
              <input
                type="search"
                placeholder="Search for city"
                onChange={updateCity}
                className="form-control border border-4 border-dark"
              />
            </div>
            <div className="col-2">
              <button
                type="submit"
                className="btn border border-4 border-dark btn-primary"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <Weatherinfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
