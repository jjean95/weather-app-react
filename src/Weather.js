import React, { useState } from "react";
import axios from "axios";
import Weatherinfo from "./Weatherinfo";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleWeather(response) {
    setweatherData({
      ready: true,
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
      <div className="App">
        <div className="Weathers">
          <form onSubmit={handleSubmit}>
            <div className="row mt-2">
              <div className="col-8">
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
          <Weatherinfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
