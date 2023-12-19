import React from "react";
import Weathericon from "./Weathericon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="ForeDay">{day()}</div>
      <Weathericon code={props.data.weather[0].icon} size={35} />
      <div className="ForeTemp">
        <span className="ForeTemp-Max">{maxTemperature()}°</span>
        <span className="ForeTemp-Min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
