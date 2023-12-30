import React from "react";
import FormattedDate from "./FormattedDate";
import Weathericon from "./Weathericon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <h3 className="cityname mt-3">{props.data.city}</h3>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">
          <strong>{props.data.description}</strong>
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <Weathericon code={props.data.icon} size={65} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <strong>{props.data.humidity}</strong> %
            </li>
            <li>
              Wind Speed: <strong>{props.data.wind}</strong> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
