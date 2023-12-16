import React from "react";
import FormattedDate from "./FormattedDate";
import Weathericon from "./Weathericon";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <div className="row mt-3">
        <div className="col-5">
          <h3>{props.data.city}</h3>
          <ul className="date">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <div className="row">
              <div className="col-6">
                <div className="d-flex">
                  <Weathericon code={props.data.icon} size={52} />

                  <h2>{Math.round(props.data.temperature)}°C</h2>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <div className="col-6 mt-5">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}