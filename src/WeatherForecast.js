import React from "react";
import Weathericon from "./Weathericon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apikey = "1a2b7258ebd456c01aef9175dfe8b709";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForeDay">Thu</div>
          <Weathericon code="01d" size={30} />
          <div className="ForeTemp">
            <span className="ForeTemp-Max">19°</span>
            <span className="ForeTemp-Min">10°</span>
          </div>
        </div>
        <div className="col">
          <div className="ForeDay">Thu</div>
          <Weathericon code="01d" size={30} />
          <div className="ForeTemp">
            <span className="ForeTemp-Max">19°</span>
            <span className="ForeTemp-Min">10°</span>
          </div>
        </div>
        <div className="col">
          <div className="ForeDay">Thu</div>
          <Weathericon code="01d" size={30} />
          <div className="ForeTemp">
            <span className="ForeTemp-Max">19°</span>
            <span className="ForeTemp-Min">10°</span>
          </div>
        </div>
        <div className="col">
          <div className="ForeDay">Thu</div>
          <Weathericon code="01d" size={30} />
          <div className="ForeTemp">
            <span className="ForeTemp-Max">19°</span>
            <span className="ForeTemp-Min">10°</span>
          </div>
        </div>
        <div className="col">
          <div className="ForeDay">Thu</div>
          <Weathericon code="01d" size={30} />
          <div className="ForeTemp">
            <span className="ForeTemp-Max">19°</span>
            <span className="ForeTemp-Min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
