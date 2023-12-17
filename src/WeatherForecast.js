import React from "react";
import Weathericon from "./Weathericon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
